'use client'

import { useState } from "react"
import MachineTable from "@/components/machines/MachineTable"
import MachineChart from "@/components/machines/MachineChart"
import LayersFilter from "@/components/filters/LayersFilter"
import OptionsFilter from "@/components/filters/OptionsFilter"
import {  ChartSpline, List,  Search } from "lucide-react"

export default function MachinesHistoryPage() {

  const [status, setStatus] = useState("")
  const [materialConsumption, setMaterialConsumption] = useState(0)
  const [energyConsumption, setEnergyConsumption] = useState(0)
  const [production, setProduction] = useState(0)

  const [activeView, setActiveView] = useState<"list" | "chart">("list")

  const [jobOrder, setJobOrder] = useState("")
  const [route, setRoute] = useState("")
  const [activeTab, setActiveTab] = useState("FUNCTION")

  const [functions, setFunctions] = useState([
    { label: "Cutting", checked: false },
    { label: "Assembly", checked: false },
    { label: "Welding", checked: false },
    { label: "Painting", checked: false },
    { label: "Testing", checked: false },
    { label: "Packaging", checked: false },
  ])

  const handleFunctionToggle = (label: string, checked: boolean) => {
    setFunctions(prev =>
      prev.map(func =>
        func.label === label ? { ...func, checked } : func
      )
    )
  }

  return (

    <div className="min-h-screen ">

      {/* Page Wrapper */}
      <div className="max-w-[1500px] mx-auto px-6 py-8 space-y-6">


        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span className="text-blue-600 font-semibold">Machines</span>
            <span>/</span>
            <span>History</span>
          </div>

          {/* Search */}
          <div className="w-full lg:w-[320px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              placeholder="Search machine..."
              className="w-full border bg-white border-gray-200 rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
          </div>

        </div>


        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">


          {/* MAIN CONTENT */}
          <div className="space-y-6">


            {/* Table Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm">


              {/* Table Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">

                <div className="flex items-center gap-2">
                  <List className="w-5 h-5 text-gray-600" />
                  <h2 className="text-gray-800 font-semibold">
                    Machines History
                  </h2>
                </div>
                {/* View Switch */}
                <div className="flex gap-5 items-center  justify-end text-sm">

                  <div className="flex items-start gap-2">
                    <List className="w-4 h-4 text-gray-600" />
                    <button
                      onClick={() => setActiveView("list")}
                      className={`font-medium cursor-pointer border-b-2 pb-1 transition-colors ${activeView === "list"
                        ? "text-blue-600 border-blue-600"
                        : "text-gray-400 border-transparent hover:text-gray-600"
                        }`}
                    >

                      List
                    </button>
                  </div>

                  <div className="flex items-start gap-2">
                    <ChartSpline className="w-4 h-4 text-gray-600" />
                    <button
                    onClick={() => setActiveView("chart")}
                    className={`font-medium cursor-pointer border-b-2 pb-1 transition-colors ${activeView === "chart"
                      ? "text-blue-600 border-blue-600"
                      : "text-gray-400 border-transparent hover:text-gray-600"
                      }`}
                  >
                    Chart
                  </button>
                  </div>

                </div>

              </div>


              {/* Table Content */}
              <div className="p-4">

                {activeView === "list" ? (

                  <MachineTable
                    machines={[]}
                    loading={false}
                    error={null}
                    onRetry={() => { }}
                  />

                ) : (

                  <MachineChart />

                )}

              </div>

            </div>

          </div>



          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* Layers Filter */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">

              <LayersFilter
                jobOrder={jobOrder}
                onJobOrderChange={setJobOrder}
                route={route}
                onRouteChange={setRoute}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                functions={functions}
                onFunctionToggle={handleFunctionToggle}
              />

            </div>


            {/* Options Filter */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">

              <OptionsFilter
                status={status}
                onStatusChange={setStatus}
                materialConsumption={materialConsumption}
                onMaterialConsumptionChange={setMaterialConsumption}
                energyConsumption={energyConsumption}
                onEnergyConsumptionChange={setEnergyConsumption}
                production={production}
                onProductionChange={setProduction}
              />

            </div>

          </div>


        </div>

      </div>

    </div>

  )
}