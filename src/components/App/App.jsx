import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import Container from '../Container/Container';
import css from './App.module.css';



const App=()=>{

  return(
    <>
    <Container>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm />
      <Filter/>
      <ContactsList/>
    </Container>
    </>
  );
  
}

export default App;


