module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/typescript"],
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-redeclare": "off",
    "no-constant-condition": "off",
    "no-case-declarations": "off"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
