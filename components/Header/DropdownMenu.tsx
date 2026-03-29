"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Hotel } from "lucide-react";

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

const FactoryDropdownMenu = () => {
  const [selectedFactory, setSelectedFactory] = useState(factories[0]);

  return (
    <DropdownMenu >
      <DropdownMenuTrigger  asChild >
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-blue-400/50 hover:bg-blue-100 p-1.5 px-3 rounded-md transition-colors border border-blue-200 "
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <Hotel className="w-6! h-6! text-primary" />
          </div>

          <span className="text-primary font-semibold text-[17px] px-4">
            {selectedFactory.name}
          </span>
          <ChevronDown className="w-5! h-5! transition-transform duration-200" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-48">
        {factories.map((factory) => (
          <DropdownMenuItem
            key={factory.id}
            className={`flex items-center gap-4 text-[16px] ${
              selectedFactory.id === factory.id
                ? "text-primary bg-blue-50 font-medium"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedFactory(factory)}
          >
            <div className="w-3.5 h-3.5 flex items-center justify-center">
            <Hotel className="w-5! h-5! text-primary " />
            </div>
            {factory.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FactoryDropdownMenu;
