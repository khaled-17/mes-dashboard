import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const routesExpandedTableData = [
  {
    material: "Steel Sheet 2mm",
    consumptionActual: "10kg",
    consumptionPlanned: "15kg",
    functionName: "Laser Cutting",
    functionColor: "bg-[#9b59b6]",
    date: "02-02-2026",
    product: "Chassis Frame",
    productionActual: "10kg",
    productionPlanned: "15kg",
    worker: "Mohamed Ahmed",
  },
  {
    material: "Aluminum Alloy",
    consumptionActual: "08kg",
    consumptionPlanned: "10kg",
    functionName: "Precision Drill",
    functionColor: "bg-[#1abc9c]",
    date: "02-02-2026",
    product: "Cooling Fan",
    productionActual: "07kg",
    productionPlanned: "10kg",
    worker: "Sarah Jenkins",
  },
  {
    material: "Polymer Resin",
    consumptionActual: "12kg",
    consumptionPlanned: "12kg",
    functionName: "Injection Mold",
    functionColor: "bg-[#e91e63]",
    date: "02-02-2026",
    product: "Casing Shell",
    productionActual: "12kg",
    productionPlanned: "12kg",
    worker: "Robert Chen",
  },
  {
    material: "Copper Wiring",
    consumptionActual: "05kg",
    consumptionPlanned: "08kg",
    functionName: "Coiling",
    functionColor: "bg-[#3498db]",
    date: "02-02-2026",
    product: "Motor Stator",
    productionActual: "05kg",
    productionPlanned: "08kg",
    worker: "Elena Rodriguez",
  },
];

export default function ExpandedTable({
  mode = "Material",
}: {
  mode: "Material" | "Function" | "Product";
}) {
  return (
    <Table className="flex-1 min-w-0 table-fixed overflow-auto">
      <TableHeader className="font-montserrat text-[12px] tracking-[0.24px] border-b">
        <TableRow className=" h-6 w-full border-b border-[#B2BEC3]">
          <TableHead className="text-center pb-2 font-bold">
            {mode === "Function"
              ? "Function"
              : mode === "Product"
                ? "Product"
                : "Material"}
          </TableHead>
          <TableHead className="text-center pb-2 font-bold">
            {mode === "Function" ? (
              "Starting Date"
            ) : mode === "Product" ? (
              <>
                <div>Production</div>
                <div className="font-light text-[12px] text-[#707070]">
                  Actual | Planned
                </div>
              </>
            ) : (
              <>
                <div>Consumption</div>
                <div className="font-light text-[12px] text-[#707070]">
                  Actual | Planned
                </div>
              </>
            )}
          </TableHead>
          <TableHead className="text-center pb-2 font-bold">
            {mode === "Function" ? "Material" : "Function"}
          </TableHead>
          <TableHead className="text-center pb-2 font-bold">
            {mode === "Function" ? (
              <>
                <div>Consumption</div>
                <div className="font-light text-[12px] text-[#707070]">
                  Actual | Planned
                </div>
              </>
            ) : (
              "Date"
            )}
          </TableHead>
          <TableHead className="text-center pb-2 font-bold">
            {mode === "Product" ? "Material" : "Product"}
          </TableHead>
          <TableHead className="text-center pb-2 font-bold">
            {mode === "Product" ? (
              <>
                <div>Consumption</div>
                <div className="font-light text-[12px] text-[#707070]">
                  Actual | Planned
                </div>
              </>
            ) : (
              <>
                {" "}
                <div>Production</div>
                <div className="font-light text-[12px] text-[#707070]">
                  Actual | Planned
                </div>
              </>
            )}
          </TableHead>
          <TableHead className="text-center pb-2 font-bold">Worker</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-full">
        {routesExpandedTableData.map((row, i) => (
          <TableRow
            key={i}
            className="relative h-8 min-h-0 pl-5  w-full border-b border-soft-gray"
          >
            <TableCell
              className={`${mode === "Function" ? "flex gap-1.5 justify-center items-center" : "text-center"} min-w-min h-full`}
            >
              {mode === "Function" ? (
                <>
                  <span
                    className={` w-3 h-3 rounded-[50%] ${row.functionColor}`}
                  ></span>
                  {row.functionName}{" "}
                </>
              ) : mode === "Product" ? (
                row.product
              ) : (
                row.material
              )}
            </TableCell>
            <TableCell className="text-center h-full">
              {mode === "Function" ? (
                row.date
              ) : mode === "Product" ? (
                <>
                  <span>{row.productionActual}</span>
                  <span> | </span>
                  <span>{row.productionPlanned}</span>{" "}
                </>
              ) : (
                <>
                  <span>{row.consumptionActual}</span>
                  <span> | </span>
                  <span>{row.consumptionPlanned}</span>
                </>
              )}
            </TableCell>
            <TableCell className="flex gap-1.5 justify-center items-center h-full">
              {mode === "Function" ? (
                row.material
              ) : (
                <>
                  {" "}
                  <span
                    className={` w-3 h-3 rounded-[50%] ${row.functionColor}`}
                  ></span>
                  {row.functionName}
                </>
              )}
            </TableCell>
            <TableCell className="text-center h-full">
              {mode === "Function" ? (
                <>
                  <span>{row.consumptionActual}</span>
                  <span> | </span>
                  <span>{row.consumptionPlanned}</span>
                </>
              ) : (
                row.date
              )}
            </TableCell>
            <TableCell className="text-center h-full">
              {mode === "Product" ? row.material : row.product}
            </TableCell>
            <TableCell className="text-center h-full">
              {mode === "Product" ? (
                <>
                  <span>{row.consumptionActual}</span>
                  <span> | </span>
                  <span>{row.consumptionPlanned}</span>
                </>
              ) : (
                <>
                  <span>{row.productionActual}</span>
                  <span> | </span>
                  <span>{row.productionPlanned}</span>
                </>
              )}
            </TableCell>
            <TableCell className="text-center h-full">{row.worker}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
