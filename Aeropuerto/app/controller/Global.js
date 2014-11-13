/*
 * File: app/controller/Global.js
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

Ext.define('Aeropuerto.controller.Global', {
    extend: 'Ext.app.Controller',

    config: {
        urlServer: 'http://10.0.1.182/aicmobileservice/mobilews.asmx'
    },

    getArrivals: function() {
            var xmlParams = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetArrivals xmlns="http://tempuri.org/"><filter></filter></GetArrivals></soap:Body></soap:Envelope>';
            this.getFlights('GetArrivals', 'Arribos', xmlParams);
    },

    getDepartures: function() {
            var xmlParams = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetDepartures xmlns="http://tempuri.org/"><filter></filter></GetDepartures></soap:Body></soap:Envelope>';
            this.getFlights('GetDepartures', 'Partidas', xmlParams);
    },

    getFlights: function(tipo, laTienda, parametros) {
                        Ext.Ajax.request({
                            url: this.getUrlServer(),
                            useDefaultXhrHeader: false,
                            headers: {
                                'Content-Type': 'text/xml; charset=utf-8',
                                'SOAPAction': 'http://tempuri.org/' + tipo
                            },
                            method: 'POST',
                            params: parametros,
                            success: function(response) {
                                var vuelos = response.responseXML.getElementsByTagName('Vuelo');
                                var tienda = Ext.getStore(laTienda);
                                tienda.getProxy().clear();
                                tienda.data.clear();
                                tienda.sync();
                                Ext.each(vuelos, function(vuelo) {
                                    tienda.addData(vuelo);
                                }, this);
                                tienda.sync();
                                tienda.load();
                            },
                            failure: function(response) {
                                alert(response.responseText);
                                console.log(response.responseText);
                            }
                        });
    }

});