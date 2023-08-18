
import { deleteContact } from "redux/operations";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";


const Contact = ({contact}) => {

    const dispatch = useDispatch();

    return(
        <li  key={contact.id} className={css.contact}>
          {contact.name}: {contact.number}
          <button 
          className={css.deleteBtn} 
          type="button" 
          onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>

        </li>
    )
};

export default Contact;