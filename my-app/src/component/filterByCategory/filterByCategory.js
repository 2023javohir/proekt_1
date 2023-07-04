import React, { useEffect, useState } from 'react'
import { filterByCategory } from '../../Api'
import { useParams } from 'react-router-dom';
import FilterByCategoryItem from './filterByCategoryItem';

 

function FilterByCategory(){
    const[food, setFood] = useState([]);

        const {name} = useParams()

    useEffect(() => {
        filterByCategory(name).then(data=>setFood(data.meals))
    }, [name])
   
    return(
        <div>{food.length ? <FilterByCategoryItem  food={food} /> : 'Loader...'} 
        </div>
    )
}
export default FilterByCategory;