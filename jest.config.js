const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });
/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/*.d.ts',
		'!<rootDir>/src/**/*.md',
	],
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	coverageReporters: ['lcov'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
