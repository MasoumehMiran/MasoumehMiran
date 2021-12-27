import en_us from './en'
import fa_ir from './fa'

const lang = localStorage.getItem('lang')!==undefined ? localStorage.getItem('lang') : 'en';
console.log(lang);
export { lang };
const direction = {
    fa: "rtl",
    en: "ltr"
}
function getDirection() {
    return direction[lang];
}

export { getDirection };

const menuUrl={
  Home:'/',
  About:'/about',
  Resume:'/resume',
  Portfolio:'/portfolio'  ,
  Blog:'/blog'  ,
  Contact:'/contact'  ,
}

export {menuUrl}

const fonts = {
    fa: "iransans",
    en: "Nunito"
}

function getFonts() {
    return fonts[lang];
}

export { getFonts };

const translate = {
    en: en_us,
    fa: fa_ir
}

function getTranslation() {
    return translate[lang];
}

export { getTranslation };

function changeLanguage(newLang) {
    console.log(newLang);
    newLang=newLang.toLocaleLowerCase();
    if (newLang === lang) {
        return;
    }
    localStorage.setItem('lang', newLang);
    window.location.reload();
}

export { changeLanguage };
// function



