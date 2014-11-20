/*
 * File: app/controller/LogicController.js
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

Ext.define('Aeropuerto.controller.LogicController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "#btnArribos": {
                tap: 'btnArribos'
            },
            "#btnPartidas": {
                tap: 'btnPartidas'
            },
            "#btnSubscriptions": {
                tap: 'btnSubscriptionsTap'
            },
            "#lstArribos": {
                itemtap: 'onArribosListTap'
            },
            "#btnDetailsBack": {
                tap: 'onDetailsBackButtonTap'
            },
            "#lstPartidas": {
                itemtap: 'onPartidasListItemTap'
            },
            "#btnDetailsSubscribe": {
                tap: 'onDetailsSubscribeButtonTap'
            },
            "#lstSubscriptions": {
                itemtap: 'onSuscripcionesListItemTap'
            },
            "#txtFiltro": {
                change: 'onTextfieldChange'
            },
            "#btnMenu": {
                tap: 'onMenuButtonTap'
            }
        }
    },

    btnArribos: function(button, e, eOpts) {
        Ext.Viewport.hideMenu('left');

        this.getApplication().getController('Global').getArrivals('');

        var topBar = Ext.getCmp('topBar');
        topBar.setTitle('Arribos');

        var lstDepartures = Ext.getCmp('lstPartidas');
        lstDepartures.hide();

        var lstArrivals = Ext.getCmp('lstArribos');
        lstArrivals.show();


    },

    btnPartidas: function(button, e, eOpts) {
        Ext.Viewport.hideMenu('left');

        var topBar = Ext.getCmp('topBar');
        topBar.setTitle('Partidas');

        var lstArrivals = Ext.getCmp('lstArribos');
        lstArrivals.hide();

        this.getApplication().getController('Global').getDepartures('');

        var lstDepartures = Ext.getCmp('lstPartidas');
        lstDepartures.show();

    },

    btnSubscriptionsTap: function(button, e, eOpts) {
        Ext.Viewport.hideMenu('left');

        var topBar = Ext.getCmp('topBar');
        topBar.setTitle('Suscripciones');

        var lstArrivals = Ext.getCmp('lstArribos');
        lstArrivals.hide();

        var lstDepartures = Ext.getCmp('lstPartidas');
        lstDepartures.hide();

        this.getApplication().getController('Global').getSubscriptions();

        var lstSubscriptions = Ext.getCmp('lstSubscriptions');
        lstSubscriptions.show();

    },

    onArribosListTap: function(dataview, index, target, record, e, eOpts) {

        this.goToDetails(dataview, index, target, record, e, eOpts);
    },

    onDetailsBackButtonTap: function(button, e, eOpts) {
         var c = Ext.getCmp('details');
        var d = Ext.getCmp('mainView');
                c.hide();
                d.show();
    },

    onPartidasListItemTap: function(dataview, index, target, record, e, eOpts) {
          this.goToDetails(dataview, index, target, record, e, eOpts);
    },

    onDetailsSubscribeButtonTap: function(button, e, eOpts) {
        var icon = Ext.getCmp('details').child('#tbDetails').child('#btnDetailsSubscribe');
        var store= Ext.getStore('Uuid');
        var uuid = store.getAt(0).get('key');
        var c = Ext.getCmp('details').child('#flightDetails').child('#companyName').getData();

        var vuelos = Ext.getStore('MisVuelos');
        var susc = Ext.getStore('VuelosSuscriptos');

        if (icon.getIconCls() === 'favorites') {
           this.getApplication().getController('Global').subscribe(uuid,c.nVuelo,c.fprogram);
            vuelos.add({'nVuelo' : c.nVuelo,'fprogram': c.fprogram});
                 vuelos.sync();
        }
        else
        {
            this.getApplication().getController('Global').unSubscribe(uuid,c.nVuelo,c.fprogram);


            for (i = 0; i < vuelos.getCount(); i++) {
                 if(vuelos.getAt(i).data.nVuelo == c.nVuelo && vuelos.getAt(i).data.fprogram == c.fprogram){
                        var index =  i;
                 }
            }

            vuelos.removeAt(index);
            vuelos.sync();
        }


    },

    onSuscripcionesListItemTap: function(dataview, index, target, record, e, eOpts) {
          this.goToDetails(dataview, index, target, record, e, eOpts);
    },

    onTextfieldChange: function(textfield, newValue, oldValue, eOpts) {
        var lstArrivals = Ext.getCmp('lstArribos');
        if(lstArrivals.isHidden()){

            this.getApplication().getController('Global').getDepartures(newValue);
        }
        else{
            this.getApplication().getController('Global').getArrivals(newValue);
        }
    },

    onMenuButtonTap: function(button, e, eOpts) {
        this.showHideMenu("");
    },

    createUuid: function() {
                 function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                               .toString(16)
                               .substring(1);
                  }
                  return function() {
                    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                           s4() + '-' + s4() + s4() + s4();
                  };
    },

    goToDetails: function(dataview, index, target, record, e, eOpts) {
        var info;

        if (record) {
            var c = Ext.getCmp('details');
            if(c === undefined){
                alert("MUERTEEE");
            }

            // set the info
            info = c.child('#flightDetails');
            info.child('#companyName').setData(record.data);
            // info.child('#data').setData(record.data);

            var d = Ext.getCmp('mainView');

            var b = Ext.getCmp('details').child('#tbDetails').child('#btnDetailsSubscribe');

            var esMyVuelo =  Ext.getStore('MisVuelos');

            var index = esMyVuelo.find('nVuelo', record.data.nVuelo);

            if(index < 0){
                b.setIconCls('favorites');
            }else{
                b.setIconCls('trash');

            }
            d.hide();
            c.show();
        }

    },

    getTimeStamp: function() {
        //Return a timestamp with the format "yy-m-d h:MM:ss" ex. 2014-11-17 14:47:1


        // Create a date object with the current time
          var now = new Date();

        // Create an array with the current month, day and time
          var date = [ now.getFullYear(), now.getMonth() + 1, now.getDate() ];

        // Create an array with the current hour, minute and second
          var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];


        // Return the formatted string
          return date.join("-") + " " + time.join(":") ;
    },

    changeSubscribeIcon: function() {
        var c = Ext.getCmp('details').child('#tbDetails').child('#btnDetailsSubscribe');

        if (c.getIconCls() === 'favorites') {
        c.setIconCls('trash');
        }
        else
        {
        c.setIconCls('favorites');
        }
    },

    showHideMenu: function(referrer) {
        if(Ext.Viewport.getMenus().left.isHidden()){
            if(referrer === "" || referrer == "right")
                Ext.Viewport.showMenu('left');
        }
        else
        {
            if(referrer === "" || referrer == "left")
                Ext.Viewport.hideMenu('left');
        }
    }

});