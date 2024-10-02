import Header from '../../components/Header/Header'
import OpportunitiesData from '../../static/dummy-data.json'
import OpportunityListing from './components/OpportunityListing/OpportunityListing'
import Searchbar from './components/Searchbar/Searchbar'

import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import './Opportunities.scss'
import Button from '../../components/Button/Button'

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

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Opportunities = () => {
    const [filters, setFilters] = useState("");
    const [areaFilter, setAreaFilter] = useState("");
    const [opportunities, setOpportunities] = useState([]);
    const UrlQuery = useQuery();
    const navigate = useNavigate();
    const location = useLocation();

    const filterOpportunityData = (arrayOfOpportunities) => {
        const filteredArray = arrayOfOpportunities.filter(opportunity => {
            const matchesArea = areaFilter
                ? opportunity.area && opportunity.area.toLowerCase() === areaFilter.toLowerCase()
                : true;

            const matchesFilters = filters
                ? opportunity.tags.some(tag => tag.toLowerCase().includes(filters.toLowerCase())) ||
                opportunity.name.toLowerCase().includes(filters.toLowerCase())
                : true;

            return matchesArea && matchesFilters;
        })

        return filteredArray
    }

    const resetAreaFilter = () => {
        setAreaFilter("");
        navigate(location.pathname, { replace: true });
    }

    useEffect(() => {
        if (filters || areaFilter) {
            setOpportunities(() => filterOpportunityData(OpportunitiesData));
        }
        else setOpportunities(OpportunitiesData)

    }, [filters, areaFilter])


    useEffect(() => {
        const area = UrlQuery.get('area');
        console.log()
        if (area) {
            setAreaFilter(area)
        }
    }, [UrlQuery])




    return (
        <div className='opportunities'>
            <Header />
            <h1>Opportunities
                <Button buttonText='Reset area filter' buttonStyle={'secondary'} clickEvent={resetAreaFilter} />
            </h1>
            <Searchbar setFilterParameters={setFilters} filterParameters={filters} />
            <div className="opportunities-container">
                {opportunities.map(opportunity =>
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