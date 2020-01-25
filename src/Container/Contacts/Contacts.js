import React, {Component} from 'react';
import Contact from "../../Component/Contact/Contact";
import {connect} from "react-redux";
import {getContacts, modalClosed, remove, showContact} from "../../store/action";
import ModalContact from "../../Component/Modal/Modal";
import Spinner from "../../Component/Ui/Spinner/Spinner";

class Contacts extends Component {
    componentDidMount() {
        this.props.getContacts()
    }

    render() {
       if(this.props.loading){
           return <Spinner/>
       }
        return (
            <div>
                {this.props.contacts && Object.keys(this.props.contacts).map((key) => {
                    return (
                        <Contact
                            show={() => {
                                this.props.showContact(this.props.contacts[key], key)
                            }}
                            key={key}
                            name={this.props.contacts[key].name}
                            lastName={this.props.contacts[key].lastName}
                            url={this.props.contacts[key].url}
                        />
                    )
                })}

                {this.props.contact && <ModalContact
                    closed={this.props.closedModal}
                    modal={this.props.modal}
                    contact={this.props.contact}
                    history={this.props.history}
                    remove={this.props.remove}
                />}


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        contact: state.contact,
        modal: state.modal,
        loading:state.loading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getContacts: () => dispatch(getContacts()),
        showContact: (contact, id) => dispatch(showContact({contact, id})),
        closedModal: () => dispatch(modalClosed()),
        remove: (id, history) => dispatch(remove(id, history))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);