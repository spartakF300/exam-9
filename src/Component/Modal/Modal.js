import React, { useState } from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';
import {Link} from "react-router-dom";
import './Modal.css'
 const ModalContact = (props) => {
    return (
        <div>

            <Modal isOpen={props.modal} toggle={props.closed} >
                <div>
                    <div className="modal-wrap">
                        <img className="modal-img" src={props.contact.url} alt=""/>
                    </div>

                    <div className="list-info">
                        <p>{props.contact.name +' '+ props.contact.lastName}</p>
                        <p>{props.contact.phone}</p>
                        <p>{props.contact.email}</p>

                    </div>
                </div>


                <ModalFooter>

                    <Link to={'edit/'+ props.contact.id } color="primary" onClick={props.closed}>edit</Link>{' '}
                    <Button color="secondary" onClick={()=>props.remove(props.contact.id,props.history)}>delete</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalContact;