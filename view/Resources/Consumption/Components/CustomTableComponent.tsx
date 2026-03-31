import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TappedNavigationBarTable from "./TappedNavigationBarTable";

type Props = {
  header: React.ReactNode;
  content: React.ReactNode;
  mode?: "none" | "recordsTable";
  setTableMode?: (a: "list" | "chart") => void;
  tableMode?: "list" | "chart";
};

export default function CustomTableComponent({
  header,
  content,
  mode = "none",
  setTableMode,
  tableMode,
}: Props) {
  return (
    <Card className="relative grow py-3 px-1.5 font-montserrat shadow-[0px_8px_12px_#0000001A] rounded-[10px]">
      <CardHeader className="border-b py-0! pb-0!">
        <CardTitle className="flex justify-between flex-wrap text-[14px] leading-4.5 tracking-[0.28px] font-medium">
          {header}
          {mode === "recordsTable" && (
            <TappedNavigationBarTable
              tableMode={tableMode || "list"}
              setTableMode={setTableMode}
              className=" h-9 flex flex-col pt-3"
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-3.25">{content}</CardContent>
    </Card>
  );
}
