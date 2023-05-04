import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import './style.css'
import ActiveLink from './ActiveLink';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log('LogOut')
            })
            .catch(error => {

            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
            <Container>
                <Navbar.Brand className='me-3' href="">Justic Chef</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" >
                        <ActiveLink to='/' >Home</ActiveLink>
                        <span className='ms-lg-3 ms-0 header-blog'>
                        <ActiveLink to='/blog' className='header-blog '>blog</ActiveLink>
                        </span>
                        
                    </Nav>
                    <Nav>
                        {user && <img className='header-img rounded-circle me-3' src={user.photoURL} alt="" />}
                        {
                            user
                                ? <Link onClick={handleLogOut} to='/login'>Logout</Link>
                                : <ActiveLink to='/login'>Login</ActiveLink>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;