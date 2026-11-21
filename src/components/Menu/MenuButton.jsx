import { NavLink } from 'react-router-dom';

export default function MenuButton({ to, label }) {
	return (
		<NavLink to={to} end={to === '/'} className="menu-button">
			{label}
		</NavLink>
	);
}
