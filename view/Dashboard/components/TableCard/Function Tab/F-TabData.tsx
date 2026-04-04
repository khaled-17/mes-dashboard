// ─── Types ────────────────────────────────────────────────────────────────────

export type MachineEntry = {
  color: string;
  name: string;
  active: boolean;
};

export type ProcessRow = {
  process: string;
  machines: MachineEntry[][];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export const data: ProcessRow[] = [
  {
    process: "ASSEMBLY",
    machines: [
      [
        { color: "#1B3A6B", name: "Pourtier 2200/2 Low Voltage-Assembly", active: true },
        { color: "#8D9192", name: "Kabmak-Armoring-Steel Tape", active: false },
      ],
      [{ color: "#1B3A6B", name: "Pourtier 2600/4-AssemblyMedium", active: true }],
      [{ color: "#1B3A6B", name: "Assembly 2200-Assembly/Wire Armoring", active: true }],
    ],
  },
  {
    process: "ASSEMBLY-ARMORING",
    machines: [
      [{ color: "#00BFFF", name: "Cortinovis 2600-Assembly/Wire Armoring", active: true }],
      [{ color: "#00BFFF", name: "Cortinovis 2600-Assembly/Wire", active: true }],
      [],
    ],
  },
  {
    process: "DRAWING",
    machines: [
      [{ color: "#22C55E", name: "Pourtier 2200/2 Low Voltage-Assembly", active: true }],
      [{ color: "#22C55E", name: "Assembly 2200-Assembly/Wire Armoring", active: true }],
      [{ color: "#8D9192", name: "Kabmak-Armoring-Steel Tape", active: false }],
    ],
  },
  {
    process: "EXTRUSION",
    machines: [
      [{ color: "#84CC16", name: "Pourtier 2200/2 Low Voltage-Assembly", active: true }],
      [{ color: "#84CC16", name: "Assembly 2200-Assembly/Wire Armoring", active: true }],
      [{ color: "#8D9192", name: "Kabmak-Armoring-Steel Tape", active: false }],
    ],
  },
  {
    process: "INSULATION",
    machines: [
      [
        { color: "#EAB308", name: "Kabmak-Armoring-Steel Tape", active: true },
        { color: "#EAB308", name: "Armoring D-Steel Tape", active: true },
      ],
      [
        { color: "#EAB308", name: "Lead/Steel Tape Armoring", active: true },
        { color: "#8D9192", name: "Kabmak-Armoring-Steel Tape", active: false },
      ],
      [
        { color: "#EAB308", name: "Kabmak New-Armoring", active: true },
        { color: "#8D9192", name: "Kabmak-Armoring-Steel Tape", active: false },
      ],
    ],
  },
  {
    process: "INSULATION-EXTRUSION",
    machines: [
      [
        { color: "#F97316", name: "Pourtier 2200/2 Low Voltage-Assembly", active: true },
        { color: "#8D9192", name: "Kabmak-Armoring-Steel Tape", active: false },
      ],
      [{ color: "#F97316", name: "Pourtier 2600/4-Assembly-Medium", active: true }],
      [{ color: "#F97316", name: "Assembly 2200-Assembly/Wire Armoring", active: true }],
    ],
  },
  {
    process: "ARMORING",
    machines: [
      [
        { color: "#EF4444", name: "Kabmak-Armoring-Steel Tape", active: true },
        { color: "#EF4444", name: "Kabmak New-Armoring", active: true },
      ],
      [
        { color: "#EF4444", name: "Armoring D-Steel Tape", active: true },
        { color: "#8D9192", name: "Kabmak-Armoring-Steel Tape", active: false },
      ],
      [
        { color: "#EF4444", name: "Lead/Steel Tape Armoring", active: true },
        { color: "#8D9192", name: "Kabmak-Armoring-Steel Tape", active: false },
      ],
    ],
  },
  {
    process: "LEAD",
    machines: [
      [{ color: "#EC4899", name: "Pourtier 2200/2 Low Voltage-Assembly", active: true }],
      [{ color: "#EC4899", name: "Assembly 2200-Assembly/Wire Armoring", active: true }],
      [{ color: "#8D9192", name: "Kabmak-Armoring-Steel Tape", active: false }],
    ],
  },
  {
    process: "SCREENING",
    machines: [
      [{ color: "#8B5CF6", name: "Cortinovis 2600-Assembly/Wire Armoring", active: true }],
      [{ color: "#8B5CF6", name: "Cortinovis 2600-Assembly/Wire", active: true }],
      [],
    ],
  },
  {
    process: "STRANDING",
    machines: [
      [
        { color: "#1B3A6B", name: "Pourtier 2200/2 Low Voltage-Assembly", active: true },
        { color: "#8D9192", name: "Kabmak-Armoring-Steel Tape", active: false },
      ],
      [{ color: "#1B3A6B", name: "Pourtier 2600/4-Assembly-Medium", active: true }],
      [{ color: "#1B3A6B", name: "Assembly 2200-Assembly/Wire Armoring", active: true }],
    ],
  },
];