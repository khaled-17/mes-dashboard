import TopCards from "./components/TopCards/TopCards";
// import TableCard from "./components/table/Function Table/TableCard";
import TableCard from "./components/TableCard/TableCard";
import SideCard from "./components/sideCard/SideCard";

export default function HomeView() {

    return (
        <div className="w-fit m-auto">
            <p className="font-bold text-[#003F5C] text-2xl mb-8">Dashboard</p>

            <div className="flex gap-10">
                <div className="flex flex-col gap-11">
                    <div className="flex gap-9">
                        <TopCards />
                    </div>
                    <TableCard />
                </div>
                <SideCard />
            </div>
        </div>
    );
}
