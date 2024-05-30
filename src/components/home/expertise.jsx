import GreenGameIcon from "../../../public/assets/icons/green-game-icon"
import Download from "../../../public/assets/icons/download"
import TimerIcon from "../../../public/assets/icons/timer"

import expertiseImage from '../../../public/assets/images/expertise-image.webp'
import Image from "next/image"
import Balancer from "react-wrap-balancer"

const Expertise = () => {

    const expertiseData = [
        {
            icon: <GreenGameIcon />,
            title: "Your Games, Our Power",
            desc: "Lorem vitae amet aliquam odio diam sit amet vestibulum. Malesuada amet eu porttitor ac. Libero viverra at pulvinar."
        },
        {
            icon: <Download />,
            title: "No Downloads, No Updates",
            desc: "Lorem vitae amet aliquam odio diam sit amet vestibulum. Malesuada amet eu porttitor ac. Libero viverra at pulvinar."
        },
        {
            icon: <TimerIcon />,
            title: "No Session Time Limits",
            desc: "Lorem vitae amet aliquam odio diam sit amet vestibulum. Malesuada amet eu porttitor ac. Libero viverra at pulvinar."
        },
    ]

    return (
        <div className='custom-container  grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center  '>


            <div>
                <Image src={expertiseImage} alt="expertise-image-icon" />
            </div>
            <div>
                <ul className="space-y-12">
                    {
                        expertiseData.map((item, i) => <li className="flex gap-x-6 md:gap-x-8" key={i}>
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                <h2 className="text-[22px] md:text-[36px] font-red-hat-display font-bold  uppercase">{item.title}</h2>
                                <p className="text-[14px] md:text-[18px] text-white/70 pt-4 font-red-rose md:leading-[27px]"><Balancer>
                                    {item.desc}</Balancer></p>
                            </div>

                        </li>)
                    }
                </ul>

            </div>

        </div>
    )
}

export default Expertise