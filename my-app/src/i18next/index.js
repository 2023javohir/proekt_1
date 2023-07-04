import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../lokals/en/en.json'
import ru from '../lokals/ru/ru.json'
import tr from '../lokals/tr/tr.json'
import uz from '../lokals/uz/uz.json'
import detector from 'i18next-browser-languagedetector'





i18n
  .use(initReactI18next) .use(detector)
  .init({
    resources:{
en:{translation: en },
uz:{translation: uz },
ru:{translation: ru },
tr:{translation: tr },


    },
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: {order: ['cookie', 'localstorage'], caches:['cookie']},
  });

  export default i18n;