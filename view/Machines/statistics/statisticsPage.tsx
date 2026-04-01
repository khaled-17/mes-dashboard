import BreadcrumbsComponent from "@/components/BreadcrumbComponent";
import TopCards from "@/view/Machines/statistics/components/TopCards/TopCards";
import TableCard from "@/view/Machines/statistics/components/TableCard/TableCard";
import SideCard from "@/view/Machines/statistics/components/SideCard/SideCard";

export default function HomeView() {
  return (
    <div className="mx-auto w-full max-w-400 min-w-0">
      <BreadcrumbsComponent />

      <div className="mt-8 flex min-w-0 flex-col gap-7 xl:flex-row">
        <div className="flex min-w-0 flex-1 flex-col gap-9">
          <div className="flex flex-col min-[1760px]:flex-row gap-7">
            <TopCards />
          </div>
          <TableCard />
        </div>
        <SideCard />
      </div>
    </div>
  );
}
