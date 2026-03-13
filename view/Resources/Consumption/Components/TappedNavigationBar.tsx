import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TappedNavigationBar() {
    const path = usePathname();
    const activeTap = path.split("/").pop() || "process";
    const linkStyles = `
            text-[12px] font-normal 
            data-[state=active]:!font-bold 
            data-[state=active]:bg-primary 
            data-[state=active]:shadow-[1px_2px_6px_#0000001A] 
            data-[state=active]:min-w-30 
            data-[state=active]:text-white 
            text-[#4C788D] 
            flex-1 
            h-full
            rounded-[8px]
            `;
    return (
        <Tabs value={activeTap} className="w-85.25 h-9.5 flex">
            <TabsList className="rounded-[8px] bg-white shadow-[1px_2px_6px_#0000001C] tracking-[0.24px] font-montserrat leading-3.75 w-full h-full! p-0.5">
                <TabsTrigger value="process"  className={linkStyles} asChild>
                    <Link href={"/resources/consumption/process"}>PROCESS</Link>
                </TabsTrigger>
                <TabsTrigger value="routes" className={linkStyles} asChild>
                    <Link href={"/resources/consumption/routes"}>ROUTES</Link>
                </TabsTrigger>
                <TabsTrigger value="job-order" className={linkStyles} asChild>
                    <Link href={"/resources/consumption/job-order"}>JOB ORDER</Link>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}