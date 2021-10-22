import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <Container>
            <h1>Users</h1>
            <ul>
                {
                    users.map(user => <li key={user._id}>Name : {user.name} Email : {user.email} 
                                            <button>Update</button>
                                            <button>X</button>
                                      </li> )
                }
            </ul>
        </Container>
    );
};

export default Users;