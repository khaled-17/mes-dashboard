import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const TimeNav = () => {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const onChangeHandler = (selected: Date | undefined) => {
    setSelectedDate("");
    setDate(selected);
  };

  return (
    <div className=" flex items-center gap-2 mr-16">
      <Button
        onClick={() => {
          setSelectedDate("Today");
          setDate(undefined);
        }}
        className={`${selectedDate === "Today" ? "text-primary bg-blue-400/50" : "text-gray-400 bg-transparent"} py-2 px-6 rounded-md text-[16px] font-semibold cursor-pointer `}
      >
        Today
      </Button>
      <Button
        onClick={() => {
          setSelectedDate("Yesterday");
          setDate(undefined);
        }}
        className={`${selectedDate === "Yesterday" ? "text-primary bg-blue-400/50" : "text-gray-400 bg-transparent"} py-2 px-6  text-[16px] font-semibold cursor-pointer `}
      >
        Yesterday
      </Button>
      <Button
        onClick={() => {
          setSelectedDate("Last Week");
          setDate(undefined);
        }}
        className={`${selectedDate === "Last Week" ? "text-primary bg-blue-300/50" : "text-gray-400 bg-transparent"} py-2 px-6 rounded-md text-[16px] font-semibold  cursor-pointer`}
      >
        Last Week
      </Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            data-empty={!date}
            className={`justify-between    bg-transparent text-md ${date ? "text-primary bg-blue-400/50" : "text-gray-400 "}`}
          >
            {date && format(date, "PPP")}
            <CalendarIcon className="w-6! h-6!"/>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onChangeHandler}
            defaultMonth={date}
            className="scale-110"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TimeNav;
