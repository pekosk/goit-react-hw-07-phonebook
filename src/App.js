import './App.module.css';
import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getContacts } from "./redux/contacts/contactsOperations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts())
  }, []);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export default App;
