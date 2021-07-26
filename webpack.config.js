const { resolve } = require('path')

module.exports = {
	mode: 'production',

	entry: resolve(__dirname, 'src', 'index.ts'),

	output: {
		path: resolve(__dirname, 'lib'),
		filename: 'tvs-libs.js',
		library: 'tvsLibs',
		libraryTarget: 'umd',
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				options: {
					compilerOptions: {
						outDir: '',
						declaration: false,
					},
				},
			},
		],
	},

	resolve: {
		extensions: ['.ts', '.js', '.json'],
		modules: ['node_modules', resolve(__dirname, 'src')],
	},
}
