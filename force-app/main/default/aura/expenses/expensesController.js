({
    // Load expenses from Salesforce
   // doInit: function(component, event, helper) { //Con doInit(), simplemente leemos algunos datos y luego se actualiza la interfaz de usuario
        // Create the action crea nuestra llamada de método remoto
     //   var action = component.get("c.getExpenses");
        // Add callback behavior for when response is received
       // action.setCallback(this, function(response) { //this es la función del gestor de acciones en sí. 
            //Gestión de la respuesta del servidor
         //   var state = response.getState();
           // if (state === "SUCCESS") {
           //     component.set("v.expenses", response.getReturnValue());
            //}
            //else {
              //  console.log("Failed with state: " + state);
           // }
        //});
        // Send action off to be executed llamada del servidor a la cola de solicitudes
       // $A.enqueueAction(action);
    //},
   // createExpense: function(component, expense) {
     //   var action = component.get("c.saveExpense");
       // action.setParams({
         //   "expense": expense
        //});
        //action.setCallback(this, function(response){
          //  var state = response.getState();
            //if (state === "SUCCESS") {
              //  var expenses = component.get("v.expenses"); //obtenemos con get() el atributo expenses
               // expenses.push(response.getReturnValue()); //trasladamos con push() un valor dentro de él 
                //component.set("v.expenses", expenses);
           // }
        // });
        // $A.enqueueAction(action);
    // },
       // updateExpense: function(component, expense) {
        // var action = component.get("c.saveExpense");
        // action.setParams({
          //  "expense": expense
        // });
        // action.setCallback(this, function(response){
          //  var state = response.getState();
           // if (state === "SUCCESS") {
                // do nothing!
           // }
        // });
        // $A.enqueueAction(action);
    //},
    //
        createExpense: function(component, expense) {
        this.saveExpense(component, expense, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }
        });
    },
    updateExpense: function(component, expense) {
        this.saveExpense(component, expense);
    },

    
        saveExpense: function(component, expense, callback) {
        var action = component.get("c.saveExpense");
        action.setParams({
            "expense": expense
        });
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    },


    
      
    clickCreate: function(component, event, helper) {
        var validExpense = component.find('expenseform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validExpense){
            // Create the new expense
            var newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    },
    
        handleUpdateExpense: function(component, event, helper) {
        var updatedExp = event.getParam("expense");
        helper.updateExpense(component, updatedExp);
    }

    
      
    
})