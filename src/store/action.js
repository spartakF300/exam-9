import {axiosContact} from '../axiosContact'


export const REQUEST_START = 'REQUEST_START';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const SHOW_CONTACT = 'SHOW_CONTACT';
export const request = ()=>{
    return{type:REQUEST_START}
};
export const requestSuccess = (data)=>{
    return{type:REQUEST_SUCCESS,data}
};
export const requestError = (error)=>{
    return{type:REQUEST_ERROR,error }
};

export const getContacts = ()=>{
    return (dispatch)=> {
        dispatch(request());
        axiosContact.get('contacts/.json').then(res => {
            dispatch(requestSuccess(res.data))
        }, error => {
            dispatch(requestError(error))
        })
    }
};
export const postContact = (contact,history)=>{
    return (dispatch)=> {
        dispatch(modalClosed());
        dispatch(request());
        axiosContact.post('contacts/.json',contact).then(res => {
            dispatch(getContacts());
            history.push('/')
        }, error => {
            dispatch(requestError(error))
        })
    }
};
export const modalClosed = () => {
    return {type: CLOSE_MODAL}
};
export const editContact = (contact, history,id)=>{
    return (dispatch)=> {
        dispatch(request());
        axiosContact.put(`contacts/${id}.json`,contact).then(res => {
            dispatch(getContacts());
            dispatch(modalClosed());
            history.push('/');
        }, error => {
            dispatch(requestError(error))
        })
    }
};
export const remove = (id,history)=>{
    return (dispatch)=> {
        dispatch(request());
        axiosContact.delete(`contacts/${id}.json`).then(res => {
            dispatch(getContacts());
            dispatch(modalClosed());
            history.push('/');
        }, error => {
            dispatch(requestError(error))
        })
    }
};
export const showContact = (contact) => {
    return {type: SHOW_CONTACT, contact}
};