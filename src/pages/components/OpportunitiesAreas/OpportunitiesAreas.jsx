import { opportunitiesAreas } from '../../../static/opportunityAreas'
import { Link } from 'react-router-dom';

import './OpportunitiesAreas.scss';

const OpportunitiesAreas = () => {
    return (
        <section className='opportunities-areas'>
            <h1>Opportunities</h1>
            <div className="areas-board">
                {opportunitiesAreas.map(opportunity =>
                    <Link to={`/opportunities?area=${opportunity.destinationURL}`} key={opportunity.title} className='area-card'>
                        <div className="image-container">
                            <img src={opportunity.imageSource} alt="" />
                        </div>
                        <div className="area-card-text">
                            <h2>{opportunity.title}</h2>
                            <p>{opportunity.description}</p>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    )
}

export default OpportunitiesAreas