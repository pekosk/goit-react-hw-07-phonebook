import axios from "axios";

axios.defaults.baseURL = 'https://61e7e239e32cd90017acbe3c.mockapi.io';

const path = {
    CONTACTS: '/contacts'
}

export const addContactApi = async (contact) => {
    try {
        const { data } = await axios.post(path.CONTACTS, contact);
        return data;
    } catch (error) {
        throw error.message;
    }
};

export const getContactsApi = async () => {
    try {
        const { data } = await axios.get(path.CONTACTS);
        return data;
    } catch (error) {
        throw error.message;
    }
};

export const removeContactApi = async (id) => {
    try {
        await axios.delete(path.CONTACTS + '/' + id);
        return id;
    } catch (error) {
        throw error.message
    }
};