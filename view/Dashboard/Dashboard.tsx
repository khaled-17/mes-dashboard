// import TopCards from "./components/TopCards/TopCards";
import TopCards from "@/view/Dashboard/components/TopCards/TopCards";
import TableCard from "./components/TableCard/TableCard";
import SideCard from "./components/side Card/SideCard";

export default function DahboardView() {
  return (
    <div className="mx-auto w-full max-w-400 min-w-0">
      <p className="mb-4 mt-2 text-lg font-bold text-[#003F5C] sm:mt-4">
        Dashboard
      </p>

      <div className="flex min-w-0 flex-col gap-7 xl:flex-row">
        <div className="flex min-w-0 flex-1 flex-col gap-9">
          <div className="flex flex-col min-[1850px]:flex-row gap-7">
            <TopCards />
          </div>
          <TableCard />
        </div>
        <SideCard />
      </div>
    </div>
  );
}
