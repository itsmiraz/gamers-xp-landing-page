import React, { useState } from 'react'
import logo from '../../../public/assets/logo/logo.png'
import GameIcon from '../../../public/assets/icons/game-icon'
import Image from 'next/image'
import { PrimaryButton } from '../ui/buttons/buttons'
import Menubar from '../../../public/assets/icons/menu-bar'
import MenuClose from '../../../public/assets/icons/menu-close'
const Header = () => {
    const [Open, setOpen] = useState(false);

    const features = [
        'GamersXPBox',
        'GamersXPReward',
        'GamersXPeSports',
        'GamersXPCard',
        'GamersXPID',
        'GamersXPGiveaways pass',
    ]

    return (
        <div className='z-40 relative max-w-[1920px] mx-auto flex justify-between items-center py-4 px-10' >

            <div>
                <Image className='md:w-[180px] w-[150px] lg:w-[289px]' src={logo} alt='game-xp-logo' />
            </div>
            <ul className='lg:flex hidden gap-x-6 '>
                {
                    features.map((item, i) => <li className='flex flex-col justify-center items-center' key={i}>
                        <GameIcon />

                        <p className='font-red-rose text-[14px] '>
                            {item}
                        </p>
                    </li>)
                }
            </ul>
            <PrimaryButton>LOGIN</PrimaryButton>


            {/* <div className='lg:hidden block '>
                <button onClick={() => setOpen(!Open)}>
                    {
                        Open ? <Menubar /> : <MenuClose />
                    }
                </button>

            </div> */}

        </div>
    )
}

export default Header