import React,{useState, useEffect} from 'react';
import { categoryLamb } from '../Api'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


function CategoryLamb(props) {
    const [lamb, setLamb] = useState([]);
    useEffect(() => {
        categoryLamb().then(data => setLamb(data.meals))
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
    <h1 className='text-3xl py-4'>Lamb</h1>
      <Carousel responsive={responsive} itemAriaLabel='false'  className='w-full grid grid-cols-4 gap-3'>
        
              {lamb.length ? (
                  lamb.map(item => (
                     
                    <Link to={`/filterId/${item.idMeal}`} key={item.idMeal} num={item.ideal} className='border-2 shadow'>
                          <img className='w-full object-cover' src={item.strMealThumb} alt={item.strMeal} />

                      </Link>
                      
                  ))
              ) : ('Loader...')}

  </Carousel>
      
      </div> 
  );
}

export default CategoryLamb;
