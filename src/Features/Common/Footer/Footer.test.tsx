import Footer from "./Footer";
import { render, screen } from '@testing-library/react';
import FooterLogo from '../../../footer-logo.png';

test('Check SignIn Card Rendered', () => {
    render(<Footer />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', FooterLogo);
    expect(logo).toHaveAttribute('alt', 'Logo');
});
