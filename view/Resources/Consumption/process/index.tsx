"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomTableComponent from "../Components/CustomTableComponent";
import { Leaf } from "lucide-react";
import { Search } from "lucide-react";
import { useState } from "react";
import { ResourcesChart } from "../Components/ResourcesChart";
import { data } from "../routes/dummyData";

export function formatTimeStamp(timestamp: string) {
  const date = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat("en-US").format(date);
  let minutes: string | number = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  const formattedTime = date.getHours() + ":" + minutes;
  return (
    <div className="grid grid-cols-3 max-w-30">
      <div className="text-center">{formattedTime}</div>{" "}
      <div className="text-center">|</div>{" "}
      <div className="text-center">{formattedDate.split("/").join("-")}</div>
    </div>
  );
}

export default function ProcessView() {
  const [tableMode, setTableMode] = useState<"list" | "chart">("list");

  return (
    <div className="mt-5.75 h-full grow flex flex-col">
      <CustomTableComponent
        tableMode={tableMode}
        setTableMode={setTableMode}
        mode="recordsTable"
        header={
          <div className="flex gap-2.5 items-center ">
            <Leaf /> Material Weight Records
          </div>
        }
        content={
          tableMode === "list" ? (
            <div>
              <div className="relative h-5.75 border-b max-w-66.75 pb-2 mb-6 ">
                <Search className="absolute top-px left-1.25 w-4 h-4 text-[#81878a]" />
                <input
                  type="text"
                  className="text-[12px] leading-3.5 tracking-normal font-montserrat font-normal ml-9.25 h-3.5 focus:outline-none w-[80%] placeholder:text-[#B2BEC3]"
                  name="searchMaterial"
                  placeholder="Search by load Name"
                />
              </div>
              <div className=" w-full p-4">
                <Table className="w-full border-collapse border-b mb-6">
                  <TableHeader className="font-montserrat text-[12px] tracking-[0.24px]">
                    <TableRow className="w-full border-b border-[#B2BEC3]">
                      <TableHead className="pl-7 pb-5 font-bold">
                        Process ID
                      </TableHead>
                      <TableHead className="pb-5 font-bold">Material</TableHead>
                      <TableHead className="pb-5 font-bold">
                        Material Weight
                      </TableHead>
                      <TableHead className="pb-5 font-bold">Function</TableHead>
                      <TableHead className="pb-5 font-bold">Route ID</TableHead>
                      <TableHead className="pb-5 font-bold">
                        Job Order ID
                      </TableHead>
                      <TableHead className="pb-5 font-bold">
                        Date Time
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="">
                    {data.map((row, i) => (
                      <TableRow
                        key={i}
                        className=" w-full border-b  border-soft-gray"
                      >
                        <TableCell className="py-5 pl-9">
                          {row.processId}
                        </TableCell>
                        <TableCell className="py-5 relative">
                          <span
                            className={`absolute -left-3 top-6 inline-block w-3 h-3 rounded-[50%] ${row.materialColor}`}
                          ></span>
                          {row.material}
                        </TableCell>
                        <TableCell className="py-5 pl-8">
                          {row.weight}
                        </TableCell>
                        <TableCell className="py-5">{row.function}</TableCell>
                        <TableCell className="py-5 pl-3">
                          {row.routeId}
                        </TableCell>
                        <TableCell className="py-5 pl-6">
                          {row.jobOrderId}
                        </TableCell>
                        <TableCell className="py-5 ">
                          {formatTimeStamp(row.timestamp)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-121.25 w-full p-6 bg-white pt-15">
              <div className="grow w-full relative">
                <ResourcesChart mode="process" />
              </div>
            </div>
          )
        }
      />
    </div>
  );
}
