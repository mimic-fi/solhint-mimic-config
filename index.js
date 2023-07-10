module.exports = {
  extends: "solhint:recommended",
  plugins: ["prettier"],
  rules: {
    "quotes": "off",
    "no-global-import": "off",
    "func-param-name-mixedcase": "error",
    "modifier-name-mixedcase": "error",
    "reason-string": ["error", { "maxLength": 32 }],
    "func-visibility": ["error", { "ignoreConstructors": true }],
    "compiler-version": ["off"],
    "reentrancy": ["off"],
    "not-rely-on-time": ["off"],
    "no-inline-assembly": "off",
    "func-name-mixedcase": "off",
    "private-vars-leading-underscore": "off",
    "prettier/prettier": "error",
  }
}
