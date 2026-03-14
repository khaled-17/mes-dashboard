import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomTableComponent from "../Components/CustomTableComponent";
import { Leaf } from "lucide-react";
import { Search } from "lucide-react";

const data = [
    {
        "processId": "355678",
        "material": "Aluminum",
        "materialColor": "#E91E63",
        "weight": "1000kg",
        "function": "Armoring",
        "routeId": "23445",
        "jobOrderId": "43678",
        "timestamp": "2021-03-29T09:00:00"
    },
    {
        "processId": "355678",
        "material": "Aluminum",
        "materialColor": "#673AB7",
        "weight": "1000kg",
        "function": "Armoring",
        "routeId": "23445",
        "jobOrderId": "43678",
        "timestamp": "2021-03-29T09:00:00"
    },
    {
        "processId": "355678",
        "material": "Aluminum",
        "materialColor": "#00BCD4",
        "weight": "1000kg",
        "function": "Armoring",
        "routeId": "23445",
        "jobOrderId": "43678",
        "timestamp": "2021-03-29T09:00:00"
    },
    {
        "processId": "355678",
        "material": "Aluminum",
        "materialColor": "#3F51B5",
        "weight": "1000kg",
        "function": "Armoring",
        "routeId": "23445",
        "jobOrderId": "43678",
        "timestamp": "2021-03-29T09:00:00"
    },
    {
        "processId": "355678",
        "material": "Aluminum",
        "materialColor": "#4DB6AC",
        "weight": "1000kg",
        "function": "Armoring",
        "routeId": "23445",
        "jobOrderId": "43678",
        "timestamp": "2021-03-29T09:00:00"
    },
    {
        "processId": "355678",
        "material": "Aluminum",
        "materialColor": "#D81B60",
        "weight": "1000kg",
        "function": "Armoring",
        "routeId": "23445",
        "jobOrderId": "43678",
        "timestamp": "2021-03-29T09:00:00"
    }
]

export default function ProcessView() {
    return (
        <div className="mt-5.75 h-full grow flex flex-col">
            <CustomTableComponent
                mode="recordsTable"
                header={<><Leaf /> Material Weight Records</>}
                content=
                {
                    <div>
                        <div className="relative h-5.75 border-b max-w-66.75 pb-2 mb-6 ">
                            <Search className="absolute top-px left-1.25 w-4 h-4 text-[#81878a]"/>
                            <input type="text" className="text-[12px] leading-3.5 tracking-normal font-montserrat font-normal ml-9.25 h-3.5 focus:outline-none w-[80%] placeholder:text-[#B2BEC3]" name="searchMaterial" placeholder="Search by load Name" />
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Process ID</TableHead>
                                    <TableHead>Material</TableHead>
                                    <TableHead>Material Weight</TableHead>
                                    <TableHead>Function</TableHead>
                                    <TableHead>Route ID</TableHead>
                                    <TableHead>Job Order ID</TableHead>
                                    <TableHead>Date Time</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((row, i) => <TableRow key={i}>
                                    <TableCell>{row.processId}</TableCell>
                                    <TableCell>{row.material}</TableCell>
                                    <TableCell>{row.weight}</TableCell>
                                    <TableCell>{row.function}</TableCell>
                                    <TableCell>{row.routeId}</TableCell>
                                    <TableCell>{row.jobOrderId}</TableCell>
                                    <TableCell>{row.timestamp}</TableCell>
                                </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                }
            />
        </div>
    )
}