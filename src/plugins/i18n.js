import Vue from 'vue';
import VueI18n from 'vue-i18n';
import defaultMessages from '../lang/en_US.json';

Vue.use(VueI18n);

const defaultLocale = 'en_US';
const loadedLocales = [defaultLocale]; // our default language that is preloaded

const i18n = new VueI18n({
  locale: defaultLocale, // set locale
  fallbackLocale: defaultLocale,
  messages: { [defaultLocale]: defaultMessages },
});
export default i18n;

export const setLocale = (lang) => {
  i18n.locale = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
};

export const loadLocale = (lang) => {
  if (i18n.locale !== lang) {
    if (!loadedLocales.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.json`)
        .then(messages => {
          i18n.setLocaleMessage(lang, messages.default);
          loadedLocales.push(lang);
          return setLocale(lang);
        });
    }
    return Promise.resolve(setLocale(lang));
  }
  return Promise.resolve(lang);
};
