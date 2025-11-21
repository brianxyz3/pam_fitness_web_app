import React from 'react'

interface FeaturesCardProps {
    style: string;
    title: string;
    desc?: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({style, title, desc}) => {
  return (
    <div className={`${style} grid_img flex flex-col justify-end`}>
        <div className='p-2 xl:p-4 rounded-b-3xl rounded-t-2xl features_card_text'>
            <h5 className="lg:text-lg mb-1">{title}</h5>
            {desc && <p className='text-xs lg:text-sm text-gray-400'>{desc}</p>}
        </div>
    </div>
)
}

export default FeaturesCard;