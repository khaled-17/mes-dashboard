"use client";

import FactoryIcon from "@/icons/FactoryIcon";
import Image from "next/image";
import { useState } from "react";
const factories = [
  {
    id: 1,
    name: "Factory Name",
  },
  {
    id: 2,
    name: "Second Factory",
  },
  {
    id: 3,
    name: "Third Factory",
  },
];
const DropdownMenu = () => {
  const [selectedFactory, setSelectedFactory] = useState(factories[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-blue-400/50 hover:bg-blue-100 p-1.5 px-3 rounded-md transition-colors border border-blue-200"
      >
        <div className="w-4 h-4 flex items-center justify-center">
          <FactoryIcon className="w-6 h-6 text-primary" />
        </div>

        <span className="text-primary font-semibold text-sm">
          {selectedFactory.name}
        </span>
        <Image
          src="/chevron.png"
          alt="chevron"
          width={10}
          height={10}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
          {factories.map((factory) => (
            <li key={factory.id}>
              <button
                className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 flex items-center gap-2 ${
                  selectedFactory.id === factory.id
                    ? "text-primary bg-blue-50 font-medium"
                    : "text-gray-700"
                }`}
                onClick={() => {
                  setSelectedFactory(factory);
                  setIsOpen(false);
                }}
              >
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <FactoryIcon />
                </div>

                {factory.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default DropdownMenu;
