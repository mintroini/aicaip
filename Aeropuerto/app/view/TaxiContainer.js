/*
 * File: app/view/TaxiContainer.js
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

Ext.define('Aeropuerto.view.TaxiContainer', {
    extend: 'Ext.Container',
    alias: 'widget.taxicontainer',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Spinner',
        'Ext.field.Select',
        'Ext.Label'
    ],

    config: {
        height: '100%',
        hidden: true,
        id: 'TaxiContainer',
        width: '100%',
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'taxiToolbar',
                items: [
                    {
                        xtype: 'button',
                        id: 'taxiContainerHome',
                        iconCls: 'list'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                id: 'taxiTabPanel',
                items: [
                    {
                        xtype: 'container',
                        title: 'Solicitar Taxi',
                        id: 'tabTaxiSolicitar',
                        scrollable: 'vertical',
                        items: [
                            {
                                xtype: 'fieldset',
                                id: 'taxiForm',
                                items: [
                                    {
                                        xtype: 'spinnerfield',
                                        id: 'taxiCantPersonas',
                                        margin: 20,
                                        padding: 8,
                                        label: 'Cantidad',
                                        labelWidth: '40%',
                                        maxValue: 99,
                                        minValue: 0,
                                        stepValue: 1
                                    },
                                    {
                                        xtype: 'selectfield',
                                        id: 'taxiEsOrigen',
                                        margin: 20,
                                        padding: 8,
                                        label: 'El aeropuerto es ',
                                        labelWidth: '40%'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'taxiLocation',
                                        margin: 20,
                                        padding: 8,
                                        label: 'Destino',
                                        labelWidth: '40%'
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'btnSolicitarTaxi',
                                        margin: 20,
                                        padding: 8,
                                        text: 'Solicitar Taxi'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Informacion',
                        id: 'tabTaxiInformacion',
                        items: [
                            {
                                xtype: 'label',
                                id: 'lblInfoTaxi',
                                margin: 20,
                                padding: 8
                            }
                        ]
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();
        var strings = Ext.getStore('StringsStore');

          // Ext.getCmp('taxiCantPersonas').add();
        var origen = [{
                    text: strings.getAt(0).data.taxi_Origen,
                    value: 1
                }, {
                    text: strings.getAt(0).data.taxi_Destino,
                    value: 6
                }];

        Ext.getCmp('taxiEsOrigen').setOptions(origen);

        Ext.getCmp('taxiCantPersonas').setLabel(strings.getAt(0).data.taxi_cantidadPersonas);
        Ext.getCmp('taxiEsOrigen').setLabel(strings.getAt(0).data.taxi_Desde);
        Ext.getCmp('btnSolicitarTaxi').setText(strings.getAt(0).data.taxi_Solicitar);
        Ext.getCmp('lblInfoTaxi').setHtml(strings.getAt(0).data.taxi_info);

        //Ext.getCmp('tabTaxiSolicitar').setTitle(strings.getAt(0).data.taxi_Solicitar);
        //Ext.getCmp('tabTaxiInformacion').setTitle(strings.getAt(0).data.informacion);
        Ext.getCmp('taxiToolbar').setTitle(Ext.getStore('StringsStore').getAt(0).data.global_taxi);
    }

});