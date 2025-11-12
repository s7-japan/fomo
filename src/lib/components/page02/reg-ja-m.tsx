import { setEventEmitterS } from '../../../lib/services/event.service'
import { getCDNUrl } from '../../../lib/services/layout.service'
import OneOfTheKind from '../one-of-the-kind'
import StepsM from '../steps'
import GameList from './game-list'

export default function App() {
  return (
    <div className="inline-flex flex-col justify-start items-center">
      <div className="self-stretch inline-flex flex-col justify-center items-center gap-1.5 -mb-6 md:-mb-11">
        <img
          className="block md:hidden w-full"
          src={getCDNUrl(`/images/page02/big-header-m-ja.png`)}
        />
        <img
          className="hidden md:block w-full"
          src={getCDNUrl(`/images/page02/big-header-d-ja.png`)}
        />
      </div>

      <div className="size- inline-flex flex-col justify-start items-center gap-[30px] px-3">
        <div className="w-full text-center justify-center">
          <span
            className="
          text-white font-extrabold font-['Inter'] tracking-wide
          text-2xl leading-[30px] md:text-5xl md:leading-[50px] 
          "
          >
            無料で
          </span>
          <span
            className="
          text-[#ff008c] font-extrabold font-['Inter'] tracking-wide
          text-2xl leading-[30px] md:text-5xl md:leading-[50px] 
          "
          >
            クリプト
          </span>
          <span
            className="
          text-white font-extrabold font-['Inter'] tracking-wide
          text-2xl leading-[30px] md:text-5xl md:leading-[50px] 
          "
          >
            GET！
            <br />
            登録だけで{' '}
          </span>
          <span
            className="
          text-[#ff008c] font-extrabold font-['Inter'] tracking-wide
          text-2xl leading-[30px] md:text-5xl md:leading-[50px] 
          "
          >
            勝利保証10回
          </span>
          <span
            className="
          text-white font-extrabold font-['Inter'] tracking-wide
          text-2xl leading-[30px] md:text-5xl md:leading-[50px] 
          "
          >
            ！
          </span>
        </div>
        <button className="cursor-pointer" onClick={() => setEventEmitterS({ type: 'signUp' })}>
          <div className="size- px-[42px] py-2 bg-black rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
            <div
              className="
          text-center justify-start text-white font-medium font-['Inter']
          text-2xl md:text-4xl 
          "
            >
              無料でプレイ
            </div>
          </div>
        </button>
        <div className="w-full text-center justify-start">
          <span
            className="
          text-white font-normal font-['Inter'] leading-normal
          text-base md:text-2xl
          "
          >
            登録してゲームを選ぶだけ！ <br />
            勝利保証10回が即解放！
            <br />
            すべて現金勝利、
          </span>
          <span
            className="
          text-[#ff008c] font-bold font-['Inter'] leading-normal
          text-base md:text-2xl
          "
          >
            入金不要
          </span>
          <span
            className="
          text-white font-normal font-['Inter'] leading-normal
          text-base md:text-2xl
          "
          >
            。
          </span>
        </div>
        <GameList />
        <div
          className="
        w-full text-center justify-start text-white font-normal font-['Inter'] leading-normal
        text-base md:text-2xl
        "
        >
          出金条件なし・プレイ制限なし。 純粋にクリプト勝利を楽しもう！{' '}
        </div>

        <button className="cursor-pointer" onClick={() => setEventEmitterS({ type: 'signUp' })}>
          <div className="size- px-[42px] py-2 bg-black rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
            <div
              className="
          text-center justify-start text-white font-medium font-['Inter']
          text-2xl md:text-4xl
          "
            >
              無料でプレイ
            </div>
          </div>
        </button>
        <button
          className="cursor-pointer"
          onClick={() =>
            setEventEmitterS({ type: 'url', info: '/promotion-page/registration_reward/' })
          }
        >
          <div className="w-full text-center justify-start text-white text-[13px] font-normal font-['Inter'] leading-normal underline underline-offset-3 decoration-2 decoration-[#FF008C]">
            ※ 新規プレイヤー限定オファーです。
          </div>
        </button>
      </div>

      <div className="w-full pt-12 inline-flex flex-col justify-start items-center gap-[35px] px-3">
        <div className="size- flex flex-col justify-start items-center gap-4">
          <img
            className="w-[65.75px] h-[34.34px]"
            src={getCDNUrl(`/images/page02/game-tag-m.png`)}
          />
          <div
            className="
          text-center justify-start text-[#ff008c] font-semibold font-['Inter']
          text-6xl leading-[60px] md:text-[100px] md:leading-[100px]
          "
          >
            5,000+
          </div>

          <div
            className="
          text-center justify-start text-white font-semibold font-['Inter']
          text-xl leading-normal md:text-4xl md:leading-9
          "
          >
            あらゆるジャンルのゲームが待っています！
          </div>
        </div>
        <div className="max-w-[992px]">
          <img
            className="md:hidden"
            src={getCDNUrl(`/images/page02/game-list-m.png`)}
            alt=""
          />
          <img
            className="hidden md:block"
            src={getCDNUrl(`/images/page02/game-list-d.png`)}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-0.5 overflow-hidden">
          <div
            className="
          w-full justify-start text-[#ff008c] font-semibold font-['Inter'] leading-normal
          text-sm md:text-2xl md:text-center
          "
          >
            スロット、ライブカジノ、バカラ、ルーレットなど、豊富なゲームをご用意。トップスポーツリーグ、試合、そして限定FOMOオリジナルゲームに賭けましょう。
          </div>
        </div>
      </div>

      <div className="self-stretch pt-12 pb-6 inline-flex justify-center items-center gap-2.5">
        <div className="md:w-full w-[354px] inline-flex flex-col justify-start items-center gap-[23px]">
          {/* mobile */}
          <div className="md:hidden w-full h-[38.28px] relative">
            <div data-svg-wrapper className="left-[21px] top-[7.69px] absolute">
              <svg
                width="318"
                height="29"
                viewBox="0 0 318 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 25.5156L315.5 3.03604"
                  stroke="url(#paint0_linear_4004_33774)"
                  strokeOpacity="0.19"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4004_33774"
                    x1="2.62486"
                    y1="31.0142"
                    x2="315.974"
                    y2="23.8967"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FE018C" />
                    <stop offset="1" stopColor="#FF006F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div data-svg-wrapper className="left-[92.25px] top-[4px] absolute">
              <svg
                width="199"
                height="41"
                viewBox="0 0 199 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.75 3.34375L195.897 37.6201"
                  stroke="url(#paint0_linear_4004_33775)"
                  strokeOpacity="0.19"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4004_33775"
                    x1="2.44176"
                    y1="8.83514"
                    x2="196.9"
                    y2="19.7494"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FE018C" />
                    <stop offset="1" stopColor="#FF006F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative text-center justify-center text-white text-[22px] font-bold font-['Changa'] leading-[38px]">
              たったの３ステップですぐ遊べる！{' '}
            </div>
          </div>
          <div className="md:hidden w-[315px] h-[41px] text-center justify-center text-white text-sm font-bold font-['Changa'] leading-normal">
            初回入金で100%ボーナス
            <br />
            （最大$300）
          </div>

          {/* desktop */}
          <div className="hidden md:inline-flex w-full max-w-[1310px] flex-col justify-start items-center">
            <div className="relative">
              <div data-svg-wrapper className="left-[0.80px] top-[60.92px] absolute">
                <svg
                  width="1053"
                  height="53"
                  viewBox="0 0 1053 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.39844 48.0039L1047.39 5.91761"
                    stroke="url(#paint0_linear_4105_38656)"
                    strokeOpacity="0.19"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4105_38656"
                      x1="5.62028"
                      y1="53.4995"
                      x2="1047.62"
                      y2="11.4132"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FE018C" />
                      <stop offset="1" stopColor="#FF006F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div data-svg-wrapper className="left-[238px] top-[54px] absolute">
                <svg
                  width="654"
                  height="75"
                  viewBox="0 0 654 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.60156 5L648.599 69.1723"
                    stroke="url(#paint0_linear_4105_38657)"
                    strokeOpacity="0.19"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4105_38657"
                      x1="5.05528"
                      y1="10.4728"
                      x2="648.052"
                      y2="74.6451"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FE018C" />
                      <stop offset="1" stopColor="#FF006F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative text-center justify-center text-white text-[64px] font-bold font-['Changa'] leading-[173px] text-nowrap">
                たったの３ステップですぐ遊べる！{' '}
              </div>
            </div>
            <div className="text-center justify-center text-white text-[26px] font-bold font-['Changa'] leading-relaxed">
              初回入金で100%ボーナス（最大$300）
            </div>
          </div>

          <StepsM />

          <button className="cursor-pointer" onClick={() => setEventEmitterS({ type: 'signUp' })}>
            <div
              className="
          py-1 bg-[#252525] rounded-[76px] inline-flex justify-center items-center gap-3
          w-[312px] md:w-[412px] md:mt-8
          "
            >
              <div className="justify-start text-black text-[26px] font-normal font-['Inter'] tracking-wide">
                🚀
              </div>
              <div
                className="
            text-center justify-center text-white font-['Changa']
            text-base font-normal leading-[21px] md:text-[28px] md:font-medium md:leading-7
            "
              >
                今すぐ登録
              </div>
            </div>
          </button>

          <button
            className="cursor-pointer"
            onClick={() => setEventEmitterS({ type: 'url', info: '/bonus-terms/' })}
          >
            <div
              className="
          text-center justify-center text-white text-xs font-['Inter'] underline underline-offset-3 decoration-2 decoration-[#FF008C]
          text-[13px] font-normal leading-[29px] md:text-xl md:font-semibold md:leading-[40px]
          "
            >
              ボーナスを取得するには入金完了前に入金ページで
              <br />
              申請する必要があります。
            </div>
          </button>
        </div>
      </div>

      <div className="mt-20 md:pt-6">
        <OneOfTheKind />
      </div>

      <div className="self-stretch pt-12 inline-flex justify-center items-center gap-2.5 px-3">
        <div className="w-full inline-flex flex-col justify-end items-start gap-[18px] px-4 max-w-5xl">
          <div
            className="
          w-full pl-[23px] border-l-4 border-[#FF008C] justify-center text-white font-bold font-['Changa']
          text-[23px] leading-[38px] md:text-[52px] md:leading-[76px]
          "
          >
            いろいろな
            <br />
            決済サービスで決済可能！
          </div>

          <div
            className="
          w-full relative
          h-[613.24px] md:h-[440px]
          "
          >
            <div
              className="
            w-full left-[6.66px] top-0 absolute bg-white/5 rounded-[21px]
            h-[541px] md:h-[370px]
            "
            />

            <div
              className="
            absolute
            top-[227px] md:top-[-140px] md:left-[580px] md:w-[480px]
            "
            >
              <img src={getCDNUrl(`/images/page02/ball-m.png`)} alt="" />
            </div>

            <div
              className="
            h-[45px] left-[30.15px] top-[158.46px] absolute justify-center text-white font-normal font-['Changa']
            w-[285px] text-sm leading-snug md:w-full md:text-[35px] md:leading-[42px]
            "
            >
              暗号通貨をお持ちでなくても大丈夫です。
              <br />
              カードもご利用いただけます。
            </div>
            <div
              className="
            left-[30.15px] absolute inline-flex justify-between items-center overflow-hidden
            top-[88.46px] w-[272px] md:top-[94px] md:w-[460px]
            "
            >
              <img
                src={getCDNUrl(`/images/page02/coin-list-m.png`)}
                alt=""
              />
            </div>
            <div
              className="
            h-[53px] left-[29.20px] top-[25.46px] absolute justify-center text-white  font-['Changa']
            w-[272px] text-[25px] font-semibold leading-[25px] md:w-full md:text-[48px] md:font-extrabold md:leading-[42px]
            "
            >
              {' '}
              {`<`} 対応仮想通貨 {`>`}
            </div>
          </div>

          <button
            className="cursor-pointer self-stretch md:self-center"
            onClick={() => setEventEmitterS({ type: 'signUp' })}
          >
            <div
              className="
          py-1 bg-[#252525] rounded-[76px] inline-flex justify-center items-center gap-3
          w-full md:w-[412px] md:mt-8
          "
            >
              <div className="justify-start text-black text-[26px] font-normal font-['Inter'] tracking-wide">
                🚀
              </div>
              <div
                className="
            text-center justify-center text-white font-['Changa']
            text-base font-normal leading-[21px] md:text-[28px] md:font-medium md:leading-7
            "
              >
                無料でプレイ
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
