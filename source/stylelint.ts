import type { Configuration } from "stylelint";

// https://stylelint.io/user-guide/rules/list
const config: Partial<Configuration> = {
	extends: [
		// https://github.com/stylelint/stylelint-config-standard
		"stylelint-config-recommended",
	],

	rules: {
		"no-descending-specificity": [true, {
			severity: "warning",
			ignore: ["selectors-within-list"],
		}],

		"selector-pseudo-class-no-unknown": [true, {
			ignorePseudoClasses: ["global"],
		}],

		"at-rule-no-unknown": [true, {
			ignoreAtRules: ["define-mixin", "mixin"],
		}],
	},
};

export default config;
