import baseConfig from "../../prettier.config.mjs"

const config = {
  ...baseConfig,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/src/(.*)$",
    "",
    "^@/components/(.*)$",
    "",
    "^@/constants/(.*)$",
    "",
    "^@/lib/(.*)$",
    "",
    "^[./]",
  ],
}

export default config
