import React, { useState } from 'react'
import logo from '../../../public/assets/logo/logo.png'
import GameIcon from '../../../public/assets/icons/game-icon'
import Image from 'next/image'
import { PrimaryButton } from '../ui/buttons/buttons'
import Menubar from '../../../public/assets/icons/menu-bar'
import MenuClose from '../../../public/assets/icons/menu-close'
import { motion } from 'framer-motion'
import SubmenuSlideImage1 from '../../../public/assets/images/submenu-ticker-images/item-6.webp'
import Link from 'next/link'
import { Navmenus } from '@/constants'

const Header = () => {
    const [Open, setOpen] = useState(true);
    const [ShowSubMenu, setShowSubMenu] = useState('0');


    return (
        <div className='z-50 fixed w-[100%]  bg-black top-0 left-1/2 transform -translate-x-1/2 max-w-[1920px] mx-auto flex justify-between items-center py-4 px-4 md:px-10' >

            <div className='z-50 relative '>
                <Image className='md:w-[180px] w-[150px] lg:w-[289px]' src={logo} alt='game-xp-logo' />
            </div>
            <ul className={` lg:static overflow-y-auto lg:overflow-visible max-h-screen absolute ${!Open ? "top-0" : "-top-[1000px]"} left-0 px-4 md:px-10 lg:px-0 justify-start bg-black lg:bg-transparent w-full lg:w-fit ease-in-out transition-all duration-300  pt-20 lg:pt-0 pb-10 lg:pb-0 z-40  lg:flex lg:space-y-0 space-y-4  gap-x-4 `}>
                {
                    Navmenus.map((item, i) => <NavMenu ShowSubMenu={ShowSubMenu} setShowSubMenu={setShowSubMenu} item={item} key={i} i={i} />)
                }
            </ul>
            <div className='flex gap-x-4 items-center justify-center z-50 relative '>
                <PrimaryButton>LOGIN</PrimaryButton>


                <div className='lg:hidden flex items-center  '>
                    <button onClick={() => setOpen(!Open)}>
                        {
                            Open ? <Menubar /> : <MenuClose />
                        }
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Header

const NavMenu = ({ item, i, ShowSubMenu, setShowSubMenu }) => {


    const SubMenuslideImages = [
        SubmenuSlideImage1,
        SubmenuSlideImage1,
        SubmenuSlideImage1,
        SubmenuSlideImage1,
        SubmenuSlideImage1,
        SubmenuSlideImage1,
        SubmenuSlideImage1,
    ]
    return <li className='relative transition-all ease-in-out duration-300' key={i}>
        <div onMouseEnter={() => setShowSubMenu(i)}
            onClick={() => setShowSubMenu(ShowSubMenu === i ? -1 : i)}
            className='flex  cursor-pointer relative flex-col text-center items-center lg:justify-center lg:items-center'>
            <GameIcon />
            <p className='font-red-rose text-white text-[12px] '>
                {item.title}
            </p>
        </div>



        <div
            onMouseLeave={() => setShowSubMenu(-1)}
            // initial={{ scale: 0, opacity: 0 }}
            // animate={{ scale: ShowSubMenu === i ? 1 : 0, opacity: ShowSubMenu === i ? 1 : 0 }}
            // exit={{ scale: 0, opacity: 0 }}
            // transition={{ duration: 0.1 }}
            className={`${ShowSubMenu === i ? 'block' : "hidden"} overflow-hidden w-full mt-4 lg:w-[550px] flex justify-between  items-start gap-x-10 border lg:px-4 py-2 px-2 lg:py-4 lg:-left-52 relative lg:absolute h-fit lg:-bottom-80 text-white bg-black/20 backdrop-blur-xl border-white/20 rounded-xl `}>
            <div className=' space-y-4'>
                {
                    item.subMenus.map((subMenu, i) => <div className='cursor-pointer flex items-center gap-x-2' key={i}>
                        <div className='size-8 '>
                            {subMenu.icon}
                        </div>


                        <Link href={subMenu.link}>
                            <p className='font-red-hat-display  font-medium text-sm lg:text-xl' key={i}>{subMenu.title}</p></Link>
                    </div>)
                }
            </div>


            {/* Ticker  */}
            <div className='flex gap-x-2 items-center'>
                <div className="relative z-50 lg:block hidden  overflow-hidden w-full h-64">
                    <motion.div
                        className="flex flex-col gap-y-2 items-center"
                        animate={{ y: ['0%', '-100%'] }} // Animate vertically
                        style={{ height: '200%' }} // Ensure the inner div is twice the height for seamless looping
                        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    >
                        {SubMenuslideImages.map((item, i) => (
                            <div key={i} className="w-[80px] rounded-lg">
                                <Image src={item} alt="partner" className="w-[80px] rounded-lg" />
                            </div>
                        ))}

                        {/* Duplicate the images for seamless looping */}
                        {SubMenuslideImages.map((item, i) => (
                            <div key={i + SubMenuslideImages.length} className="w-[80px] rounded-lg">
                                <Image src={item} alt="partner" className="w-[80px] rounded-lg" />
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="relative z-50  overflow-hidden w-full h-64"> {/* Set a fixed height */}
                    <motion.div
                        className="flex flex-col gap-y-2 items-center"
                        animate={{ y: ['-100%', '0%'] }} // Animate vertically
                        style={{ height: '200%' }} // Ensure the inner div is twice the height for seamless looping
                        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                    >
                        {SubMenuslideImages.map((item, i) => (
                            <div key={i} className="w-[80px] rounded-lg">
                                <Image src={item} alt="partner" className="w-[80px] rounded-lg" />
                            </div>
                        ))}


                        {SubMenuslideImages.map((item, i) => (
                            <div key={i + SubMenuslideImages.length} className="w-[80px] rounded-lg">
                                <Image src={item} alt="partner" className="w-[80px] rounded-lg" />
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="relative z-50  overflow-hidden w-full h-64">
                    <motion.div
                        className="flex flex-col gap-y-2 items-center"
                        animate={{ y: ['-20%', '-200%'] }}
                        style={{ height: '200%' }}
                        transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
                    >
                        {SubMenuslideImages.map((item, i) => (
                            <div key={i} className="w-[80px] rounded-lg">
                                <Image src={item} alt="partner" className="w-[80px] rounded-lg" />
                            </div>
                        ))}


                        {SubMenuslideImages.map((item, i) => (
                            <div key={i + SubMenuslideImages.length} className="w-[80px] rounded-lg">
                                <Image src={item} alt="partner" className="w-[80px] rounded-lg" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </div>
    </li>
}