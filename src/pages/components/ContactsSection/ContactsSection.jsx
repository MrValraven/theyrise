import ContactForm from '../../../components/ContactForm/ContactForm';
import './ContactsSection.scss';

const ContactsSection = () => {
    return (
        <section id='contacts' className='contacts-section'>
            <h1>Sharing is Caring</h1>
            <ContactForm />
        </section>
    )
}

export default ContactsSection