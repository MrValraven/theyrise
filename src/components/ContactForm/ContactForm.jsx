import ContactFormImage from '../../assets/contact-form-image3.jpg'
import Button from '../Button/Button';

import './ContactForm.scss';

const ContactForm = () => {
    return (
        <div className='contact-form'>
            <img src={ContactFormImage} alt="" />
            <div className="form-content">
                <h2>Talk to Us!</h2>
                <p>Do you know any other grant, course or award that we should share with the community?</p>
                <form>
                    <div className="name">
                        <label htmlFor="">
                            First Name
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            Last Name
                            <input type="text" />
                        </label>
                    </div>
                    <label htmlFor="">
                        Email
                        <input type="email" />
                    </label>
                    <label htmlFor="">
                        Message
                        <textarea name="" id=""></textarea>
                    </label>
                    <Button buttonText='Send message' />
                </form>
            </div>
        </div>
    )
}

export default ContactForm