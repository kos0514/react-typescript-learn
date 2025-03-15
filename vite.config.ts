import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
      "~/": `${__dirname}/public/`,
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [react(), tsconfigPaths()],
});
