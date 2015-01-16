/*
 * File: app/controller/Taxi.js
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

Ext.define('Aeropuerto.controller.Taxi', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "#btnTaxi": {
                tap: 'btnTaxi'
            },
            "#taxiContainerHome": {
                tap: 'homeButtonTap'
            },
            "#taxiEsOrigen": {
                change: 'onTaxiOrigenChange'
            }
        }
    },

    btnTaxi: function(button, e, eOpts) {
        this.getApplication().getController('Global').checkLogged('TaxiContainer');


    },

    homeButtonTap: function(button, e, eOpts) {
        this.getApplication().getController('LogicController').showHideMenu('');
    },

    onTaxiOrigenChange: function(selectfield, newValue, oldValue, eOpts) {
        if(Ext.getCmp('taxiEsOrigen').getValue() == '1'){
            Ext.getCmp('taxiLocation').setLabel('Destino');
        }else{
            Ext.getCmp('taxiLocation').setLabel('Origen');
        }
    }

});