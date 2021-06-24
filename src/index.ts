import plugin8pointGrid from "./rules/plugins/8-point-grid";
import pluginA11y from "./rules/plugins/a11y";
import pluginCSStreeValidator from "./rules/plugins/csstree-validator";
import pluginDeclarationStrictValue from "./rules/plugins/declaration-strict-value";
import pluginHighPerformanceAnimation from "./rules/plugins/high-performance-animation";
import pluginNoUnsupportedBrowserFeatures from "./rules/plugins/no-unsupported-browser-features";
import pluginOrder from "./rules/plugins/order";
import pluginPrettier from "./rules/plugins/prettier";

import stylelint from "./rules/stylelint";

import type { Configuration } from "stylelint";

const config: Partial<Configuration> = {
	extends: [
		...stylelint.extends,
		...plugin8pointGrid.extends,
		...pluginPrettier.extends,
	],

	plugins: [
		...plugin8pointGrid.plugins,
		...pluginA11y.plugins,
		...pluginCSStreeValidator.plugins,
		...pluginDeclarationStrictValue.plugins,
		...pluginHighPerformanceAnimation.plugins,
		...pluginNoUnsupportedBrowserFeatures.plugins,
		...pluginOrder.plugins,
	],

	rules: {
		...stylelint.rules,

		...plugin8pointGrid.rules,
		...pluginCSStreeValidator.rules,
		...pluginDeclarationStrictValue.rules,
		...pluginHighPerformanceAnimation.rules,
		...pluginNoUnsupportedBrowserFeatures.rules,
		...pluginOrder.rules,
	},

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

module.exports = config;
