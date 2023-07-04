import React from 'react';
import FilterByIdItem from './filterByIdItem';
import PageNotFound from '../../pageNotFound';

function FilterByList({filterId}) {
  console.log(filterId);
  return (
    <div>
      
       {filterId.length ?  filterId.map(el => (
        <FilterByIdItem  key={el.idMeal} {...el}/>
         ))
        : <PageNotFound />}
    </div>
  );
}

export default FilterByList;
