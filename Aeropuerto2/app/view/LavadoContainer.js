/*
 * File: app/view/LavadoContainer.js
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

Ext.define('Aeropuerto.view.LavadoContainer', {
    extend: 'Ext.Container',
    alias: 'widget.lavadocontainer',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.Label',
        'Ext.field.Checkbox',
        'Ext.XTemplate',
        'Ext.picker.Slot',
        'Ext.field.Number'
    ],

    config: {
        height: '100%',
        hidden: true,
        id: 'LavadoContainer',
        width: '100%',
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        id: 'lavadoContainerHome',
                        iconCls: 'list'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                id: 'lavadoTabPanel',
                items: [
                    {
                        xtype: 'container',
                        title: '45',
                        id: 'tabLavadoSolicitar',
                        scrollable: 'vertical',
                        items: [
                            {
                                xtype: 'fieldset',
                                id: 'lavadoForm',
                                items: [
                                    {
                                        xtype: 'datepickerfield',
                                        id: 'lavadoFechaInicio',
                                        margin: 20,
                                        padding: 8,
                                        label: 'Fecha',
                                        placeHolder: 'dd/mm/yyyy',
                                        displayField: 'Fecha',
                                        dateFormat: 'd/m/Y',
                                        picker: {
                                            id: 'LavadoYearPicker',
                                            useTitles: true,
                                            slotOrder: [
                                                'day',
                                                'month',
                                                'year'
                                            ]
                                        }
                                    },
                                    {
                                        xtype: 'container',
                                        id: 'lavadoHoraComienzo',
                                        padding: 8,
                                        items: [
                                            {
                                                xtype: 'label',
                                                html: 'Hora comienzo 00:00 AM',
                                                id: 'lblLavadoHoraComienzo',
                                                margin: 10,
                                                padding: 5,
                                                width: '100%'
                                            },
                                            {
                                                xtype: 'button',
                                                id: 'selecLavadoHoraComienzo',
                                                margin: 20,
                                                padding: 8,
                                                text: 'seleccionar hora'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'lavadoMatricula',
                                        margin: 20,
                                        label: 'Matricula',
                                        required: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'lavadoMarca',
                                        margin: 20,
                                        label: 'Marca'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'lavadoModelo',
                                        margin: 20,
                                        label: 'Modelo'
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'btnLavadoContinuar',
                                        margin: 20,
                                        padding: 8,
                                        text: 'Continuar'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                hidden: true,
                                id: 'confirmarLavadoForm',
                                items: [
                                    {
                                        xtype: 'label',
                                        html: 'El precio del servicio es : ',
                                        id: 'lavadoPrecioServicio',
                                        margin: 20
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        id: 'lavadoTerminos',
                                        margin: 20,
                                        label: 'Aceptar terminos y condiciones'
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'lavadoConfirmar',
                                        margin: 20,
                                        text: 'Aceptar'
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'lavadoCancelar',
                                        text: 'Cancelar'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                hidden: true,
                                id: 'lavadoSolicitado',
                                items: [
                                    {
                                        xtype: 'container',
                                        id: 'lavadoSolicitadoInfo',
                                        margin: 20,
                                        padding: 8,
                                        style: '  text-align: center;',
                                        tpl: [
                                            '<h2>Lavado ya solicitado:</h2>',
                                            '<h2>Marca: {marca}</h2>  ',
                                            '<h2>Modelo: {modelo}</h2>  ',
                                            '<h2>Matricula: {matricula}</h2>',
                                            '<h2>Costo: {costo}</h2>',
                                            '<h2>Dia y Hora: {horaLavado}</h2>',
                                            '<h2>Estado: {estado}</h2>'
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'lavadoSolicitadoCancelar',
                                        margin: 20,
                                        padding: 8,
                                        text: 'Cancelar'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '4',
                        id: 'tabLavadoInformacion',
                        scrollable: 'vertical',
                        items: [
                            {
                                xtype: 'label',
                                id: 'lblInfoLavado',
                                margin: 20,
                                padding: 8
                            }
                        ]
                    },
                    {
                        xtype: 'picker',
                        hidden: true,
                        id: 'LavadoHoraPicker',
                        itemId: 'mypicker',
                        useTitles: true,
                        slots: [
                            {
                                xtype: 'pickerslot',
                                id: 'LavadoHoras',
                                style: '  text-align: center;',
                                deselectOnContainerClick: false,
                                name: 'horas',
                                title: 'horas'
                            },
                            {
                                xtype: 'pickerslot',
                                id: 'LavadoMinutos',
                                style: '  text-align: center;',
                                align: 'center',
                                name: 'minutos',
                                title: 'minutos'
                            },
                            {
                                xtype: 'pickerslot',
                                data: [
                                    {
                                        text: 'AM',
                                        value: 'AM'
                                    },
                                    {
                                        text: 'PM',
                                        value: 'PM'
                                    }
                                ],
                                id: 'LavadoAPM',
                                style: '  text-align: center;',
                                align: 'right',
                                name: 'am',
                                title: 'am'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'numberfield',
                hidden: true,
                id: 'lavadoMinutosOculto',
                label: 'Field'
            },
            {
                xtype: 'label',
                hidden: true,
                id: 'lavadoAmOculto'
            },
            {
                xtype: 'numberfield',
                hidden: true,
                id: 'lavadoHorasOculto',
                label: 'Field'
            }
        ],
        listeners: [
            {
                fn: 'onLavadoHoraPickerChange',
                event: 'change',
                delegate: '#LavadoHoraPicker'
            }
        ]
    },

    onLavadoHoraPickerChange: function(picker, value, eOpts) {
        var minutos = value.minutos;
        if(minutos < 10){
            minutos = "0"+minutos;
        }

        Ext.getCmp('lblLavadoHoraComienzo').setHtml("Hora comienzo: "+value.horas+":"+minutos+"     " +value.am);

        Ext.getCmp('lavadoMinutosOculto').setValue(value.minutos);
        Ext.getCmp('lavadoHorasOculto').setValue(value.horas);
        if(value.am === 'PM') Ext.getCmp('lavadoHorasOculto').setValue(value.horas + 12);

        //Ext.getCmp('lavadoAmOculto').setHtml(value.am);
    },

    initialize: function() {
        this.callParent();
        var strings = Ext.getStore('StringsStore');

        var horas = new Array(13);
        var minutos = new Array(60);


        for (i = 0; i < 13; i++) {
            horas[i] = { text: i,value: i};

        }
        for (i = 0; i < 60; i++) {
            minutos[i] =    {
                text: i,
                value: i
            };

        }

        Ext.getCmp('LavadoHoras').setData(horas);
        Ext.getCmp('LavadoHoras').setValue(7);
        Ext.getCmp('LavadoMinutos').setData(minutos);

        Ext.getCmp('lavadoMinutosOculto').setValue(0);
        Ext.getCmp('lavadoHorasOculto').setValue(7);

        var fecha = new Date();
        Ext.getCmp('lavadoFechaInicio').getPicker().setYearFrom(fecha.getFullYear());
        Ext.getCmp('lavadoFechaInicio').getPicker().setYearTo(fecha.getFullYear() + 5);

        Ext.getCmp('lavadoTabPanel').getTabBar().getAt(0).setTitle(Ext.getStore('StringsStore').getAt(0).data.lavados_solicitar);
        Ext.getCmp('lavadoTabPanel').getTabBar().getAt(1).setTitle(Ext.getStore('StringsStore').getAt(0).data.global_informacion);

        Ext.getCmp('lblInfoLavado').setHtml(Ext.getStore('StringsStore').getAt(0).data.lavados_info);
        Ext.getCmp('lavadoMatricula').setLabel(Ext.getStore('StringsStore').getAt(0).data.lavados_matricula);
        Ext.getCmp('lavadoMarca').setLabel(Ext.getStore('StringsStore').getAt(0).data.lavados_marca);
        Ext.getCmp('lavadoModelo').setLabel(Ext.getStore('StringsStore').getAt(0).data.lavados_modelo);
        Ext.getCmp('lavadoFechaInicio').setLabel(Ext.getStore('StringsStore').getAt(0).data.lavados_fecha);
        Ext.getCmp('btnLavadoContinuar').setText(Ext.getStore('StringsStore').getAt(0).data.lavados_continuar);

        Ext.getCmp('lavadoPrecioServicio').setHtml(Ext.getStore('StringsStore').getAt(0).data.lavados_costo);
        Ext.getCmp('lavadoTerminos').setLabel(Ext.getStore('StringsStore').getAt(0).data.lavados_terminos);

        Ext.getCmp('lavadoConfirmar').setText(Ext.getStore('StringsStore').getAt(0).data.global_aceptar);
        Ext.getCmp('lavadoCancelar').setText(Ext.getStore('StringsStore').getAt(0).data.global_cancelar);
        Ext.getCmp('lavadoSolicitadoCancelar').setText(Ext.getStore('StringsStore').getAt(0).data.global_cancelar);

    }

});