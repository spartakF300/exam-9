import React, {useEffect} from 'react';
import {editContact, getContacts, modalClosed} from "../../store/action";
import {connect} from "react-redux";
import Form from "../../Component/Form/Form";

const Edit = (props) => {
    useEffect(()=>{
        props.closedModal()

    },[]);
    return (
        <div>
            <Form
                addContact={props.editContact}
                history={props.history}
                id={props.match.params.id}
                contact={props.contact}
                modal={props.modal}
                closed={props.closedModal}
            />
        </div>
    );
};
const mapStateToProps = state => {
    return {
        contact: state.contact,
        modal: state.modal
    };
};
const mapDispatchToProps = dispatch => {
    return {

        editContact: (contact, history, id) => dispatch(editContact(contact, history, id)),
        closedModal:()=>dispatch(modalClosed()),
        getContacts: () => dispatch(getContacts())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);