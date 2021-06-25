import type { Configuration } from "stylelint";

// https://github.com/ismay/stylelint-no-unsupported-browser-features
const config: Partial<Configuration> = {
	plugins: [
		"stylelint-no-unsupported-browser-features",
	],

	rules: {
		"plugin/no-unsupported-browser-features": [true, {
			severity: "warning",
		}],
	},
};

export default config;
