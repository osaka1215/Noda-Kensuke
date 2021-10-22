module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "comma-dangle": ["error", "only-multiline"],
  }
};
