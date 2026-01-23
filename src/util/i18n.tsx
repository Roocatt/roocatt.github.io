import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation resources (example structure)
import translationEN from '../locales/en/translation.json';
import translationSV from '../locales/sv/translation.json';
import translationFR from '../locales/fr/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    sv: {
        translation: translationSV
    },
    fr: {
        translation: translationFR
    }
};

i18n.use(initReactI18next).init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
    });

export default i18n;