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
        <div className="custom-container my-20 justify-center">
            <h2 className='text-[54px] font-bold text-center uppercase  font-red-hat-display'>
                Collaborating with global industry experts
            </h2>

            <div className="relative mb-12 mt-20 overflow-hidden whitespace-nowrap w-full">
                <motion.div
                    className="flex gap-x-20 items-center"
                    animate={{ x: ['0%', '-50%'] }}
                    style={{ width: '240%' }}
                    transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                >
                    {Slide1.map((item, i) => (
                        <div key={i} className="w-[245px]">
                            <Image src={item} alt="partner" className="w-[245px]" />
                        </div>
                    ))}

                </motion.div>
            </div>
            <div className="relative overflow-hidden whitespace-nowrap w-full">
                <motion.div
                    className="flex gap-x-20 items-center"
                    animate={{ x: ['-50%', '0%'] }}
                    style={{ width: '240%' }}
                    transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                >
                    {Slide2.map((item, i) => (
                        <div key={i} className="w-[245px]">
                            <Image src={item} alt="partner" className="w-[245px]" />
                        </div>
                    ))}

                </motion.div>
            </div>

        </div>
    )
}

export default Partners