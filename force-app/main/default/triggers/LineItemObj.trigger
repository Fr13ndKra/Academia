trigger LineItemObj on LineItem__c (after insert) {
     if(Trigger.isAfter && Trigger.isInsert){
        LineItemTriggerHandler.InsertProductLineItem(Trigger.new);
    }

}