import ConsumptionView from "@/view/Resources/Consumption";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col h-full">
           <ConsumptionView/>
            {children}
        </div>
    )
}