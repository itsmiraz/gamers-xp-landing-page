import { motion } from 'framer-motion'
import image1 from '../../../public/assets/images/partners/image-1.png'
import image2 from '../../../public/assets/images/partners/image-2.png'
import image3 from '../../../public/assets/images/partners/image-3.png'
import image4 from '../../../public/assets/images/partners/image-4.png'
import image5 from '../../../public/assets/images/partners/image-5.png'
import image6 from '../../../public/assets/images/partners/image-6.png'
import image7 from '../../../public/assets/images/partners/image-7.png'
import image8 from '../../../public/assets/images/partners/image-8.png'
import image9 from '../../../public/assets/images/partners/image-9.png'
import image10 from '../../../public/assets/images/partners/image-10.png'
import image11 from '../../../public/assets/images/partners/image-11.png'
import image12 from '../../../public/assets/images/partners/image-12.png'
import Image from 'next/image'
import ellipsis from '../../../public/assets/images/ellipsis.png'


const Partners = () => {


    const Slide1 = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,


    ]
    const Slide2 = [
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
    ]


    return (
        <div className="custom-container relative my-20 justify-center">
            <h2 className='text-[28px] md:text-[54px] font-bold text-center uppercase  font-red-hat-display'>
                Collaborating with global industry experts
            </h2>
            {/* Slides for Desktop View */}
            <div className='md:hidden lg:block hidden'>
                <div className="relative  z-50 mb-12 mt-20 overflow-hidden whitespace-nowrap w-full">
                    <motion.div
                        className="flex gap-x-20 items-center"
                        animate={{ x: ['0%', '-50%'] }}
                        style={{ width: '240%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {Slide1.map((item, i) => (
                            <div key={i} className="w-[120px] md:w-[245px]">
                                <Image src={item} alt="partner" className="w-[120px] md:w-[245px]" />
                            </div>
                        ))}

                    </motion.div>
                </div>
                <div className="relative h-full z-50 overflow-hidden whitespace-nowrap w-full">
                    <motion.div
                        className="flex gap-x-20 items-center"
                        animate={{ x: ['-50%', '0%'] }}
                        style={{ width: '240%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {Slide2.map((item, i) => (
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
                        {Slide1.slice(0, 6).map((item, i) => (
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
                        {Slide2.slice(0, 6).map((item, i) => (
                            <div key={i} className="w-[120px] md:w-[245px]">
                                <Image src={item} alt="partner" className="w-[120px] md:w-[245px]" />
                            </div>
                        ))}

                    </motion.div>
                </div>
            </div>
            {/* Slides for Mobile View */}
            <div className='block lg:hidden md:hidden'>
                <div className="relative  z-50 mb-12 mt-20 overflow-hidden whitespace-nowrap w-full">
                    <motion.div
                        className="flex gap-x-10 items-center"
                        animate={{ x: ['0%', '-50%'] }}
                        style={{ width: '220%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {Slide1.slice(0, 6).map((item, i) => (
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
                        {Slide2.slice(0, 6).map((item, i) => (
                            <div key={i} className="w-[120px] md:w-[245px]">
                                <Image src={item} alt="partner" className="w-[120px] md:w-[245px]" />
                            </div>
                        ))}

                    </motion.div>
                </div>
            </div>
            <Image src={ellipsis} alt='ellipsis' className='absolute w-[1000px] z-0 -bottom-[300px] md:-bottom-[700px] opacity-20 -right-20' />

        </div>
    )
}

export default Partners