// Dreams of Gold Jackpot
// https://fomo-dev.previewenv.net/player/winfast/dreams_of_gold_jackpot/
// https://tiles.fomo.io/staging/t/winfast/dreams_of_gold_jackpot

import { useState } from 'react'

// Hawaiian Dream Gold
// https://fomo-dev.previewenv.net/player/winfast/hawaiian_dream_gold/
// https://tiles.fomo.io/staging/t/winfast/hawaiian_dream_gold

// Mummy Princess
// https://fomo-dev.previewenv.net/player/winfast/mummy_princess/
// https://tiles.fomo.io/staging/t/winfast/st/mummy_princess

export interface IAppProps {}

type GameType = {
  name: string
  linkUrl: string
  imgUrl: string
}

const games: GameType[] = [
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

export default function App(props: IAppProps) {
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null)

  const showOverlay = (game: GameType) => {
    setSelectedGame(game)
  }

  return (
    <div
      className="
        max-w-[418px] inline-flex justify-between items-center overflow-hidden
        gap-1 md:gap-12
        "
    >
      {games.map((item, i) => (
        <button className="relative cursor-pointer" onClick={() => showOverlay(item)}>
          <img className="w-28 h-[150px]" src={item.imgUrl} />
          {selectedGame?.name === item.name ? (
            <div
              className="absolute font-sans w-full h-full inset-0 flex flex-col justify-around items-center bg-[#00000080]
              text-white text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col justify-center gap-3 w-[80%]">
                <button className="h-8 rounded-[8px] bg-[#ff008c] ">Login</button>
                <button className="h-8 rounded-[8px] bg-[#1f1f1f]">Demo Play</button>
              </div>
            </div>
          ) : (
            ''
          )}
        </button>
      ))}
    </div>
  )
}
