import React, { useRef } from 'react'
import GreenCheck from '../../../public/assets/icons/green-check'
import { PrimaryButton } from '../ui/buttons/buttons'
import ellipsis from '../../../public/assets/images/ellipsis.png'
import Image from 'next/image'
import { useInView, motion } from 'framer-motion'
import { slideAnimation } from '@/lib/motion'

const Feature = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <div ref={ref} className='custom-container  relative flex lg:flex-row flex-col-reverse items-center justify-between gap-10'>

            <motion.div
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('left')}
                className='space-y-10 w-[100%] lg:w-[50%] relative z-20'>
                <h2 className='text-[32px] text-white md:text-[54px] leading-[128%] font-red-hat-display font-bold uppercase'>
                    Level Up Your <br /> Gaming Adventure
                </h2>
                <ul className='text-white'>
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
            </motion.div>
            <motion.div
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('right')}
                className='w-[100%] lg:w-[50%] max-w-[891px] relative z-20 flex justify-center items-center overflow-hidden max-h-[630px] border-2 border-b-2 '>
                <video className="w-full  h-full " autoPlay muted loop>
                    <source src="https://www.gamersxp.io/assets/img/howto/GamersXPReward%20App.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </motion.div>
            <Image src={ellipsis} alt='ellipsis' className='absolute w-[1000px] h-[700px] md:h-fit z-0 -bottom-0 md:-bottom-72 opacity-30 -left-32 md:-left-96' />

        </div>
    )
}

export default Feature