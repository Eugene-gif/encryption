import { QTableProps } from "quasar";

// Account columns
export const AccountColumns: QTableProps["columns"] = [
  {
    name: "clientName",
    required: true,
    label: "Account",
    align: "left",
    field: (row: any) => row.name,
    format: (val: any) => `${val}`,
    sortable: true,
  },
  {
    name: "balance",
    align: "left",
    label: "Balance",
    field: (row: any) => row,
    sortable: true,
  },
  {
    name: "spend",
    align: "left",
    label: "Spend",
    field: (row: any) => row.balance ?? 0,
    sortable: true,
  },
  {
    name: "left",
    align: "left",
    label: "Left",
    field: (row: any) => row.balance ?? 0,
  },
  {
    name: "status",
    align: "center",
    label: "Status",
    field: (row: any) => row.accountStatus ?? 0,
  },
  {
    name: "details",
    align: "center",
    label: "Details",
    field: "details",
  },
];
