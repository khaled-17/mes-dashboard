import CustomTableComponent from "./CustomTableComponent"
import { SignalHigh } from "lucide-react"
import { VerticalProgress } from "@/components/ui/vertical-progress"

const data = [
    { maxValue: 89, value: 70, color: "bg-contemporary-darkblue" },
    { maxvalue: 69, value: 39, color: "bg-contemporary-green" },
    { maxvalue: 82, value: 63, color: "bg-contemporary-purple" },
    { maxvalue: 34, value: 29, color: "bg-contemporary-lightpurple" },
    { maxvalue: 69, value: 69, color: "bg-contemporary-red" },
    { maxvalue: 89, value: 60, color: "bg-contemporary-orange" },
    { maxvalue: 18, value: 18, color: "bg-contemporary-lightorange" },
    { maxvalue: 69, value: 54, color: "bg-contemporary-lightgreen" },
    { maxvalue: 45, value: 45, color: "bg-contemporary-lightblue" },
    { maxvalue: 50, value: 35, color: "bg-contemporary-darkyellow" },
    { maxvalue: 30, value: 30, color: "bg-contemporary-darkerblue" },
    { maxvalue: 69, value: 54, color: "bg-contemporary-yellow" },
    { maxvalue: 89, value: 60, color: "bg-tertiary" },
    { maxvalue: 89, value: 0, color: "bg-purple-700" },
]

export default function MaterialWeightsTable(){
    return (
        <CustomTableComponent
                header={<><SignalHigh className="text-contemporary-darkerblue h-4.5 w-4.5" /> Material Weights Planned Vs Actual</>}
                content=
                {
                    <div className="flex items-end justify-around p-4 rounded-xl">
                        {data.map((item, i) => (
                            <VerticalProgress
                                key={i}
                                value={item.value}
                                maxvalue={item.maxvalue || 89}
                                indicatorColor={item.color}
                                className={`w-2.5 rounded-[3px] bg-slate-100`} // Grey "Planned" track
                            />
                        ))}
                    </div>
                }
            />
    )
}