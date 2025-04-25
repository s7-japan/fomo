import i18next from 'i18next'
import EN from '../locales/en.json'
import JA from '../locales/ja.json'

export const lngMappingObj = {
  en: EN,
  ja: JA,
} as const

export const setupI18n = (lang: keyof typeof lngMappingObj) => {
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

export const getCurrentLng = () => i18next.language as keyof typeof lngMappingObj

export const getShortCurrentLng = () => {
  const lng = getCurrentLng()
  return lng.split('-')[0] ?? Object.keys(lngMappingObj)[0]
}

export const getValidLng = () => Object.keys(lngMappingObj)

export const i18nT = i18next.t
