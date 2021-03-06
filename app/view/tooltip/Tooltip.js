// Copyright (c) 2012 Modus Create, Inc.
// This file is licensed under the terms of the MIT license.
// See the file license.txt for more details.

Ext.define('D3Mobile.view.tooltip.Tooltip', {
    extend       : 'Ext.Panel',
    xtype        : 'tooltip',
    config       : {
        cls              : 'skill-tooltip',
        modal            : true,
        centered         : true,
        hideOnMaskTap    : true,
        styleHtmlContent : true,
        scrollable       : {
            direction : 'vertical'
        },
        showAnimation    : {
            type     : 'popIn',
            duration : 250,
            easing   : 'ease-out'
        },
        hideAnimation    : {
            type     : 'popOut',
            duration : 250,
            easing   : 'ease-out'
        },
        hidden           : true,
        items            : [
            {
                xtype  : 'component',
                docked : 'top',
                html   : '<div class="close-button">x</div>'
            }
        ]
    },
    initialize   : function () {
        var me = this;

        me.element.on({
            tap        : me.onTap,
            touchstart : me.onTouchStart,
            touchend   : me.onTouchEnd,
            scope      : me
        });

        me.on({
            hide  : me.onHide,
            scope : me
        });

        me.callParent();
    },
    onTap        : function (evtObj) {
        var closeButton = evtObj.getTarget(".close-button");
        closeButton && this.fireEvent('close');
    },
    onTouchStart : function (evtObj) {
        var closeButton = evtObj.getTarget(".close-button");
        closeButton && Ext.fly(closeButton).addCls('pressed');

    },
    onTouchEnd   : function (evtObj) {
        var closeButton = evtObj.getTarget(".close-button");
        closeButton && Ext.fly(closeButton).removeCls('pressed');
    },
    onHide       : function () {
        this.destroy();
    }

});