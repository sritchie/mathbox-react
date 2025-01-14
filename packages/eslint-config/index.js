module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.stories.*",
          "**/*.spec.*",
          "**/rollup.*",
          "**/vite.*",
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "react/destructuring-assignment": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        filter: {
          regex: "^_",
          match: false,
        },
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "either"
      }
    ]
  },
  settings: {},
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
      },
    },
    {
      files: ["**/*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.*.json"]
  },
  ignorePatterns: ["build/", "node_modules/"]
}
