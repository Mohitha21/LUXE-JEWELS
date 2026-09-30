import { cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const pages = [
  "index",
  "products",
  "product-details",
  "register",
  "login",
  "checkout",
  "cart",
  "order-confirmation",
];

export default defineConfig({
  plugins: [
    {
      name: "copy-storefront-assets",
      async closeBundle() {
        await Promise.all(
          ["js", "images"].map((directory) => {
            const source = resolve(import.meta.dirname, directory);
            if (!existsSync(source)) return;
            return cp(source, resolve(import.meta.dirname, "dist", directory), {
              recursive: true,
            });
          }),
        );
      },
    },
  ],
  build: {
    rolldownOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page, resolve(import.meta.dirname, `${page}.html`)]),
      ),
    },
  },
});