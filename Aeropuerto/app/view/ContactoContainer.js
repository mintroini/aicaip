/*
 * File: app/view/ContactoContainer.js
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

Ext.define('Aeropuerto.view.ContactoContainer', {
    extend: 'Ext.Container',
    alias: 'widget.contactoContainer',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Radio',
        'Ext.field.TextArea'
    ],

    config: {
        height: '100%',
        hidden: true,
        id: 'ContactoContainer',
        width: '100%',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'contactoToolbar',
                items: [
                    {
                        xtype: 'button',
                        id: 'containerContainerHome',
                        iconCls: 'list'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                id: 'contactoForm',
                items: [
                    {
                        xtype: 'emailfield',
                        disabled: false,
                        id: 'contactoEmail',
                        margin: 20,
                        padding: 8,
                        label: 'Email',
                        labelWidth: '40%',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'radiofield',
                        id: 'ContactoConsulta',
                        margin: 20,
                        width: '50%',
                        label: 'Consulta',
                        labelWidth: '90%',
                        name: 'field'
                    },
                    {
                        xtype: 'radiofield',
                        id: 'ContactoReclamo',
                        margin: 20,
                        width: '50%',
                        label: 'Reclamo',
                        labelWidth: '90%',
                        name: 'field'
                    },
                    {
                        xtype: 'radiofield',
                        id: 'ContactoSugerencia',
                        margin: 20,
                        padding: 8,
                        width: '50%',
                        label: 'Sugerencia',
                        labelWidth: '90%',
                        name: 'field'
                    },
                    {
                        xtype: 'textareafield',
                        id: 'ContactoContenido',
                        margin: 20,
                        padding: 8,
                        label: 'Field'
                    },
                    {
                        xtype: 'button',
                        id: 'btnSolicitarTaxi1',
                        margin: 20,
                        padding: 8,
                        text: 'Enviar'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        //Ext.getCmp('contactoEmail').setValue(Ext.getStore('UsuarioStore').getAt(0).data.email);
        Ext.getCmp('contactoEmail').disable();
        Ext.getCmp('contactoToolbar').setTitle(Ext.getStore('StringsStore').getAt(0).data.global_contacto);
    }

});