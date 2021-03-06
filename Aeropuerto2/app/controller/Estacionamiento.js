/*
 * File: app/controller/Estacionamiento.js
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

Ext.define('Aeropuerto.controller.Estacionamiento', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "#estacionamientoContainerHome": {
                tap: 'onHomeButtonTap'
            },
            "#btnEstacionamiento": {
                tap: 'btnEstacionamiento'
            },
            "#seleccionarHoraComienzo": {
                tap: 'selectHoraTap'
            },
            "#seleccionarTiempoReserva": {
                tap: 'selectHoraTap1'
            },
            "#btnEstacionamientoContinuar": {
                tap: 'onEstacionamientoContinuar'
            },
            "#estacionamientoConfirmar": {
                tap: 'onEstacionamientoConfirmar'
            },
            "#estacionamientoCancelar": {
                tap: 'onEstacionamientoCancelar'
            }
        }
    },

    onHomeButtonTap: function(button, e, eOpts) {
           this.getApplication().getController('LogicController').showHideMenu('');
    },

    btnEstacionamiento: function(button, e, eOpts) {
        this.getApplication().getController('Global').checkLogged('EstacionamientoContainer');
        this.resetForm();
    },

    selectHoraTap: function(button, e, eOpts) {
        Ext.getCmp('EstacionamientoHoraPicker').show();


    },

    selectHoraTap1: function(button, e, eOpts) {
        Ext.getCmp('EstacionamientoHoraPicker1').show();


    },

    onEstacionamientoContinuar: function(button, e, eOpts) {
        Ext.getCmp('estacionamientoForm').hide();
        Ext.getCmp('confirmarEstacionamientoForm').show();



    },

    onEstacionamientoConfirmar: function(button, e, eOpts) {
           Ext.Msg.alert( '', 'Se esta procesando su solicitud ');//Ext.getCmp('estacionamientoForm').
        Ext.getCmp('estacionamientoForm').show();
                 Ext.getCmp('confirmarEstacionamientoForm').hide();
        this.resetForm();
    },

    onEstacionamientoCancelar: function(button, e, eOpts) {
        Ext.Msg.confirm("Cancelar", "Are you sure u want to cancel ?", function(btn){
            if (btn == 'yes'){
                Ext.getCmp('estacionamientoForm').show();
                Ext.getCmp('confirmarEstacionamientoForm').hide();
                        Aeropuerto.app.getApplication().getController('Estacionamiento').resetForm();
            }
        });
    },

    resetForm: function() {
        Ext.getCmp('estacionamientoMatricula').setValue('');
        Ext.getCmp('estacionamientoDatePicker').setValue('');
        Ext.getCmp('estacionamientoMarca').setValue('');
        Ext.getCmp('estacionamientoModelo').setValue('');

        Ext.getCmp('lblTiempoReserva').setHtml('Hora comienzo 00:00 AM');
        Ext.getCmp('lblHoraComienzo').setHtml('Hora comienzo 00:00 AM');

        Ext.getCmp('estacionamientoTerminos').setValue(0);
        Ext.getCmp('estacionamientoPrecioServicio').setHtml('El costo del servicio es ');

    }

});