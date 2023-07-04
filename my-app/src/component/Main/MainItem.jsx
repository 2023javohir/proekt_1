import React, { useState } from 'react';
import{ BsFillEyeFill} from 'react-icons/bs'
import Madal from './Modal/madal';
import { useTranslation } from 'react-i18next';
import PageNotFound from '../../pageNotFound';
import Loader from '../Loader';
function MainItem (props) {

  const {strArea, strCategory, strMealThumb, strMeal, strInstructions , el} = props;
  const {t}= useTranslation()

  const [madal, setMadal] = useState(false);
  const handleClick = () =>{
    setMadal(prev =>!prev)
  }

    return (
        <div className='w-full lg:h-[90vh] h-[810px] relative'>
          <img className='w-full h-full object-cover ' src={strMealThumb} alt={strMeal} />
          <div className='w-full h-full  absolute top-0 left-0 bg-black/40'></div>
          <div className='md:w-[55%] lg:w-1/2  h-auto absolute top-40 md:left-20  left-10'>
          <h1 className=' sm:text-[50px] leading-[50px] text-[40px]    text-white  '>{strMeal}</h1> 
          <p className='text-white/80 text-lg md:py-6 py-4 '>{strInstructions.slice(0,270)}...</p>
          <button onClick={handleClick} className='text-white bg-red-600 hover:bg-red-500 py-3 px-6 rounded-md space-x-2 flex items-center'>{t('watch_r')}
          <BsFillEyeFill className='ml-2 text-md' /></button>
         
          </div>

          {madal ? <Madal {...el} handleClick={handleClick} /> : ''}
         
          
        </div>
    );
}

export default MainItem;