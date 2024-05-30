import React from 'react'
import heroImage from '../../../public/assets/images/hero-img.webp'
import secondCharacter from '../../../public/assets/images/second-character.png'
import ellipsis from '../../../public/assets/images/ellipsis.png'
import { PrimaryButton, SecondaryButton } from '../ui/buttons/buttons'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import StarIcon from '../../../public/assets/icons/start-icon'


const Hero = () => {
    return (
        <div className='relative'>
            <div className='custom-container  flex justify-between items-center '>

                <div className='space-y-12 relative'>
                    <h1 className='font-red-hat-display text-[96px] font-bold leading-[100px] uppercase text-white'>
                        The Gamers <br /> Reward <br /> Platform
                    </h1>
                    <div className='flex gap-x-5'>
                        <SecondaryButton>Run PC games</SecondaryButton>
                        <SecondaryButton>No downloads</SecondaryButton>
                    </div>
                    <PrimaryButton>EXPLORE NOW</PrimaryButton>
                    <p className='body-text'>
                        <Balancer>
                            Connecting gamers with blockchain. Continue playing the games <br /> you love and earn real rewards!
                        </Balancer>
                    </p>
                    <div className='absolute -top-14 -right-12 '>
                        <StarIcon />
                    </div>
                    <div className='absolute bottom-64 right-40 '>
                        <StarIcon />
                    </div>

                    <div className='w-[60px] h-[2px] bg-white'>

                    </div>
                </div>
                <div className=' xl:w-[50%] lg:w-[50%]'>
                    <Image src={heroImage} alt='hero-image' />
                </div>

            </div>
            <Image src={ellipsis} alt='ellipsis' className='-top-80 opacity-20 z-10 -right-80 w-[952px] absolute' />
            <Image src={ellipsis} alt='ellipsis' className='-top-0 opacity-50 z-10 -left-80 w-[952px] absolute' />
            <Image src={secondCharacter} alt='ellipsis' className='bottom-0  z-10 -left-52 w-[600px] absolute' />
        </div>
    )
}

export default Hero