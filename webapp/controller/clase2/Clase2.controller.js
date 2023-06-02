// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "../../model/Formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast 
     * @param {typeof sap.ui.model.Filter} Filter 
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator 
    */
    function (Controller, MessageToast, Formatter, Filter,FilterOperator) {
        "use strict";

        return Controller.extend("exaccs.curso.controller.clase.Clase2", {
            formatter: Formatter,
            onInit: function () {

            },
            openDialogoHola: function(){
                this.getOwnerComponent().openDialogoHola();
            },
            
            holaMundo: function () {

                var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sName = this.getView().getModel("nombre").getProperty("/data/nombre");
                var sText = oBundle.getText("msg", [sName]);

                MessageToast.show(sText);
            },
            filterInvoices: function (oEvent) {
                const aFilter = [];
                const sQuery = oEvent.getParameter("query");

                if (sQuery) {
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery ))
                };

                const oList = this.byId("invoices");
                const oBinding= oList.getBinding("items");
                oBinding.filter(aFilter);
            }
        });
    });
