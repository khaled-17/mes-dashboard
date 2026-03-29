

import { CircleSmall } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { data } from "./F-TabData";

// ─── Main Component ───────────────────────────────────────────────────────────

function FunctionTab() {
  return (
        <Table>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.process}>

            {/* Process Name */}
            <TableCell className="align-top py-1.5 w-20">
              <span style={{ fontSize: "16px", fontWeight: "bold", color: "#003F5C" }}>
                {row.process}
              </span>
            </TableCell>

            {/* Machine Columns */}
            {[0, 1, 2].map((colIdx) => (
              <TableCell key={colIdx} className="align-top py-1.5">
                <div className="flex flex-col gap-1.5">
                  {(row.machines[colIdx] ?? []).map((entry, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CircleSmall
                        fill={entry.active ? entry.color : "#D0D7DA"}
                        stroke="none"
                        style={{ flexShrink: 0 }}
                      />
                      <span
                        style={{
                          fontSize: "13px",
                          color: entry.active ? "#1a1a2e" : "#D0D7DA",
                          lineHeight: "1.4",
                        }}
                      >
                        {entry.name}
                      </span>
                    </div>
                  ))}
                </div>
              </TableCell>
            ))}

          </TableRow>
        ))}
      </TableBody>
        </Table>
  );
}

export default FunctionTab;