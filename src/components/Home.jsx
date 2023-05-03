import React, { useContext } from 'react';
import { Link, useActionData, useLoaderData } from 'react-router-dom';
import SelectedChef from './SelectedChef';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from './AuthProvider';

const Home = () => {
    const {logInWithGoogle} = useContext(AuthContext)
    const chef = useLoaderData();
    const handleGoogleSignIn = () =>{
        logInWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
    }


    return (
        <>
            <div>
                <div className='row'>
                    <div className="col-12 col-md-10">
                        <div className="row">
                            {
                                chef.map(c => (
                                    <div className="col-12 col-md-6">
                                        <SelectedChef key={c.id} c={c}></SelectedChef>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-2 mt-3">
                        <button onClick={handleGoogleSignIn} className='btn btn-outline-primary'> <FaGoogle /> Sign In With Google</button>
                        <button className='btn btn-outline-success mt-2'> <FaGithub /> Sign In With Github</button>
                    </div>

                </div>
            </div>

        </>

    );
};

export default Home;