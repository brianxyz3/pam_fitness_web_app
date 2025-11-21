import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import IconBtn from './IconBtn'
import { Link } from 'react-router';

interface CTOCardProps {
    style: string;
    title: string;
    children: any;
}

const CTOCard: React.FC<CTOCardProps> = ({ style, title, children}) => {
  return (
    <Link to={'/subscriptions'} className={`${style} overflow-hidden hover:overflow-visible relative group hover:-translate-y-8 cto_card rounded-3xl h-96 w-full md:min-w-[22rem] 2xl:max-w-[40rem] max-w-[24rem] p-5 flex flex-col justify-between delay-100 duration-200`}>
        {children}
        <div className='w-11/12 md:w-5/6'>
            <h5 className="text-xl tracking-tighter font-bold mb-6">
                {title}
            </h5>
            <p className='leading-6 text-gray-400 text-sm'>Whether it's fat loss, muscle gain, or building endurance -- start by picking a plan that fits your lifestyle. Progress tracking, real-time stats, and expert check-ins.</p>
        </div>
        <IconBtn style='size-8 sm:size-12 group-hover:bg-red-600 border-2 border-red-600 ms-auto duration-300'>
            <BsArrowRight className='fill-red-600 group-hover:fill-black size-4 sm:size-5 duration-300'/>
        </IconBtn>
        <p className="bg-[#FF4A04] text-nowrap text-sm md:text-base border-4 border-[#0D0D0D] text-black w-fit px-3 py-1 md:px-5 md:py-2 rounded-3xl font-bold opacity-0 group-hover:-bottom-6 group-hover:opacity-100 absolute -bottom-10 right-1/2 translate-x-1/2 duration-500">
            BOOKIING NOW
        </p>
    </Link>
  )
}

export default CTOCard