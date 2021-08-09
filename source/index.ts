/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */
import merge from "deepmerge";

import hasModule from "./helpers/has-module";

const configurations = [
	require("./stylelint").default,
	require("./plugins/8-point-grid").default,
	require("./plugins/a11y").default,
	require("./plugins/color-format").default,
	require("./plugins/csstree-validator").default,
	require("./plugins/declaration-strict-value").default,
	require("./plugins/high-performance-animation").default,
	require("./plugins/no-unsupported-browser-features").default,
	require("./plugins/order").default,
	hasModule("prettier") && require("./plugins/prettier").default,
	hasModule("sass") && require("./plugins/scss").default,
];

const config = merge.all(configurations);

module.exports = config;
