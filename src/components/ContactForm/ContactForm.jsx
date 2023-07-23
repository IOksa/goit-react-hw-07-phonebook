import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {addContact} from '../../redux/contactsSlice';
import {getContactsState} from '../../redux/selectors';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();
    const stateContacts=useSelector(getContactsState);

    const handleChange = evt => {
        const { name, value } = evt.target;
    
        switch (name) {
          case 'name':
            setName(value);
            break;
    
          case 'number':
            setNumber(value);
            break;
    
          default:
            console.warn(`Тип поля name - ${name} не обрабатывается`);
        }
      };


    
    const handleSubmit = e => {
        e.preventDefault();

        addContacts(name, number);

        setName('');
        setNumber('');
    };
 

    const addContacts = (name, number)=> {  
        const normalizedName = name.toLowerCase();
        
        const isInContacts=stateContacts.findIndex(({name})=>name.toLowerCase()===normalizedName );
    
        if(isInContacts!==-1){
          toast.error(`${name} is already in contacts`);
        }
        else{
          const newContact={
            name:name,
            number:number,
          }
          dispatch(addContact(newContact));
        }
       
    
      };
   
    return(
      <>
        <form onSubmit={handleSubmit} className={css.phonebook__formContact}>
            <label className={css.phonebook__formContactLabel}>Name</label>
            <input
                type="name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
                className={css.phonebook__formContactInput}
                />
            
            <label className={css.phonebook__formContactLabel}>Number</label>
            <input
                type="tel"
                name="number"
                pattern="^[0-9]+$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
                className={css.phonebook__formContactInput}
                />
            
            <button type="submit" className={css.form__button}>
            Add contact
            </button>
        </form>
        <ToastContainer autoClose="3000" theme="colored"/>
        </>
    
    );


    
}

export default ContactForm;