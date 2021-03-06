/*
 * File: app/view/HomeContainer.js
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

Ext.define('Aeropuerto.view.HomeContainer', {
    extend: 'Ext.Container',
    alias: 'widget.HomeContainer',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.field.Text',
        'Ext.tab.Panel',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        height: '100%',
        id: 'HomeContainer',
        width: '100%',
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'HomeToolbar',
                items: [
                    {
                        xtype: 'button',
                        id: 'homeContainerHome',
                        iconCls: 'list'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id: 'homeContainerSubs',
                        iconCls: 'organize'
                    }
                ]
            },
            {
                xtype: 'textfield',
                docked: 'top',
                id: 'lblHomeBuscarVuelos',
                margin: 20,
                padding: 8
            },
            {
                xtype: 'tabpanel',
                id: 'homeTabPanel',
                items: [
                    {
                        xtype: 'container',
                        title: 'Arribos',
                        id: 'homePanelArribos',
                        items: [
                            {
                                xtype: 'list',
                                docked: 'top',
                                height: '100%',
                                id: 'lstArribosHome',
                                itemId: 'mylist4',
                                width: '100%',
                                itemTpl: [
                                    '<table style="width:100%">',
                                    '    <tr>',
                                    '        <!-- <td><img src="\'resources/Img/\'+{aerolinea}+\'.png\'" alt="Aerolinea Img"></td> -->',
                                    '        <td>{origen}</td>',
                                    '        <td>{fprogram}</td>		',
                                    '        <td>{estadosp}</td>',
                                    '    </tr>',
                                    '</table>',
                                    ''
                                ],
                                scrollToTopOnRefresh: false,
                                store: 'Arribos'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Partidas',
                        id: 'homePanelPartidas',
                        items: [
                            {
                                xtype: 'list',
                                docked: 'top',
                                height: '100%',
                                id: 'lstPartidasHome',
                                width: '100%',
                                itemTpl: [
                                    '',
                                    '<table style="width:100%">',
                                    '  <tr>',
                                    '   <!-- <td style="width:20%"><img src="resources/Img/{aerolinea}.png" alt="Aerolinea Img"></td> -->',
                                    '    <td style="width:20%">{destino}</td>',
                                    '    <td style="width:20%">{nVuelo}</td>	',
                                    '    <td style="width:20%">{fprogram}</td>',
                                    '    <td style="width:20%">{estadosp}</td>',
                                    '  </tr>',
                                    '</table>',
                                    ''
                                ],
                                store: 'Partidas'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'button',
                docked: 'bottom',
                id: 'homeButtonBuscar',
                margin: 20,
                padding: 8,
                text: 'Buscar Vuelo'
            }
        ]
    },

    initialize: function() {
        this.callParent();

        Ext.getCmp('lblHomeBuscarVuelos').setPlaceHolder(Ext.getStore('StringsStore').getAt(0).data.vuelos_filtro);
        Ext.getCmp('homeButtonBuscar').setText(Ext.getStore('StringsStore').getAt(0).data.vuelos_buscar);

        Ext.getCmp('homeTabPanel').getTabBar().getAt(0).setTitle(Ext.getStore('StringsStore').getAt(0).data.vuelo_arribos);
        Ext.getCmp('homeTabPanel').getTabBar().getAt(1).setTitle(Ext.getStore('StringsStore').getAt(0).data.vuelo_partidas);

        if(Ext.getStore('UsuarioStore').getCount() > 0){
            Ext.getCmp('homeContainerSubs').show();
        }else{
            Ext.getCmp('homeContainerSubs').hide();
        }
        Ext.getCmp('HomeToolbar').setTitle(Ext.getStore('StringsStore').getAt(0).data.global_inicio);
        Ext.getCmp('lstArribosHome').setScrollable(false);
        Ext.getCmp('lstPartidasHome').setScrollable(false);
    }

});