import "./Searchbar.scss";
import PropTypes from "prop-types";

const Searchbar = ({ filterParameters, setFilterParameters }) => {
    const handleChange = (e) => {
        console.log('evcent', e.target.value)
        setFilterParameters(e.target.value);
    };

    return (
        <>
            <div className="searchbar">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Search by name or tag"
                        value={filterParameters}
                        onChange={handleChange}
                    />
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </>
    );
};

Searchbar.propTypes = {
    filterParameters: PropTypes.string,
    setFilterParameters: PropTypes.func.isRequired,
}
export default Searchbar;