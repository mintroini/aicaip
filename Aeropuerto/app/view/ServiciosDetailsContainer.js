/*
 * File: app/view/ServiciosDetailsContainer.js
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

Ext.define('Aeropuerto.view.ServiciosDetailsContainer', {
    extend: 'Ext.Container',
    alias: 'widget.serviciosdetailscontainer',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.XTemplate'
    ],

    config: {
        height: '100%',
        hidden: true,
        id: 'ServiciosDetailsContainer',
        width: '100%',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'serviciosDetalleToolbar',
                items: [
                    {
                        xtype: 'button',
                        id: 'btnDetailsBackServicios',
                        iconCls: 'arrow_left'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
            {
                xtype: 'container',
                centered: true,
                height: '100%',
                id: 'ServiciosDetalles',
                tpl: [
                    '<h2>{categoria}</h2>',
                    '<h2>{nombre}</h2>',
                    '<h2>{ubicacion}</h2>'
                ],
                width: '100%'
            }
        ]
    },

    initialize: function() {
        this.callParent();

    }

});