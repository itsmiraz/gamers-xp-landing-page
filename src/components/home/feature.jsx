import React from 'react'
import GreenCheck from '../../../public/assets/icons/green-check'
import { PrimaryButton } from '../ui/buttons/buttons'
import ellipsis from '../../../public/assets/images/ellipsis.png'
import Image from 'next/image'

const Feature = () => {
    return (
        <div className='custom-container  relative flex lg:flex-row flex-col-reverse items-center justify-between gap-10'>

            <div className='space-y-10 relative z-20'>
                <h2 className='text-[32px] md:text-[54px] leading-[128%] font-red-hat-display font-bold uppercase'>
                    Level Up Your <br /> Gaming Adventure
                </h2>
                <ul>
                    <li className='flex gap-x-3 items-center'>
                        <GreenCheck />
                        <p className='text-[20px] md:text-[24px] font-red-rose font-bold'>
                            Rutrum eu eget
                        </p>
                    </li>
                    <li className='flex gap-x-3 items-center'>
                        <GreenCheck />
                        <p className='text-[20px] md:text-[24px] font-red-rose font-bold'>
                            Sed quis ac sociis quis
                        </p>
                    </li>
                    <li className='flex gap-x-3 items-center'>
                        <GreenCheck />
                        <p className='text-[20px] md:text-[24px] font-red-rose font-bold'>
                            Amet tellus rhoncus
                        </p>
                    </li>
                </ul>
                <PrimaryButton>Explore Now</PrimaryButton>
            </div>
            <div className='max-w-[891px] relative z-20 flex justify-center items-center overflow-hidden max-h-[630px] border-2 border-b-2 '>
                <video className="w-full  h-full " autoPlay muted loop>
                    <source src="https://www.gamersxp.io/assets/img/howto/GamersXPReward%20App.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
            <Image src={ellipsis} alt='ellipsis' className='absolute w-[1000px] h-[700px] md:h-fit z-0 -bottom-0 md:-bottom-72 opacity-20 -left-32 md:-left-96' />

        </div>
    )
}

export default Feature