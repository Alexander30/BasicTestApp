/**
 * Created by Alexander on 10/25/2015.
 */
Ext.define('BasicTestApp.view.main.MyPanel', {
    extend: 'Ext.tab.Panel',
    requires:[
        'BasicTestApp.store.CashflowStore',
        'BasicTestApp.view.menu.ShowRecords'
    ],
    xtype:'mypanel2',
    controller:'mypanel',
    border:'true',
    items: [
        /* include child components here */
        {
            title:'Add record',
            items:[
                {
                    xtype:'newrecord'
                }
            ]
        },{
            title:'Show records',
            items:[
                {
                    xtype: 'showrecords'
                }
            ]
            /*xtype:'button',
            text:'Add record',
            //handler:'onclick'
            listeners:{
                click:{
                    fn:'onclick'
                }
            }*/
        },
        {
           title:'Settings',
            html:'TO-DO'
        }
    ]
});