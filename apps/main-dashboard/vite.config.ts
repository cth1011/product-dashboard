import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    federation({
      name: "main_dashboard",
      remotes: {
        item_module: {
          type: "module",
          name: "item_module",
          entry: "http://localhost:5001/remoteEntry.js",
          entryGlobalName: "item_module",
          shareScope: "default",
        },
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    react(),
    tailwindcss(),
  ],
  build: {
    commonjsOptions: {
      include: [/node_modules/, /packages\/ui/],
    },
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5000,
    strictPort: true,
    fs: {
      allow: ["."],
    },
  },
  preview: {
    port: 5000,
    strictPort: true,
  },
});
