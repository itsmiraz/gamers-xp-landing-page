import cardCover from '../../../public/assets/images/card-cover.webp'

import Image from 'next/image'
import ellipsis from '../../../public/assets/images/ellipsis.png'
// / Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { slideAnimation } from '@/lib/motion'
import { GameCenterSliderData } from '@/constants';

const GameCenter = () => {



    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <div ref={ref} className='custom-container relative md:my-20 '>

            <motion.div
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('down')}
                className='relative z-20'>
                <h2 className='font-red-hat-display text-[32px] md:text-[54px] font-bold text-center uppercase'>Next-Level Gaming Center</h2>
                <p className='text-[14px] md:text-[18px] font-red-rose text-center'>
                    Play, Earn, Own, Level Up...
                </p>
            </motion.div>
            <div className='relative z-20  flex justify-center gap-10 '>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination,]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper "
                >
                    {GameCenterSliderData.map((item, i) => (
                        <SwiperSlide key={i}>

                            <SliderCard isInView={isInView} i={i} data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            <Image src={ellipsis} alt='ellipsis' className='absolute w-[600px] h-[800px] md:w-[915px] md:h-[915px]  z-0 -top-64 md:-top-44 opacity-20 -right-40 md:-right-72' />
        </div>
    )
}

export default GameCenter


const SliderCard = ({ data, isInView, i }) => {
    return <motion.div

        initial={{ opacity: 0, x: 100, }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100, }}
        transition={{ duration: 0.8, delay: i * 0.4 }}
        className='relative cursor-pointer flex justify-between flex-col gap-5 max-w-[527px]'>

        <div className='relative pt-32 '>
            <Image src={data.image} alt='main-img' className='z-40 relative' />
            <Image src={cardCover} alt='card-cover' className='absolute bottom-0 z-0 left-0' />

        </div>
        <div className='px-4 md:px-14 space-y-4'>
            <h3 className='text-[24px] font-bold font-red-rose uppercase'>
                {data.title}
            </h3>
            <p className='text-[18px] font-red-rose'>
                {
                    data.desc
                }
            </p>
        </div>
    </motion.div>
}