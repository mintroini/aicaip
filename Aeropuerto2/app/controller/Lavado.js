/*
 * File: app/controller/Lavado.js
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

Ext.define('Aeropuerto.controller.Lavado', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        urlServer: 'http://audiodes.ddns.net/aicmobileservice/mobilews.asmx',

        control: {
            "#lavadoContainerHome": {
                tap: 'onHomeButtonTap'
            },
            "#btnLavado": {
                tap: 'btnLavadoTap'
            },
            "#selecLavadoHoraComienzo": {
                tap: 'selectHoraTap'
            },
            "#btnLavadoContinuar": {
                tap: 'onLavadoContinuar'
            },
            "#lavadoConfirmar": {
                tap: 'onLavadoConfirmar'
            },
            "#lavadoCancelar": {
                tap: 'onLavadoCancelar'
            },
            "#lavadoSolicitadoCancelar": {
                tap: 'onLavadoSolicitadoCancelar'
            }
        }
    },

    onHomeButtonTap: function(button, e, eOpts) {
           this.getApplication().getController('LogicController').showHideMenu('');
    },

    btnLavadoTap: function(button, e, eOpts) {
        this.getApplication().getController('Global').checkLogged('LavadoContainer');

        Ext.getCmp('lavadoForm').show();
        Ext.getCmp('lavadoSolicitado').hide();
        //Buscar si tiene lavado
        if(Ext.getStore('UsuarioStore').getCount() > 0){
            this.getLavadoActual(Ext.getStore('UsuarioStore').getAt(0).data.email);

            if(Ext.getStore('LavadosStore').getCount() > 0){

                if(Ext.getStore('LavadosStore').getAt(0).data.estado !== 'Cancelado' && Ext.getStore('LavadosStore').getAt(0).data.estado !== 'Facturado' ){
                    //mostrar cartel de ya pedido
                    Ext.getCmp('lavadoForm').hide();
                    Ext.getCmp('lavadoSolicitadoInfo').setData(Ext.getStore('LavadosStore').getAt(0).data);
                    Ext.getCmp('lavadoSolicitado').show();
                }
            }
        }

        this.resetForm();
    },

    selectHoraTap: function(button, e, eOpts) {
        Ext.getCmp('LavadoHoraPicker').show();


    },

    onLavadoContinuar: function(button, e, eOpts) {
        var fecha = new Date();

        var horas = fecha.getTime() - (fecha.getHours()*3600000 + fecha.getMinutes()*60000 +fecha.getSeconds()*1000+ fecha.getMilliseconds());

        var siguiente = true;
        var mensaje = '';

        //console.log(Ext.getCmp('lavadoFechaInicio').getValue().getTime() );
        if(Ext.getCmp('lavadoFechaInicio').getValue() === null){
          //  Ext.Msg.alert( '', 'Ingrese un fecha');
            mensaje += 'Ingrese un fecha';
                mensaje += '<br>';
            siguiente = false;

        }else{
            if(Ext.getCmp('lavadoFechaInicio').getValue().getTime() < horas){
                //Ext.Msg.alert( '', 'No se puede lavar autos en el pasado (aun)');
                mensaje += 'No se puede lavar autos en el pasado (aun) ';
                mensaje += '<br>';
                siguiente = false;
            }
        }

        if( Ext.getCmp('lavadoMatricula').getValue() < 1){
            //Ext.Msg.alert( '', 'Ingrese matricula');
            mensaje += 'Ingrese matricula';
            mensaje += '<br>';
            siguiente = false;
        }
        if( Ext.getCmp('lavadoMarca').getValue() < 1){
            //Ext.Msg.alert( '', 'Ingrese marca');
            mensaje += 'Ingrese un fecha';
                mensaje += '<br>';
            siguiente = false;
        }
        if( Ext.getCmp('lavadoModelo').getValue() < 1){
            //Ext.Msg.alert( '', 'Ingrese modelo');
            mensaje += 'Ingrese modelo  ';
                mensaje += '<br>';
            siguiente = false;
        }

        if(siguiente){
            Ext.getCmp('lavadoForm').hide();
            Ext.getCmp('confirmarLavadoForm').show();
        }else{
            Ext.Msg.alert( '', mensaje);
        }

    },

    onLavadoConfirmar: function(button, e, eOpts) {
        console.log();

        if(Ext.getCmp('lavadoTerminos').getChecked()){

            var mes = Ext.getCmp('lavadoFechaInicio').getValue().getMonth()+1;
            if(mes<10) mes = '0'+mes;
            var dia = Ext.getCmp('lavadoFechaInicio').getValue().getUTCDate();
            if(dia<10) dia = '0'+dia;


            var minutos = ''+Ext.getCmp('lavadoMinutosOculto').getValue();
            if(Ext.getCmp('lavadoMinutosOculto').getValue()<10) minutos = '0'+minutos;
            var horas = ''+Ext.getCmp('lavadoHorasOculto').getValue();
            if(Ext.getCmp('lavadoHorasOculto').getValue()<10) horas = '0'+horas;

            var diaHora = Ext.getCmp('lavadoFechaInicio').getValue().getFullYear()+'-'+mes+'-'+dia +'T'+horas+':'+minutos +':00.000';
            this.agendarLavado(Ext.getStore('UsuarioStore').getAt(0).data.email,Ext.getCmp('lavadoMatricula').getValue(),Ext.getCmp('lavadoModelo').getValue(),Ext.getCmp('lavadoMarca').getValue(),diaHora,'Solicitado');

            //Ext.getCmp('lavadoForm').show();
            if(Ext.getStore('LavadosStore').getCount()>0){
                Ext.getCmp('confirmarLavadoForm').hide();
                Ext.getCmp('lavadoForm').hide();
                Ext.getCmp('lavadoSolicitadoInfo').setData(Ext.getStore('LavadosStore').getAt(0).data);
                Ext.getCmp('lavadoSolicitado').show();

            }else{
                Ext.getCmp('lavadoSolicitado').hide();
                Ext.getCmp('confirmarLavadoForm').hide();
                Ext.getCmp('lavadoForm').hide();

            }

            this.resetForm();
        }else{
                Ext.Msg.alert( '', Ext.getStore('StringsStore').getAt(0).data.lavados_aceptarTerminos);

            }
    },

    onLavadoCancelar: function(button, e, eOpts) {
        Ext.Msg.confirm("Cancelar", "Are you sure u want to cancel :( ?", function(btn){
          if (btn == 'yes'){
              Ext.getCmp('lavadoForm').show();
              Ext.getCmp('confirmarLavadoForm').hide();
              Aeropuerto.app.getApplication().getController('Lavado').resetForm();
          }
        });

    },

    onLavadoSolicitadoCancelar: function(button, e, eOpts) {
        Ext.Msg.confirm("Cancelar", "Are you sure u want to cancel :( ?", function(btn){
          if (btn == 'yes'){
              Ext.getCmp('lavadoForm').show();
              Ext.getCmp('confirmarLavadoForm').hide();
              Ext.getCmp('lavadoSolicitado').hide();
              Aeropuerto.app.getApplication().getController('Lavado').resetForm();
              Aeropuerto.app.getApplication().getController('Lavado').cancelarLavadoActual(Ext.getStore('UsuarioStore').getAt(0).data.email);

          }
        });
    },

    resetForm: function() {
                Ext.getCmp('lavadoMatricula').setValue('');
                Ext.getCmp('lavadoFechaInicio').setValue('');
                Ext.getCmp('lavadoMarca').setValue('');
                Ext.getCmp('lavadoModelo').setValue('');

                Ext.getCmp('lblLavadoHoraComienzo').setHtml('Hora comienzo 7:00 AM');

                Ext.getCmp('estacionamientoTerminos').setValue(0);


        //Ext.getCmp('lavadoFechaInicio').setYearFrom(new Date().getFullYear());
        //Ext.getCmp('lavadoFechaInicio').setYearFrom(new Date().getFullYear());

        //console.log(Ext.getCmp('lavadoFechaInicio').getPicker().setYearFrom(new Date().getFullYear()));
    },

    agendarLavado: function(emailUsuario, matricula, modelo, marca, diaHora, estado) {

        var xmlParams = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AgendarLavado xmlns="http://tempuri.org/"><emailUsuario>'+emailUsuario+'</emailUsuario><diahora>'+diaHora+'</diahora><matricula>'+matricula+'</matricula><marca>'+marca+'</marca><modelo>'+modelo+'</modelo><estado>'+estado+'</estado></AgendarLavado></soap:Body></soap:Envelope>';

                               Ext.Ajax.request({
                                                                    url: Aeropuerto.app.getApplication().getController('Global').getUrlServer(),
                                                                    useDefaultXhrHeader: false,
                                                                    headers: {
                                                                        'Content-Type': 'text/xml; charset=utf-8',
                                                                        'SOAPAction': 'http://tempuri.org/AgendarLavado'
                                                                    },
                                                                    method: 'POST',
                                                                    async : false,
                                                                    params: xmlParams,
                                                                    success: function(response) {

                                                                        //Analizar respuesra y luego


                                                                        var mensaje = response.responseXML.getElementsByTagName('AgendarLavadoResult')[0].firstChild.nodeValue;
                                                                        if(mensaje == 'OK'){
                                                                            Ext.Msg.alert( '', 'Lavado solicitado con exito');
                                                                            var tienda = Ext.getStore('LavadosStore');
                                                                            tienda.add({costo : '0',marca:marca,estado : estado,modelo :modelo,matricula:matricula,horaLavado:diaHora});
                                                                            tienda.sync();
                                                                            tienda.load();
                                                                        }else{
                                                                            Ext.Msg.alert( '', Ext.getStore('StringsStore').getAt(0).data.lavados_mensajeError);
                                                                        }


                                                                    },
                                                                    failure: function(response) {
                                                                        console.log(response.responseText);
                                                                    }
                                                                });
    },

    getLavadoActual: function(email) {
                var xmlParams = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetLavadoActual xmlns="http://tempuri.org/"><email>'+email+'</email></GetLavadoActual></soap:Body></soap:Envelope>';


                                       Ext.Ajax.request({
                                                                            url: Aeropuerto.app.getApplication().getController('Global').getUrlServer(),
                                                                            useDefaultXhrHeader: false,
                                                                            headers: {
                                                                                'Content-Type': 'text/xml; charset=utf-8',
                                                                                'SOAPAction': 'http://tempuri.org/GetLavadoActual'
                                                                            },
                                                                            method: 'POST',
                                                                            async : false,
                                                                            params: xmlParams,
                                                                            success: function(response) {

                                                                                var lavados = response.responseXML.getElementsByTagName('GetLavadoActualResponse');

                                                                                var tienda = Ext.getStore('LavadosStore');
                                                                                tienda.getProxy().clear();
                                                                                tienda.data.clear();
                                                                                tienda.sync();

                                                                                Ext.each(lavados, function(lavado) {
                                                                                    tienda.addData(lavado);
                                                                                }, this);
                                                                                tienda.sync();
                                                                                tienda.load();

                                                                            },
                                                                            failure: function(response) {
                                                                                console.log(response.responseText);
                                                                            }
                                                                        });
    },

    cancelarLavadoActual: function(email) {
            var xmlParams = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CancelarLavadoActual xmlns="http://tempuri.org/"><email>'+email+'</email></CancelarLavadoActual></soap:Body></soap:Envelope>';


            Ext.Ajax.request({
                url: Aeropuerto.app.getApplication().getController('Global').getUrlServer(),
                useDefaultXhrHeader: false,
                headers: {
                    'Content-Type': 'text/xml; charset=utf-8',
                    'SOAPAction': 'http://tempuri.org/CancelarLavadoActual'
                },
                method: 'POST',
                params: xmlParams,
                success: function(response) {
                    //Alertar al cliente??
                    var tienda = Ext.getStore('LavadosStore');
                    tienda.getProxy().clear();
                    tienda.data.clear();
                    tienda.sync();

                },
                    failure: function(response) {
                    console.log(response.responseText);
                }
            });
    }

});