
import styles from './opportunitycard.module.css'

const opportunities = [
    {
      "opportunityCode":"opr032",
      "opportunityName":"Project Management Information System",
      "account" :"Al Kifah",
      "lastAssessed" :"19/01/2022",
      "health":"nothing",
      "opportunityOwner":"Marwan Houdane",
      "staging":"Leads",
      "scoring": {
        "Winnability":{
          "name":"Winnability",
          "value":"1.7"
        },
        "Desirability":{
          "name":"Desirability",
          "value":"4.7"
        },
        "Deliverability":{
          "name":"Deliverability",
          "value":"3.4"
        },
        "total":"4.7"
      }
    },
    {
      "opportunityCode":"opr032",
      "opportunityName":"Project Management Information System",
      "account" :"Al Kifah",
      "lastAssessed" :"19/01/2022",
      "health":"nothing",
      "opportunityOwner":"Marwan Houdane",
      "staging":"Hunt",
      "scoring": {
        "Winnability":{
          "name":"Winnability",
          "value":"1.7"
        },
        "Desirability":{
          "name":"Desirability",
          "value":"4.7"
        },
        "Deliverability":{
          "name":"Deliverability",
          "value":"3.4"
        },
        "total":"4.7"
      }
    },
    {
      "opportunityCode":"opr032",
      "opportunityName":"Project Management Information System",
      "account" :"Al Kifah",
      "lastAssessed" :"19/01/2022",
      "health":"nothing",
      "opportunityOwner":"Marwan Houdane",
      "staging":"Proposals",
      "scoring": {
        "Winnability":{
          "name":"Winnability",
          "value":"1.7"
        },
        "Desirability":{
          "name":"Desirability",
          "value":"4.7"
        },
        "Deliverability":{
          "name":"Deliverability",
          "value":"3.4"
        },
        "total":"4.7"
      }
    },
    {
      "opportunityCode":"opr032",
      "opportunityName":"Project Management Information System",
      "account" :"Al Kifah",
      "lastAssessed" :"19/01/2022",
      "health":"nothing",
      "opportunityOwner":"Marwan Houdane",
      "staging":"Contracts",
      "scoring": {
        "Winnability":{
          "name":"Winnability",
          "value":"1.7"
        },
        "Desirability":{
          "name":"Desirability",
          "value":"4.7"
        },
        "Deliverability":{
          "name":"Deliverability",
          "value":"3.4"
        },
        "total":"4.7"
      }
    },
  
  ]

function OpportunityCard() {
  return (
      
   
    <div className={`card ${styles.opportunity_card}`}>
    <div className="card-body">
    <div className={` ${styles.header_card}`}>
    <p className="opportunityCode">OPR032</p>
    <button type="button" className={`${"btn"} ${styles.card_button} `}><p>Follow</p></button>
    <div>
    <button type="button" className={`${"btn"} ${styles.secondbutton} `}>...</button>
    </div>
 
    </div>
    <div>
        <p>Project Management Information System</p>
    </div>
    <div>
        
        <div className='row'>
            
            <div className={`${"col-md-8"} ${styles.scoring}`}>
            <p className={`${styles.score_title}`}>score</p>   
            <div className={`${styles.circle}`}>4.7</div>
            
            </div>
            <div className='col-md-4'>
             <ul className={`${styles.list_scoring}`}>
                 <li className={`${styles.scoring_item}`}>
                     <span className={`${styles.item_value}`}>1.7</span>
                     
                 </li>
                 <li className={`${styles.scoring_item}`}>
                     <span className={`${styles.item_name}`}>Winnability</span>
                 </li>
                 <li className={`${styles.scoring_item}`}>
                     <span className={`${styles.item_value}`}>4.7</span>
                     
                 </li>
                 <li className={`${styles.scoring_item}`}>
                     <span className={`${styles.item_name}`}>Desirability</span>
                 </li>
                 <li className={`${styles.scoring_item}`}>
                     <span className={`${styles.item_value}`}>3.4</span>
                     
                 </li>
                 <li className={`${styles.scoring_item}`}>
                     <span className={`${styles.item_name}`}>Deliverability</span>
                 </li>
             </ul>

            </div>

        </div>
        <div className='row'>
            <div className={`col-md-8 ${styles.descripton_card}`}>
            <span className={`${styles.assesment_owner}`}>Last Assessed</span>   
            <span className={`${styles.assessment_owner_value}`}>19/01/2022</span>
            <span className={`${styles.assesment_owner}`}>Opportunity Owner</span>
            <span className={`${styles.assessment_owner_value}`}>Marwan Houdane</span>
            </div>
            <div className={`col-md-4 ${styles.descripton_card}` }>
               <span className={`${styles.assesment_owner}`}>Health</span>
               <span className={`${styles.health}`}></span>
               
               <span className={`${styles.assesment_owner}`}>Account</span>
               <span className={`${styles.assessment_owner_value}`}>Al Kifah</span>
            </div>

        </div>
    </div>
      
     
    </div>
  </div>
  
      
    
    
    
  )
}

export default OpportunityCard