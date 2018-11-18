module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleDirectories: ["node_modules", "lib"],
	testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"]
};
