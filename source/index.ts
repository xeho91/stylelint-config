/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */
import merge from "deepmerge";

import hasModule from "./helpers/has-module";

const configurations = [
	require("stylelint").default,
	require("plugins/8pointGrid").default,
	require("plugins/A11y").default,
	require("plugins/ColorFormat").default,
	require("plugins/CSStreeValidator").default,
	require("plugins/DeclarationStrictValue").default,
	require("plugins/HighPerformanceAnimation").default,
	require("plugins/NoUnsupportedBrowserFeatures").default,
	require("plugins/Order").default,
	hasModule("prettier") && require("plugins/Prettier").default,
	hasModule("sass") && require("plugins/Scss").default,
];

const config = merge.all(configurations);

module.exports = config;
