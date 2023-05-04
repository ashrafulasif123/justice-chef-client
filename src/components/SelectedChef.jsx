import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import LazyLoad from 'react-lazy-load';

const SelectedChef = ({c}) => {

    const {chefName, id, chefPicture, numberOfRecipes, yearsOfExperience} = c;
    
    return (
        <div className='mt-3 border border-secondary p-2 rounded text-center'>
             <LazyLoad height={250}>
             <img className='img-fluid w-100 rounded' style={{ height: '250px' }} src={chefPicture}  alt="" />
    </LazyLoad>
            
            {/* <img className='img-fluid w-100 rounded' style={{ height: '250px' }} src={chefPicture}  alt="" /> */}

            <p className='text-center fw-bolder fs-3 my-2'>{chefName}</p>
            <p className='fs-5'><span className='fw-semibold'>Year of Experience:</span>  {yearsOfExperience}</p>
            <p>Number of Recipes: {numberOfRecipes}</p>
            <p className='my-2'>Like</p>
            <Link to={`/chefrecipe/${id}`}><button className='btn btn-secondary'>View Recipes Button</button></Link>
        </div>
    );
};

export default SelectedChef;