import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";
import { combineReducers } from "redux";

// ES6 => user: user, contacts: contacts
export default combineReducers({
  user,
  contacts,
  messages,
  typing,
  activeUserId,
})