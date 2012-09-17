/**
 * Feed URL : http://us.battle.net/d3/en/feed/news
 */
Ext.define('D3Mobile.view.News', {
    extend : 'Ext.List',
    xtype  : 'news',
    config : {
        title            : 'News',
        store            : 'Articles',
        itemTpl          : '<h3 style="color:pink;">{title}</h3>',
        itemCls          : 'news-list-item',
        styleHtmlContent : true
    }
});