public class LineItemTriggerHandler {
    
     public static void InsertProductLineItem(List<LineItem__c>items){
        ProductLineItem__c product = new ProductLineItem__c();
        for(LineItem__c li:items){
            product.Description__c = li.Description__c;
            product.Type__c = li.Type__c;
            product.LineItem__c = li.Id;
            
            try{
                insert product;
                    }catch(Exception ex){
                        system.debug(ex);
                    }
            
        }
    }

}