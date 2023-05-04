import { useLoaderData } from 'react-router-dom';
import SelectedChef from './SelectedChef';
import { Carousel } from 'react-bootstrap';
import './style.css'

const Home = () => {

    const chef = useLoaderData();

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-home"
                        src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-dark fw-bold'>Cooking is very well</h3>
                        <p className='text-dark fw-bold'>Cooking method is well</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-home"
                        src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-white fw-bold'>Egg dishes</h3>
                        <p className='text-white fw-bold'>Here cooking method is very well</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-home"
                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark fw-bold'>Here is good dishes</h3>
                        <p className='text-dark fw-bold'>
                            Nice Cooked
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
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
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className='border border-secondary mt-3'>
                        <h3 className='text-center my-3'>Gordon Ramsay</h3>
                        <p className='px-3 pb-3'>Gordon Ramsay is a British chef, restaurateur, and television personality who has made a name for himself in the culinary world with his impressive cooking skills and often harsh critiques. He was born in Scotland in 1966 and began his culinary career at a young age, training under some of the most renowned chefs in the world, including Marco Pierre White and Guy Savoy.</p>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className='border border-secondary mt-3'>
                        <h3 className='text-center my-3'>Dominique Crenn</h3>
                        <p className='px-3 pb-3'>Dominique Crenn is a French-born chef who has made a name for herself in the United States with her innovative and sustainable approach to cooking. She was the first woman in the United States to earn three Michelin stars, which she achieved for her San Francisco restaurant Atelier Crenn in 2018.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;