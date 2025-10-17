import i18next from 'i18next'
import EN from '../locales/en.json'
import JA from '../locales/ja.json'
import KO from '../locales/ko.json'
import TH from '../locales/th.json'
import { ngComputed, ngSignal } from "../common/preact-ng-signals"

export type LangType = keyof typeof lngMappingObj

export const lngMappingObj = {
  en: EN,
  ja: JA,
  ko: KO,
  th: TH,
} as const

export const setupI18n = (lang: LangType) => {
  const defaultLng = lang //'ja'
  const defaultNS = '_'
  i18next.init({
    fallbackLng: defaultLng,
    defaultNS,
    resources: Object.entries(lngMappingObj).reduce((pre, [key, value]) => {
      return { ...pre, ...{ [key]: { [defaultNS]: value } } }
    }, {}),
  })
}

export const i18nT = i18next.t

const langS = ngSignal(i18next.language as LangType)
export const getCurrentLng = () => ngComputed(() => langS())
export const setLang = (lang: LangType) => {
  i18next.changeLanguage(lang)
  langS.set(lang)
}
export const getShortCurrentLng = () => {
  const lng = getCurrentLng()
  return lng().split('-')[0] ?? Object.keys(lngMappingObj)[0]
}

export const getValidLang = () => Object.keys(lngMappingObj)
