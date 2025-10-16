import { IAppEvent, IMainProps } from '../../services/layout.service'
import RegEnM from './reg-en-m'
import RegJaM from './reg-ja-m'
import RegKoM from './reg-ko-m'

export interface IAppProps {}

export default function App(props: IMainProps & IAppEvent) {
  return <>{props.lang === 'ja' ? <RegJaM /> : props.lang === 'ko' ? <RegKoM /> : <RegEnM />}</>
}
