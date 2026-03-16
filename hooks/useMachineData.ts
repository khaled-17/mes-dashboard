import { useState, useEffect } from 'react';
import { MachinesQueryParams, Machine } from '@/types/machine';

interface UseMachineDataReturn {
  machines: Machine[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const mockMachines: Machine[] = [
  {
    id: 'MCH-001',
    name: 'CNC Machine 1',
    type: 'CNC',
    status: 'active',
    efficiency: 94,
    production: 1250,
    lastMaintenance: '2024-01-15',
    operator: 'Ahmed Hassan'
  },
  {
    id: 'MCH-002',
    name: 'Assembly Line A',
    type: 'Assembly',
    status: 'active',
    efficiency: 88,
    production: 980,
    lastMaintenance: '2024-01-10',
    operator: 'Mohamed Ali'
  },
  {
    id: 'MCH-003',
    name: 'Welding Robot 1',
    type: 'Welding',
    status: 'maintenance',
    efficiency: 0,
    production: 0,
    lastMaintenance: '2024-02-01',
    operator: 'Saeed Khalid'
  },
  {
    id: 'MCH-004',
    name: 'Paint Booth 2',
    type: 'Painting',
    status: 'error',
    efficiency: 45,
    production: 320,
    lastMaintenance: '2023-12-20',
    operator: 'Omar Mahmoud'
  },
  {
    id: 'MCH-005',
    name: 'Testing Station 1',
    type: 'Testing',
    status: 'active',
    efficiency: 96,
    production: 1450,
    lastMaintenance: '2024-01-20',
    operator: 'Youssef Ahmed'
  },
];

export function useMachineData(params: MachinesQueryParams): UseMachineDataReturn {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Filter mock data based on params
      let filteredMachines = mockMachines;
      
      if (params.search) {
        filteredMachines = filteredMachines.filter(machine =>
          machine.name.toLowerCase().includes(params.search!.toLowerCase()) ||
          machine.type.toLowerCase().includes(params.search!.toLowerCase()) ||
          machine.id.toLowerCase().includes(params.search!.toLowerCase())
        );
      }
      
      if (params.status && params.status !== 'all') {
        filteredMachines = filteredMachines.filter(machine =>
          machine.status === params.status
        );
      }
      
      if (params.jobOrder) {
        // In a real app, this would filter by job order
        filteredMachines = filteredMachines.slice(0, 3);
      }
      
      if (params.route) {
        // In a real app, this would filter by route
        filteredMachines = filteredMachines.slice(0, 4);
      }

      setMachines(filteredMachines);
    } catch (err) {
      setError('Failed to fetch machine data');
      console.error('Error fetching machines:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.search, params.status, params.jobOrder, params.route]);

  return {
    machines,
    loading,
    error,
    refetch: fetchData,
  };
}
