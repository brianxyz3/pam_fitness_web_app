import React from 'react'

interface TeamCardProps {
    name: string;
    position: string;
    about: string;
    children: any;
}
const TeamCard: React.FC<TeamCardProps> = ({name, position, about, children}) => {
  return (
    <div className="bg-custom-dark p-6 rounded-lg text-center shadow-lg">
        {children}
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-custom-orange text-sm">{position}</p>
        <p className="text-gray-400 text-xs mt-2">{about}</p>
    </div>
  )
}

export default TeamCard