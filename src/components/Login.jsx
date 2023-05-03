import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { logIn } = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('You have Successfully Login')
            })
            .catch(error =>{
                setError(error)
            })
    }


    return (
        <div>
            <h1 className='text-center mt-4'>Please Login</h1>
            <h4 className='text-center text-success'>{success}</h4>
            <Form onSubmit={handleSignIn} className='w-75 mx-auto border border-secondary rounded p-3 mt-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='mt-2' name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='mt-2' type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center'><small>If You are new Please <Link to='/register'>Register</Link> </small></p>
        </div>
    );
};

export default Login;