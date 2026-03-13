"use client";

import { useState } from "react";
import Header from "@/components/planning-section/PlanningHeader";
import TopBar from "@/components/planning-section/TopBar";
import RouteTimeline from "@/components/planning-section/RouteTimeline";
import VerticalStepper from "@/components/planning-section/VerticalStepper";
import OperationForm from "@/components/planning-section/OperationForm";
import PreDefinedProcesses from "@/components/planning-section/PreDefinedProcesses";

export default function PlanningPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeRouteStep, setActiveRouteStep] = useState(1);
  const [routeSteps] = useState([1, 2]);
  const [planningMode, setPlanningMode] = useState<"set-time" | "availability">(
    "set-time",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selections, setSelections] = useState({
    step1: { name: "", function: "" },
    step2: { date: "", time: "" },
    step3: { machine: "" },
    step4: { resources: [] as string[] },
  });

  const handleRouteStepClick = (stepIndex: number) => {
    if (activeStep > stepIndex) {
      // Return to step
      setActiveStep(stepIndex);
    } else {
      // Direct to next step
      setActiveStep(stepIndex + 1);
    }
    setActiveRouteStep(stepIndex);
  };

  const handleAddOperationClick = () => {
    const maxSteps = planningMode === "availability" ? 3 : 4;
    if (activeStep === maxSteps) {
      setActiveStep(1);
    } else {
      setActiveStep(maxSteps);
    }
  };

  const handlePlanningModeChange = (mode: "set-time" | "availability") => {
    setPlanningMode(mode);
    setActiveStep(1); // Reset to first step of the new mode
  };

  return (
    <div className="w-full flex flex-col bg-[#F4F7FE] font-sans text-[#0F172A] min-h-screen">
      <header className="-mt-8 -mx-8 mb-24">
        <Header />
      </header>

      <div className="w-full max-w-[1920px] mx-auto">
        <TopBar
          planningMode={planningMode}
          setPlanningMode={handlePlanningModeChange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="flex flex-col 2xl:flex-row gap-6 lg:gap-8 2xl:gap-12 px-4 md:px-6 2xl:px-10 mb-16 h-full relative">
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col items-center w-full min-w-0">
            <RouteTimeline
              activeRouteStep={activeRouteStep}
              setActiveRouteStep={handleRouteStepClick}
              routeSteps={routeSteps}
              onAddStep={handleAddOperationClick}
              activeStep={activeStep}
              planningMode={planningMode}
            />

            <div className="w-full flex flex-col lg:flex-row justify-center gap-6 lg:gap-10 xl:gap-12 2xl:gap-20 px-0 md:px-4 pt-4">
              <div className="flex-none pt-12 md:pt-24 lg:pt-12 flex justify-center">
                <VerticalStepper
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  selections={selections}
                  planningMode={planningMode}
                />
              </div>

              <div className="flex-1 w-full max-w-full lg:max-w-3xl 2xl:max-w-4xl">
                <OperationForm
                  activeStep={activeStep}
                  selections={selections}
                  setSelections={setSelections}
                  planningMode={planningMode}
                />
              </div>
            </div>
          </div>

          <div className="w-full 2xl:w-auto flex justify-center 2xl:sticky 2xl:top-8 self-start">
            <PreDefinedProcesses
              setActiveStep={setActiveStep}
              setSelections={setSelections}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
