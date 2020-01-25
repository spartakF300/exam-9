import React, {useEffect, useState} from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalFooter, ModalHeader} from "reactstrap";
import './Form.css'
import { NavLink as BrowserLink } from "react-router-dom";
const Form = (props) => {
   const initialState ={
        name:'',
       lastName:'',
       phone:'',
       email:'',
       url:'',
    };
    const [value, setValue] = useState(initialState);
useEffect(()=>{
    if(props.id){
        setValue(props.contact)
    }
},[]);
const defaultImg = 'https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg';
    const changeHandler = (e)=>{
        setValue({...value,[e.target.name]: e.target.value })
    };
    return (
        <div>
        <Modal  isOpen={props.modal} modalTransition={{timeout: 700}} backdropTransition={{timeout: 1300}}
               toggle={props.closed}>
            <ModalHeader toggle={props.closed}>{props.id ? 'Edit contact': 'Add contact'}</ModalHeader>
            <div className="m-3">
            <FormGroup row className='d-flex align-items-center'>
                <Label className="pr-0" for="name" >Name</Label>

                    <Input defaultValue={value.name} onChange={changeHandler} type="text" placeholder="name" name="name" id="name" />

            </FormGroup>
            <FormGroup row className='d-flex align-items-center'>
                <Label className="pr-0" for="lastName" >LastName</Label>

                    <Input  defaultValue={value.lastName} onChange={changeHandler} placeholder="lastName" type="text" name="lastName" id="lastName"/>

            </FormGroup>
            <FormGroup row className='d-flex align-items-center'>
                <Label className="pr-0" for="phone" >Phone</Label>

                    <Input defaultValue={value.phone} onChange={changeHandler} placeholder="phone" type="text" name="phone" id="phone"/>

            </FormGroup>
            <FormGroup row className='d-flex align-items-center'>
                <Label className="pr-0" for="email" >Email</Label>

                    <Input defaultValue={value.email} onChange={changeHandler} placeholder="email" type="text" name="email" id="email"/>

            </FormGroup >
            <FormGroup row className='d-flex align-items-center'>
                <Label className="pr-0" for="url" >Url</Label>

                    <Input defaultValue={value.url} onChange={changeHandler} placeholder="url" type="text" name="url" id="url"/>

            </FormGroup>
                <div>
                    <h3>Photo preview</h3>
                    <div className="imgForm">
                        <img src={value.url ? value.url:defaultImg} alt=""/>
                    </div>
                </div>
            </div>
            <ModalFooter>
                <Button color="secondary" onClick={()=>props.addContact(value, props.history,props.id ? props.id:null)} >{props.id ?'Save':'Create contact'}</Button>
                <Button tag={} to="/" className="bg-info" onClick={props.closed} >Back to contacts</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
};

export default Form;
