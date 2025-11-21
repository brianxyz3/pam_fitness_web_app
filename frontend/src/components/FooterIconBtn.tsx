import React from 'react'
import { Link } from 'react-router';

interface FooterIconBtnProps {
    children: any;
    link: string;
}

const FooterIconBtn: React.FC<FooterIconBtnProps> = ({children, link}) => {
  return (
    <Link to={link} className='p-2 border-2 border-black rounded-full hover:border-white hover:text-white duration-300'>
        {children}
    </Link>
  )
}

export default FooterIconBtn