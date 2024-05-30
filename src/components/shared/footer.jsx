import Image from 'next/image'
import logo from '../../../public/assets/logo/logo.png'
import FaceBook from '../../../public/assets/icons/facebook'
import Twitter from '../../../public/assets/icons/twitter'
import Youtube from '../../../public/assets/icons/youtube'
import Linkedin from '../../../public/assets/icons/linkedin'

const Footer = () => {
    return (
        <div className='z-50 pt-12  relative max-w-[1920px] mx-auto px-20 bg-black ' >

            <div className='grid grid-cols-6 gap-10'>
                <div className='col-span-3 '>
                    <Image src={logo} alt='logo' />
                    <p className=' font-red-rose text-[18px] text-white/70 mt-7'>
                        2024 © Copyrights EXP GAMING
                        <br />
                        TECHNOLOGIES LTD
                    </p>
                </div>
                <div>
                    <h3 className='font-red-rose  uppercase font-bold text-[20px]'>Support</h3>
                    <ul className='pt-12 space-y-6'>
                        <li>
                            <p className='font-red-rose text-[18px] text-white/70'>Volutpat</p>
                        </li>
                        <li>
                            <p className='font-red-rose text-[18px] text-white/70'>Ornare eu</p>
                        </li>
                        <li>
                            <p className='font-red-rose text-[18px] text-white/70'>At ultrices</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-red-rose uppercase font-bold text-[20px]'>legal</h3>
                    <ul className='pt-12 space-y-6'>
                        <li>
                            <p className='font-red-rose text-[18px] text-white/70'>Turpis</p>
                        </li>
                        <li>
                            <p className='font-red-rose text-[18px] text-white/70'>Eu at mattis</p>
                        </li>
                        <li>
                            <p className='font-red-rose text-[18px] text-white/70'>Orci consequat</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-red-rose font-bold uppercase text-[20px]'>for partners</h3>
                    <ul className='pt-12 space-y-6'>
                        <li>
                            <p className='font-red-rose text-[18px] text-white/70'>Neque urna</p>
                        </li>
                        <li>
                            <p className='font-red-rose text-[18px] text-white/70'>Elit</p>
                        </li>
                        <li>
                            <p className='font-red-rose text-[18px] text-white/70'>Imperdiet</p>
                        </li>
                    </ul>
                </div>

            </div>
            <hr className='opacity-20 my-10' />
            <div className='flex  pb-8 justify-between items-center'>
                <div className='flex gap-x-4'>
                    <FaceBook />
                    <Twitter />
                    <Youtube />
                    <Linkedin />
                </div>
                <div className='flex justify-between items-center gap-x-20'>
                    <p className='text-[18px] font-red-rose text-white/70'>Terms & Conditions</p>
                    <p className='text-[18px] font-red-rose text-white/70'> Privacy Policy</p>
                </div>
            </div>


        </div>
    )
}

export default Footer