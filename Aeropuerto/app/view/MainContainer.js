/*
 * File: app/view/MainContainer.js
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

Ext.define('Aeropuerto.view.MainContainer', {
    extend: 'Ext.Container',
    alias: 'widget.MainContainer',

    requires: [
        'Aeropuerto.view.NormasContainer',
        'Aeropuerto.view.EstacionamientoContainer',
        'Aeropuerto.view.UserContainer',
        'Aeropuerto.view.TaxiContainer',
        'Aeropuerto.view.ContactoContainer',
        'Aeropuerto.view.offLineContainer',
        'Aeropuerto.view.LavadoContainer',
        'Aeropuerto.view.ServiciosContainer',
        'Aeropuerto.view.HomeContainer',
        'Aeropuerto.view.VuelosContainer',
        'Aeropuerto.view.SuscripcionesContainer',
        'Aeropuerto.view.FlightDetailsContainer',
        'Aeropuerto.view.ServiciosDetailsContainer',
        'Ext.Container'
    ],

    config: {
        id: 'mainContainer',
        itemId: '',
        top: '',
        items: [
            {
                xtype: 'normascontainer'
            },
            {
                xtype: 'estacionamientocontainer'
            },
            {
                xtype: 'usercontainer'
            },
            {
                xtype: 'taxicontainer'
            },
            {
                xtype: 'contactoContainer'
            },
            {
                xtype: 'offLineContainer'
            },
            {
                xtype: 'lavadocontainer'
            },
            {
                xtype: 'servicioscontainer'
            },
            {
                xtype: 'HomeContainer'
            },
            {
                xtype: 'VuelosContainer'
            },
            {
                xtype: 'suscripcionescontainer'
            },
            {
                xtype: 'FlightDetailsContainer'
            },
            {
                xtype: 'serviciosdetailscontainer'
            }
        ]
    },

    initialize: function() {
        this.callParent();

        this.element.on({
            swipe: function(e, node, options) {
                if(e.direction == "right") {
                    if(Ext.Viewport.getMenus().right.isHidden()){
                        Aeropuerto.app.getController('LogicController').showHideMenu("right");
                    }else{
                        Ext.Viewport.hideMenu('right');
                    }
                }
                if(e.direction == "left") {
                    Aeropuerto.app.getController('LogicController').showHideMenu("left");
                }

            }
        });

        var items = [

            {
                xtype: 'button',
                id: 'btnHome',
                text: Ext.getStore('StringsStore').getAt(0).data.global_inicio,
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                id: 'btnSubscriptions',
                text: Ext.getStore('StringsStore').getAt(0).data.global_suscripciones,
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                id: 'btnVuelos',
                text: Ext.getStore('StringsStore').getAt(0).data.global_vuelos,
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                id: 'btnServicios',
                text: Ext.getStore('StringsStore').getAt(0).data.global_servicios,
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                id: 'btnMapa',
                text: Ext.getStore('StringsStore').getAt(0).data.global_mapa,
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                id: 'btnNormas',
                text: Ext.getStore('StringsStore').getAt(0).data.global_normativas,
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                id: 'btnVip',
                text: Ext.getStore('StringsStore').getAt(0).data.global_vip,
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                id: 'btnTaxi',
                text: Ext.getStore('StringsStore').getAt(0).data.gobal_taxi,
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                id: 'btnEstacionamiento',
                text: Ext.getStore('StringsStore').getAt(0).data.global_estacionamiento,
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                id: 'btnLavado',
                text: Ext.getStore('StringsStore').getAt(0).data.global_lavados,
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                id: 'btnLogin',
                text: Ext.getStore('StringsStore').getAt(0).data.global_usuario,
                iconCls: 'user',
                cls: 'menu-button'
            },

            {
                xtype: 'button',
                id: 'btnContacto',
                text: Ext.getStore('StringsStore').getAt(0).data.global_contacto,
                iconCls: 'user',
                cls: 'menu-button'
            }

        ];

        Ext.Viewport.setMenu(Ext.create('Ext.Menu', {
            style: 'padding: 15px;margin-top:2%;',
            id: 'menu',
            width: '60%',
            scrollable: 'vertical',
            items: items
        }),{side: 'left',reveal: true});

        Ext.Viewport.setMenu(Ext.create('Ext.Menu', {
            style: 'padding: 15px;margin-top:2%;',
            id: 'suscripcionesMenu',
            width: '60%',
            items:      [ {
                xtype: 'list',
                height: '100%',
                id: 'lstSubscriptions2',
                width: '100%',
                itemTpl: [
                    '<div>{aerolinea}<br>{nVuelo} - {estadosp}</div>'
                ],
                store: 'Suscripciones'
            },
                         {
                             xtype: 'label',
                             centered: true,
                             hidden: true,
                             html: Ext.getStore('StringsStore').getAt(0).data.vuelo_noHaySuscripciones,
                             id: 'suscriptionNoSubs2'
                         }]
        }),{side: 'right',reveal: true});



    }

});