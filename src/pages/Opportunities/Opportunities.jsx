import Header from '../../components/Header/Header'
import OpportunitiesData from '../../static/dummy-data.json'
import OpportunityListing from './components/OpportunityListing/OpportunityListing'
import Searchbar from './components/Searchbar/Searchbar'

import { useEffect, useState } from 'react'

import './Opportunities.scss'

const fieldsOfWork = [
    {
        name: 'Engineering & Tech',
        key: 'engineering',
    },
    {
        name: 'Visual and Performance Arts',
        key: 'arts',
    },
    {
        name: 'Business and Marketing',
        key: 'business',
    },
    {
        name: 'Music',
        key: 'music',
    },
    {
        name: 'Medicine & Health Sciences',
        key: 'medicine',
    },
    {
        name: 'Natural Sciences',
        key: 'science',
    },
    {
        name: 'Social Sciences',
        key: 'social',
    },
    {
        name: 'Law and Policies',
        key: 'law',
    },
]

/* const filterItemsBySearchInput = (itemsArray) => {
    return itemsArray.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.year.toString().includes(searchInput) ||
        item.rating.includes(searchInput)
    );
  }; */

const Opportunities = () => {
    const [filters, setFilters] = useState("");
    const [opportunities, setOpportunities] = useState("");

    /* useEffect(() => {
      if (filters) {
        setOpportunities
      }
    }, [filters]) */
    

    return (
        <div className='opportunities'>
            <Header />
            <h1>Opportunities</h1>
            <Searchbar setFilterParameters={setFilters} filterParameters={filters} />
            <div className="opportunities-container">
                {OpportunitiesData.map(opportunity =>
                    <OpportunityListing
                        key={opportunity.id}
                        title={opportunity.name}
                        description={opportunity.description}
                        type={opportunity.type}
                        tags={opportunity.tags}
                        area={opportunity.area}
                        link={opportunity.link}
                    />
                )}
            </div>
        </div>
    )
}

export default Opportunities