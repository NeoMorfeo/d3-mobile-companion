Ext.define('D3Mobile.view.Main', {
    extend   : 'Ext.tab.Panel',
    xtype    : 'main',
    requires : [
        'D3Mobile.view.HeroesContainer',
        'D3Mobile.view.FriendsContainer',
        'D3Mobile.view.NewsContainer',
        'D3Mobile.view.ServersContainer'
    ],
    config   : {
        fullscreen     : true,
        tabBarPosition : 'bottom',
        ui             : 'mainTabBar',
        cls            : 'navBar',
        defaults       : {
            iconMask : true
        },
        items          : [
            {
                iconCls : 'heart',
                xtype   : 'heroescontainer'
            },
            {
                iconCls : 'user_fave',
                xtype   : 'friendscontainer'
            },
            {
                iconCls : 'list',
                xtype   : 'newscontainer'
            },
            // {
            //     iconCls: 'home',
            //     xtype: 'itemmaxstats'
            // },
            {
                iconCls : 'cloud_black',
                xtype   : 'serverscontainer',
                action  : 'servers'
            },
            {
                iconCls : 'power_on',
                xtype   : 'component',
                title   : 'Log Out',
                action  : 'logOut'
            }
        ]

    }
});
