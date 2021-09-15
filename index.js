module.exports = {
  extends: "solhint:recommended",
  plugins: ["prettier"],
  rules: {
    "quotes": "off",
    "func-param-name-mixedcase": "error",
    "modifier-name-mixedcase": "error",
    "reason-string": ["error", { "maxLength": 32 }],
    "func-visibility": ["error", { "ignoreConstructors": true }],
    "compiler-version": ["off"],
    "reentrancy": ["off"],
    "not-rely-on-time": ["off"],
    "no-inline-assembly": "off",
    "private-vars-leading-underscore": "off",
    "prettier/prettier": "error",
  }
}
