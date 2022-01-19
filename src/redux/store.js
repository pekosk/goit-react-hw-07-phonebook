import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";
import filterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
});

export default store;