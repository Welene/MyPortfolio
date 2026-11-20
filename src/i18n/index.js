import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import sv from './locales/sv.json';
import no from './locales/no.json';
import en from './locales/en.json';

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			sv: { translation: sv },
			no: { translation: no },
			nb: { translation: no },
			nn: { translation: no },
			en: { translation: en },
		},
		fallbackLng: 'sv',
		supportedLngs: ['sv', 'no', 'nb', 'nn', 'en'],
		nonExplicitSupportedLngs: true,
		interpolation: { escapeValue: false },
	});

export default i18n;
