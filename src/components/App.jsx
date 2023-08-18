import Phonebook from 'components/Phonebook/Phonebook';
import ContactList  from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors.js';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import css from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch]);


  return (
    <div>
    {error && <p> {error} </p>}

    {isLoading? ( <p className={css.loader}> Is loading... </p>
      ) : (
        <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          color: '#010101',
          flexDirection: "column",
        }}
      >
        <h1>Phonebook</h1>
        <Phonebook />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
      )}
    </div>
  );
};

export default App;