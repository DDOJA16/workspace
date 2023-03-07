module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ["node_modules/"],
  extends: ["react-app", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: { "explicit-module-boundary-types": "off" },
};
