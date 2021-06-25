import type { Configuration } from "stylelint";

// https://github.com/prettier/stylelint-config-prettier
const config: Partial<Configuration> = {
	extends: ["stylelint-config-prettier"],
}

export default config;
