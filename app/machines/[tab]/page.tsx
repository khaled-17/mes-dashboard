"use client";
import StatisticsPage from "@/view/Machines/statistics/statisticsPage";
import MachinesPage from "@/view/Machines/MachinesPage";
import { useParams } from "next/navigation";

const MachinesTabPage = () => {
  const params = useParams();
  const tab = params.tab; // ← شيل الـ s

  if (tab === "statistics") return <StatisticsPage />;
  if (tab === "history") return <div>History Page</div>;
  if (tab === "digitaltwin") return <div>Digital Twin Page</div>;

  return <MachinesPage />;
};

export default MachinesTabPage;