import { render, screen } from '@testing-library/react';

import { Button } from '@/components/Button';

interface Props {}

const renderComponent = ({}: Props = {}) => render(<Button />);

describe('Button - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a Button component')).toBeInTheDocument();
	});
});
