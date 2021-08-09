/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */
import merge from "deepmerge";

import hasModule from "./helpers/has-module";

const configurations = [
	require("stylelint").default,
	require("plugin8pointGrid").default,
	require("pluginA11y").default,
	require("pluginColorFormat").default,
	require("pluginCSStreeValidator").default,
	require("pluginDeclarationStrictValue").default,
	require("pluginHighPerformanceAnimation").default,
	require("pluginNoUnsupportedBrowserFeatures").default,
	require("pluginOrder").default,
	hasModule("prettier") && require("pluginPrettier").default,
	hasModule("sass") && require("pluginScss").default,
];

const config = merge.all(configurations);

module.exports = config;
