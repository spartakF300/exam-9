import React from 'react';
import {CLOSE_MODAL, REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS, SHOW_CONTACT} from "./action";
const initialState ={
    Contacts:null,
    loading:false,
    contact:null,
    modal: false,
};
const reducer = (state= initialState,action) => {
    switch (action.type) {
        case REQUEST_SUCCESS :
            return {
                ...state,
                contacts: action.data,
                loading: false
            };
        case REQUEST_START:
            return {
                ...state,
                loading: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
              modal:!state.modal
            };
        case SHOW_CONTACT:
            const contact = {...action.contact.contact,id:action.contact.id};
return {
  ...state,
  contact,
    modal: !state.modal

};
        case REQUEST_ERROR :
            return {
              ...state,
              loading: false
            };
        default:return state
    }
};

export default reducer;
