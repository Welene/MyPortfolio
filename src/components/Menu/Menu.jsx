import { useTranslation } from 'react-i18next';
import MenuButton from './MenuButton';
import './Menu.css';

export default function Menu() {
	const { t } = useTranslation();
	return (
		<nav aria-label={t('menu.label')} className="menu">
			<MenuButton to="/" label={t('menu.home')} />
			<MenuButton to="/projects" label={t('menu.projects')} />
			<MenuButton to="/skills" label={t('menu.skills')} />
		</nav>
	);
}
