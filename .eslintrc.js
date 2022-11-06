module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecamFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: {},
};
