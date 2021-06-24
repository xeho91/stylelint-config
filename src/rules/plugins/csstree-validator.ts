import type { Configuration } from "stylelint";

// https://github.com/csstree/stylelint-validator
const config: Partial<Configuration> = {
	plugins: ["stylelint-csstree-validator"],

	rules: {
		"csstree/validator": true,
	}
}

export default config;
