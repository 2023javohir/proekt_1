import React from 'react'
import Loaderimg from './img/loader.gif'

function Loader (props) {
    return (

        <div className='w-full h-[70vh] flex justify-center items-center'>
            <img className='w-full h-full object-cover' src={Loaderimg} alt='Loader...' />
        </div>
    );
}
export default Loader;