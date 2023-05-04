import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const ChefRecipes = () => {

    const chef = useLoaderData();
    const { chefPicture, chefName, description, numberOfRecipes, yearsOfExperience, recipeName, ingredients, methodOfCooking } = chef;
    const handleToast = () =>{
        toast('Your favourite recipes is selected')
    }
    return (
        <div className='text-center'>
            <img className='w-75 mt-3' style={{ height: '400px' }} src={chefPicture} alt="" />
            <div className=''>
                <p className='text-center fw-bolder fs-3 my-2'>{chefName}</p>
                <p className='fs-5'><span className='fw-semibold'>Year of Experience:</span>  {yearsOfExperience}</p>
                <p>Number of Recipes: {numberOfRecipes}</p>
                <p className='my-2'>Like</p>
                <div className="row">
                    {recipeName.map(r =>
                        <div className='col-12 col-md-4 '>
                            <div  style={{ height: '350px' }} className='border border-secondary rounded p-3'>
                                <p className='fs-5 my-3'><span className='fw-bold'>Recipes Name:</span> {r}</p>
                                <p className='my-2'> <span className='fw-bold'>Ingredients</span>  {ingredients.map(i => <span>{i}</span>)}</p>
                                <p><span className='fw-bold'>Cooking Method: </span> {methodOfCooking}</p>
                                <p>Rating: <span><FaStar /> <FaStar /> <FaStar /> <FaStar /></span></p>
                                <button onClick={handleToast} className='btn btn-warning w-75 mt-4'>Favourite</button>
                                <ToastContainer />
                            </div>

                        </div>
                    )}
                   
                </div>

            </div>

        </div>
    );
};

export default ChefRecipes;