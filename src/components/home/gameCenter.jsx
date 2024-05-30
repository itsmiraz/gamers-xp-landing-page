import cardCover from '../../../public/assets/images/card-cover.webp'
import rewardDappImage from '../../../public/assets/images/reward-dapp.webp'
import giveawayPassImage from '../../../public/assets/images/give-away-pass.webp'
import esportImage from '../../../public/assets/images/esport-platform.webp'
import Image from 'next/image'
import ellipsis from '../../../public/assets/images/ellipsis.png'
// / Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const GameCenter = () => {


    const sliderData = [

        {
            image: rewardDappImage,
            title: 'Reward dapp',
            desc: "Complete in game challenges, earn real rewards"
        },
        {
            image: giveawayPassImage,
            title: 'Giweaway pass',
            desc: "Get your chance to win unique prizes! Coming Soon!"
        },
        {
            image: esportImage,
            title: 'Esport platform',
            desc: "Compete in esports tournaments and earn real rewards. Coming Soon!"
        },
        {
            image: rewardDappImage,
            title: 'Reward dapp',
            desc: "Complete in game challenges, earn real rewards"
        },
        {
            image: giveawayPassImage,
            title: 'Giweaway pass',
            desc: "Get your chance to win unique prizes! Coming Soon!"
        },
        {
            image: esportImage,
            title: 'Esport platform',
            desc: "Compete in esports tournaments and earn real rewards. Coming Soon!"
        },
    ]

    return (
        <div className='custom-container relative my-20 '>

            <h2 className='font-red-hat-display text-[54px] font-bold text-center uppercase'>Next-Level Gaming Center</h2>
            <p className='text-[18px] font-red-rose text-center'>
                Play, Earn, Own, Level Up...
            </p>
            <div className='relative z-20  flex justify-center gap-10 py-32'>
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination]}
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
                    className="mySwiper"
                >
                    {sliderData.map((item, i) => (
                        <SwiperSlide key={i}>
                            <SliderCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>






            </div>

            <Image src={ellipsis} alt='ellipsis' className='absolute w-[915px] z-0 -top-44 opacity-20 -right-72' />
        </div>
    )
}

export default GameCenter


const SliderCard = ({ data }) => {
    return <div className='relative flex justify-between flex-col gap-5 max-w-[527px]'>

        <div className='relative'>
            <Image src={data.image} alt='main-img' className='z-40 relative' />
            <Image src={cardCover} alt='card-cover' className='absolute bottom-0 z-0 left-0' />

        </div>
        <div className=' px-14 space-y-4'>
            <h3 className='text-[24px] font-bold font-red-rose uppercase'>
                {data.title}
            </h3>
            <p className='text-[18px] font-red-rose'>
                {
                    data.desc
                }
            </p>
        </div>
    </div>
}