const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const csso = require('postcss-csso');

const config = {
	plugins: [
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true,
			},
			browsers: 'last 2 versions'
		}),
		autoprefixer(),
		csso(),
	],
};

module.exports = config;