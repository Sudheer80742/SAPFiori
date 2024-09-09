sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageBox, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {
            
            // var oModel = new JSONModel();
            // oModel.loadData("model/products.json");
            // this.getView().setModel(oModel,"p");

            var oData = {
                res: {
                    name: "Sudheer"
                }
            };
            var sRecident = new JSONModel(oData);
            this.getView().setModel(sRecident);

            var oResourceModel = new ResourceModel({
                bundleName: "project1.i18n.i18n"
            });
            this.getView().setModel(oResourceModel, "i18n");
        },


        onPush:()=>{
            MessageBox.show("msag1");
        }
    });
});
