import { render, screen } from '@testing-library/react';

import { Text } from '@/components/Text';

interface Props {}

const renderComponent = ({}: Props = {}) => render(<Text />);

describe('Text - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a Text component')).toBeInTheDocument();
	});
});
