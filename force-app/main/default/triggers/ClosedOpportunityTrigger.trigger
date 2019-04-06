trigger ClosedOpportunityTrigger on Opportunity (after insert,after update) {
    
    List<Task> taskList=new List<Task>(); 

    for(Opportunity Opp:Trigger.New){
        if(Trigger.isInsert || Trigger.isUpdate)
          if(opp.StageName=='Closed Won')
              taskList.add(new task(Subject='Follow Up Test Task',
                                 WhatId=opp.Id));
    }
    
    if(taskList.size()>0)
        insert taskList;

}