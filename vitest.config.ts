import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Use describe/it/expect without importing them in every test file.
    globals: true,
    include: ["Lessons/advanced/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["Lessons/advanced/**/*.ts"],
      exclude: ["**/*.test.ts"],
    },
  },
});
