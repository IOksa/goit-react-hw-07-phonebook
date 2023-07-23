import PropTypes from 'prop-types';
import css from './ContactsListItem.module.css';
import { useDispatch } from "react-redux";
import {deleteContact} from '../../redux/contactsSlice';

const ContactsListItem = ({contact:{id, name, number}}) => {

    const dispatch = useDispatch();

    const handleDeleteContact = () => dispatch(deleteContact(id));

    return (
        <>
        <div className={css.contactListItem__contactThumb}>
            <p>{name}: </p>
            <p>{number}</p>
        </div>
        <button
        type="button"
        onClick={handleDeleteContact}
        className={css.contactListItem__button}
        >
        Delete
        </button>
        </>
    );                  
};

ContactsListItem.propTypes={
    contacts: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    ),

}; 

export default ContactsListItem;