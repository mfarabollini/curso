sap.ui.define(function () {
    "use strict";

    var Formatter = {

        discount: function (sDiscount) {
            if (sDiscount == 0) {
                return "Sin Descuento";
            } else {
                return "Descuento: " + sDiscount * 100 + "%";
            }
        },

    };

    return Formatter;

},  /* bExport= */ true);
