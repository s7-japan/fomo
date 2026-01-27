import { from, map, switchMap } from 'rxjs'

const apiUrl = 'https://api.fomo.io/catalog/providers/true/true/en/2'
const CDN = 'https://tiles.fomo.io'

export type ProviderType = {
  name: string
  prov: string
  imageUrl: string
}

export const getProviders = () =>
  from(fetch(apiUrl)).pipe(
    switchMap((a) => a.json()),
    map((a: ProviderType[]) =>
      a.map((p) => ({
        name: p.name,
        prov: p.prov,
        imageUrl: `${CDN}/t/${p.prov}.svg`,
      }))
    )
  )
