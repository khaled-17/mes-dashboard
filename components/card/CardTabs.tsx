"use client"
import { Tab } from '../../types/Card';
import { useState } from 'react';

function CardTabs({ Tabs }: { Tabs: Tab[] }) {

    const [activeTab, setActiveTab] = useState(Tabs[0].id);

  return (
    <div className="flex">
      {Tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-3 cursor-pointer flex gap-3 text-[#9D9D9D] ${
            activeTab === tab.id ? "border-b-4 border-blue-500" : ""
          }`}
        >
          {tab.icon}  
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default CardTabs
