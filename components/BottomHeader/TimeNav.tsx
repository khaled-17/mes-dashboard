import { ChangeEvent, useState } from "react";
const TimeNav = () => {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [date, setDate] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate("");
    setDate(e.target.value);
  };
  return (
    <div className=" flex items-center gap-2 mr-14">
      <button
        onClick={() => {
          setSelectedDate("Today");
          setDate("");
        }}
        className={`${selectedDate == "Today" ? "text-primary bg-blue-300/50" : "text-gray-400"} py-2 px-6 rounded-md text-sm  font-semibold cursor-pointer`}
      >
        Today
      </button>
      <button
        onClick={() => {
          setSelectedDate("Yesterday");
          setDate("");
        }}
        className={`${selectedDate == "Yesterday" ? "text-primary bg-blue-300/50" : "text-gray-400"} py-2 px-6 rounded-md text-sm  font-semibold cursor-pointer`}
      >
        Yesterday
      </button>
      <button
        onClick={() => {
          setSelectedDate("Last Week");
          setDate("");
        }}
        className={`${selectedDate == "Last Week" ? "text-primary bg-blue-300/50" : "text-gray-400"} py-2 px-6 rounded-md text-sm  font-semibold cursor-pointer`}
      >
        Last Week
      </button>

      <input
        type="date"
        onChange={onChangeHandler}
        className="text-gray-400 outline-0"
        value={date}
      />
    </div>
  );
};

export default TimeNav;
