import BreadcrumbsComponent from "@/components/BreadcrumbComponent";


const MachinesPage = () => {
  return (
    <div className="space-y-4">
      <BreadcrumbsComponent />

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800">Machines Overview</h1>
        <p className="mt-2 text-slate-500">
          Machines dashboard content can be rendered here based on the selected
          header tab.
        </p>
      </section>
    </div>
  );
};

export default MachinesPage;
