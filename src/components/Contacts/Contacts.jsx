import { memo } from 'react';
import { removeContact } from '../../redux/contacts/contactsOperations';
import { useDispatch, useSelector } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/contactsSelector";
import ContactsItem from './ContactsItem';

const Contacts = () => {
  const dispatch = useDispatch();
  const visiblesContacts = useSelector(getVisibleContacts);
  const removeContacts = (id) => dispatch(removeContact(id));

  const elements = visiblesContacts.map(({ id, ...item}) => (
    <ContactsItem
      key={id}
      {...item}
      id={id}
      onDelete={removeContacts}
    />
  ));
  return <ul>{elements}</ul>;
};

export default memo(Contacts);
