import React from "react";
import MainItem from "./MainItem";

function MainList ({randomMeal}){
    // console.log(randomMeal)

    return(
        <div>
            {randomMeal.map(el =>(
                <MainItem key={el.idMeal} {...el} el={el} />
            ))}
        </div>
    );
}
export default MainList;