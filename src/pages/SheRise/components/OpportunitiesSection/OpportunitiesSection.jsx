import { opportunitiesAreas } from '../../../../static/opportunityAreas'
import { Link } from 'react-router-dom';

import './OpportunitiesSection.scss';
import Button from '../../../../components/Button/Button';

const OpportunitiesSection = () => {
    return (
        <section className='opportunities-section'>
            <h1>The Opportunities</h1>
            <div className="areas-board">
                {opportunitiesAreas.map(opportunity =>
                    <Link to={`/opportunities?area=${opportunity.destinationURL}&tag=women`} key={opportunity.title} className='area-card'>
                        <div className="image-container">
                            <img src={opportunity.imageSourceSherise} alt="" />
                        </div>
                        <div className="area-card-text">
                            <h2>{opportunity.title}</h2>
                            <p>{opportunity.description}</p>
                        </div>
                    </Link>
                )}
            </div>
            <Button buttonText='See all female focused opportunities' buttonStyle="primary" url={"/opportunities"} />
        </section>
    )
}

export default OpportunitiesSection;