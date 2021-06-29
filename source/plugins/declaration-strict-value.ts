import type { Configuration } from "stylelint";

const config: Partial<Configuration> = {
	plugins: ["stylelint-declaration-strict-value"],

	rules: {
		"scale-unlimited/declaration-strict-value": [
			["/color$/", "fill", "stroke", "font-family"],
			{
				ignoreValues: {
					"/color$/": ["currentColor", "transparent"],
					"fill": ["currentColor"],
				}
			},
		],
	},
};

export default config;
