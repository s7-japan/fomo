import StepsM from '../steps'
import OneOfTheKind from '../one-of-the-kind'

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="inline-flex flex-col justify-start items-center">
      <div className="self-stretch inline-flex flex-col justify-center items-center gap-1.5">
        <img className="w-full" src="/images/big-header-m.png" />
      </div>
      <div className="size- inline-flex flex-col justify-start items-center gap-[30px] px-3">
        <div className="w-full text-center justify-center">
          <span className="text-white text-2xl font-extrabold font-['Inter'] leading-[30px] tracking-wide">
            無料で
          </span>
          <span className="text-[#ff008c] text-2xl font-extrabold font-['Inter'] leading-[30px] tracking-wide">
            クリプト
          </span>
          <span className="text-white text-2xl font-extrabold font-['Inter'] leading-[30px] tracking-wide">
            GET！
            <br />
            登録だけで{' '}
          </span>
          <span className="text-[#ff008c] text-2xl font-extrabold font-['Inter'] leading-[30px] tracking-wide">
            勝利保証10回
          </span>
          <span className="text-white text-2xl font-extrabold font-['Inter'] leading-[30px] tracking-wide">
            ！
          </span>
        </div>
        <div className="size- px-[42px] py-2 bg-black rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-start text-white text-2xl font-medium font-['Inter'] leading-7">
            無料でプレイ
          </div>
        </div>
        <div className="w-full text-center justify-start">
          <span className="text-white text-base font-normal font-['Inter'] leading-normal">
            登録してゲームを選ぶだけ！ <br />
            勝利保証10回が即解放！
            <br />
            すべて現金勝利、
          </span>
          <span className="text-[#ff008c] text-base font-bold font-['Inter'] leading-normal">
            入金不要
          </span>
          <span className="text-white text-base font-normal font-['Inter'] leading-normal">。</span>
        </div>
        <div className="self-stretch inline-flex justify-between items-center overflow-hidden gap-1">
          <img className="w-28 h-[150px]" src="https://placehold.co/112x150" />
          <img className="w-28 h-[150px]" src="https://placehold.co/112x150" />
          <img className="w-28 h-[150px]" src="https://placehold.co/112x150" />
        </div>
        <div className="w-full text-center justify-start text-white text-base font-normal font-['Inter'] leading-normal">
          出金条件なし・プレイ制限なし。 純粋にクリプト勝利を楽しもう！{' '}
        </div>
        <div className="size- px-[42px] py-2 bg-black rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-start text-white text-2xl font-medium font-['Inter'] leading-7">
            無料でプレイ
          </div>
        </div>
        <div className="w-full text-center justify-start text-white text-[13px] font-normal font-['Inter'] leading-normal">
          ※ 新規プレイヤー限定オファーです。
        </div>
      </div>
      <div className="w-full pt-12 inline-flex flex-col justify-start items-center gap-[35px] px-3">
        <div className="size- flex flex-col justify-start items-center gap-4">
          <img className="w-[65.75px] h-[34.34px]" src="/images/game-tag-m.png" />
          <div className="text-center justify-start text-[#ff008c] text-6xl font-semibold font-['Inter'] leading-[60px]">
            5,000+
          </div>
          <div className="text-center justify-start text-white text-base font-semibold font-['Inter'] leading-normal">
            あらゆるジャンルのゲームが待っています！
          </div>
        </div>
        <div className="max-w-[992px]">
          <img className="md:hidden" src="/images/game-list-m.png" alt="" />
          <img className="hidden md:block" src="/images/game-list-d.png" alt="" />
        </div>
        <div className="flex flex-col justify-start items-start gap-0.5 overflow-hidden">
          <div className="w-full justify-start text-[#ff008c] text-sm font-semibold font-['Inter'] leading-normal">
            スロット、ライブカジノ、バカラ、ルーレットなど、豊富なゲームをご用意。トップスポーツリーグ、試合、そして限定FOMOオリジナルゲームに賭けましょう。
          </div>
        </div>
      </div>
      <div className="self-stretch pt-12 pb-6 inline-flex justify-center items-center gap-2.5">
        <div className="w-[354px] inline-flex flex-col justify-start items-center gap-[23px]">
          <div className="w-full h-[38.28px] relative">
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
            <div className="left-0 top-0 absolute text-center justify-center text-white text-[22px] font-bold font-['Changa'] leading-[38px]">
              たったの３ステップですぐ遊べる！{' '}
            </div>
          </div>

          <div className="w-[315px] h-[41px] text-center justify-center text-white text-sm font-bold font-['Changa'] leading-normal">
            初回入金で100%ボーナス
            <br />
            （最大$300）
          </div>

          <StepsM />

          <div className="w-[312px] h-10 py-1 bg-[#252525] rounded-[76px] inline-flex justify-center items-center gap-3">
            <div className="justify-start text-black text-[26px] font-normal font-['Inter'] tracking-wide">
              🚀
            </div>
            <div className="text-center justify-center text-white text-base font-normal font-['Changa'] leading-[21px]">
              今すぐ登録
            </div>
          </div>

          <div className="text-center justify-center text-white text-xs font-semibold font-['Inter'] leading-[29px] underline underline-offset-3 decoration-2 decoration-[#FF008C]">
            ボーナスを取得するには入金完了前に入金ページで
            <br />
            申請する必要があります。
          </div>
        </div>
      </div>
      <div className="mt-20 md:pt-6">
        <OneOfTheKind />
      </div>
      <div className="self-stretch pt-12 inline-flex justify-center items-center gap-2.5 px-3">
        <div className="w-full inline-flex flex-col justify-end items-start gap-[18px] px-4 max-w-5xl">
          <div className="w-full pl-[23px] border-l-4 border-[#FF008C] justify-center text-white text-[23px] font-bold font-['Changa'] leading-[38px]">
            いろいろな
            <br />
            決済サービスで決済可能！
          </div>

          <div className="w-full h-[613.24px] relative">
            <div className="w-full h-[541px] left-[6.66px] top-0 absolute bg-white/5 rounded-[21px]" />

            <div className="top-[227.39px] absolute">
              <img src="/images/ball-m.png" alt="" />
            </div>

            <div className="w-[285px] h-[45px] left-[30.15px] top-[158.46px] absolute justify-center text-white text-sm font-normal font-['Changa'] leading-snug">
              暗号通貨をお持ちでなくても大丈夫です。
              <br />
              カードもご利用いただけます。
            </div>
            <div className="w-[272px] left-[30.15px] top-[88.46px] absolute inline-flex justify-between items-center overflow-hidden">
              <img src="/public/images/coin-list-m.png" alt="" />
            </div>
            <div className="w-[272px] h-[53px] left-[29.20px] top-[25.46px] absolute justify-center text-white text-[25px] font-semibold font-['Changa'] leading-[25px]">
              {' '}
              {`<`} 対応仮想通貨 {`>`}
            </div>
          </div>

          <div className="w-full max-w-[312px] self-center h-10 py-1 bg-[#252525] rounded-[76px] inline-flex justify-center items-center gap-3">
            <div className="justify-start text-black text-[26px] font-normal font-['Inter'] tracking-wide">
              🚀
            </div>
            <div className="text-center justify-center text-white text-base font-normal font-['Changa'] leading-[21px]">
              無料でプレイ
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[140px]"></div>
    </div>
  )
}
