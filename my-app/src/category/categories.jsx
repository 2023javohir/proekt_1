import React,{useState} from "react";
import CategoryMeal from "./categoryMeal";
import CategoriesAll from "./categoriesAll";
import { useTranslation } from "react-i18next";


function Categories (props){
    const {t}= useTranslation() 
    const[active, setActive] = useState(false)
  


const handleClick = () => {
    setActive(false)}

    const handleClicktrue = () => {
        setActive(true)
}
    return(
        <div className='  w-full lg:px-20 px-5 py-5'>
           <h1 className=' text-4xl '>{t('Category Meals')}</h1> 
           <div   className='w-full flex items-center justify-between gap-x-4'>
           <div className='flex gap-x-4'>
           <button className={`${active ? 'my-4 px-4 py-3 bg-red-600 rounded text-white' : 'my-4 px-4 py-3 bg-red-400 rounded text-white cursor-no-drop'}`} onClick={handleClick}>{t('Category Meal')}</button>
            <button className={`${!active ? 'my-4 px-4 py-3 bg-red-600 rounded text-white' : 'my-4 px-4 py-3 bg-red-400 rounded text-white cursor-no-drop'}`} onClick={handleClicktrue}>{t('All Category Meal')}</button>
           </div>

            
           </div>
       
           {active ? <CategoriesAll /> : <CategoryMeal />}
           
         
        </div>
    )
}
export default Categories;