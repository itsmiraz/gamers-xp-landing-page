import { motion } from 'framer-motion'

import Image from 'next/image'
import ellipsis from '../../../public/assets/images/ellipsis.png'
import { PartnersSlide1, PartnersSlide2 } from '@/constants'


const Partners = () => {

    return (
        <div className="custom-container relative my-20 justify-center">
            <h2 className='text-[28px] text-white md:text-[54px] font-bold text-center uppercase  font-red-hat-display'>
                Collaborating with global industry experts
            </h2>
            {/* Slides for Desktop View */}
            <div className='hidden lg:block '>
                <div className="relative  z-50 mb-12 mt-20 overflow-hidden whitespace-nowrap w-full">
                    <motion.div
                        className="flex gap-x-20 items-center"
                        animate={{ x: ['0%', '-50%'] }}
                        style={{ width: '240%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {PartnersSlide1.map((item, i) => (
                            <div key={i} className="w-[120px] md:w-[245px]">
                                <Image src={item} alt="partner" className="w-[120px] md:w-[245px]" />
                            </div>
                        ))}

                    </motion.div>
                </div>
                <div className="relative  z-50 overflow-hidden whitespace-nowrap w-full">
                    <motion.div
                        className="flex gap-x-20 items-center"
                        animate={{ x: ['-50%', '0%'] }}
                        style={{ width: '240%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {PartnersSlide2.map((item, i) => (
                            <div key={i} className="w-[120px] md:w-[245px]">
                                <Image src={item} alt="partner" className="w-[120px] md:w-[245px]" />
                            </div>
                        ))}

                    </motion.div>
                </div>
            </div>
            {/* Slides for Tablet View */}
            <div className='hidden md:block lg:hidden'>

                <div className="relative  z-50 mb-12 mt-20 overflow-hidden whitespace-nowrap w-full">
                    <motion.div
                        className="flex gap-x-10 items-center"
                        animate={{ x: ['0%', '-50%'] }}
                        style={{ width: '150%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {PartnersSlide1.slice(0, 6).map((item, i) => (
                            <div key={i} className="w-[120px] md:w-[245px]">
                                <Image src={item} alt="partner" className="w-[120px] md:w-[245px]" />
                            </div>
                        ))}

                    </motion.div>
                </div>
                <div className="relative h-full z-50 overflow-hidden whitespace-nowrap w-full">
                    <motion.div
                        className="flex gap-x-10 items-center"
                        animate={{ x: ['-50%', '0%'] }}
                        style={{ width: '150%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {PartnersSlide2.slice(0, 6).map((item, i) => (
                            <div key={i} className="w-[120px] md:w-[245px]">
                                <Image src={item} alt="partner" className="w-[120px] md:w-[245px]" />
                            </div>
                        ))}

                    </motion.div>
                </div>
            </div>
            {/* Slides for Mobile View */}
            <div className='block md:hidden'>
                <div className="relative  z-50 mb-12 mt-20 overflow-hidden whitespace-nowrap w-full">
                    <motion.div
                        className="flex gap-x-10 items-center"
                        animate={{ x: ['0%', '-50%'] }}
                        style={{ width: '220%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {PartnersSlide1.slice(0, 6).map((item, i) => (
                            <div key={i} className="w-[120px] md:w-[245px]">
                                <Image src={item} alt="partner" className="w-[120px] md:w-[245px]" />
                            </div>
                        ))}

                    </motion.div>
                </div>
                <div className="relative h-full z-50 overflow-hidden whitespace-nowrap w-full">
                    <motion.div
                        className="flex gap-x-10 items-center"
                        animate={{ x: ['-50%', '0%'] }}
                        style={{ width: '220%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {PartnersSlide2.slice(0, 6).map((item, i) => (
                            <div key={i} className="w-[120px] md:w-[245px]">
                                <Image src={item} alt="partner" className="w-[120px] md:w-[245px]" />
                            </div>
                        ))}

                    </motion.div>
                </div>
            </div>
            {/* <Image src={ellipsis} alt='ellipsis' className='absolute w-[1000px] z-0 -bottom-[300px] md:-bottom-[700px] opacity-40 -right-20' /> */}

        </div>
    )
}

export default Partners