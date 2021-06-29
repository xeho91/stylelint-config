import type { Configuration } from "stylelint";

// https://github.com/filipekiss/stylelint-color-format
const config: Partial<Configuration> = {
	plugins: [
		"stylelint-a11y",
	],

	rules: {
		"color-format/format": {
			format: "hsl",
		},
	},
}

export default config;
