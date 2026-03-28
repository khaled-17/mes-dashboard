import BreadcrumbsComponent from "@/components/BreadcrumbComponent";


const ManufacturingPage = () => {
  return (
    <div className="space-y-4">
      <BreadcrumbsComponent />

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800">
          Manufacturing Overview
        </h1>
        <p className="mt-2 text-slate-500">
          Manufacturing dashboard content can be rendered here based on the
          selected header tab.
        </p>
      </section>
    </div>
  );
};

export default ManufacturingPage;
