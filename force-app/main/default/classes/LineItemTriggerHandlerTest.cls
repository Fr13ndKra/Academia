@IsTest
public class LineItemTriggerHandlerTest {
    @IsTest public static void TestInsertLineItem() {
        LineItem__c product = new LineItem__c();
        product.description__c = 'Test';
        product.Type__c = 'Small';
        
        test.startTest();
        Insert product;
        test.stopTest();
        
        ProductLineItem__c li = [SELECT Id,Description__c,Type__c FROM ProductLineItem__c WHERE LineItem__c = :product.Id];
        system.assertEquals(product.Description__c, li.Description__c, 'Son Iguales');
    } 
    

}