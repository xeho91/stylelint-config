import type { Configuration } from "stylelint";

// https://github.com/YozhikM/stylelint-a11y
const config: Partial<Configuration> = {
	extends: [
		"stylelint-a11y/recommended",
	],

	plugins: [
		"stylelint-a11y",
	],
}

export default config;
