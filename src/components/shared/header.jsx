import React, { useState } from 'react'
import logo from '../../../public/assets/logo/logo.png'
import GameIcon from '../../../public/assets/icons/game-icon'
import Image from 'next/image'
import { PrimaryButton } from '../ui/buttons/buttons'
import Menubar from '../../../public/assets/icons/menu-bar'
import MenuClose from '../../../public/assets/icons/menu-close'
const Header = () => {
    const [Open, setOpen] = useState(true);

    const features = [
        'GamersXPBox',
        'GamersXPReward',
        'GamersXPeSports',
        'GamersXPCard',
        'GamersXPID',
        'GamersXPGiveaways pass',
    ]

    return (
        <div className='z-50 relative max-w-[1920px] mx-auto flex justify-between items-center py-4 px-4 md:px-10' >

            <div className='z-50 relative '>
                <Image className='md:w-[180px] w-[150px] lg:w-[289px]' src={logo} alt='game-xp-logo' />
            </div>
            <ul className={`lg:relative absolute ${!Open ? "top-0" : "-top-[800px]"} left-0 px-4 md:px-10 lg:px-0 justify-start bg-black lg:bg-transparent w-full lg:w-fit ease-in-out transition-all duration-300  pt-20 lg:pt-0 pb-10 lg:pb-0 z-40  lg:flex space-y-4  gap-x-6 `}>
                {
                    features.map((item, i) => <li className='flex flex-col justify-start items-start lg:justify-center lg:items-center' key={i}>
                        <GameIcon />

                        <p className='font-red-rose text-[14px] '>
                            {item}
                        </p>
                    </li>)
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