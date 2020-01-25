import React, {useEffect} from 'react';
import Form from "../../Component/Form/Form";
import {connect} from "react-redux";
import {modalClosed, postContact} from "../../store/action";
import Spinner from "../../Component/Ui/Spinner/Spinner";

const AddContact = (props) => {

    useEffect(()=>{
         props.closed()
    },[]);

    return (
        <div>
            <Form modal={props.modal}
                  closed={props.closed}
                  addContact={props.postContact}
                  history={props.history}
            />
        </div>
    );
};
const mapStateToProps = state => {
    return {
        modal: state.modal,

    };
};
const mapDispatchToProps = dispatch => {
    return {
        closed: () => dispatch(modalClosed()),
        postContact: (value, history) => dispatch(postContact(value, history))

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AddContact);