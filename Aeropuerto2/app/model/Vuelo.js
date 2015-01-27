/*
 * File: app/model/Vuelo.js
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

Ext.define('Aeropuerto.model.Vuelo', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        identifier: {
            type: 'uuid'
        },
        fields: [
            {
                name: 'nVuelo',
                type: 'string'
            },
            {
                name: 'aerolinea',
                type: 'string'
            },
            {
                name: 'origen',
                type: 'string'
            },
            {
                name: 'via',
                type: 'string'
            },
            {
                name: 'estadosp',
                type: 'string'
            },
            {
                name: 'estadosin',
                type: 'string'
            },
            {
                name: 'terminal',
                type: 'string'
            },
            {
                name: 'sector',
                type: 'string'
            },
            {
                name: 'cinta',
                type: 'string'
            },
            {
                name: 'reclamo',
                type: 'string'
            },
            {
                name: 'festima',
                type: 'string'
            },
            {
                name: 'fprogram',
                type: 'string'
            },
            {
                name: 'freal',
                type: 'string'
            },
            {
                name: 'destino',
                type: 'string'
            },
            {
                name: 'checkin',
                type: 'string'
            },
            {
                name: 'puerta',
                type: 'string'
            },
            {
                name: 'esArribo',
                type: 'boolean'
            },
            {
                name: 'aeropuerto',
                type: 'string'
            }
        ]
    }
});