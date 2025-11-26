import React from 'react'

interface ClientReviewCardProps {
    clientReview: string;
    clientName: string;
    serviceUsed: string;
    children: any;
}

const ClientReviewCard: React.FC<ClientReviewCardProps> = ({clientReview, clientName, serviceUsed, children}) => {
  return (
    <div className="bg-custom-dark p-8 rounded-lg shadow-lg">
        <p className="text-gray-300 italic mb-4">"{clientReview}"</p>
        <div className="flex items-center">
            {children}
            <div>
                <p className="font-semibold text-white">{clientName}</p>
                <p className="text-sm text-custom-orange">{serviceUsed}</p>
            </div>
        </div>
    </div>
  )
}

export default ClientReviewCard