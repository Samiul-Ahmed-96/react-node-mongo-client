import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = (e) =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        console.log(name,email);

        

    }
    
    return (
        <Container>
            <Form onSubmit={handleAddUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    );
};

export default AddUser;