import React, { useEffect,useState } from 'react'
import { categoryMale } from '../Api'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import { useTranslation } from 'react-i18next'

function CategoryMeal(props) {
    const [meal , setMeal]= useState([])
    const [search , setSearch] = useState('');

   const {t}= useTranslation();

    
 
    useEffect(() => {
        categoryMale().then(data => setMeal(data.categories))
       
    }, [])
//  console.log(meal);
    return (
    <div className='relative'>

        <div className=' md:w-[50%] xl:w-[65%] w-full  absolute right-0 top-[-50px] md:top-[-80px]'>
            <Search setSearch={setSearch}/></div>
<div className='w-full max-md:mt-12 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 my-5'>
                {!meal.length ? ('Loading...') :
                (meal.filter(item =>{
                    return search.toLowerCase() ==='' ? item : item.strCategory.toLowerCase().includes(search)
                })
                    .map(item => (
                    <div key={item.idCategory} className='border-2 shadow'>
                        <img className='w-full md:h-[300px] h-[350px] object-cover' src={item.strCategoryThumb} alt={item.strCategory}></img>
                    <div className='py-4 px-2'>
                        <h1 className='text-4xl font-semibold' >{item.strCategory}
                        </h1>
                        <p className='py-2'>{item.strCategoryDescription.slice(0,120)}</p>
                        <Link to={`/category/${item.strCategory}`} className='underline text-blue-900'>{t('Watch Category')}</Link>
                    </div>
                    </div>
                   
                )))}
            </div>
    </div>
    )
}export default CategoryMeal;