import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import "./Button.scss";

const Button = ({ buttonText, disabled, url, buttonStyle, clickEvent }) => {
    const navigate = useNavigate();

    const navigateToOtherPage = () => {
        if (url) {
            navigate(url);
        }
    };

    return (
        <button
            disabled={disabled}
            className={`button ${buttonStyle}`}
            onClick={url ? navigateToOtherPage : clickEvent}
        >
            {buttonText}
        </button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    url: PropTypes.string,
    buttonStyle: PropTypes.string,
    clickEvent: PropTypes.func,
}

export default Button;