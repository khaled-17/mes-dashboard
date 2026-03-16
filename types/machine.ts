export interface Machine {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive' | 'maintenance' | 'error';
  efficiency: number;
  production: number;
  lastMaintenance: string;
  operator: string;
}

export interface FilterOptions {
  jobOrder: string;
  route: string;
  activeTab: string;
  functions: Array<{ label: string; checked: boolean }>;
  status: string;
  materialConsumption: number;
  energyConsumption: number;
  production: number;
}

export interface MachinesQueryParams {
  search?: string;
  status: string;
  jobOrder?: string;
  route?: string;
  page: number;
  limit: number;
}
