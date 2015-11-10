Ext.define('BasicTestApp.view.menu.ShowRecords',{
    extend:'Ext.panel.Panel',
    id:'showrecords',
    xtype:'showrecords',
    requires:[
        'BasicTestApp.store.CashflowStore'
    ],
    config:{
        items:[
            {
                xtype: 'container',
                flex:10,
                items:[
                    {
                        xtype: 'gridpanel',
                        title:'Your Records',
                        width: '100%',
                        height: '100%',
                        store:'CashflowStore',
                        columns:[
                            {
                                text:'1Col',
                                dataIndex:'name'
                            },{
                                text:'2Col',
                                dataIndex:'amount'
                            },{
                                text:'3Col',
                                dataIndex: 'currency'
                            },{
                                text:"4Col",
                                dataIndex: 'description'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});