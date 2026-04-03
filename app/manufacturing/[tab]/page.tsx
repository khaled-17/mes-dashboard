import ManufacturingPage from "@/view/Manufacturing/ManufacturingPage";
import ProcessPage from "@/view/Manufacturing/ProcessPage/ProcessPage";


interface Props {
  params: Promise<{ tab: string }>;
}

const ManufacturingTabPage = async ({ params }: Props) => {
  const { tab } = await params;

  if (tab === "process") {
    return <ProcessPage />;
  }


  return <ManufacturingPage />;
};

export default ManufacturingTabPage;