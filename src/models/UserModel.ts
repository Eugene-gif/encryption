import { QTableProps } from "quasar";

// //  Модель редактируемого пользователя
export interface EditUser {
  firstname: string;
  lastname: string;
  isBlocked: boolean;
  pin: string;
}

// Модель нового пользователя
export interface NewUser {
  firstname: string;
  lastname: string;
}

// Модель пользователя
export interface User {
  id: string;
  firstname: string;
  lastname: string;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
}

// Модель резервной копии
export interface Backup {
  id: string;
  date: string;
}

// Модель устройства пользователя
export interface Device {
  id: string;
  deviceName: string;
  lastLoginDate: string;
  isBlocked: boolean;
}

export const userColumns: QTableProps["columns"] = [
  {
    name: "name",
    required: true,
    label: "Имя и Фамилия",
    align: "left",
    field: (row) => `${row.lastname} ${row.firstname}`,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "createdAt",
    required: true,
    label: "Дата регистрации",
    align: "left",
    field: (row) => row.createdAt,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "isBlocked",
    required: true,
    label: "Заблокирован",
    align: "left",
    field: (row) => row.isBlocked,
    format: (val) => `${val ? "Заблокирован" : "Нет"}`,
    sortable: true,
  },
  {
    name: "actions",
    required: true,
    label: "Действия",
    align: "center",
    field: (row) => row.roles,
    format: (val) => `${val}`,
  },
];

export const userColumnsBackup: QTableProps["columns"] = [
  {
    name: "generatedAt",
    required: true,
    label: "Дата генерации",
    align: "left",
    field: (row) => row.generatedAt,
    format: (val) => `${val}`,
    sortable: true,
  },
];

export const userColumnsDevices: QTableProps["columns"] = [
  {
    name: "device",
    required: true,
    label: "Устройство",
    align: "left",
    field: (row) => row.device,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "lastLoginDate",
    required: true,
    label: "Дата входа",
    align: "left",
    field: (row) => row.lastLoginDate,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "deviceActions",
    required: true,
    label: "Действия",
    align: "right",
    field: (row) => row,
    format: (val) => `${val}`,
  },
];
