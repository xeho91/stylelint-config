import type { Configuration } from "stylelint";

// https://github.com/darwintantuco/stylelint-8-point-grid
const config: Partial<Configuration> = {
	extends: ["stylelint-8-point-grid"],

	plugins: ["stylelint-8-point-grid"],

	rules: {
		"plugin/8-point-grid": {
			"base": 4,
			// "allowlist": ["2px", "1px"],
			// "ignorelist": ["width", "height"],
		},
	},
};

export default config;
