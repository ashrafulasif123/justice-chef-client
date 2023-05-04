import React, { useContext } from 'react';

import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';



const PrivateRoute = ({children}) => {

    const { user }  = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>
    

    
        
    
};

export default PrivateRoute;