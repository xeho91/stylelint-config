import type { Configuration } from "stylelint";

// https://stylelint.io/user-guide/rules/list
const config: Partial<Configuration> = {
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

	extends: [
		// https://github.com/stylelint/stylelint-config-standard
		"stylelint-config-recommended",
	],

	rules: {
		// "no-descending-specificity": [true, {
		// 	severity: "warning",
		// 	ignore: ["selectors-within-list"],
		// }],

		// "selector-pseudo-class-no-unknown": [true, {
		// 	ignorePseudoClasses: ["global"],
		// }],

		// "at-rule-no-unknown": [true, {
		// 	ignoreAtRules: [
		// 		"mixin",
		// 		"include",
		// 		"content",
		// 		"for",
		// 		"if",
		// 		"else",
		// 		"else if",
		// 		"each",
		// 	],
		// }],
	},
};

export default config;
