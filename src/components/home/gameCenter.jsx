import cardCover from '../../../public/assets/images/card-cover.webp'
import rewardDappImage from '../../../public/assets/images/reward-dapp.webp'
import giveawayPassImage from '../../../public/assets/images/give-away-pass.webp'
import esportImage from '../../../public/assets/images/esport-platform.webp'
import Image from 'next/image'



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
    ]

    return (
        <div className='custom-container my-20 '>

            <h2 className='font-red-hat-display text-[54px] font-bold text-center uppercase'>Next-Level Gaming Center</h2>
            <p className='text-[18px] font-red-rose text-center'>
                Play, Earn, Own, Level Up...
            </p>
            <div className='relative flex justify-center gap-10 py-32'>
                {
                    sliderData.map((item, i) => <SliderCard data={item} key={i} />)
                }
            </div>
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