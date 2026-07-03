import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Application 100 % front : les données sont chargées localement (src/data/epochs.json).
export default defineConfig({
  plugins: [react()],
  base: '/Histomap/',
  server: {
    port: 5173,
    open: true,
  },
});
