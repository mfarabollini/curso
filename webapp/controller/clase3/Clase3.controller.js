sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.routing.History} History
     */
    
    function (Controller, History) {
        "use strict";

        return Controller.extend("exaccs.curso.controller.clase3.Clase3", {
            onInit: function () {

            },
            navToStandard: function (oEvent) {
                sap.ui.core.UIComponent.getRouterFor(this).navTo("stdList");
            },
            navToTabla: function (oEvent) {
                sap.ui.core.UIComponent.getRouterFor(this).navTo("table");
            },
            navToDetail: function (oEvent) {
                const IdCustomer = oEvent.getSource().getBindingContext("nw").getObject().CustomerID;
                
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("detCustomer",{
                    customerId: IdCustomer
                });
            },
            onBack: function(oEvent){
                var oHistory = History.getInstance();
                var sPrevia = oHistory.getPreviousHash();

                if(sPrevia !== undefined){
                    window.history.go(-1);
                }else{
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteMain");
                }

            }
        });
    });
