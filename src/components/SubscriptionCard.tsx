import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

interface SubscriptionCardProps {
    subDuration: string;
    price: number;
    perks: string[];
    isMostPopular?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({subDuration, price, perks, isMostPopular = false}) => {
  return (
    <div className={`${isMostPopular ? 'relative border-2 border-[#38e07b] shadow-2xl shadow-[#38e07b]/40' : 'border-[#264532]'} subs_card group flex flex-col gap-6 rounded-2xl border border-solid bg-[#182f20] p-8 hover:border-[#38e07b] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[#38e07b]/30`}>
        {isMostPopular && <div className="absolute -top-0.5 -right-0.5 bg-[#38e07b] text-[#122118] px-4 py-1.5 text-xs font-bold shadow-sm shadow-white/50 rounded-bl-lg rounded-tr-xl">MOST POPULAR</div>}
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold leading-tight">{subDuration}</h2>
            <p className="flex items-baseline gap-1.5 text-white">
                <span className="text-[rgb(255,73,1)] text-5xl font-black leading-tight tracking-[-0.033em]">${price}</span>
                <span className="text-gray-300 text-lg font-semibold leading-tight">/month</span>
            </p>
        </div>
        <ul className="flex flex-col gap-3 text-sm">
            {
                perks.map((perk, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <MdCheckCircle className="fill-[rgb(255,73,1)] size-[20px]"/>
                        {perk}
                    </li>
                ))
            }
        </ul>
        <button type='button' className={`${isMostPopular ? 'bg-[rgb(255,73,1)] text-[#122118]  group-hover:bg-opacity-80' : 'bg-[rgba(255,73,1,0.5)] group-hover:bg-[rgb(255,73,1)]'} mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 text-base font-bold leading-normal tracking-[0.015em] group-hover:bg-[rgb(255,73,1)] text-[#122118] transition-colors duration-300`}>
            Subscribe
        </button>
        </div>
  )
}

export default SubscriptionCard