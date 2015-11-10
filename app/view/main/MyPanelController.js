/**
 * Created by Alexander on 10/25/2015.
 */
Ext.define('BasicTestApp.view.main.MyPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mypanel',

    /**
     * Called when the view is created
     */
    /*init: function() {
        Ext.Msg.alert('zaciname');
    },*/
    onclick: function(button){
        Ext.Msg.alert('ALERT','You clicked the button sir.');
    }
});