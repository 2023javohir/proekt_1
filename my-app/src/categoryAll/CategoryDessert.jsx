
import React ,{useState,useEffect} from 'react';
import { categoryDessert } from '../Api'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


function CategoryDessert(props) {
    const [dessert, setDessert] = useState([]);
useEffect(() => {
  categoryDessert().then(data => setDessert(data.meals))
}, []);

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div className='w-full'>
      <h1 className='text-3xl py-4'>Dessert</h1>
        <Carousel responsive={responsive} itemAriaLabel='false' className='w-full grid grid-cols-4 gap-3'>
          
                {dessert.length ? (
                    dessert.map(item => (
                       
                        <Link to={`/filterId/${item.idMeal}`} key={item.idMeal} num={item.ideal} className='border-2 shadow'>
                            <img className='w-full object-cover' src={item.strMealThumb} alt={item.strMeal} />

                        </Link>
                        
                    ))
                ) : ('Loader...')}

    </Carousel>
        
        </div> 
  );
}

export default CategoryDessert;
