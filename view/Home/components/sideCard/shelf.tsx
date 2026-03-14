import React from 'react'

interface shelfProps {
    icon: React.ReactNode;
    iconName: string;
    description: string;
    id: string;
}

function Shelf({icon, iconName, description, id}: shelfProps) {
  return (
    <div>
        <div className="flex items-center border-b border-border py-4">
              <div className="flex flex-col items-center gap-1 flex-1">
                {icon}
                <p className='text-[#8D9192]'>{iconName}</p>
              </div>
              <div className='text-[#464646] text-[17px] font-bold flex-2'>
                <p>{description}</p>
                <div className='flex justify-between items-center'>
                  <p className=''>ID</p>
                  <p className='font-extrabold'>{id}</p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Shelf
