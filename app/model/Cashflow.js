/**
 * Created by Alexander on 10/25/2015.
 */
Ext.define('BasicTestApp.model.Cashflow', {
    extend: 'Ext.data.Model',
    alias: 'model.cashflow',
    fields: [


        { name: 'name',     type: 'string' },
        { name: 'amount',      type: 'int' },
        {name:'currency', type:'string'},
        { name: 'description',    type: 'string' }
    ]
});