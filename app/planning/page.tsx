
import TopBar from "@/components/planning-section/TopBar";
import RouteTimeline from "@/components/planning-section/RouteTimeline";
import VerticalStepper from "@/components/planning-section/VerticalStepper";
import OperationForm from "@/components/planning-section/OperationForm";
import PreDefinedProcesses from "@/components/planning-section/PreDefinedProcesses";

export default function PlanningPage() {
  return (
    <div className="w-full flex flex-col font-sans text-[#0F172A]">
     

      <TopBar />

      <div className="flex gap-12 px-8 mb-16">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col relative items-center">
          <RouteTimeline />

          <div className="w-full relative flex justify-center px-4">
            <div className="absolute left-8 top-12">
              <VerticalStepper />
            </div>
            <OperationForm />
          </div>
        </div>

        <PreDefinedProcesses />
      </div>
    </div>
  );
}
