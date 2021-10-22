import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef= useRef();

    const handleAddUser =(e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = {name,email};
        console.log(name,email,newUser);

        fetch('http://localhost:5000/users',{
            method : 'post',
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('user added successfully');
                e.target.reset();
            }
        })
    }
    return (
        <div>
            <Container>          
                <h2>This is add user</h2>
                <form onSubmit={handleAddUser}>
                    <input type="text" ref={nameRef} placeholder="Name" />
                    <input type="email" ref={emailRef} name="email" placeholder="email" id="" />
                    <input type="submit" value="Submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddUser;