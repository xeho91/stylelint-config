import merge from "deepmerge";

import plugin8pointGrid from "./plugins/8-point-grid";
import pluginA11y from "./plugins/a11y";
import pluginCSStreeValidator from "./plugins/csstree-validator";
import pluginDeclarationStrictValue from "./plugins/declaration-strict-value";
import pluginHighPerformanceAnimation from "./plugins/high-performance-animation";
import pluginNoUnsupportedBrowserFeatures from "./plugins/no-unsupported-browser-features";
import pluginOrder from "./plugins/order";
import pluginPrettier from "./plugins/prettier";
import stylelint from "./stylelint";

import type { Configuration } from "stylelint";

const global: Partial<Configuration> = {
	ignoreFiles: [
		// Unignore files starting with dot (usually config files)
		"!.*",
		// Ignore directories
		".git/**/*",
		".husky/**/*",
		".svelte-kit/**/*",
		".vercel/**/*",
		".vercel_build_output/**/*",
		"build/**/*",
		"lib/**/*",
		"dist/**/*",
		"node_modules/**/*",
	],
};

const config = merge.all([
	global,
	stylelint,
	plugin8pointGrid,
	pluginA11y,
	pluginCSStreeValidator,
	pluginDeclarationStrictValue,
	pluginHighPerformanceAnimation,
	pluginNoUnsupportedBrowserFeatures,
	pluginOrder,
	pluginPrettier,
]);

/* eslint-disable-next-line unicorn/prefer-module */
module.exports = config;
