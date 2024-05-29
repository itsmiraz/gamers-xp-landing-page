import React from 'react'
import logo from '../../../public/assets/logo/logo.png'
import GameIcon from '../../../public/assets/icons/game-icon'
import Image from 'next/image'
import { PrimaryButton } from '../ui/buttons/buttons'
const Header = () => {

    const features = [
        'GamersXPBox',
        'GamersXPReward',
        'GamersXPGiveaways pass',
        'GamersXPeSports',
        'GamersXPCard',
        'GamersXPID'
    ]

    return (
        <div className=' flex justify-between items-center py-4 px-10' >

            <Image className='w-[289px]' src={logo} alt='game-xp-logo' />
            <ul className='flex gap-x-6'>
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

        </div>
    )
}

export default Header