import { QTableProps } from "quasar";

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
}

//  Модель редактируемого пользователя
export interface EditUser {
  firstname: string;
  lastname: string;
  isBlocked: boolean;
  pin: string;
}

//  Модель нового пользователя
export interface NewUser {
  email: string;
  password: string | number;
  firstname: string;
  middlename: string;
  lastname: string;
  biography: string;
  organization: string;
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

export const userActions: {
  icon: string;
  label?: string;
  emit: string;
}[] = [
  {
    icon: "mode_edit",
    emit: "onEdit",
  },
  {
    icon: "block",
    emit: "onBlock",
  },
];
