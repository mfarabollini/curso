sap.ui.define([
    'sap/ui/base/ManagedObject',
    'sap/ui/core/Fragment'
], function(ManagedObject, Fragment) {
    'use strict';
    
    return ManagedObject.extend("exaccs.curso.controller.Dialogohola", {
        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView; 
        },

        open: function() {
            const oView = this._oView;

            let oFragmentController = {
                closeDialogo: function () {
                    oView.byId("dlgHola").close();
                }
            };

            if (!oView.byId("dlgHola")) {
                Fragment.load({
                    id: oView.getId(),
                    name: "exaccs.curso.view.Dialogo",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                oView.byId("dlgHola").open();
            }
        }

    });
}); 