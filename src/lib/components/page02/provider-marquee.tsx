import { useSignals } from '@preact/signals-react/runtime'
import { useEffect } from 'react'
import { ngEffect, ngSignal } from '../../../lib/common/preact-ng-signals'
import { ProviderType, getProviders } from '../../../lib/services/provider.service'

const providerS = ngSignal([] as ProviderType[])

export default function App() {
  useSignals()

  useEffect(() => {
    const sub = ngEffect(async () => {
      const data = await getProviders()
      providerS.set(data)
    })

    return () => {
      sub.destroy()
    }
  }, [])

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {/* <!-- 第一組 --> */}
        {providerS().map((p, i) => (
          <img
            key={i}
            className="max-w-[80px] max-h-[50px] md:max-w-[110px] md:max-h-[60px]"
            src={p.imageUrl}
            alt={p.prov}
          />
        ))}
        {/* <!-- 第二組（完全相同） --> */}
        {providerS().map((p, i) => (
          <img
            key={i}
            className="max-w-[80px] max-h-[50px] md:max-w-[110px] md:max-h-[60px]"
            src={p.imageUrl}
            alt={p.prov}
          />
        ))}
      </div>
    </div>
  )
}
