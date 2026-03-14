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
        <div className="flex gap-3 items-center border-b border-border py-3">
              <div className="flex flex-col items-center gap-0 flex-1">
                {icon}
                <p className='text-[#8D9192] text-[11px] font-bold'>{iconName}</p>
              </div>
              <div className='text-[#464646] text-[16px] font-bold flex-3'>
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
