import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import Container from '../Container/Container';
import css from './App.module.css';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";


const App=()=>{
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return(
    <>
    <Container>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <><b>Request in progress...</b><br/><br/></>}
      <Filter/>
      <ContactsList/>
    </Container>
    </>
  );
  
}

export default App;


