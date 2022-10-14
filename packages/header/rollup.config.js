const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')
const packageJSON = require("./package.json");

module.exports = {
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
