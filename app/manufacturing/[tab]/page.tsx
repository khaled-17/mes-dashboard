import ManufacturingPage from "@/view/Manufacturing/ManufacturingPage";
import ProcessPage from "@/view/Manufacturing/ProcessPage/ProcessPage";
import RoutesPage from "@/view/Manufacturing/RoutesPage/RoutesPage";

interface Props {
  params: Promise<{ tab: string }>;
}

const ManufacturingTabPage = async ({ params }: Props) => {
  const { tab } = await params;

  if (tab === "process") {
    return <ProcessPage />;
  }

  if (tab === "routes") {
    return <RoutesPage />;
  }

  return <ManufacturingPage />;
};

export default ManufacturingTabPage;
