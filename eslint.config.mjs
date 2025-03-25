import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginJestDom from "eslint-plugin-jest-dom";
import pluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    rules: eslintPluginReactHooks.configs.recommended.rules,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    // for jest test files
    // files: [
    //   "**/*.{spec,test}.{js,cjs,mjs,jsx}",
    //   "**/__tests__/**/*.{js,cjs,mjs,jsx}",
    // ],
    files: [
      "**/*.{spec,test}.?(c|m)[jt]s?(x)",
      "**/__tests__/**/*.?(c|m)[jt]s?(x)",
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
        fetchMock: "readonly",
      },
    },
  },
  {
    // for other non test files
    // files: ["**/*.{js,cjs,mjs,jsx}"],
    files: ["**/*.?(c|m)[jt]s?(x)"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  eslintPluginJest.configs["flat/recommended"],
  eslintPluginJestDom.configs["flat/recommended"],
  eslintConfigPrettier,
];
