import React, { useEffect, useState } from 'react';
import { randomMeals } from '../../Api';
import Loader from '../Loader';
import Categories from '../../category/categories'




import MainList from './MainList';

function Main(props) {
    const [randomMeal, setRandomMeal] = useState([]);
    const{strMealThumb, strMeal, strInstructions} = props;

    useEffect(() => {
        randomMeals().then(data => setRandomMeal(data.meals));

    }, []);
    // console.log(randomMeal);

    return (
        <div className="w-full h-[520px]  bg-slate-400 ">
            {!randomMeal.length ? <Loader /> :
          <MainList randomMeal={randomMeal} />}
            <Categories />
            
            
        </div>
    );
}

export default Main;