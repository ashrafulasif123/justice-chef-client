import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const ChefRecipes = () => {


    const chef = useLoaderData();
    console.log(chef)
    const { chefPicture, chefName, description, numberOfRecipes, yearsOfExperience, recipeName, id } = chef;
    const [recipe, setRecipe] = useState(recipeName) 
    const handleToast = (name) => {
        toast('The Recipe is your favourite')
        const restRecipe = recipe.filter(rc => rc.name !== name)
        console.log(restRecipe)
        // setRecipe(restRecipe)
    }

    return (
        <div className='text-center recipe-background pb-5'>
            <img className='w-75 mt-3' style={{ height: '400px' }} src={chefPicture} alt="" />
            <div className=''>
                <p className='text-center fw-bolder fs-3 my-2'>{chefName}</p>
                <p className='fs-5'><span className='fw-semibold'>Year of Experience:</span>  {yearsOfExperience}</p>
                <p>Number of Recipes: {numberOfRecipes}</p>
                <p className='my-2'><FontAwesomeIcon icon={faThumbsUp} /> 4500 </p>
                <div className="row">
                    {recipe.map(r =>
                        <div className='col-12 col-md-4 '>
                            <div style={{ height: '' }} className='border border-secondary rounded p-3'>
                                <p className='mb-3 lead'>{r.name}</p>
                                <img style={{ height: '250px' }} className='w-100' src={r.img} alt="" />
                                <p className='my-2'> <span className='fw-bold'>Ingredients</span>  {r.ingredients[0]}, {r.ingredients[1]}, {r.ingredients[2]}, {r.ingredients[3]}, {r.ingredients[4]}, {r.ingredients[5]}</p>
                                <p><span className='fw-bold'>Method Of Cooking</span> {r.method[0]}</p>
                                <p className='my-2'>Rating: <FontAwesomeIcon icon={faStar} /> , <FontAwesomeIcon icon={faStar} /> , <FontAwesomeIcon icon={faStar} /> , <FontAwesomeIcon icon={faStar} /> </p>
                                <button onClick={() => handleToast(r.name)} className='btn btn-warning mt-2'>Favorite Recipe</button>
                            </div>

                        </div>
                    )}

                </div>
                <ToastContainer />

            </div>

        </div>
    );
};

export default ChefRecipes;