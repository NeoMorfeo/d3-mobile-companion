/**
 * Created with JetBrains WebStorm.
 * User: stan229
 * Date: 9/20/12
 * Time: 3:47 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('D3Mobile.view.hero.Header', {
    extend : 'Ext.Component',
    xtype  : 'header',
    config : {
        cls    : 'hero-detail-header',
        docked : 'top',
        tpl    : ''.concat(
            '<div class="header">',
                '{headerLabel}',
            '</div>'
        )
    }
});