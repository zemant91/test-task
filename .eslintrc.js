module.exports = {
  root: true,
  extends: ["@react-native", "prettier"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "react-hooks/exhaustive-deps": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
