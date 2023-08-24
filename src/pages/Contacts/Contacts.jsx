import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Phonebook } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';
import { Loader } from 'components/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';

import { getIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import css from './Contacts.module.css';

export default function Contacts() {
  
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return ( 
    <section className={css.section}>
       <Helmet>
      <title>Phonebook</title>
      </Helmet>
      <Phonebook /> 
      <div>{isLoading && <Loader/>}</div>     
      <Filter/>
      <ContactList/>
    </section>
  );
}
