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
        <div className='custom-container'>
            <div className='relative z-50 md:flex-row flex-col-reverse flex gap-10 justify-between items-center '>

                <div className='space-y-12 items-center mx-auto relative'>
                    <h1 className='font-red-hat-display text-[45px] md:text-start text-center md:text-[96px] font-bold leading-[55px] md:leading-[100px] uppercase text-white'>
                        The Gamers <br /> Reward <br /> Platform
                    </h1>
                    <div className='flex md:justify-start justify-center gap-x-5'>
                        <SecondaryButton>Run PC games</SecondaryButton>
                        <SecondaryButton>No downloads</SecondaryButton>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <PrimaryButton>EXPLORE NOW</PrimaryButton>
                    </div>
                    <p className='body-text text-center'>
                        <Balancer>
                            Connecting gamers with blockchain. Continue playing the games <br /> you love and earn real rewards!
                        </Balancer>
                    </p>
                    <div className='absolute md:block hidden -top-0 -right-12 '>
                        <StarIcon />
                    </div>
                    <div className='absolute md:block hidden bottom-64 right-40 '>
                        <StarIcon />
                    </div>

                    <div className='w-[60px] h-[2px] bg-white'>

                    </div>
                </div>
                <div className='w-[80%] xl:w-[50%] lg:w-[50%]'>
                    <Image src={heroImage} alt='hero-image' />
                </div>

            </div>
            <Image src={ellipsis} alt='ellipsis' className='-top-52 md:-top-80 opacity-20 z-0 -right-32 md:-right-80 w-[952px] absolute' />
            <Image src={ellipsis} alt='ellipsis' className='-bottom-32 md:bottom-0 opacity-30 z-0 -left-52 md:-left-80 w-[1200px] h-[825px]  md:w-[952px] absolute' />
            {/* <Image src={secondCharacter} alt='ellipsis' className='bottom-0  z-0 -left-52 w-[600px] absolute' /> */}
        </div>
    )
}

export default Hero