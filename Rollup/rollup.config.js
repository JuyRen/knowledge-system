import typescript from "rollup-plugin-typescript";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "myModule",
    globals: {
      lodash: "_",
    },
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**",
    }),
    typescript(),
  ],
  external: ["lodash"],
};
