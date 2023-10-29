import { QTableProps } from "quasar";

export interface User {
  id: string;
  email?: string;
  account: {
    email: string;
    id: string;
    isBlocked: boolean;
  };
  biography: string;
  firstname: string;
  middlename: string;
  lastname: string;
  createdAt: string;
  updatedAt: string;
}

//  Модель редактируемого пользователя
export interface EditUser {
  firstname: string;
  middlename: string;
  lastname: string;
  biography: string;
  organization: string;
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
    name: "email",
    required: true,
    label: "Email",
    align: "left",
    field: (row) => row.account.email,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "firstname",
    required: true,
    label: "ФИО",
    align: "left",
    field: (row) =>
      `${row.lastname} ${row.firstname} ${row.middlename}`,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "roles",
    required: true,
    label: "Роль/Роли",
    align: "left",
    field: (row) => row.account.roles,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "isBlocked",
    required: true,
    label: "Заблокирован",
    align: "left",
    field: (row) => row.account.isBlocked,
    format: (val) => `${val ? "Заблокирован" : "Нет"}`,
    sortable: true,
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
