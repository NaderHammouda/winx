import Image from "next/image";
import OpportunityCard from "../../sharedComponenets/OpportunityCard/OpportunityCard";
import styles from './opportunity.module.css'



function Opportunity() {
  return (
    <div className={`${"container"} ${styles.opportunities}`}>
      <div className={`${"container"} ${styles.header_opportunities}`}>
          <h4 className={`${styles.titleOpportunities}`}>Opportunities</h4>
          <button type="button" className={`${"btn"} ${styles.filter_button} `}>Filter opportunities</button>
        </div> 
        <div className="container">
            <hr />
        </div>
        <div className="container">
          <div className="row">
          <div className={`${"col"} `}>
            <h3 className={`${styles.titleOpportunities}`}>Leads</h3>
            <OpportunityCard />
            
          </div>
          <div className={`${"col"} ${styles.titleOpportunities}`}>
          <h3 className={`${styles.titleOpportunities}`}>Hunt</h3>
          <OpportunityCard/>
          </div>
          <div className={`${"col"} ${styles.titleOpportunities}`}>
          <h3 className={`${styles.titleOpportunities}`}>Proposals</h3>
          <OpportunityCard/>
            
            
            </div>
          <div className={`${"col"} ${styles.titleOpportunities}`}>
          <h3 className={`${styles.titleOpportunities}`}>Contracts</h3>
            
            <OpportunityCard/>
            
            </div>

          </div>

        </div>

      {/* <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Opportunity