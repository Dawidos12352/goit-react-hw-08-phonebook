import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations.js';
import { selectContacts } from '../../redux/selectors.js';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleContactData = event => {
    switch (event.target.name) {
      case "name" :
        setName(event.target.value);
        break;
      case "number" :
        setNumber(event.target.value);
        break;
      default :
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
  
    const isContactRepeat = contacts.find(event => event.name === name);

    if (isContactRepeat) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContact(contact));
    event.target.reset();
  };
  return (
    <form className={css.formContact} onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        className={css.inputName}
        type="text"
        name="name"
        value={name}
        onChange={handleContactData}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <h3>Number</h3>
      <input
        className={css.inputName}
        type="tel"
        name="number"
        value={number}
        onChange={handleContactData}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.formBtn} type="submit"> Add contact </button>
    </form>
  );
};

export default Phonebook;