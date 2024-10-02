import PropTypes from 'prop-types'
import GrantIcon from '../../../../assets/euro.svg'
import ScholarIcon from '../../../../assets/scholar.svg'
import AwardIcon from '../../../../assets/award.svg'
import CourseIcon from '../../../../assets/course.svg'

import './OpportunityListing.scss';

const OpportunityTypesIcon = {
    'grant': GrantIcon,
    'scholarship': ScholarIcon,
    'award': AwardIcon,
    'course': CourseIcon

}

const OpportunityListing = ({ title, description, type, tags, area, link }) => {
    return (
        <div className='opportunity-listing'>
            <div className={`image-container ${type}`}>
                <img src={OpportunityTypesIcon[type]} alt="" />
                <p>{type}</p>
            </div>
            <div className="opportunity-content">
                <div className="opportunity-header">
                    <h2 className='title'>{title} | <span className='area'>{area}</span></h2>
                    <div className="tags">
                        {tags.map((tag) =>
                            <span key={tag}>{tag}</span>)
                        }
                    </div>
                </div>
                <p className="description">{description}</p>
                <p className='opportunity-apply'>
                    Apply at: <a href="#"> {link} </a>
                </p>
            </div>

        </div>
    )
}

OpportunityListing.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    area: PropTypes.string,
    link: PropTypes.string
}

export default OpportunityListing