import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { AuthContext } from './AuthProvider';

const auth = getAuth(app);




const Register = () => {
    const [success, setSuccess] = useState('');
    const [result, setResult] = useState('')

    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.passowrd.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('You Have Successfully Registered');
                updateUserDate(result.user, name, photo)
            })
            .catch(error => {
                // console.log(error)
            })
       


    }
    const updateUserDate = (user, name, photo) =>{
        updateProfile(user, {
            displayName:name, photoURL: photo
        })
        .then(() => {
            // console.log('userName Updated')
        })
        .catch(error =>{
            console.log(error)
        })
    } 
    return (
        <div onSubmit={handleRegister}>
            <h1 className='text-center mt-4'>Please Register</h1>
            <h4 className='text-center text-success mt-3'>{success}</h4>
            <Form className='w-75 mx-auto'>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='passowrd' placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formPhotoUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo URL" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center'><small>If You are already registered <Link to='/login'>Login</Link> </small></p>
        </div>
    );
};

export default Register;