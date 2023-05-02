import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';
import SelectedChef from './SelectedChef';

const Home = () => {

    const chef = useLoaderData();
    console.log(chef)

    return (
        <div className='row'>
            <div className="col-12 col-md-9">
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
            <div className="col-12 col-md-3">

            </div>

        </div>
    );
};

export default Home;