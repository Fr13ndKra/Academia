({
	  createItem: function(component, expense) {
        var action = component.get("c.saveItem");
        action.setParams({
            "items": items
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var expenses = component.get("v.items");
                expenses.push(response.getReturnValue());
                component.set("v.items", expenses);
            }
        });
        $A.enqueueAction(action);
    }
})