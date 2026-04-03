import BreadcrumbsComponent from "@/components/BreadcrumbComponent";
import ModalWithTabs from "@/components/resources/ResourceButton/Modal";
import ResourcesCart from "@/components/resources/ResourcesCart";
import ResourcesCharts from "@/components/resources/ResourcesCharts";
import ResourcesTable from "@/components/resources/ResourcesTable";

const ProductScrap = () => {
  return (
    <main>
      <div className="flex justify-between">
        <BreadcrumbsComponent />
        <ModalWithTabs />
      </div>
      <div className="grid grid-cols-3 mt-4">
        <ResourcesCart />
        {/* Charts */}
        <ResourcesCharts />
      </div>
      {/* Tables */}
      <div className="mt-9">
        <ResourcesTable />
      </div>
    </main>
  );
};

export default ProductScrap;
