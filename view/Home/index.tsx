import TopCards from "./components/TopCards/TopCards";
// import TableCard from "./components/table/Function Table/TableCard";
import TableCard from "./components/TableCard/TableCard";
import SideCard from "./components/sideCard/SideCard";

export default function HomeView() {

    
    return (
        <div className="w-fit m-auto">
            <p className="font-bold text-[#003F5C] text-lg mb-4 mt-8">Dashboard</p>

            <div className="flex gap-8">
                <div className="flex flex-col gap-9">
                    <div className="flex gap-8">
                        <TopCards />
                    </div>
                    <TableCard />
                </div>
                <SideCard />
            </div>
        </div>
    );
}
