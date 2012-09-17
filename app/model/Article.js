/**
 * Created with JetBrains WebStorm.
 * User: stan229
 * Date: 9/17/12
 * Time: 2:45 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('D3Mobile.model.Article', {
    extend : 'Ext.data.Model',
    config : {
        fields : [
            {
                name : 'title',
                type : 'string'
            },
            {
                name : 'published',
                type : 'date'
            },
            {
                name : 'updated',
                type : 'date'
            },
            {
                name : 'id',
                type : 'integer'
            },
            {
                name : 'link',
                type : 'string'
            },
            {
                name : 'summary',
                type : 'string'
            },
            {
                name : 'content',
                type : 'string'
            }
        ]
    }
});