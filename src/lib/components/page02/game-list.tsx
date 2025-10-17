import { useSignals } from '@preact/signals-react/runtime'
import { t } from 'i18next'
import { ngSignal } from '../../common/preact-ng-signals'

const games = [
  {
    name: 'Dreams of Gold Jackpot',
    linkUrl: 'https://fomo-dev.previewenv.net/player/winfast/dreams_of_gold_jackpot/',
    imgUrl: 'https://tiles.fomo.io/staging/t/winfast/dreams_of_gold_jackpot',
  },
  {
    name: 'Hawaiian Dream Gold',
    linkUrl: 'https://fomo-dev.previewenv.net/player/winfast/hawaiian_dream_gold/',
    imgUrl: 'https://tiles.fomo.io/staging/t/winfast/hawaiian_dream_gold',
  },
  {
    name: 'Mummy Princess',
    linkUrl: 'https://fomo-dev.previewenv.net/player/winfast/mummy_princess/',
    imgUrl: 'https://tiles.fomo.io/staging/t/winfast/st/mummy_princess',
  },
]

type GameType = (typeof games)[0]

const selectedGameS = ngSignal<GameType | null>(null)

export default function App() {
  useSignals()

  return (
    <div
      className="
        max-w-[418px] inline-flex justify-between items-center overflow-hidden
        gap-1 md:gap-12
        "
    >
      {games.map((item, i) => (
        <div key={i} className="relative">
          <button className="cursor-pointer" onClick={() => selectedGameS.set(item)}>
            <img className="w-28 h-[150px]" src={item.imgUrl} />
          </button>
          {selectedGameS()?.name === item.name ? (
            <div
              className="absolute font-sans w-full h-full inset-0 flex flex-col justify-around items-center bg-[#00000080]
              text-white text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col justify-center gap-3 w-[85%]">
                <button className="cursor-pointer h-8 rounded-[8px] bg-[#ff008c] ">
                  {t('page.gameLogin')}
                </button>
                <button className="cursor-pointer h-8 rounded-[8px] bg-[#1f1f1f]">
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
