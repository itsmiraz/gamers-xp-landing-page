import React from 'react'
import GreenCheck from '../../../public/assets/icons/green-check'
import { PrimaryButton } from '../ui/buttons/buttons'

const Feature = () => {
    return (
        <div className='custom-container  flex items-center justify-between'>

            <div className='space-y-10'>
                <h2 className='text-[54px] leading-[128%] font-red-hat-display font-bold uppercase'>
                    Level Up Your <br /> Gaming Adventure
                </h2>
                <ul>
                    <li className='flex gap-x-3 items-center'>
                        <GreenCheck />
                        <p className='text-[24px] font-red-rose font-bold'>
                            Rutrum eu eget
                        </p>
                    </li>
                    <li className='flex gap-x-3 items-center'>
                        <GreenCheck />
                        <p className='text-[24px] font-red-rose font-bold'>
                            Sed quis ac sociis quis
                        </p>
                    </li>
                    <li className='flex gap-x-3 items-center'>
                        <GreenCheck />
                        <p className='text-[24px] font-red-rose font-bold'>
                            Amet tellus rhoncus
                        </p>
                    </li>
                </ul>
                <PrimaryButton>Explore Now</PrimaryButton>
            </div>
            <div className='max-w-[891px] flex justify-center items-center overflow-hidden max-h-[630px] border-2 border-b-2 '>
                <video className="w-full  h-full " autoPlay muted loop>
                    <source src="https://www.gamersxp.io/assets/img/howto/GamersXPReward%20App.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    )
}

export default Feature