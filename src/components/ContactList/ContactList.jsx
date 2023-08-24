import { delContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';

import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {

  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(delContact(id));

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div>
      <ul className={css.list}>
        {visibleContacts.map((contact, id) => (
          <li className={css.listItem} key={id}>
            {contact.name}: {contact.number}
            <button className={css.deleteBtn}
              type="button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
