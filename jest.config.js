module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleDirectories: ['node_modules', 'src'],
	testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
}
