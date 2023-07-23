import ContactsListItem from '../ContactsListItem/ContactsListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {getContactsState, getFilterState} from '../../redux/selectors';

const ContactsList = ()=>{

    const stateContacts=useSelector(getContactsState);
    const stateFilter=useSelector(getFilterState);

    const getVisibleContacts = () => {
      const normalizedFilter = stateFilter.toLowerCase();

      return stateContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    };
  
   const visibleContacts = getVisibleContacts();


    return (
        <>
        <h2 className={css.contactList__title}>Contacts</h2>
        <ul className={css.contactList__list}>
            {visibleContacts.map(contact=>(
                <li key={contact.id} className={css.contactList__item}>
                    <ContactsListItem contact={contact}/>
                </li>
            
            ))}
        </ul>
        </>
    )
};

export default ContactsList;
 