// Copyright (c) 2012 Modus Create, Inc.
// This file is licensed under the terms of the MIT license.
// See the file license.txt for more details.

Ext.define('D3Mobile.view.ArticleDetail', {
    extend     : 'Ext.Container',
    xtype      : 'articledetail',
    config     : {
        scrollable    : {
            direction : 'vertical'
        },
        articleHeader : {},
        articleDetail : {},
        detailTpl     : ''.concat(
            '<div class="article-detail">',
                '<div class="inner">',
                    '<div class="article-content" data-articleid="{id}"></div>',
                    '<div class="article-footer">',
                        '<div class="article-source-btn" data-url="">SOURCE</div>',
                    '</div>',
                '</div>',
            '</div>'
        )
    },
    initialize : function () {
        var me = this;

        me.add(me.getArticleHeader());
        me.add(me.getArticleDetail());

        me.callParent();
        me.loadArticleContent();

        me.element.on({
            tap   : me.onTap,
            scope : me
        });
    },
    applyArticleHeader : function(cfg, inst) {
        return {
            xtype  : 'component',
            docked : 'top',
            tpl    : ''.concat(
                '<div class="article-detail">',
                    '<div class="inner">',
                        '<div class="article-header">',
                            '<div class="hero-detail-back hero-back"></div>',
                            '<div class="article-header-title">{title}</div>',
                            '<div class="article-header-pub">{[Ext.Date.format(values.published,"F d, Y g:i A")]}</div>',
                        '</div>',
                    '</div>',
                '</div>'
            ),
            data   : this.getData()
        };
    },
    applyArticleDetail : function(cfg, inst) {
        return {
            xtype : 'component',
            tpl   : this.getDetailTpl(),
            data  : this.getData()
        };
    },
    loadArticleContent : function() {
        var el         = this.element,
            contentDom = el.down('.article-content').dom,
            sourceDom  = el.down('.article-source-btn').dom,
            article    = Ext.getStore("Articles").findRecord('id',contentDom.dataset.articleid),
            artlcleRaw = article.raw,
            node       = artlcleRaw.getElementsByTagName("content")[0].cloneNode(true),
            linkHref   = artlcleRaw.getElementsByTagName("link")[0].getAttribute("href");

        if(artlcleRaw.getElementsByTagName("iframe").length > 0) {
            node.getElementsByTagName("iframe")[0].width = "280";
        }

        contentDom.appendChild(node);
        sourceDom.dataset.url = linkHref;
    },
    onTap      : function (evtObj) {
        var backButton   = evtObj.getTarget('.hero-back'),
            sourceButton = evtObj.getTarget('.article-source-btn');

        if (backButton) {
            this.fireEvent('close');
        } else if(sourceButton) {
            this.fireEvent('openURL', sourceButton.dataset.url);
        }
    }
});