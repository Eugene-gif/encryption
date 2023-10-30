import { ref } from "vue";
import { User } from "@/models/UserModel";

// Тестовый список пользователей
export const usersList = ref<User[]>([
  {
    id: "1",
    firstname: "Иван",
    lastname: "Иванов",
    isBlocked: true,
    createdAt: "23.08.2023",
    updatedAt: "24.10.2023",
  },
  {
    id: "2",
    firstname: "Пётр",
    lastname: "Петрович",
    isBlocked: false,
    createdAt: "26.08.2022",
    updatedAt: "24.10.2023",
  },
  {
    id: "3",
    firstname: "Семён",
    lastname: "Семёнов",
    isBlocked: false,
    createdAt: "01.06.2022",
    updatedAt: "24.10.2023",
  },
  {
    id: "4",
    firstname: "Алексей",
    lastname: "Яшин",
    isBlocked: false,
    createdAt: "01.06.2022",
    updatedAt: "24.10.2023",
  },
  {
    id: "5",
    firstname: "Яша",
    lastname: "Алексеев",
    isBlocked: false,
    createdAt: "01.06.2022",
    updatedAt: "24.10.2023",
  },
  {
    id: "6",
    firstname: "Борис",
    lastname: "Бритва",
    isBlocked: false,
    createdAt: "01.06.2022",
    updatedAt: "24.10.2023",
  },
]);
