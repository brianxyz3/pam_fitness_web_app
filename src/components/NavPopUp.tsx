import React from 'react';
import { Link } from 'react-router';

interface NavPopUpProps{
    title: string;
    items?: string[];
    link: string;
}

const NavPopUp: React.FC<NavPopUpProps> = ({title, items, link}) => {
  return (
    <div className='relative group'>
        <Link to={link} className='group-hover:text-[#FF4A04] duration-300 border-b-2 border-transparent group-hover:border-[#FF4A04bb] pb-0.5'>{title}</Link>
        { items && <div className='absolute translate-x-2 text-white hidden group-hover:flex flex-col text-xs pt-1'>
            {
                items.map((item: string, idx: number) => (
                    <Link key={idx} to={link} className='bg-black text-nowrap hover:bg-red-950 py-2 px-1'>{item}</Link>
                ))
            }
        </div>}
    </div>
  )
}

export default NavPopUp;