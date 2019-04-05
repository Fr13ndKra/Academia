({
	handleClick : function(component, event, helper) {
        var btnClicked = event.getSource(); // boton
        var btnMessage = btnClicked.get("v.label"); //la etiqueta que tiene el boton
        component.set("v.message", btnMessage); //Se actualiza el mensaje
        alert("You clicked: " + event.getSource().get("v.label"));
		
	},
    handleClick2: function(component, event, helper) {
        var newMessage = event.getSource().get("v.label");
        console.log("handleClick2: Message: " + newMessage);
        component.set("v.message", newMessage);
        
    },
    handleClick3: function(component, event, helper) {
        component.set("v.message", event.getSource().get("v.label"));
    }
    
})