import { Card,CardHeader,CardTitle,CardContent } from "@/components/ui/card";
import TappedNavigationBarTable from "./TappedNavigationBarTable";

export default function CustomTableComponent({header,content, mode = "none"}: {header:React.ReactNode, content:React.ReactNode, mode?: "none" | "recordsTable"}){
    return (
         <Card className="relative grow py-3 px-1.5 font-montserrat shadow-[0px_8px_12px_#0000001A] rounded-[10px]">
            {mode === "recordsTable" && <TappedNavigationBarTable className="absolute right-20 h-9 flex flex-col "/>}
            <CardHeader className="border-b py-0! pb-3!">
                <CardTitle className="flex gap-2.5 items-center text-[14px] leading-4.5 tracking-[0.28px] font-medium">
                    {header}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-3.25 max-h-53.5">
                {content}
            </CardContent>
         </Card>
    )
}