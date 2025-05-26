import { definePreset } from "@primeng/themes";
import Aura from "@primeng/themes/aura";

const baseColor = "#f41a56";

export const GlobalPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#ffe6ed",
      100: "#ffb3c7",
      200: "#ff80a1",
      300: "#ff4d7b",
      400: "#ff265f",
      500: baseColor,
      600: "#d9144b",
      700: "#3a071a",
      800: "#260513",
      900: "#16020a",
      default: baseColor,
    },
    colorScheme: {
      surface: {
        0: "#ffffff",
        50: "#f8f9fa",
        100: "#f1f3f5",
        200: "#e9ecef",
        300: "#dee2e6",
        400: "#ced4da",
        500: "#adb5bd",
        600: "#868e96",
        700: "#000000",
        800: "#000000",
        900: "#000000",
        950: "#000000",
      },
    },
  },
});
