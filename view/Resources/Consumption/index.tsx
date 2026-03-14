import MaterialConsumptionTable from "./Components/MaterialConsumptionTable";
import MaterialWeightsTable from "./Components/MaterialWeightsTable";

export default function ConsumptionView() {

    return (
        <div className="grid gap-5.75 grid-cols-[1fr_2fr]">
            {/* first table */}
            <MaterialConsumptionTable />

            {/* second table */}
            <MaterialWeightsTable/>
        </div>
    )
}