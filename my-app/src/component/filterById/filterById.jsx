import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { filterById } from '../../Api';
import  FilterByList from './filterByList';

function FilterById (props)  {

    const{id}=useParams()
    const[filterId, setFilterID]=useState([])
    
    useEffect (() =>
    {
        filterById(id).then(data => setFilterID(data.meals))
    }, [id])
    console.log(filterId);
    return (
        <div>
            {filterId.length ? <FilterByList filterId={filterId}/> : "Loading..."}
        </div>

        
    );
}

export default FilterById;