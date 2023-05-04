import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const { logIn, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    console.log('Login page Location', location)
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset();
        setSuccess('')
        setError('')
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setSuccess('You have Successfully Login')
                navigate(from)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        logInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
            })
    }
    const handleGithubSignIn = () => {
        logInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
    }
    return (
        <div>
            <h1 className='text-center mt-4'>Please Login</h1>
            <h4 className='text-center text-success'>{success}</h4>
            <h4 className='text-center text-danger'>{error}</h4>
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
            <div className='text-center my-4'>
                <button onClick={handleGoogleSignIn} className='btn btn-outline-primary me-2'> <FaGoogle /> Sign In With Google</button>
                <button onClick={handleGithubSignIn} className='btn btn-outline-success'> <FaGithub /> Sign In With Github</button>
            </div>

            <p className='text-center'><small>If You are new Please <Link to='/register'>Register</Link> </small></p>
        </div>

    );
};

export default Login;