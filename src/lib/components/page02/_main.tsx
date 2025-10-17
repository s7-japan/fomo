import { getCurrentLng } from '../../services/i18n.service'
import RegEnM from './reg-en-m'
import RegJaM from './reg-ja-m'
import RegKoM from './reg-ko-m'

const langS = getCurrentLng()

export default function App() {
  return <>{langS() === 'ja' ? <RegJaM /> : langS() === 'ko' ? <RegKoM /> : <RegEnM />}</>
}
