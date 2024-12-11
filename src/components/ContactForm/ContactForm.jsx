import ContactFormImage from '../../assets/contactus.svg'
import InstagramIcon from '../../assets/instagram.svg'
import Button from '../Button/Button';

import './ContactForm.scss';

const ContactForm = () => {
    return (
        <div className='contact-form'>
            <div className="contact-info">
                <h2>Talk to Us!</h2>
                <p>Do you know any other grant, course or award that we should share with the community?</p>
                <div className="social-media-icons">
                    <div className='icon-container'>
                        <a href='https://www.instagram.com/mrvalraven/' target="_blank" rel="noopener noreferrer" className="instagram">
                            <img src={InstagramIcon} alt="Instagram Icon" />
                        </a>
                    </div>
                </div>
                <img src={ContactFormImage} alt="" />
            </div>
            <div className="form-content">
                <form>
                    <div className="name">
                        <label htmlFor="">
                            First Name
                            <input type="text" placeholder='John' />
                        </label>
                        <label htmlFor="">
                            Last Name
                            <input type="text" placeholder='Doe' />
                        </label>
                    </div>
                    <label htmlFor="">
                        Email
                        <input type="email" placeholder='johndoe@email.com' />
                    </label>
                    <label htmlFor="">
                        Message
                        <textarea name="" id="" placeholder='Your message'></textarea>
                    </label>
                    <Button buttonText='Send message' />
                </form>
            </div>
        </div>
    )
}

export default ContactForm