//-----------------------------------------------//
// Place all global CSS for every page here //
//-----------------------------------------------//

import { base } from "./foundations/typography"

const globalCSS = {
  main: { overflowX: "hidden", maxW: "100vw" },

  ".thin-h3.chakra-heading": {
    fontSize: "36px",
    fontWeight: "light",
    textTransform: "unset",
  },

  ...base,
}

const globalStyle = {
  global: {
    ...globalCSS,
  },
}

export { globalStyle as styles }
