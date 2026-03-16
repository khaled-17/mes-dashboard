'use client';

import React, { useState } from "react";
import { AlertCircle, CheckCircle, Clock, Wrench, XCircle, ChevronDown, ChevronRight, Activity } from "lucide-react";

export interface Machine {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'maintenance' | 'error';
  lastWork: string;
  lastFix: string;
}

export interface MachineTableProps {
  machines: Machine[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

// Mock data
export const mockMachines: Machine[] = [
  { id: 'MCH-001', name: 'CNC Machine 1', status: 'active', lastWork: '2024-02-15 14:30', lastFix: '2024-01-15 09:00' },
  { id: 'MCH-002', name: 'Assembly Line A', status: 'active', lastWork: '2024-02-15 16:45', lastFix: '2024-01-10 11:30' },
  { id: 'MCH-003', name: 'Welding Robot 1', status: 'maintenance', lastWork: '2024-02-14 08:15', lastFix: '2024-02-01 13:00' },
  { id: 'MCH-004', name: 'Paint Booth 2', status: 'error', lastWork: '2024-02-13 12:00', lastFix: '2023-12-20 10:30' },
  { id: 'MCH-005', name: 'Testing Station 1', status: 'active', lastWork: '2024-02-15 15:20', lastFix: '2024-01-20 14:15' },
  { id: 'MCH-005', name: 'Testing Station 1', status: 'active', lastWork: '2024-02-15 15:20', lastFix: '2024-01-20 14:15' },
  { id: 'MCH-005', name: 'Testing Station 1', status: 'active', lastWork: '2024-02-15 15:20', lastFix: '2024-01-20 14:15' },
  { id: 'MCH-005', name: 'Testing Station 1', status: 'active', lastWork: '2024-02-15 15:20', lastFix: '2024-01-20 14:15' },
  { id: 'MCH-005', name: 'Testing Station 1', status: 'active', lastWork: '2024-02-15 15:20', lastFix: '2024-01-20 14:15' },
  { id: 'MCH-005', name: 'Testing Station 1', status: 'active', lastWork: '2024-02-15 15:20', lastFix: '2024-01-20 14:15' },
  { id: 'MCH-005', name: 'Testing Station 1', status: 'active', lastWork: '2024-02-15 15:20', lastFix: '2024-01-20 14:15' },
  { id: 'MCH-005', name: 'Testing Station 1', status: 'active', lastWork: '2024-02-15 15:20', lastFix: '2024-01-20 14:15' },
];

const getStatusIcon = (status: Machine['status']) => {
  switch (status) {
    case 'active': return <Activity className="w-5 h-5 text-blue-500" />;
    case 'maintenance': return <Activity className="w-5 h-5 text-blue-500" />;
    case 'error': return <Activity className="w-5 h-5 text-blue-500" />;
    default: return <Activity className="w-5 h-5 text-blue-500" />;
  }
};


// const getStatusIcon = (status: Machine['status']) => {
//   switch (status) {
//     case 'active': return <CheckCircle className="w-5 h-5 text-green-500" />;
//     case 'maintenance': return <Wrench className="w-5 h-5 text-yellow-500" />;
//     case 'error': return <XCircle className="w-5 h-5 text-red-500" />;
//     default: return <Clock className="w-5 h-5 text-gray-500" />;
//   }
// };


const getStatusBadge = (status: Machine['status']) => {
  const base = "px-2 py-1 rounded-full text-xs ";
  switch (status) {
    case 'active': return `${base} bg-green-100 text-green-800`;
    case 'maintenance': return `${base} bg-yellow-100 text-yellow-800`;
    case 'error': return `${base} bg-red-100 text-red-800`;
    default: return `${base} bg-gray-100 text-gray-800`;
  }
};

export default function MachineTable({ machines, loading, error, onRetry }: MachineTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const displayMachines = machines.length > 0 ? machines : mockMachines;

  const toggleRow = (id: string) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (loading) return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
  if (error) return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
      <p className="text-gray-600 mb-4">{error}</p>
      <button onClick={onRetry} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
        Retry
      </button>
    </div>
  );

  return (
    <div className="bg-white h-[calc(100vh-220px)] flex flex-col">
      <div className="flex-1 overflow-auto custom-scrollbar">
        <table className="min-w-full text-sm ">

          {/* HEADER */}
          <thead className=" border-b sticky top-0 z-10 bg-white ">
            <tr className="text-left font-bold text-xs bg-white border-b border-gray-200 mb-10  uppercase tracking-wider">

              <th className="px-6 py-3">Machine ID</th>

              <th className="px-6 py-3">Machine Name</th>

              <th className="px-6 py-3">Status</th>

              <th className="px-6 py-3">Last Work</th>

              <th className="px-6 py-3">Last Fix</th>

            </tr>
          </thead>


          {/* BODY */}
          <tbody className="divide-y divide-gray-100">
            {displayMachines.map((machine) => (
              <React.Fragment key={machine.id}>
                {/* Main Row */}
                <tr
                  className="hover:bg-blue-50/40 transition-colors duration-200 cursor-pointer"
                  onClick={() => toggleRow(machine.id)}
                >
                  {/* ID with Arrow */}
                  <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {expandedRows.has(machine.id) ? (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      )}
                      {machine.id}
                    </div>
                  </td>

                  {/* NAME */}
                  <td className="px-6 py-4 text-gray-700 max-w-[200px] truncate">
                    {machine.name}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(machine.status)}

                    </div>
                  </td>

                  {/* LAST WORK */}
                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                    {machine.lastWork}
                  </td>

                  {/* LAST FIX */}
                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                    {machine.lastFix}
                  </td>
                </tr>

                {/* Expanded Details Row */}
                {expandedRows.has(machine.id) && (
                  <tr className="bg-blue-50/20">
                    <td colSpan={5} className="px-6 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        {/* Additional Details */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-700 text-xs uppercase tracking-wide">Performance</h4>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Efficiency:</span>
                              <span className="font-medium text-gray-900">94%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Production:</span>
                              <span className="font-medium text-gray-900">1,250 units</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-700 text-xs uppercase tracking-wide">Maintenance</h4>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Next Due:</span>
                              <span className="font-medium text-gray-900">2024-03-15</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Operator:</span>
                              <span className="font-medium text-gray-900">John Smith</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-700 text-xs uppercase tracking-wide">Status Details</h4>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Uptime:</span>
                              <span className="font-medium text-green-600">98.5%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Last Error:</span>
                              <span className="font-medium text-gray-900">None</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
                        <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                          View Details
                        </button>
                        <button className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
                          Schedule Maintenance
                        </button>
                        <button className="px-3 py-1 text-xs border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition">
                          Export Report
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}