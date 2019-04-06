@isTest
public class AddPrimaryContactTest {
    @testSetup 
    static void setup() {
        List<Account> accounts = new List<Account>();
        // add a parent account
       
        // add 100 child accounts
        for (Integer i = 0; i < 50; i++) {
            accounts.add(new Account(
                name='Test'+i , BillingState = 'NY'));
             accounts.add(new Account(
                name='Test'+i , BillingState = 'CA'));
        }
        insert accounts;
    }
    
 		 
   		static testmethod void testQueueable() {
        // query for test data to pass to queueable class
        // Create our Queueable instance
         Contact co = new Contact();
         co.FirstName ='demo';
         co.LastName ='demo';
         insert co;
         String state = 'CA';

        AddPrimaryContact updater = new AddPrimaryContact(co, state);
        // startTest/stopTest block to force async processes to run
        Test.startTest();        
        System.enqueueJob(updater);
        Test.stopTest();        
        // Validate the job ran. Check if record have correct parentId now
        //System.assertEquals(50, [select count() from account]);
    	}
    }