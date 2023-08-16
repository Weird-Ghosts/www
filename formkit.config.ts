import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import myTailwindTheme from "./tailwind-theme.js"; // change to your theme's path
import {
  createAutoAnimatePlugin,
  createLocalStoragePlugin,
} from "@formkit/addons";
const isCheckboxAndRadioMultiple = (node) =>
  (node.props.type === "checkbox" || node.props.type === "radio") &&
  node.props.options;

function addAsteriskPlugin(node) {
  node.on("created", () => {
    const isRequired = node.props.parsedRules.some(
      (rule) => rule.name === "required"
    );
    if (!isRequired) return;

    const isMultiOption = isCheckboxAndRadioMultiple(node);

    // if we're going to modify the schema then we need
    // to update the schemaMemoKey so we don't get an
    // invalid cached schema.
    node.props.definition.schemaMemoKey = `required_${
      isMultiOption ? "multi_" : ""
    }${node.props.definition.schemaMemoKey}`;

    const schemaFn = node.props.definition.schema;
    node.props.definition.schema = (sectionsSchema = {}) => {
      if (isRequired) {
        if (isMultiOption) {
          sectionsSchema.legend = {
            children: ["$label", "*"],
          };
        } else {
          sectionsSchema.label = {
            children: ["$label", "*"],
          };
        }
      }
      return schemaFn(sectionsSchema);
    };
  });
}
export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
  plugins: [
    addAsteriskPlugin,
    createAutoAnimatePlugin(
      {
        /* optional AutoAnimate config */
        // default:
        duration: 250,
        easing: "ease-in-out",
        delay: 0,
      },
      {
        /* optional animation targets object */
        // default:
        global: ["outer", "inner"],
        form: ["form"],
        repeater: ["items"],
      }
    ),
    createLocalStoragePlugin({
      // plugin defaults:
      prefix: "formkit",
      key: undefined,
      control: undefined,
      maxAge: 604800000, // 7 days
      debounce: 200,
      beforeSave: undefined,
      beforeLoad: undefined,
    }),
  ],
};
