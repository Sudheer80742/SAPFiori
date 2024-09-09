sap.ui.define(["sap/ui/core/mvc/Controller",
"sap/ui/core/Fragment"
],(Controller,Fragment)=>{
    "use strict";
    return Controller.extend("project1.controller.Dcontroller",{
       async onDialogOpen(){
            this.oDialog ??= await this.loadFragment({name:"project1.view.Dialog"});
            this.oDialog.open();
        },

        onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
			this.byId("dia1").close();
		}
        

    }
    )
})