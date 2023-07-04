import React, { useState } from 'react'
import icon from './img/icon.png'
import { Link } from 'react-router-dom';
import { BsFacebook, BsList, BsTelegram, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineClose } from 'react-icons/ai';
import { MdGTranslate } from 'react-icons/md'
import { useTranslation } from 'react-i18next';



const language = [
    { id: 1, title: 'Uzb', lan: 'uz' },
    { id: 2, title: 'Eng', lan: 'en' },
    { id: 3, title: 'Rus', lan: 'ru' },
    { id: 4, title: 'Turky', lan: 'tr' },


];
const Navbar = () => {

    const [active, setActive] = useState(true);
    const [lang, setLang] = useState(false);

    const {t, i18n} =useTranslation();

    const onLanguage = lng => {
        i18n.changeLanguage(lng);
        setLang(!lang);
    };
        

    return (

        <div className="w-full h-20  lg:px-20 px-5 fixed top-0 left-0 z-20 flex items-center justify-between bg-black/50">
            <Link to={'/'}> <img className='w-12 h-12 rounded-full ' src={icon} alt="icon" /></Link>
            <div className='hidden md:flex '>
                <BsTelegram className='text-xl text-white mx-2 cursor-pointer hover:scale-150 tran0ition-all hover:text-red-400' />
                <AiFillInstagram className='text-xl text-white mx-2 cursor-pointer hover:scale-150 tran0ition-all hover:text-red-400' />
                <BsFacebook className='text-xl text-white mx-2 cursor-pointer hover:scale-150 tran0ition-all hover:text-red-400' />
                <BsYoutube className='text-xl text-white mx-2 cursor-pointer hover:scale-150 tran0ition-all hover:text-red-400' />

                <div className='relative'>
                    <button className='mx-4' onClick={() => setLang(!lang)}>
                        <MdGTranslate className='text-xl text-white' />
                    </button>
                    {lang ? (
                        <div className='absolute top-6'>
                            {language.map(el => (
                                <div key={el.id} onClick={() => onLanguage(el.lan)} 
                                className=' cursor-pointer text-white  w-20 pl-2 rounded bg-black/60'>{el.title}</div>
                            ))}
                        </div>
                    ) : null}
                    <Link to='/login' className='text-center text-white'>{t('login')}</Link>

                </div>

            </div>


            {active ? <BsList onClick={() => setActive(prev => !prev)} className='flex md:hidden text-black text-3xl cursor-pointer' /> : <AiOutlineClose onClick={() => setActive(prev => !prev)} className='text-black text-3xl cursor-pointer' />}
            {active ? null :
                <div className='w-1/2 h-screen fixed bg-red-700/90 top-0 left-0'>
                    <div className='h-1/2 flex p-4 flex-col justify-between '>
                        <p className='text-white text-3xl border-b-2 border-white py-2 cursor-pointer hover:border-black'>All Category</p>
                        <p className='text-white text-3xl border-b-2 border-white py-2 cursor-pointer hover:border-black'>All Category</p>
                        <p className='text-white text-3xl border-b-2 border-white py-2 cursor-pointer hover:border-black'>All Category</p>
                        <p className='text-white text-3xl border-b-2 border-white py-2 cursor-pointer hover:border-black'>All Category</p>

                    </div>
                    <div className=' md:hidden flex  justify-center items-center pt-20 '>
                        <BsTelegram className='text-xl text-black mx-2 cursor-pointer hover:scale-150 tran0ition-all hover:text-red-400' />
                        <AiFillInstagram className='text-xl text-black mx-2 cursor-pointer hover:scale-150 tran0ition-all hover:text-red-400' />
                        <BsFacebook className='text-xl text-black mx-2 cursor-pointer hover:scale-150 tran0ition-all hover:text-red-400' />
                        <BsYoutube className='text-xl text-black mx-2 cursor-pointer hover:scale-150 tran0ition-all hover:text-red-400' />
                    </div>
                </div>
            }
        </div>
    );
}

export default Navbar;