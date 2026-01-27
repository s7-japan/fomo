import { useSignals } from '@preact/signals-react/runtime'
import { ngSignal } from '../../../lib/common/preact-ng-signals'
import { ProviderType, getProviders } from '../../../lib/services/provider.service'
import { take, tap } from 'rxjs'

export interface IAppProps {}

const providerS = ngSignal([] as ProviderType[])

const providersSub = getProviders()
  .pipe(
    take(1),
    tap((a) => {
      providerS.set(a)
    })
  )
  .subscribe()

export default function App(props: IAppProps) {
  useSignals()
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {/* <!-- 第一組 --> */}
        {providerS().map((p, i) => (
          <img key={i} className="max-w-[80px] max-h-[50px]" src={p.imageUrl} alt={p.prov} />
        ))}
        {/* <!-- 第二組（完全相同） --> */}
        {providerS().map((p, i) => (
          <img key={i} className="max-w-[80px] max-h-[50px]" src={p.imageUrl} alt={p.prov} />
        ))}
      </div>
    </div>
  )
}
