import React from 'react';
import user from '../../public/user.jpg'

const Header = () => {
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
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Blog</a>
                            </li>
                        </ul>
                        <span className="navbar-item">
                            <img style={{ height: '40px', width: '40px' }}  className='rounded-circle' src={user} alt="" />
                            <a href="" className='text-white text-decoration-none ms-5'>Login</a>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;