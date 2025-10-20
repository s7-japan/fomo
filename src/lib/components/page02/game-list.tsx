import { useSignals } from '@preact/signals-react/runtime'
import { t } from 'i18next'
import { setEventEmitterS } from '../../../lib/services/event.service'
import { ngComputed, ngSignal } from '../../common/preact-ng-signals'
import { getCurrentLng } from '../../../lib/services/i18n.service'

// https://tiles.fomo.io/t/winfast/st/mummy_princess
// https://tiles.fomo.io/t/winfast/ja/st/mummy_princess
const games = [
  {
    name: 'Dreams of Gold Jackpot',
    linkUrl: '/winfast/dreams_of_gold_jackpot/',
    imgUrl: 'https://tiles.fomo.io/t/winfast/{langPath}dreams_of_gold_jackpot',
  },
  {
    name: 'Hawaiian Dream Gold',
    linkUrl: '/winfast/hawaiian_dream_gold/',
    imgUrl: 'https://tiles.fomo.io/t/winfast/{langPath}hawaiian_dream_gold',
  },
  {
    name: 'Mummy Princess',
    linkUrl: '/winfast/mummy_princess/',
    imgUrl: 'https://tiles.fomo.io/t/winfast/{langPath}st/mummy_princess',
  },
]

type GameType = (typeof games)[0]
const langS = getCurrentLng()
const selectedGameS = ngSignal<GameType | null>(null)

const gameS = ngComputed(() => {
  const langPath = langS() === 'en' ? '' : `${langS()}/`
  return games.map((item) => {
    item.imgUrl = item.imgUrl.replace('{langPath}', langPath)
    return item
  })
})

export default function App() {
  useSignals()

  return (
    <div
      className="
        w-full max-w-[520px] inline-flex justify-between items-center overflow-hidden
        gap-1 md:gap-12
        "
    >
      {gameS().map((item, i) => (
        <div key={i} className="relative">
          <button className="cursor-pointer" onClick={() => selectedGameS.set(item)}>
            <img className="h-[150px] md:h-[200px]" src={item.imgUrl} />
          </button>
          {selectedGameS()?.name === item.name ? (
            <div
              className="absolute font-sans w-full h-full inset-0 flex flex-col justify-around items-center bg-[#00000080]
              text-white text-sm font-medium"
            >
              <div className="flex flex-col justify-center gap-3 w-[85%]">
                <button
                  className="cursor-pointer h-8 rounded-[8px] bg-[#ff008c]"
                  onClick={() =>
                    setEventEmitterS({
                      type: 'signUp',
                    })
                  }
                >
                  {t('page.gameSignUp')}
                </button>
                <button
                  className="cursor-pointer h-8 rounded-[8px] bg-[#1f1f1f]"
                  onClick={() =>
                    setEventEmitterS({
                      type: 'url',
                      info: item.linkUrl,
                    })
                  }
                >
                  {t('page.demoPlay')}
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  )
}
