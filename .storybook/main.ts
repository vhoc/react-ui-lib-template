import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
   "../lib/**/*.mdx",
   "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"
],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
   //  "@storybook/addon-controls",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
   reactDocgen: "react-docgen-typescript",
   reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      // include: ["../lib/**/*.tsx"],
   }
  }
};
export default config;
