import React from 'react'
interface propInterface{
    children: any;
    style: string;
}

const IconBtn: React.FC<propInterface> = ({style, children}) => {
  return (
    <div className={`${style} rounded-full flex justify-center items-center`}>
        {children}
    </div>
  )
}

export default IconBtn