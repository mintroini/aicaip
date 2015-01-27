/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    js: {
        path: 'app/utils/GALocalStorage.js'
    },
    models: [
        'Vuelo',
        'Weather',
        'Strings',
        'Usuario',
        'Servicios',
        'Lavado'
    ],
    stores: [
        'Arribos',
        'Partidas',
        'Uuid',
        'Suscripciones',
        'MisVuelos',
        'WeatherStore',
        'StringsStore',
        'UsuarioStore',
        'ServiciosStore',
        'LavadosStore'
    ],
    views: [
        'MainContainer',
        'UserContainer',
        'TaxiContainer',
        'ContactoContainer',
        'EstacionamientoContainer',
        'ServiciosContainer',
        'NormasContainer',
        'HomeContainer',
        'VuelosContainer',
        'SuscripcionesContainer',
        'FlightDetailsContainer',
        'ServiciosDetailsContainer',
        null
    ],
    controllers: [
        'Global',
        'LogicController',
        'Usuarios',
        'Taxi',
        'Contacto',
        'Estacionamiento',
        'Lavado',
        'Servicios',
        'Normas',
        'Home'
    ],
    name: 'Aeropuerto',
    statusBarStyle: 'black-translucent',

    launch: function() {
        /*
                var tienda = Ext.getStore('StringsStore');
                tienda.getProxy().clear();
                tienda.data.clear();
                tienda.sync();
               */
        var store= Ext.getStore('Uuid');

        if(store.getCount() === 0){
            var guid =  this.getApplication().getController('LogicController').createUuid();

            var uuid = guid();
            store.add({key : uuid});

            var servicios = Ext.getStore('ServiciosStore');

            servicios.add({categoria : 'GASTRONOMÍA',nombre:'Mc. Café ',ubicacion:'(www.mcdonalds.com.uy)'},{categoria : 'GASTRONOMÍA',nombre:'Mc. Donald ́s',ubicacion:'(www.mcdonalds.com.uy)'},{categoria : 'GASTRONOMÍA',nombre:'Restaurant Patria',ubicacion:'(www.restaurantpatria.com.uy)'},{categoria : 'TRANSPORTE',nombre:'COT',ubicacion:'(www.cot.com.uy)'},{categoria : 'TRANSPORTE',nombre:'Taxis Aeropuerto',ubicacion:'(www.taxisaeropuerto.com)'},{categoria : 'COMUNICACIÓN',nombre:'ANTEL',ubicacion:'(www.antel.com.uy)'});

        }

        if(window.navigator.onLine){
            var cultura = navigator.language;
            this.getApplication().getController('Global').getVersion(cultura);
        }else{
            // this.getApplication().getController('LogicController').hideViewAll();
            // this.getApplication().getController('LogicController').showOffLine();
        }


        //alert('You are using ' + Ext.os.name);

        Ext.create('Aeropuerto.view.MainContainer', {fullscreen: true});
    }

});
