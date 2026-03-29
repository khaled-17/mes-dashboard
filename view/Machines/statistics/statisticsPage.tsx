
import TopCards from "@/view/Machines/statistics/components/TopCards/TopCards";
import TableCard from "@/view/Machines/statistics/components/TableCard/TableCard";
import SideCard from "@/view/Machines/statistics/components/SideCard/SideCard";

export default function HomeView() {
  return (
    <div className="mx-auto w-full max-w-400 min-w-0">
      <p className="mb-4 mt-2 text-lg font-bold text-[#003F5C] sm:mt-4">
        Dashboard
      </p>

      <div className="flex min-w-0 flex-col gap-7 xl:flex-row">
        <div className="flex min-w-0 flex-1 flex-col gap-9">
          <div className="flex min-w-0 flex-wrap gap-8 lg:gap-7">
            <TopCards />
          </div>
          <TableCard />
        </div>
        <SideCard />
      </div>
    </div>
  );
}
