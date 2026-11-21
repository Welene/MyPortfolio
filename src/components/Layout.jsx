import { Outlet } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import BoinkName from './Boink';
import Menu from './Menu/Menu';
import ContactSection from './ContactSection';
import ScrollToTop from './ScrollToTopInvisible';

export default function Layout() {
	return (
		<main className="mainContainer">
			<ScrollToTop />
			<LanguageSwitcher />
			<div className="site-header">
				<BoinkName />
				<Menu />
			</div>
			{/* outlet shows active section content */}
			<Outlet />
			<ContactSection />
		</main>
	);
}
