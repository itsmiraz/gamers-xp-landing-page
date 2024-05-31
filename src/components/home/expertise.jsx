

import expertiseImage from '../../../public/assets/images/expertise-image.webp'
import Image from "next/image"
import Balancer from "react-wrap-balancer"
import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { slideAnimation } from "@/lib/motion"
import { expertiseData } from "@/constants"

const Expertise = () => {


    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <div ref={ref} className='custom-container  grid grid-cols-1 lg:grid-cols-2 gap-20 place-items-center  '>


            <motion.div
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('left')}
            >
                <Image src={expertiseImage} alt="expertise-image-icon" />
            </motion.div>
            <div>
                <ul className="space-y-12">
                    {
                        expertiseData.map((item, i) => <motion.li
                            initial={{ opacity: 0, x: 100, y: 50 }}
                            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100, y: isInView ? 0 : 50 }}
                            transition={{ duration: 0.2, delay: i * 0.2 }}
                            className="flex gap-x-6 md:gap-x-8" key={i}>
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                <h2 className="text-[22px] md:text-[36px] text-white font-red-hat-display font-bold  uppercase">{item.title}</h2>
                                <p className="text-[14px] md:text-[18px] text-white/70 pt-4 font-red-rose md:leading-[27px]"><Balancer>
                                    {item.desc}</Balancer></p>
                            </div>

                        </motion.li>)
                    }
                </ul>

            </div>

        </div>
    )
}

export default Expertise