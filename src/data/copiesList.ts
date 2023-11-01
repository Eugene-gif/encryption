import { ref } from "vue";
import { Backup } from "@/models/UserModel";

// Тестовый список резервных копий
export const copiesList = ref<any>([
  {
    id: "1",
    date: "20.05.2023",
  },
  {
    id: "2",
    date: "22.08.2023",
  },
]);
