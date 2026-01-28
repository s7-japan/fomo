import { getCurrentLng } from './i18n.service'

const CDN = 'https://tiles.fomo.io'

export type ProviderType = {
  name: string
  prov: string
  imageUrl: string
}

const langS = getCurrentLng()

const getApiUrl = (lang: string) => `https://api.fomo.io/catalog/providers/true/true/${lang}/2`

export const getProviders = async () => {
  const lang = langS()
  if (lang) {
    const apiUrl = getApiUrl(lang)
    const res = await fetch(apiUrl)
    const data: ProviderType[] = await res.json()
    return data.map((p) => ({
      name: p.name,
      prov: p.prov,
      imageUrl: `${CDN}/t/${p.prov}.svg`,
    }))
  }
  return Promise.resolve([])
}
