import React from 'react'
import { BsArrowRight, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaLocationDot } from 'react-icons/fa6'
import IconBtn from './IconBtn'
import FooterIconBtn from './FooterIconBtn'
import Logo from './Logo'
import { Link } from 'react-router'

interface FooterProp {
    isHomePage?: boolean;
}

const Footer: React.FC<FooterProp> = ({isHomePage = false}) => {
  return (
    <>
    { isHomePage ?
            <footer className='bg-gradient-to-r from-[#FF4A04] to-[#FF4A04] via-red-800 px-6 sm:px-10 mx-10 text-black rounded-t-3xl'>
                <Link  to='/contact' className='h-[20vh] group hover:scale-x-110 duration-300 sm:h-[30vh] w-fit mx-auto relative flex flex-col justify-center'>
                    <h5 className='text-xl md:text-5xl font-[600] text-center scale-150 md:tracking-wider'>LET'S TALK</h5>
                    <div className='bg-black absolute hover:scale-105 -right-[40%] w-fit p-1 md:p-2 rounded-full'>
                        <BsArrowRight className='-rotate-45 group-hover:rotate-0 size-2 md:size-4 fill-white duration-300'/>
                    </div>
                </Link>
                {/* mobile screen size gym open hours */}
                <div className='w-full tracking-tight text-nowrap text-sm leading-8 rounded-3xl flex sm:hidden flex-col gap-y-1'>
                    <h5 className='text-lg font-bold'>TIME</h5>
                    <div className='flex justify-between gap-x-2'>
                        <p>Mon to Sat</p>
                        <p>6-11:30pm, 6-8:30pm</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Sun</p>
                        <p>Closed</p>
                    </div>
                    <hr className='my-3 border-t-2 border-black'/>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='font-bold'>OUR LOCATION</p>
                        <IconBtn style='size-10 bg-red-600'><FaLocationDot className='size-5'/></IconBtn>
                    </div>
                </div>
                <div className='font-semibold border-t-2 py-2 h-fit border-black flex justify-between items-center flex-wrap gap-y-2'>
                    <Logo/>
                    <div className='flex flex-wrap gap-x-6 justify-between gap-y-2'>
                        <Link to="/about" className='hover:text-white duration-300'>About Us</Link>
                        <Link to="/service" className='hover:text-white duration-300'>Services</Link>
                        <Link to="/subscription" className='hover:text-white duration-300'>Subscription</Link>
                        <Link to="/contact" className='hover:text-white duration-300'>Contact</Link>
                    </div>
                    <div className='w-fit flex gap-4'>
                        <FooterIconBtn link='/'>
                            <BsInstagram/>
                        </FooterIconBtn>
                        <FooterIconBtn link='/'>
                            <FaFacebook/>
                        </FooterIconBtn>
                        <FooterIconBtn link='/'>
                            <BsTwitter/>
                        </FooterIconBtn>
                    </div>
                </div>
            </footer>
            : <footer className="bg-custom-darker py-12">
            <div className="w-dvw px-4 md:px-8 lg:px-16 text-center text-gray-400">
                <div className="text-2xl font-bold text-custom-orange mb-4 w-fit mx-auto"><Logo/></div>
                <p className="mb-2">123 Fitness Street, Workout City, WC 12345</p>
                <p className="mb-4">© 2024 Pam-Fitness. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4">
                    <Link className="hover:text-custom-orange transition-colors" to="/">Facebook</Link>
                    <Link className="hover:text-custom-orange transition-colors" to="/">Instagram</Link>
                    <Link className="hover:text-custom-orange transition-colors" to="/">Twitter</Link>
                </div>
            </div>
        </footer>
        }
    </>
  )
}

export default Footer