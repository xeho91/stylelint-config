import type { Configuration } from "stylelint";

// https://github.com/kristerkari/stylelint-scss
const config: Partial<Configuration> = {
	plugins: [
		"stylelint-scss",
	],

	rules: {
		"at-rule-no-unknown": null,
		"no-invalid-position-at-import-rule": null,
		"scss/at-rule-no-unknown": true,
	},
};

export default config;
