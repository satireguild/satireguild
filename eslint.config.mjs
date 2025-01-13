import js from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import tailwindEsLint from "eslint-plugin-tailwindcss";
import ts from "typescript-eslint";
const config = [
    js.configs.recommended,
    ...ts.configs.recommended,
    ...tailwindEsLint.configs["flat/recommended"],
    {
        plugins: {
            "@next/next": pluginNext,
        },
        rules: {
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs["core-web-vitals"].rules,
            "tailwindcss/no-custom-classname": ["off"],
        },
        ignores: ["out/", ".next/"],
    },
    eslintConfigPrettier,
];
export default config;
