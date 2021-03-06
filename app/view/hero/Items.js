// Copyright (c) 2012 Modus Create, Inc.
// This file is licensed under the terms of the MIT license.
// See the file license.txt for more details.

/**
 * Created with JetBrains WebStorm.
 * User: stan229
 * Date: 9/19/12
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('D3Mobile.view.hero.Items', {
    extend   : 'Ext.Container',
    xtype    : 'items',
    requires : ['D3Mobile.view.hero.Header'],
    config   : {
        cls              : 'hero-detail-card',
        styleHtmlContent : true,
        header           : {},
        headerLabel      : 'Items',
        tpl              : ''.concat(
            '<div class="hero-items">',
                '<div class="items-container">',
                    '<tpl if="items.head">',
                        '<div class="item helm {items.head.displayColor}" data-tooltipparams="{items.head.tooltipParams}">',
                            '<img class="icon" alt="{items.head.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.head.icon}.png" />',
                            '<span class="sockets-wrapper">',
                                '<span class="sockets-align">',
                                    '<tpl for="items.head.gems">',
                                        '<span class="socket">',
                                            '<img class="gem" src="http://us.media.blizzard.com/d3/icons/items/small/{item.icon}.png"/>',
                                        '</span><br/>',
                                    '</tpl>',
                                '</span>',
                            '</span>',

                        '</div>',
                    '</tpl>',
                    '<tpl if="items.shoulders">',
                        '<div class="item shoulders {items.shoulders.displayColor}" data-tooltipparams="{items.shoulders.tooltipParams}">',
                            '<img class="icon" alt="{items.shoulders.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.shoulders.icon}.png" />',
                        '</div>',
                    '</tpl>',
                    '<tpl if="items.neck">',
                        '<div class="item neck {items.neck.displayColor}" data-tooltipparams="{items.neck.tooltipParams}">',
                            '<img class="icon" alt="{items.neck.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.neck.icon}.png" />',

                            '<span class="sockets-wrapper">',
                                '<span class="sockets-align">',
                                    '<tpl for="items.neck.gems">',
                                        '<span class="socket">',
                                            '<img class="gem" src="http://us.media.blizzard.com/d3/icons/items/small/{item.icon}.png"/>',
                                        '</span><br/>',
                                    '</tpl>',
                                '</span>',
                            '</span>',

                        '</div>',
                    '</tpl>',
                    '<tpl if="items.torso">',
                        '<div class="item chest {items.torso.displayColor}" data-tooltipparams="{items.torso.tooltipParams}">',
                            '<img class="icon" alt="{items.torso.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.torso.icon}.png" />',

                            '<span class="sockets-wrapper">',
                                '<span class="sockets-align">',
                                    '<tpl for="items.torso.gems">',
                                        '<span class="socket">',
                                            '<img class="gem" src="http://us.media.blizzard.com/d3/icons/items/small/{item.icon}.png"/>',
                                        '</span><br/>',
                                    '</tpl>',
                                '</span>',
                            '</span>',


                        '</div>',
                    '</tpl>',
                    '<tpl if="items.hands">',
                        '<div class="item hands {items.hands.displayColor}" data-tooltipparams="{items.hands.tooltipParams}">',
                            '<img class="icon"  alt="{items.hands.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.hands.icon}.png" />',
                        '</div>',
                    '</tpl>',
                    '<tpl if="items.bracers">',
                        '<div class="item wrist {items.bracers.displayColor}" data-tooltipparams="{items.bracers.tooltipParams}">',
                            '<img class="icon"  alt="{items.bracers.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.bracers.icon}.png" />',
                        '</div>',
                    '</tpl>',
                    '<tpl if="items.leftFinger">',
                        '<div class="item ringL {items.leftFinger.displayColor}" data-tooltipparams="{items.leftFinger.tooltipParams}">',
                            '<img class="icon" alt="{items.leftFinger.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.leftFinger.icon}.png" />',

                            '<span class="sockets-wrapper">',
                                '<span class="sockets-align">',
                                    '<tpl for="items.leftFinger.gems">',
                                        '<span class="socket">',
                                            '<img class="gem" src="http://us.media.blizzard.com/d3/icons/items/small/{item.icon}.png"/>',
                                        '</span><br/>',
                                    '</tpl>',
                                '</span>',
                            '</span>',


                        '</div>',
                    '</tpl>',
                    '<tpl if="items.waist">',
                        '<div class="item belt {items.waist.displayColor}" data-tooltipparams="{items.waist.tooltipParams}">',
                            '<img class="icon" alt="{items.waist.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.waist.icon}.png" />',
                        '</div>',
                    '</tpl>',
                    '<tpl if="items.rightFinger">',
                        '<div class="item ringR {items.rightFinger.displayColor}" data-tooltipparams="{items.rightFinger.tooltipParams}">',
                            '<img class="icon" alt="{items.rightFinger.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.rightFinger.icon}.png" />',

                            '<span class="sockets-wrapper">',
                                '<span class="sockets-align">',
                                    '<tpl for="items.rightFinger.gems">',
                                        '<span class="socket">',
                                            '<img class="gem" src="http://us.media.blizzard.com/d3/icons/items/small/{item.icon}.png"/>',
                                        '</span><br/>',
                                    '</tpl>',
                                '</span>',
                            '</span>',


                        '</div>',
                    '</tpl>',
                    '<tpl if="items.legs">',
                        '<div class="item legs {items.legs.displayColor}" data-tooltipparams="{items.legs.tooltipParams}">',
                            '<img class="icon" alt="{items.legs.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.legs.icon}.png" />',

                            '<span class="sockets-wrapper">',
                                '<span class="sockets-align">',
                                    '<tpl for="items.legs.gems">',
                                        '<span class="socket">',
                                            '<img class="gem" src="http://us.media.blizzard.com/d3/icons/items/small/{item.icon}.png"/>',
                                        '</span><br/>',
                                    '</tpl>',
                                '</span>',
                            '</span>',


                        '</div>',
                    '</tpl>',
                    '<tpl if="items.feet">',
                        '<div class="item feet {items.feet.displayColor}" data-tooltipparams="{items.feet.tooltipParams}">',
                            '<img class="icon" alt="{items.feet.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.feet.icon}.png" />',
                        '</div>',
                    '</tpl>',
                    '<tpl if="items.mainHand">',
                        '<div class="item mainHand {items.mainHand.displayColor}" data-tooltipparams="{items.mainHand.tooltipParams}">',
                            '<img alt="{items.mainHand.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.mainHand.icon}.png" />',

                            '<span class="sockets-wrapper">',
                                '<span class="sockets-align">',
                                    '<tpl for="items.mainHand.gems">',
                                        '<span class="socket">',
                                            '<img class="gem" src="http://us.media.blizzard.com/d3/icons/items/small/{item.icon}.png"/>',
                                        '</span><br/>',
                                    '</tpl>',
                                '</span>',
                            '</span>',


                        '</div>',
                    '</tpl>',
                    '<tpl if="items.offHand">',
                        '<div class="item offHand {items.offHand.displayColor}" data-tooltipparams="{items.offHand.tooltipParams}">',
                            '<img alt="{items.offHand.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.offHand.icon}.png" />',

                            '<span class="sockets-wrapper">',
                                '<span class="sockets-align">',
                                    '<tpl for="items.offHand.gems">',
                                        '<span class="socket">',
                                            '<img class="gem" src="http://us.media.blizzard.com/d3/icons/items/small/{item.icon}.png"/>',
                                        '</span><br/>',
                                    '</tpl>',
                                '</span>',
                            '</span>',


                        '</div>',
                    '<tpl elseif="items.mainHand">',
                        '<div class="item offHand {items.mainHand.displayColor} repeat" data-tooltipparams="{items.mainHand.tooltipParams}">',
                            '<img alt="{items.mainHand.name}" src="http://us.media.blizzard.com/d3/icons/items/large/{items.mainHand.icon}.png" />',

                            '<span class="sockets-wrapper">',
                                '<span class="sockets-align">',
                                    '<tpl for="items.mainHand.gems">',
                                        '<span class="socket">',
                                            '<img class="gem" src="http://us.media.blizzard.com/d3/icons/items/small/{item.icon}.png"/>',
                                        '</span><br/>',
                                    '</tpl>',
                                '</span>',
                            '</span>',


                        '</div>',
                    '</tpl>',
                    '<tpl if="items.mainHand.elementalDamage">',
                        '<div class="weapon-flourish main-hand-flourish elemental-{items.mainHand.elementalDamage}"></div>',
                    '</tpl>',
                    '<tpl if="items.offHand.elementalDamage">',
                        '<div class="weapon-flourish off-hand-flourish elemental-{items.offHand.elementalDamage}"></div>',
                    '</tpl>',
                '</div>',
            '</div>'
        )
    },
    initialize : function() {
        var me = this;
//        me.add(me.getHeader());
        me.setData(me.getData());
        me.callParent();
    },
    applyHeader : function(cfg, inst) {
        if (!inst) {
            Ext.apply(cfg,
                {
                    data : Ext.apply(this.getData(), {
                            headerLabel : this.getHeaderLabel()
                        })
                }
            );
        }
        return Ext.factory(cfg, D3Mobile.view.hero.Header, inst);
    }
});
