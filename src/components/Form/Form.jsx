import styles from "./Form.module.css";
import {nanoid} from "nanoid";
import { useState, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/contacts/contactsOperations';
import { getVisibleContacts} from '../../redux/contacts/contactsSelector'

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  
  const nameRandomId = nanoid();
  const numberRandomId = nanoid();

 const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts?.map((contact) => contact.name).includes(name)) {
      return alert(`${name} is already in contacts`);
    }
   dispatch(addContact({ name, number }));
   setName('');
   setNumber('');
  };

   const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
        case 'name':
          setName(value);
          return;
        case 'number':
          setNumber(value);
          return;
        default:
          return;
      }
  };
  
    return (
      <div>
        <form onSubmit={handleSubmit} className={styles.addForm}>
          <label className={styles.label} htmlFor={nameRandomId}>
            Name:
            <input
              onChange={handleChange}
              value={name}
              id={nameRandomId}
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label htmlFor={numberRandomId} className={styles.label}>
            Number:
            <input
              className={styles.input}
              value={number}
              id={numberRandomId}
              onChange={handleChange}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }

export default memo(Form);
