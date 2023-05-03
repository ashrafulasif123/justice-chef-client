import React, { useContext } from 'react';
import profile from '../../public/user.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    

    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            console.log('LogOut')    
        })
        .catch(error =>{

        }) 
    }
    return (

        
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Justic Chef</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active text-white" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Blog</a>
                            </li>
                        </ul>
                        <span className="navbar-item">
                            <img style={{ height: '40px', width: '40px' }} className='rounded-circle' src={profile} alt="" />
                            {user
                                ? <Link to="/login" onClick={handleLogOut} className='text-white text-decoration-none ms-5'>Logout</Link>
                                : <Link to="/login" className='text-white text-decoration-none ms-5'>Login</Link>
                            }


                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;