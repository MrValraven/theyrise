import "./Footer.scss";

const todaysDate = new Date();

const Footer = () => {
    return (
        <footer>
            <span>©{todaysDate.getFullYear()} TheyRise</span>
            <div className="logo">
                <img src="" alt="" />
                <strong>TheyRise</strong>
            </div>
        </footer>
    );
};

export default Footer;