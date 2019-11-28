import React, { Component, useState ,useEffect,useContext} from 'react';

import {InputGroup,Button, FormLabel,Col,FormGroup,Tabs,Tab} from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import Form, { FormRow } from 'react-bootstrap/Form'
import './register.css'

function Register(){

    const [user,setUser]=useState({});

    let createUser=()=>{
        console.log(user);
    }

    let userDefault={...user};
    let handelChange=(e)=>{
        e.persist();
        userDefault[e.target.name]=e.target.value;
        setUser(userDefault);
       // console.log(user)
    }



var view= <div className="container-fluid " >

<div className="row">
    <div className="col-sm-2" >
        <div className="manageUserMenu">

        </div>
    </div>
    {/* End of col 2 */}
    <div className="col-sm-10 text-left">

    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    <Tab eventKey="home" title="User Entry">
    <Form>
        <Form.Row>
            <FormGroup as={Col} controlId="formGridName">
                <FormLabel>Name</FormLabel>
                <FormControl type="text" placeholder="Enter Name" value={user.name} name="name" onChange={handelChange}/>
            </FormGroup>
            <FormGroup as={Col} controlId="formGridEmail">
                <FormLabel>Email</FormLabel>
                <FormControl type="email" value={user.email} name="email" placeholder="Enter email" onChange={handelChange}/>
            </FormGroup>
            <FormGroup as={Col} controlId="formGridEmail">
                <FormLabel>Phone No</FormLabel>
                <FormControl type="text" value={user.phone} name="phone" placeholder="Enter Phone Number" onChange={handelChange}/>
            </FormGroup>
         
        </Form.Row>
        <div className="text-right">
        <Button variant="primary" type="button" onClick={createUser}>
            Submit
        </Button>
        </div>

        </Form>
    </Tab>
    {/* End of tab 1st */}

    <Tab eventKey="profile" title="Group Entry">
    <Form.Row>
    <FormGroup as={Col} controlId="formGridName">
        <FormLabel>Group Name</FormLabel>
        <FormControl type="text" placeholder="Enter Name" name="name" />
    </FormGroup>

    <FormGroup as={Col} controlId="formGridName">
        <FormLabel>Select User</FormLabel>
        <Form.Control as="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </Form.Control>
    </FormGroup>

    </Form.Row>

    </Tab>
    {/* End of 2nd tab */}
    </Tabs>
        
       
    </div>
    {/* End of col-10 */}
</div>
{/* End of row */}

   
</div>
// End of container-fluid



    return(
       <>
       {view}
       </>
    )
}

export default Register;