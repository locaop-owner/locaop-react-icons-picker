import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: false, // ソースマップを無効にする
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: false, // ソースマップを無効にする
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
  external: ["react", "react-dom", "@emotion/react"], // ReactとReactDOM、Emotionを外部依存として指定
};
