module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleDirectories: ['node_modules', 'src'],
	testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
}
