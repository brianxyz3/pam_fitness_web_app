import React from 'react'
import { Link } from 'react-router';

interface AboutCardProps {
    style?: string;
    title: string;
    desc: string;
    link?: string;
    children: any;
}

const AboutCard: React.FC<AboutCardProps> = ({style, title, desc, link, children}) => {
  return (
    <div className={`${style} p-6 rounded-xl hover:scale-105 flex flex-col justify-between duration-300`}>
        <div>
            {children}
            <h5 className="text-xl scale-y-125 tracking-tight font-bold my-3">{title}</h5>
            <p className="text-gray-400 leading-relaxed">{desc}</p>
        </div>
        {link && <Link to='/' className="mt-4 w-fit font-semibold text-custom-orange hover:underline" >{link}</Link>}
    </div>
)
}

export default AboutCard;