import Header from '../../components/Header/Header'
import OpportunitiesData from '../../static/dummy-data.json'
import OpportunityListing from './components/OpportunityListing/OpportunityListing'
import Searchbar from './components/Searchbar/Searchbar'

import { useEffect, useState, useCallback } from 'react'
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
    const [tagFilter, setTagFilter] = useState("");
    const [opportunities, setOpportunities] = useState([]);
    const UrlQuery = useQuery();
    const navigate = useNavigate();
    const location = useLocation();

    const filterOpportunityData = useCallback((arrayOfOpportunities) => {
        const filteredArray = arrayOfOpportunities.filter(opportunity => {
            const matchesArea = areaFilter
                ? opportunity.area && opportunity.area.toLowerCase() === areaFilter.toLowerCase()
                : true;

            const tagFilterFromURL = opportunity.tags.some((tag => tag === tagFilter.toLowerCase())) ?? true;
            console.log(tagFilterFromURL)
            console.log(tagFilter)
            console.log(opportunity.tags)

            const matchesFilters = filters
                ? opportunity.tags.some(tag => tag.toLowerCase().includes(filters.toLowerCase())) ||
                opportunity.name.toLowerCase().includes(filters.toLowerCase())
                : true;

            return matchesArea && tagFilterFromURL && matchesFilters;
        })

        return filteredArray
    }, [areaFilter, filters, tagFilter])

    const resetAreaFilter = () => {
        setAreaFilter("");
        setTagFilter("");
        navigate(location.pathname, { replace: true });
    }

    useEffect(() => {
        if (filters || areaFilter || tagFilter) {
            setOpportunities(() => filterOpportunityData(OpportunitiesData));
        }
        else setOpportunities(OpportunitiesData)

    }, [filters, areaFilter, tagFilter, filterOpportunityData])


    useEffect(() => {
        const area = UrlQuery.get('area');
        const tag = UrlQuery.get('tag');
        if (area) {
            setAreaFilter(area)
        }

        if (tag) {
            setTagFilter(tag);
        }
    }, [UrlQuery])




    return (
        <div className='opportunities'>
            <Header />
            <h1>Opportunities
                {areaFilter ? <Button buttonText='Reset url filters' buttonStyle={'secondary'} clickEvent={resetAreaFilter} /> : null}
            </h1>
            <Searchbar setFilterParameters={setFilters} filterParameters={filters} />
            <div className="opportunities-container">
                {opportunities.length ? opportunities.map(opportunity =>
                    <OpportunityListing
                        key={opportunity.id}
                        title={opportunity.name}
                        description={opportunity.description}
                        type={opportunity.type}
                        tags={opportunity.tags}
                        area={opportunity.area}
                        link={opportunity.link}
                    />
                ) :
                    <div>No opportunities listed with the following filters</div>
                }
            </div>
        </div>
    )
}

export default Opportunities