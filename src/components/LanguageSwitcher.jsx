import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
	{ code: 'en', label: 'EN', name: 'English' },
	{ code: 'sv', label: 'SV', name: 'Svenska' },
	{ code: 'no', label: 'NO', name: 'Norsk' },
];

const normalize = (lng = 'sv') =>
	['nb', 'nn'].includes(lng.slice(0, 2)) ? 'no' : lng.slice(0, 2);

export default function LanguageSwitcher() {
	const { i18n, t } = useTranslation();
	const current = normalize(i18n.resolvedLanguage);

	useEffect(() => {
		document.documentElement.lang = current;
	}, [current]);

	return (
		<nav aria-label={t('lang.switcherLabel')} className="language-switcher">
			{languages.map(({ code, label, name }) => (
				<button
					key={code}
					type="button"
					lang={code}
					aria-label={name}
					aria-pressed={current === code}
					onClick={() => i18n.changeLanguage(code)}>
					{label}
				</button>
			))}
		</nav>
	);
}
