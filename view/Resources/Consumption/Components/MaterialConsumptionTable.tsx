import CustomTableComponent from "./CustomTableComponent";
import { Leaf } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function MaterialConsumptionTable() {
    const numberStyle = "font-medium text-[24px] tracking-[0.48px] leading-5";
    const unitStyle = "font-medium text-[17px] tracking-[0.34px] leading-5"
    return (
        <div className="max-w-125">
        <CustomTableComponent
            header={<><Leaf /> Total Material Consumption</>}
            content={
                <div>
                    <div className="flex justify-between">
                        <div>
                            <div><span className={numberStyle}>5,000</span> <span className={unitStyle}>KM</span></div>
                            <div className="text-primary font-light text-[12px] leading-3.5 tracking-[0.24px]">
                                <div>Actual Material</div>
                                <div>Weight</div>
                            </div>
                        </div>
                        <div>
                            <div><span className={numberStyle}>7,000</span> <span className={unitStyle}>KM</span></div>
                            <div className="text-[#9D9D9D] font-light text-[12px] leading-3.5 tracking-[0.24px]">
                                <div>Planned Material</div>
                                <div>Weight</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-7 flex gap-3 justify-center items-center font-[]">
                        <Progress value={75} className="h-2 bg-[#B2BEC39C]" />
                        <span className="text-[24px] font-bold">75%</span>
                    </div>
                </div>
            } />
            </div>
    )
}