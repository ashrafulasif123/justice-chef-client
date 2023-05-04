import {useLoaderData } from 'react-router-dom';
import SelectedChef from './SelectedChef';

const Home = () => {
    
    const chef = useLoaderData();
   
    return (
        <>
            <div>
                <div className='row'>
                    <div className="col-12 col-md-12">
                        <div className="row">
                            {
                                chef.map(c => (
                                    <div key={c.id} className="col-12 col-md-6">
                                        <SelectedChef c={c}></SelectedChef>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-2 mt-3">
                        
                    </div>

                </div>
            </div>

        </>

    );
};

export default Home;