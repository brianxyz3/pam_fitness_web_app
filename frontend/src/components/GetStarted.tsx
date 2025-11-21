import React from 'react';
import { Link } from 'react-router';
import { MdArrowForward } from 'react-icons/md';

interface GetStartedProps {
    title: string;
    description: string;
    btnText: string;
}

const GetStarted: React.FC<GetStartedProps> = ({title, description, btnText}) => {
  return (
    <>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h2>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">{description}</p>
            <Link to={'/subscriptions'} className="w-fit bg-white text-custom-orange px-8 py-3 rounded-full font-semibold text-sm md:text-lg hover:text-white hover:bg-[#1a1a1a] transition duration-300 flex items-center justify-center mx-auto">
                {btnText}
                <MdArrowForward/>
            </Link>
        </div>
    </>
  )
}

export default GetStarted