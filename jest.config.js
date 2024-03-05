const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({ dir: './' });
const config = {
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/*.d.ts',
		'!<rootDir>/src/**/*.md',
	],
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	coverageReporters: ['lcovonly'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jsdom',
};

module.exports = createJestConfig(config);
