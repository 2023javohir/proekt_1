import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function Madal(props) {
    const { strMealThumb, strMeal, strInstructions, strCategory, handleClick, strArea, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20,
        strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20 ,strYoutube} = props;

    return (
        <div>
            {/* qora fon======================== */}
            <div onClick={handleClick} className='w-full h-full bg-black/70 fixed top-0 left-0 cursor-pointer'>
            </div>

            <div className='w-[90%] h-auto absolute top-24 left-[5%] bg-black/60 rounded-xl py-10 px-4 z-10'>
                {/* rasm ona div======================================== */}
                <div className=' flex flex-col'>
                    {/* rasm======================================= */}
                    <img className='w-full h-[500px] object-cover ' src={strMealThumb} alt={strMeal} />
                    {/* qanday tayyorlanishi ona div ============================================ */}
                    <div className='w-full pl-14'>
                        <h1 className='text-4xl text-white/80 py-4'>{strMeal}</h1>
                        <span className='text-white/50 '> Meal Category: {strCategory}</span>
                        <p className='text-white/50 '>Country: {strArea} </p>
                        <p className='text-white/80 py-4'>{strInstructions}</p>

                    </div>
                    {/* close tugmasi========================================== */}
                    <div onClick={handleClick} className='p-2 bg-gray-800 rounded-md absolute right-3 top-3  cursor-pointer'> <AiOutlineClose className='text-white text-3xl' /></div>

                </div>
                {/* retsep va yotube ona div================================== */}
                <div className='w-full flex items-center flex-col'>
                    <div className=' w-full flex flex-col pt-2 pb-10'>

                        <h3 className='text-white/90 text-2xl py-4'>Recipe</h3>
                        {strIngredient1.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient1} :..........................</p> <p className='text-white/80'>{strMeasure1}</p>
                        </div> : null}
                        {strIngredient2.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient2} :..........................</p> <p className='text-white/80'>{strMeasure2}</p>
                        </div> : null}
                       {strIngredient3.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient3} :..........................</p> <p className='text-white/80'>{strMeasure3}</p>
                        </div> : null}
                        {strIngredient4.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient4} :..........................</p> <p className='text-white/80'>{strMeasure4}</p>
                        </div>: null}
                        {strIngredient5.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient5} :..........................</p> <p className='text-white/80'>{strMeasure5}</p>
                        </div> : null}
                        {strIngredient6.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient6} :..........................</p> <p className='text-white/80'>{strMeasure6}</p>
                        </div> : null}
                        {strIngredient7.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient7} :..........................</p> <p className='text-white/80'>{strMeasure7}</p>
                        </div>: null}
                        {strIngredient8.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient8} :..........................</p> <p className='text-white/80'>{strMeasure8}</p>
                        </div> : null}
                        {strIngredient9.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient9} :..........................</p> <p className='text-white/80'>{strMeasure9}</p>
                        </div> : null}
                        {strIngredient10.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient10} :..........................</p> <p className='text-white/80'>{strMeasure10}</p>
                        </div> : null}
                        {strIngredient11.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient11} :..........................</p> <p className='text-white/80'>{strMeasure11}</p>
                        </div> :null}
                       {strIngredient12.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient12} :..........................</p> <p className='text-white/80'>{strMeasure12}</p>
                        </div> : null}
                        {strIngredient13.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient13} :..........................</p> <p className='text-white/80'>{strMeasure13}</p>
                        </div> : null}
                       {strIngredient14.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient14} :..........................</p> <p className='text-white/80'>{strMeasure14}</p>
                       </div> : null}
                       {strIngredient15.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient15} :..........................</p> <p className='text-white/80'>{strMeasure15}</p>
                        </div> : null }
                        {strIngredient16.length ?<div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient16} :..........................</p> <p className='text-white/80'>{strMeasure16}</p>
                        </div> : null}
                        {strIngredient17.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient17} :..........................</p> <p className='text-white/80'>{strMeasure17}</p>
                        </div>: null}
                        {strIngredient18.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient18} :..........................</p> <p className='text-white/80'>{strMeasure18}</p>
                        </div> : null}
                        {strIngredient19.length ? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient19} :..........................</p> <p className='text-white/80'>{strMeasure19}</p>
                        </div> : null}
                        {strIngredient20.length? <div className='flex items-center space-x-2'>
                            <p className='text-white/80'>{strIngredient20} :..........................</p> <p className='text-white/80'>{strMeasure20}</p> 

                        </div>: null}
                    </div>

                  {strYoutube.length ?  <iframe className='width-[100%] lg:h-[600px] h-[300px] mt-10' src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} 
                    title={strMeal} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                    </iframe> : 'this is Empty'}
                </div>

            </div >
        </div >


    )
}
export default Madal;