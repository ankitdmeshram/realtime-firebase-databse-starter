//TODO: create contact using all actions

import {
  SET_CONTACT,
  SET_LOADING,
  CONTACT_TO_UPDATE,
  SET_SINGLE_CONTACT
} from "./action.types";

//TODO: use switch case

export default (state, action) => {
  switch (action.type) {
    case SET_CONTACT:
        return action.payload == null ? {...state, contacts:[]} 
        : {...state, contacts: action.payload}
    case SET_LOADING:
        return 
    default:
      break;
  }
}