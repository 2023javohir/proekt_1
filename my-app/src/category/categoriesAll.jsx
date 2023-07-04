import React from "react";
import CategoryBeef from "../categoryAll/categoryBeef";
import CateegoryDessert from "../categoryAll/CategoryDessert";
import CategoryChicken from "../categoryAll/categoryChicken";
import CategoryLamb from "../categoryAll/categoryLamb";

function CategoriesAll(props){
    return(
        <div>
            <CategoryBeef /> 
            <CategoryChicken />
            <CateegoryDessert />
            <CategoryLamb />
            
        </div>
    )
}
export default CategoriesAll;