import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import * as colors from 'twind/colors'
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors: {
      // Build your palette here
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
    },
  },
};
if (IS_BROWSER) setup(config);
