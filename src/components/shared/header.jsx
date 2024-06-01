import React, { useState } from 'react'
import logo from '../../../public/assets/logo/logo.png'
import GameIcon from '../../../public/assets/icons/game-icon'
import Image from 'next/image'
import { PrimaryButton } from '../ui/buttons/buttons'
import Menubar from '../../../public/assets/icons/menu-bar'
import MenuClose from '../../../public/assets/icons/menu-close'
import RegisterIcon from '../../../public/assets/icons/register'
import { motion } from 'framer-motion'
import SubmenuSlideImage1 from '../../../public/assets/images/submenu-ticker-images/item-6.webp'
import Link from 'next/link'

const Header = () => {
    const [Open, setOpen] = useState(true);

    const menus = [
        {
            title: 'Gamers XPReward',
            link: "/",
            subMenus: [
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 1',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 2',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 3',
                    link: '/',
                },
            ]
        },
        {
            title: 'Gamers XPBox',
            link: "/",
            subMenus: [
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 1',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 2',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 3',
                    link: '/',
                },
            ]
        },
        {
            title: "Gamers XPLevelUp ",
            link: "/",
            subMenus: [
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 1',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 2',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 3',
                    link: '/',
                },
            ]
        },
        {
            title: 'Gamers XPeSports',
            link: "/",
            subMenus: [
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 1',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 2',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 3',
                    link: '/',
                },
            ]
        },
        {
            title: 'Gamers XPCard',
            link: "/",
            subMenus: [
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 1',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 2',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 3',
                    link: '/',
                },
            ]
        },
        {
            title: 'Gamers XPID',
            link: "/",
            subMenus: [
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 1',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 2',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 3',
                    link: '/',
                },
            ]
        },
        {
            title: 'Gamers XPGiveaways pass',
            link: "/",
            subMenus: [
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 1',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 2',
                    link: '/',
                },
                {
                    icon: <RegisterIcon />,
                    title: 'Sub Menu 3',
                    link: '/',
                },
            ]
        },






    ]

    return (
        <div className='z-50 relative max-w-[1920px] mx-auto flex justify-between items-center py-4 px-4 md:px-10' >

            <div className='z-50 relative '>
                <Image className='md:w-[180px] w-[150px] lg:w-[289px]' src={logo} alt='game-xp-logo' />
            </div>
            <ul className={` lg:static absolute ${!Open ? "top-0" : "-top-[800px]"} left-0 px-4 md:px-10 lg:px-0 justify-start bg-black lg:bg-transparent w-full lg:w-fit ease-in-out transition-all duration-300  pt-20 lg:pt-0 pb-10 lg:pb-0 z-40  lg:flex lg:space-y-0 space-y-4  gap-x-4 `}>
                {
                    menus.map((item, i) => <NavMenu item={item} key={i} i={i} />)
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

const NavMenu = ({ item, i }) => {
    const [ShowSubMenu, setShowSubMenu] = useState(false);
    const SubMenuslideImages = [
        SubmenuSlideImage1,
        SubmenuSlideImage1,
        SubmenuSlideImage1,
        SubmenuSlideImage1,
        SubmenuSlideImage1,
        SubmenuSlideImage1,
        SubmenuSlideImage1,
    ]
    return <li className='relative' key={i}>
        <div onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
            className='flex  cursor-pointer relative flex-col text-center items-center lg:justify-center lg:items-center'>
            <GameIcon />
            <p className='font-red-rose text-white text-[12px] '>
                {item.title}
            </p>
        </div>



        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: ShowSubMenu ? 1 : 0, opacity: ShowSubMenu ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            className='w-[550px] hidden md:flex justify-between items-start gap-x-10 border px-4 py-4 -left-52 absolute h-fit -bottom-80 text-white bg-black/20 backdrop-blur-xl border-white/20 rounded-xl '>
            <div className=' space-y-4'>
                {
                    item.subMenus.map((subMenu, i) => <div className='cursor-pointer flex items-center gap-x-2' key={i}>
                        <div className='size-8 '>
                            {subMenu.icon}
                        </div>


                        <Link href={subMenu.link}>
                            <p className='font-red-hat-display  font-medium text-xl' key={i}>{subMenu.title}</p></Link>
                    </div>)
                }
            </div>
            <div className='flex gap-x-2 items-center'>
                <div className="relative z-50  overflow-hidden w-full h-64"> {/* Set a fixed height */}
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
                        animate={{ y: ['-20%', '-200%'] }} // Animate vertically
                        style={{ height: '200%' }} // Ensure the inner div is twice the height for seamless looping
                        transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
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
            </div>

        </motion.div>
    </li>
}