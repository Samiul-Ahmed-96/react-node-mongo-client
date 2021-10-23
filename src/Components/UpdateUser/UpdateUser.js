import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user,setUser] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <Container>
                <h2>Update {user.name}</h2>
                <p>{id}</p>
            </Container>
        </div>
    );
};

export default UpdateUser;