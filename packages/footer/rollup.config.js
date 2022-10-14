import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from 'rollup-plugin-typescript2';
const packageJSON = require("./package.json");

export default {
    input: ["src/index.tsx"],
    output: [
        {
            file: packageJSON.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJSON.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript(),
    ],
    external: ["react"]
};
