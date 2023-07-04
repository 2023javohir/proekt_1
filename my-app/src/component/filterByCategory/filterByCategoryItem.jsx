import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Search from '../../Search/Search';

function FilterByCategoryItem  ({food=[]}) {
const[search , setSearch] = useState('');


    return (
        <div className='w-full px-10 lg:px-20 py-7  mt-20'>
            <Search setSearch={setSearch} />
            <div className='w-full mt-4 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            {food.filter(el => {
                return search.toLowerCase() === '' ? el : el.strMeal.toLowerCase().includes(search); 
            }).map( el => (
                <div key={el.idMeal} className=' bg-gray-100 rounded-lg pb-2 shadow-md' >
                    <img className="w-full h-auto object-cover rounded-t-xl" src={el.strMealThumb} alt={el.strMeal} />
                    <h1 className='text-xl p-2'>{el.strMeal.slice(0, 26)}</h1>
                    <Link to={`/filterId/${el.idMeal}`} className='text-blue-600 underline p-2 '>Watch Retsipe</Link>
                </div>
    
            ))}
        </div>
        </div>
    );
}

export default FilterByCategoryItem;