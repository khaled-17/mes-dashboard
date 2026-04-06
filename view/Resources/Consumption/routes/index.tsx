"use client";
import CustomTableComponent from "../Components/CustomTableComponent";
import { Leaf, Search, ChevronDown } from "lucide-react";
import { Fragment, useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { dataWithMaterials } from "./dummyData";
import { ResourcesChart } from "../Components/ResourcesChart";

export default function RoutesView({
  mode,
}: {
  mode?: "normal" | "job-order";
}) {
  const [tableMode, setTableMode] = useState<"list" | "chart">("list");
  const [show, setShow] = useState<string>("");

  return (
    <div className="mt-5.75 h-full grow flex flex-col">
      <CustomTableComponent
        mode="recordsTable"
        header={
          <div className="flex gap-2.5 items-center ">
            <Leaf />
            <span>Material Weight Records</span>
          </div>
        }
        tableMode={tableMode}
        setTableMode={setTableMode}
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
              <div className="w-full p-4">
                <Table className="w-full border-collapse border-b mb-6">
                  <TableHeader className="font-montserrat text-[12px] tracking-[0.24px] ">
                    <TableRow
                      className={`w-full border-b border-[#B2BEC3] px-8 gap-x-4 hover:bg-white `}
                    >
                      {mode !== "job-order" && (
                        <TableHead className="pb-5 font-bold text-center ">
                          Routes ID
                        </TableHead>
                      )}
                      <TableHead
                        className={`pb-5 font-bold ${mode === "job-order" ? "pl-15" : "text-center"} `}
                      >
                        Job Order ID
                      </TableHead>
                      <TableHead className="pb-5 font-bold text-center ">
                        State
                      </TableHead>
                      <TableHead className="pb-5 font-bold text-center">
                        Date Time
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="w-full">
                    {dataWithMaterials.map((row, i) => (
                      <Fragment key={i}>
                        <TableRow
                          className={` w-full border-b border-soft-gray px-8 gap-x-4 relative hover:bg-white`}
                          onClick={() => setShow(show === row.id ? "" : row.id)}
                        >
                          <TableCell
                            className={`py-5 ${mode === "job-order" ? " pl-15" : "text-center"} relative`}
                          >
                            <ChevronDown
                              className={`absolute ${mode === "job-order" ? "left-3" : "left-15"}  text-[#707070] w-5 h-5`}
                            />
                            {row.routesId}
                            <div
                              className={`absolute ${mode === "job-order" ? "left-40" : "right-10"} top-5.5 flex pl-10 -space-x-1 ml-2`}
                            >
                              {row.materials.map((mat, index) => (
                                <span
                                  key={index}
                                  className={`w-4 h-4 rounded-full  ${mat.color}`}
                                  title={mat.materialName}
                                />
                              ))}
                            </div>
                          </TableCell>
                          {mode !== "job-order" && (
                            <TableCell className="py-5 text-center">
                              {row.jobOrderId}
                            </TableCell>
                          )}
                          <TableCell className="py-5 text-center">
                            {row.state}
                          </TableCell>
                          <TableCell className="py-5 text-center">
                            {row.dateTime}
                          </TableCell>
                        </TableRow>
                        {show === row.id && (
                          <TableRow className="hover:bg-transparent">
                            <TableCell
                              colSpan={mode === "job-order" ? 3 : 4}
                              className="p-0"
                            >
                              <div
                                className="w-full flex justify-around py-1 pr-6 max-h-36 "
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Table className="flex-1 min-w-0 table-auto">
                                  <TableHeader className="font-montserrat text-[12px] tracking-[0.24px] border-b">
                                    <TableRow className=" h-6 w-full border-b border-[#B2BEC3]">
                                      <TableHead className="pb-2 pl-6 font-bold">
                                        Material
                                      </TableHead>
                                      <TableHead className="pb-2 font-bold">
                                        Weight
                                      </TableHead>
                                      <TableHead className="pb-2 font-bold">
                                        Process ID
                                      </TableHead>
                                      <TableHead className="pb-2 font-bold">
                                        Function
                                      </TableHead>
                                      <TableHead className="pb-2 font-bold">
                                        Route ID
                                      </TableHead>
                                      <TableHead className="pb-2 font-bold">
                                        Job Order ID
                                      </TableHead>
                                      <TableHead className="pb-2 font-bold">
                                        Date Time
                                      </TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody className="w-full">
                                    {row.materials.map((row, i) => (
                                      <TableRow
                                        key={i}
                                        className="relative h-8 min-h-0 pl-5  w-full border-b border-soft-gray"
                                      >
                                        <TableCell className=" pl-6 h-full">
                                          <span
                                            className={`absolute z-10 left-0 top-3 w-3 h-3 rounded-[50%] ${row.color}`}
                                          ></span>
                                          {row.materialName}
                                        </TableCell>
                                        <TableCell className="h-full">
                                          {row.weight}
                                        </TableCell>
                                        <TableCell className="h-full">
                                          {row.processId}
                                        </TableCell>
                                        <TableCell className="h-full">
                                          {row.function}
                                        </TableCell>
                                        <TableCell className="h-full">
                                          {row.routeId}
                                        </TableCell>
                                        <TableCell className="h-full">
                                          {row.jobOrderId}
                                        </TableCell>
                                        <TableCell className="h-full">
                                          {row.dateTime}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </Fragment>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ) : (
            <ResourcesChart
              mode={mode === "job-order" ? "job-order" : "routes"}
            />
          )
        }
      />
    </div>
  );
}
