// import TopCards from "./components/TopCards/TopCards";
import TopCards from "@/view/Home/components/TopCards/TopCards";
import TableCard from "./components/TableCard/TableCard";
import SideCard from "./components/side Card/SideCard";

export default function HomeView() {
  return (
    <div className="mx-auto w-full max-w-[1600px] min-w-0">
      <p className="mb-4 mt-2 text-lg font-bold text-[#003F5C] sm:mt-4">
        Dashboard
      </p>

      <div className="flex min-w-0 flex-col gap-6 xl:flex-row">
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <div className="flex min-w-0 flex-wrap gap-4 lg:gap-6">
            <TopCards />
          </div>
          <TableCard />
        </div>
        <SideCard />
      </div>
    </div>
  );
}
