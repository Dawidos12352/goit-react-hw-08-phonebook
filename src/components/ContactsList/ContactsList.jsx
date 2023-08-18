import Contact from 'components/Contact/Contact';
import { useSelector} from 'react-redux';
import { selectAddedContacts } from 'redux/selectors.js';


const ContactList = () => {
  const addedContacts = useSelector(selectAddedContacts);
  
  return (
    <ul >
      {addedContacts.map(contact => (
        <Contact key={contact.id} contact={contact}/>
      ))}
    </ul>
  );
};

export default ContactList;