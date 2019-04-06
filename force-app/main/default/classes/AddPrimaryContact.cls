public class AddPrimaryContact implements Queueable{
    
    private Contact cn;
    private String state;
    
    public AddPrimaryContact(Contact cn, String state) {
        this.cn = cn;
        this.state = state;
    }
    public void execute(QueueableContext context) {
         List<Account> accounts = [select ID, Name ,(Select id,FirstName,LastName from contacts ) from account where BillingState =:state LIMIT 200];
        List<Contact> contacts =  new List<Contact>();
        for(Account account: accounts){
            Contact cont = cn.clone(false,false,false,false);
                 cont.AccountId =  account.id;
                 contacts.add( cont );

           
        }
        if(contacts.size() >0){
        insert contacts;    
        }
        
        
    	}
}