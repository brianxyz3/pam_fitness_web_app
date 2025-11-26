import React from 'react'

interface CoachesProfileCardProps {
    imageSrc: string;
    name: string;
    speciality: string;
    bio: string;
    certification?: string;
}

const CoachesProfileCard: React.FC<CoachesProfileCardProps> = ({imageSrc, name, speciality, certification, bio}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-3">
      <img alt={`${name}'s profile photo`} className="w-full" src={imageSrc}/>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-white">{name}</h3>
        <p className="text-custom-orange text-sm font-medium mb-2">{speciality}</p>
        <p className="text-gray-100 text-xs mb-2">Certification: {certification || "None"}</p>
        <p className="text-gray-400 text-sm">{bio}</p>
      </div>
    </div>
  )
}

export default CoachesProfileCard