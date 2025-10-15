import StepsM from '../steps'
import OneOfTheKind from '../one-of-the-kind'

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="inline-flex flex-col justify-start items-center">
      <div className="self-stretch inline-flex flex-col justify-center items-center gap-1.5">
        <img className="block md:hidden w-full" src="/images/big-header-m.png" />
        <img className="hidden md:block w-full" src="/images/big-header-d.png" />
      </div>

      <div className="size- inline-flex flex-col justify-start items-center gap-[30px] px-3">
        <div className="w-full text-center justify-center">
          <span
            className="
          text-white font-bold font-['Phudu']
          text-[26px] leading-[30px] md:text-5xl md:leading-[50px]
          "
          >
            Play and win{' '}
          </span>
          <span
            className="
          text-[#ff008c] font-bold font-['Phudu']
          text-[26px] leading-[30px] md:text-5xl md:leading-[50px]
          "
          >
            Crypto
          </span>
          <span
            className="
          text-white font-bold font-['Phudu']
          text-[26px] leading-[30px] md:text-5xl md:leading-[50px]
          "
          >
            {' '}
            for free! <br />
          </span>
          <span
            className="
          text-[#ff008c] font-bold font-['Phudu']
          text-[26px] leading-[30px] md:text-5xl md:leading-[50px]
          "
          >
            10 Guaranteed Wins
          </span>
          <span
            className="
          text-white font-bold font-['Phudu']
          text-[26px] leading-[30px] md:text-5xl md:leading-[50px]
          "
          >
            {' '}
            just for signing up.
          </span>
        </div>
        <div className="size- px-[42px] py-2 bg-black rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
          <div
            className="
          text-center justify-start text-white font-medium font-['Inter'] leading-7
          text-2xl md:text-4xl
          "
          >
            PLAY FOR FREE
          </div>
        </div>
        <div className="w-full text-center justify-start">
          <span
            className="
          text-white font-normal font-['Inter'] leading-normal
          text-base md:text-2xl
          "
          >
            Just sign up and choose one of these games to unlock your 10 Free Guaranteed Wins.
            <br /> <br />
            All{' '}
          </span>
          <span
            className="
          text-[#ff008c] font-bold font-['Inter'] leading-normal
          text-base md:text-2xl
          "
          >
            CASH{' '}
          </span>
          <span
            className="
          text-white font-normal font-['Inter'] leading-normal
          text-base md:text-2xl
          "
          >
            wins.{' '}
          </span>
          <span
            className="
          text-[#ff008c] font-bold font-['Inter'] leading-normal
          text-base md:text-2xl
          "
          >
            No deposit{' '}
          </span>
          <span
            className="
          text-white font-normal font-['Inter'] leading-normal
          text-base md:text-2xl
          "
          >
            needed.
          </span>
        </div>
        <div
          className="
        inline-flex justify-between items-center overflow-hidden max-w-[418px]
        gap-1 md:gap-4
        "
        >
          <img className="w-28 h-[150px]" src="https://placehold.co/112x150" />
          <img className="w-28 h-[150px]" src="https://placehold.co/112x150" />
          <img className="w-28 h-[150px]" src="https://placehold.co/112x150" />
        </div>

        <div
          className="
        text-center justify-start text-white font-normal font-['Inter'] leading-normal
        text-base md:text-2xl
        "
        >
          No wagering requirements. No gameplay restrictions. Just straight up crypto wins!
        </div>
        <div className="size- px-[42px] py-2 bg-black rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
          <div
            className="
          text-center justify-start text-white font-medium font-['Inter'] leading-7
          text-2xl md:text-4xl
          "
          >
            PLAY FOR FREE
          </div>
        </div>

        <div className="text-center justify-start text-white text-[13px] font-normal font-['Inter'] leading-normal">
          Available to new players only.
        </div>
      </div>

      <div className="w-full pt-12 inline-flex flex-col justify-start items-center gap-[35px] px-3">
        <div className="size- flex flex-col justify-start items-center gap-4">
          <img className="w-[65.75px] h-[34.34px]" src="/images/game-tag-m.png" />
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
            Games of all genres await!
          </div>
        </div>
        <div className="max-w-[992px]">
          <img className="md:hidden" src="/images/game-list-m.png" alt="" />
          <img className="hidden md:block" src="/images/game-list-d.png" alt="" />
        </div>
        <div className="flex flex-col justify-start items-start gap-0.5 overflow-hidden">
          <div
            className="
          w-full max-w-[1300px] justify-start text-[#ff008c] font-semibold font-['Inter'] leading-normal
          text-sm md:text-2xl md:text-center
          "
          >
            Wide variety of slots, live casino, baccarat, roulette. Bet on top Sports leagues,
            international matches and Exclusive FOMO Originals.
          </div>
        </div>
      </div>

      <div className="self-stretch pt-12 inline-flex justify-center items-center gap-2.5">
        <div className="w-full inline-flex flex-col justify-start items-center gap-[17px]">
          <div className="w-[334.09px] h-[76px] relative">
            <div className="left-0 top-0 absolute text-center justify-center text-white text-3xl font-normal font-['Changa'] leading-[38px]">
              Just a Few Clicks to Claim <br />
              Your Welcome Bonus!
            </div>
            <div data-svg-wrapper className="left-[9px] top-[26.69px] absolute">
              <svg
                width="319"
                height="29"
                viewBox="0 0 319 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 25.5156L316 3.03604"
                  stroke="url(#paint0_linear_3965_33639)"
                  strokeOpacity="0.19"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3965_33639"
                    x1="3.12486"
                    y1="31.0142"
                    x2="316.474"
                    y2="23.8967"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FE018C" />
                    <stop offset="1" stopColor="#FF006F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div data-svg-wrapper className="left-[80.25px] top-[23px] absolute">
              <svg
                width="199"
                height="41"
                viewBox="0 0 199 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25 3.34375L196.397 37.6201"
                  stroke="url(#paint0_linear_3965_33640)"
                  strokeOpacity="0.19"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3965_33640"
                    x1="2.94176"
                    y1="8.83514"
                    x2="197.4"
                    y2="19.7494"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FE018C" />
                    <stop offset="1" stopColor="#FF006F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <StepsM />

          <div className="w-[312px] h-10 py-1 bg-[#252525] rounded-[76px] inline-flex justify-center items-center gap-3">
            <div className="justify-start text-black text-[26px] font-normal font-['Inter'] tracking-wide">
              🚀
            </div>
            <div className="text-center justify-center text-white text-base font-normal font-['Changa'] leading-[21px]">
              SIGN UP NOW
            </div>
          </div>
          <div className="text-center justify-center text-white text-[13px] font-normal font-['Changa'] leading-[4px] underline underline-offset-3 decoration-2 decoration-[#FF008C]">
            Bonus applied instantly after deposit
          </div>
        </div>
      </div>

      <div className="mt-20 md:pt-6">
        <OneOfTheKind />
      </div>

      <div className="self-stretch pt-12 inline-flex justify-center items-center gap-2.5 px-3">
        <div className="w-full inline-flex flex-col justify-start items-start gap-[18px] px-4 max-w-5xl">
          <div
            className="
          w-full pl-[23px] border-l-4 border-[#FF008C] h-[76px] justify-center text-white font-normal font-['Changa']
          text-3xl leading-[38px] md:text-[52px] md:leading-[76px]
          "
          >
            Crypto Casino. <br className="md:hidden" />
            Fiat-Friendly.
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
              <img src="/images/ball-m.png" alt="" />
            </div>

            <div
              className="
            h-[45px] left-[30.12px] top-[186.66px] absolute justify-center text-white font-normal font-['Changa']
            text-2xl leading-snug md:text-[35px] md:leading-[42px]
            "
            >
              No Crypto? No problem.
              <br />
              Just use your card.{' '}
            </div>
            <div
              className="
            left-[30.14px] absolute inline-flex justify-between items-center overflow-hidden
            top-[111.66px] w-[272px] md:top-[94px] md:w-[460px]
            "
            >
              <img src="/public/images/coin-list-m.png" alt="" />
            </div>

            <div
              className="
            h-[53px] left-[28.16px] top-[35.66px] absolute justify-center text-white font-['Changa']
            text-[28px] font-semibold leading-[25px] md:text-[48px] md:font-extrabold md:leading-[42px]
            "
            >
              Supported <br className="md:hidden" />
              cryptocurrencies{' '}
            </div>
          </div>

          <div className="w-full max-w-[312px] self-center h-10 py-1 bg-[#252525] rounded-[76px] inline-flex justify-center items-center gap-3">
            <div className="justify-start text-black text-[26px] font-normal font-['Inter'] tracking-wide">
              🚀
            </div>
            <div className="text-center justify-center text-white text-base font-normal font-['Changa'] leading-[21px]">
              PLAY FOR FREE
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[140px]"></div>
    </div>
  )
}
