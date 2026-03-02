import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command, mode }) => {
  return {
    ssr: {
      noExternal: command === "build" ? true : undefined,
      optimizeDeps: {
        include: ["@prisma/client-generated"],
      },
    },
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    server: {
      host: true,
    },
    build: {
      rollupOptions: {
        external: ["@prisma/client-generated"],
      },
    },
    test: {
      globals: true,
      environment: "happy-dom",
    },
  };
});
