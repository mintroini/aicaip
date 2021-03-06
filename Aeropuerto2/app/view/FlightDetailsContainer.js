/*
 * File: app/view/FlightDetailsContainer.js
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

Ext.define('Aeropuerto.view.FlightDetailsContainer', {
    extend: 'Ext.Container',
    alias: 'widget.FlightDetailsContainer',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.XTemplate',
        'Ext.Label'
    ],

    config: {
        height: '100%',
        hidden: true,
        id: 'FlightDetailsContainer',
        width: '100%',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'tbDetails',
                items: [
                    {
                        xtype: 'button',
                        id: 'btnDetailsBack',
                        iconCls: 'arrow_left'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id: 'btnDetailsSubscribe',
                        iconCls: 'favorites'
                    },
                    {
                        xtype: 'button',
                        id: 'btnDetailsRefresh',
                        iconCls: 'refresh'
                    }
                ]
            },
            {
                xtype: 'container',
                centered: true,
                height: '100%',
                id: 'flightDetails',
                width: '50%',
                items: [
                    {
                        xtype: 'container',
                        height: '100%',
                        id: 'companyName',
                        tpl: [
                            '<h2>{nVuelo}</h2>',
                            '<h2>{aerolinea}</h2>',
                            '<h2>{origen}</h2>'
                        ],
                        width: '100%'
                    }
                ]
            },
            {
                xtype: 'container',
                height: '100%',
                id: 'detailWeather',
                width: '50%',
                items: [
                    {
                        xtype: 'container',
                        centered: false,
                        docked: 'top',
                        height: '50%',
                        id: 'origen',
                        margin: 20,
                        padding: 5,
                        tpl: [
                            '<h2>{temp_C}</h2>       <img style="height: 100px; width: 100px;" src={weatherIconUrl} />'
                        ],
                        items: [
                            {
                                xtype: 'label',
                                html: '',
                                id: 'detailsOrigen'
                            }
                        ]
                    },
                    {
                        xtype: 'spacer',
                        height: '40%'
                    },
                    {
                        xtype: 'container',
                        centered: false,
                        height: '50%',
                        id: 'destino',
                        margin: 20,
                        padding: 5,
                        tpl: [
                            '<h2>{temp_C}</h2>       <img style="height: 100px; width: 100px;" src={weatherIconUrl} />'
                        ],
                        items: [
                            {
                                xtype: 'label',
                                html: '',
                                id: 'detailsDestino'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

                this.element.on({
                    swipe: function(e, node, options) {
                        if(e.direction == "right") {
                            Aeropuerto.app.getController('LogicController').onDetailsBackButtonTap();
                        }
                    }
                });
    }

});