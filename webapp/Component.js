/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define(
  ["sap/ui/core/UIComponent", 
  "sap/ui/Device", 
  "exaccs/curso/model/models",
  "./controller/clase2/DialogoHola"
],
  function (UIComponent, Device, models, DialogoHola) {
    "use strict";

    return UIComponent.extend("exaccs.curso.Component", {
      metadata: {
        manifest: "json",
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // enable routing
        this.getRouter().initialize();

        // set the device model
        this.setModel(models.createDeviceModel(), "device");
        this.setModel(models.createNombre(), "nombre");

        this._dialogoHola = new DialogoHola(this.getRootControl());
      },
      exit: function () {
        this._dialogoHola.destroy();
        delete this._dialogoHola;
      },

      openDialogoHola: function () {
        this._dialogoHola.open();
      },
    });
  }
);
