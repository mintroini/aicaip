/*
 * File: app/view/offLineContainer.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Aeropuerto.view.offLineContainer', {
    extend: 'Ext.Container',
    alias: 'widget.offLineContainer',

    requires: [
        'Ext.Label',
        'Ext.Button'
    ],

    config: {
        id: 'offLineContainer',
        items: [
            {
                xtype: 'label',
                html: 'Your device is not connected to the internet please try again',
                margin: 20,
                padding: 8
            },
            {
                xtype: 'button',
                centered: true,
                id: 'btnOffLine',
                margin: 20,
                padding: 8,
                text: 'try again'
            }
        ]
    },

    initialize: function() {
        this.callParent();
        if(window.navigator.onLine){
              Ext.getCmp('offLineContainer').hide();
        }else{
        console.log("offline");
        //Ext.getCmp('offLineContainer').show();
            Ext.getCmp('mainView').hide();
        }
    }

});