import Image from "next/image";
import styles from './opportunity.module.css'

function Opportunity() {
  return (
    <div className="container">
      <div className={`${"container"} ${styles.header_opportunities}`}>
          <h4 className={`${styles.titleOpportunities}`}>Opportunities</h4>
          <button type="button" className={`${"btn"} ${styles.filter_button} `}>Filter opportunities</button>
        </div> 
      <div className="card">
        
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
      </div>
    </div>
  );
}

export default Opportunity