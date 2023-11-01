import { ref } from "vue";
import { Device } from "@/models/UserModel";

// Тестовый список устройств
export const devicesList = ref<Device[]>([
  {
    id: "1",
    deviceName: "Android 13.0 Tiramisu",
    lastLoginDate: "06.09.2023",
    isBlocked: true,
  },
  {
    id: "2",
    deviceName: "Android 11",
    lastLoginDate: "21.08.2023",
    isBlocked: false,
  },
  {
    id: "2",
    deviceName: "Android 10",
    lastLoginDate: "28.10.2023",
    isBlocked: false,
  },
]);
