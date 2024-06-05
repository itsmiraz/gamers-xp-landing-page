import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ellipsis from '../../../public/assets/images/ellipsis.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useInView, motion } from 'framer-motion';
import { slideAnimation } from '@/lib/motion';
import { GameCenterSliderData } from '@/constants';
import LeftArrow from '../../../public/assets/icons/left-arrow';
import WhiteDot from '../../../public/assets/icons/whitedot';
import ActiveDot from '../../../public/assets/icons/activeDot';
import RightArrow from '../../../public/assets/icons/rightArrow';
import cardCover from '../../../public/assets/images/card-cover.webp';

const GameCenter = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const swiperRef = useRef(null);

    const handleLeftClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleRightClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div ref={ref} className='custom-container relative md:my-20 '>
            <motion.div
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('down')}
                className='relative z-20'
            >
                <h2 className='font-red-hat-display text-white text-[32px] md:text-[54px] font-bold text-center uppercase'>
                    Next-Level Gaming Center
                </h2>
                <p className='text-[14px] md:text-[18px] text-white font-red-rose text-center'>
                    Play, Earn, Own, Level Up...
                </p>
            </motion.div>

            <div className='relative z-20 justify-center gap-10 '>
                <Swiper
                    ref={swiperRef}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                        bulletClass: 'custom-bullet',
                        bulletActiveClass: 'custom-bullet-active',
                    }}
                    navigation={{
                        nextEl: '.right-arrow',
                        prevEl: '.left-arrow',
                    }}
                    modules={[Pagination, Navigation]}
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
                    className='mySwiper '
                >
                    {GameCenterSliderData.map((item, i) => (
                        <SwiperSlide key={i}>
                            <SliderCard isInView={isInView} i={i} data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex mx-auto w-fit my-10 justify-center items-center gap-x-2'>
                    <button className='left-arrow' onClick={handleLeftClick}>
                        <LeftArrow />
                    </button>
                    <div className='custom-pagination flex gap-x-2'></div>
                    <button className='right-arrow rotate-180' onClick={handleRightClick}>
                        <LeftArrow />

                    </button>
                </div>
            </div>
            {/* <Image
                src={ellipsis}
                alt='ellipsis'
                className='absolute w-[600px] h-[800px] md:w-[952px] z-0 -top-64 md:-top-44 opacity-40 -right-40 md:-right-72'
            /> */}
        </div>
    );
};

const SliderCard = ({ data, isInView, i }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
            transition={{ duration: 0.8, delay: i * 0.4 }}
            className='relative cursor-pointer flex justify-between flex-col gap-5 max-w-[527px]'
        >
            <div className='relative pt-32 '>
                <Image src={data.image} alt='main-img' className='z-40 relative' />
                <Image src={cardCover} alt='card-cover' className='absolute bottom-0 z-0 left-0' />
            </div>
            <div className='px-4 md:px-14 md:text-start text-center text-white space-y-4'>
                <h3 className='text-[24px] font-bold font-red-rose uppercase'>{data.title}</h3>
                <p className='text-[18px] font-red-rose'>{data.desc}</p>
            </div>
        </motion.div>
    );
};

export default GameCenter;
