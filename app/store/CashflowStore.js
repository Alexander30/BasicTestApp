/**
 * Created by Alexander on 10/25/2015.
 */
Ext.define('BasicTestApp.store.CashflowStore', {
    extend: 'Ext.data.Store',
    alias: 'store.cashflowstore',
    xtype: 'records',
    requires: [
        'Ext.data.reader.Json',
        'BasicTestApp.model.Cashflow',
        'Ext.data.proxy.Ajax'
    ],

    autoLoad: true,
    model: 'BasicTestApp.model.Cashflow',
    proxy: {
        type: 'ajax',
        url: 'resources/data.json',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        writer: 'json'
    }
});