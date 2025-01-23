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
    "^@/libs/(.*)$",
    "",
    "^[./]",
  ],
}

export default config
