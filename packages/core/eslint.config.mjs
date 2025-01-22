import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: import.meta.dir,
})

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...compat.config({
    $schema: "https://json.schemastore.org/eslintrc",
    extends: ["turbo", "prettier", "plugin:@typescript-eslint/recommended"],
    plugins: ["@typescript-eslint"],
    ignorePatterns: ["node_modules/", "dist/"],
    rules: {
      "react/jsx-key": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  }),
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
]

export default config
