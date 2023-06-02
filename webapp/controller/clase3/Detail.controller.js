sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.routing.History} History
     */
    function (Controller,History) {
        "use strict";

        function _onObjectMatch(oEvent){

            this.getView().bindElement({
                path: "nw>/Customers('" + oEvent.getParameter("arguments").customerId + "')",
                //path: "Orders(10643)",
                //model: "nw"
            });
        };
        return Controller.extend("exaccs.curso.controller.clase3.Detail", {
            onInit: function () {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.getRoute("detCustomer").attachPatternMatched(_onObjectMatch, this);
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
