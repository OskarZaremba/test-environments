import { render, screen } from '@testing-library/react';

import { Hello } from './Hello';

describe('Hello.', () => {
	it('should', () => {
		render(<Hello />);

		expect(screen.getByRole('heading', { name: /component/i })).toBeInTheDocument();
	});

	it('ddd', () => {
		expect(1).toBe(1);
	});
});

describe('fdgd', () => {
	it('dgsf', () => {
		render(<Hello />);

		expect(1).toBe(1);
	});
});
