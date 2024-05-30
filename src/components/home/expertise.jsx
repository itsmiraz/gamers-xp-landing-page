import GreenGameIcon from "../../../public/assets/icons/green-game-icon"
import Download from "../../../public/assets/icons/download"
import TimerIcon from "../../../public/assets/icons/timer"

import expertiseImage from '../../../public/assets/images/expertise-image.webp'
import Image from "next/image"

const Expertise = () => {

    const data = [
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
        <div className='px-20 max-w-[1920px] mx-auto grid grid-cols-2 gap-20 place-items-center  relative z-50 py-20'>


            <div>
                <Image src={expertiseImage} alt="expertise-image-icon" />
            </div>
            <div>
                <ul className="space-y-12">
                    {
                        data.map((item, i) => <li className="flex gap-x-8" key={i}>
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                <h2 className="text-[36px] font-red-hat-display font-bold  uppercase">{item.title}</h2>
                                <p className="text-[18px] font-red-rose leading-[27px]">{item.desc}</p>
                            </div>

                        </li>)
                    }
                </ul>

            </div>

        </div>
    )
}

export default Expertise