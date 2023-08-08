import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts", "src/paths/index.ts"],
	target: "esnext",
	format: ["esm", "cjs"],
	splitting: false,
	sourcemap: true,
	clean: true,
});
