public class LeadPrueba {
    
    
    
    
    public static List<Lead> getLeads(){
        
        List<Lead> getLeadsList = new List<Lead>();
        
        getLeadsList = [select Id, FirstName, LastName from Lead];
        
        for(lead l : getLeadsList){
            
            System.debug('Get Leads'+ l.FirstName +''+ l.LastName);
            
        }
        return getLeadsList;
    }

}