import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import myTailwindTheme from "./tailwind-theme.js"; // change to your theme's path
import { createLocalStoragePlugin } from "@formkit/addons";

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
  plugins: [
    createLocalStoragePlugin({
      // plugin defaults:
      prefix: "formkit",
      key: undefined,
      control: undefined,
      maxAge: 3600000, // 1 hour
      debounce: 200,
      beforeSave: undefined,
      beforeLoad: undefined,
    }),
  ],
};
