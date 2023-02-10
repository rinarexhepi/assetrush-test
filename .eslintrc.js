module.exports = {
  root: true,
  extends: [
    "@antfu/eslint-config-ts", // change to superset '@antfu' after switching to vue3
    "plugin:vue/recommended", // delete after switching to vue3
    "plugin:vue-scoped-css/recommended", // change to 'plugin:vue-scoped-css/vue3-recommended' after switching to vue3
    "plugin:tailwindcss/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier-vue/recommended",
    "prettier",
  ],
  plugins: ["tailwindcss", "unused-imports", "@typescript-eslint"],
  ignorePatterns: ["!.*rc.*", "!*.config.js", "dist", "static"],
  rules: {
    /*
     * Disable native ESLint rules that don't work well with TypeScript
     * =======================================================================================
     */
    // no-undef does not know about types that are available in TypeScript
    "no-undef": "off",

    // no-dupe-class-members cannot handle typescript's function overloading
    "no-dupe-class-members": "off",

    /*
     * Rules native to ESLint follow
     * =======================================================================================
     */
    "no-console": "warn",
    "no-debugger": "warn",
    "arrow-parens": ["warn", "always", { requireForBlockBody: false }],
    "space-before-function-paren": [
      "warn",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "consistent-return": "error",
    "no-confusing-arrow": ["warn", { allowParens: false }],
    "no-unused-expressions": "off",
    "no-var": "error",
    "vars-on-top": "off",
    "prefer-const": "warn",
    "prefer-exponentiation-operator": "warn",
    curly: ["warn", "all"],
    "spaced-comment": "warn",
    "no-multiple-empty-lines": ["warn", { max: 1, maxBOF: 0, maxEOF: 1 }],
    "no-extra-boolean-cast": "warn",
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    "import/order": [
      "warn",
      {
        pathGroups: [
          { pattern: "~/**", group: "internal" },
          { pattern: "@/**", group: "internal" },
        ],
      },
    ],
    "id-length": [
      "warn",
      {
        min: 2,
        max: 50,
        exceptions: ["i", "j", "x", "y", "z", "_"],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "lodash",
            message:
              "Instead use `import [module] from 'lodash/[module]'`, or `import {[module]} from 'lodash-es'` (latter is preferable if possible).\nMore info: https://www.labnol.org/code/import-lodash-211117",
          },
        ],
      },
    ],

    /*
     * Rules implemented by `@typescript-eslint` follow
     * =======================================================================================
     */
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/explicit-member-accessibility": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: { delimiter: "none", requireLast: true },
        singleline: { delimiter: "semi", requireLast: false },
      },
    ],
    "@typescript-eslint/member-ordering": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
    "@typescript-eslint/no-extra-non-null-assertion": ["error"],
    "@typescript-eslint/consistent-type-assertions": ["warn"],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/no-extraneous-class": "error",

    /*
     * Rules implemented by `eslint-plugin-unused-imports` follow
     * =======================================================================================
     */
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    /*
     * Rules implemented by `eslint-plugin-vue` follow
     * =======================================================================================
     */
    "vue/no-v-html": "error",
    "vue/require-prop-types": "error",
    "vue/require-default-prop": "error",
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    // delete all below rules after switching to vue3 and '@antfu' root config, since they are already set there
    "vue/multi-word-component-names": "off",

    /*
     * Rules implemented by `eslint-plugin-prettier-vue` follow
     * =======================================================================================
     */
    "prettier-vue/prettier": "warn",

    /*
     * Rules implemented by `eslint-plugin-tailwindcss` follow
     * =======================================================================================
     */
    "tailwindcss/classnames-order": [
      "warn",
      { officialSorting: true, prependCustom: true },
    ],
    "tailwindcss/no-custom-classname": "off",
  },
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: { parser: "@typescript-eslint/parser" },
      rules: {
        /*
         * Disable rules that don't work well with vue files
         * ===================================================================================
         */
        "@typescript-eslint/explicit-member-accessibility": "off",
      },
    },
    {
      files: ["*.d.ts"],

      rules: {
        /*
         * Disable rules that don't work well with d.ts files
         * ===================================================================================
         */
        "id-length": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "unused-imports/no-unused-imports": "off",
        "unused-imports/no-unused-vars": "off",
      },
    },
    {
      files: [".*.js", "*.config.js"],
      rules: {
        /*
         * Disable rules that don't work well with common js config files
         * ===================================================================================
         */
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.js"],
      rules: {
        /*
         * Disable rules that don't work with standard js files
         * ===================================================================================
         */
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
    ecmaFeatures: { jsx: true },
  },
};
