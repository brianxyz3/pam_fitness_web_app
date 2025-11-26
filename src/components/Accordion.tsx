import React from 'react'
import { Link } from 'react-router';

interface AccordionProps {
    title: string;
    link: string;
    details?: string[];
    closeMenu: () => void;
}

const Accordion: React.FC<AccordionProps> = ({title, details, link, closeMenu}) => {
  return (
    <div className='text-xl scale-y-110 border-b border-white/20 mb-2 p-1 hover:cursor-pointer'>
        {details ? 
        <details className='px-5'>
            <summary className='hover:text-white'>{title}</summary>  
            <div className='text-base'>
                {
                    details.map((detail, idx) => (
                        <Link onClick={closeMenu} to={link} key={idx} className='block w-fit border-b-2 border-transparent hover:text-white hover:scale-105 hover:-translate-y-1.5 hover:border-red-900 mb-1 ms-6 duration-300'>{detail}</Link>
                    ))
                }
            </div>
        </details>
        :<Link onClick={closeMenu} to={"/contact"} className='px-5 hover:text-white block'>{title}</Link>
        }
    </div>
  )
}

export default Accordion