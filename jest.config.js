export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleDirectories: ['node_modules', 'src'],
	testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
	extensionsToTreatAsEsm: ['.ts'],
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	globals: {
		'ts-jest': {
			useESM: true,
		},
	},
}
