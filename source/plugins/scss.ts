import type { Configuration } from "stylelint";

// https://github.com/kristerkari/stylelint-scss
const config: Partial<Configuration> = {
	plugins: [
		"scss",
	],
};

export default config;
