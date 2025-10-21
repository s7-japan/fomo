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
          src={getCDNUrl(`/themes/fomoio/landingpage/images/page02/big-header-m-ko.png`)}
        />
        <img
          className="hidden md:block w-full"
          src={getCDNUrl(`/themes/fomoio/landingpage/images/page02/big-header-d-ko.png`)}
        />
      </div>

      <div className="md:w-[720px] inline-flex flex-col justify-start items-center gap-[30px] px-3">
        <div className="self-stretch flex flex-col justify-center items-center">
          <div className="self-stretch justify-center">
            <span
              className="
            text-white font-semibold font-['Gmarket_Sans']
            text-2xl leading-[28.80px] md:text-5xl md:leading-[50px]
            "
            >
              무료로{' '}
            </span>
            <span
              className="
            text-[#ff008c] font-semibold font-['Gmarket_Sans']
            text-2xl leading-[28.80px] md:text-5xl md:leading-[50px]
            "
            >
              크립토{' '}
            </span>
            <span
              className="
            text-white font-semibold font-['Gmarket_Sans']
            text-2xl leading-[28.80px] md:text-5xl md:leading-[50px]
            "
            >
              획득!
            </span>
          </div>
          <div className="self-stretch text-right justify-center">
            <span
              className="
            text-white font-semibold font-['Gmarket_Sans']
            text-2xl leading-[28.80px] md:text-5xl md:leading-[50px]
            "
            >
              가입만 해도{' '}
            </span>
            <span
              className="
            text-[#ff008c] font-semibold font-['Gmarket_Sans']
            text-2xl leading-[28.80px] md:text-5xl md:leading-[50px]
            "
            >
              10회 보장 승리
            </span>
            <span
              className="
            text-white font-semibold font-['Gmarket_Sans']
            text-2xl leading-[28.80px] md:text-5xl md:leading-[50px]
            "
            >
              !
            </span>
          </div>
        </div>

        <button className="cursor-pointer" onClick={() => setEventEmitterS({ type: 'signUp' })}>
          <div className="size- px-[42px] py-2 bg-black rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
            <div
              className="
          text-center justify-start text-white font-normal font-['Gmarket_Sans'] leading-7
          text-2xl md:text-4xl
          "
            >
              무료로 플레이하기
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
            회원가입 후 원하는 게임을 선택하세요.
            <br />
            10회의 무료 보장 승리 스핀이 즉시 열립니다!
            <br />
            <br />
            모든 당첨금은 현금 보상으로 지급되며,
            <br />
          </span>
          <span
            className="
          text-[#ff008c] font-bold font-['Inter'] leading-normal
          text-base md:text-2xl
          "
          >
            입금이 필요 없습니다
          </span>
          <span
            className="
          text-white font-normal font-['Inter'] leading-normal
          text-base md:text-2xl
          "
          >
            .
          </span>
        </div>
        <GameList />
        <div
          className="
        w-full text-center justify-start text-white font-normal font-['Inter'] leading-normal
        text-base md:text-2xl
        "
        >
          플레이 제한이나 베팅 조건 없이
          <br />
          바로 크립토 승리를 즐기세요!{' '}
        </div>
        <button className="cursor-pointer" onClick={() => setEventEmitterS({ type: 'signUp' })}>
          <div className="size- px-[42px] py-2 bg-black rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
            <div
              className="
          text-center justify-start text-white font-normal font-['Gmarket_Sans'] leading-7
          text-2xl md:text-4xl
          "
            >
              무료로 플레이하기
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
            ※ 신규 회원 한정 프로모션입니다.
          </div>
        </button>
      </div>

      <div className="w-full pt-12 inline-flex flex-col justify-start items-center gap-[35px] px-3">
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <img
            className="w-[65.75px] h-[34.34px]"
            src={getCDNUrl(`/themes/fomoio/landingpage/images/page02/game-tag-m.png`)}
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
          text-center justify-start text-white font-semibold font-['Pretendard'] 
          text-xl leading-normal md:text-4xl md:leading-9
          "
          >
            모든 장르의 게임이 기다리고 있습니다!
          </div>
        </div>
        <div className="max-w-[992px]">
          <img
            className="md:hidden"
            src={getCDNUrl(`/themes/fomoio/landingpage/images/page02/game-list-m.png`)}
            alt=""
          />
          <img
            className="hidden md:block"
            src={getCDNUrl(`/themes/fomoio/landingpage/images/page02/game-list-d.png`)}
            alt=""
          />
        </div>
        <div
          className="
        text-center justify-start text-[#ff008c] font-semibold font-['Pretendard'] leading-[30px]
        text-xl md:text-2xl md:text-center
        "
        >
          슬롯, 라이브카지노, 바카라, 룰렛등
          <br />전 세계 메이저 리그와 빅매치 베팅까지!
        </div>

        <div className="self-stretch inline-flex flex-col justify-start items-center gap-0.5 overflow-hidden">
          <div className="size- inline-flex justify-start items-center gap-[7px]">
            <img
              className="w-[83px] h-5"
              src="https://fomoio.netlify.app/themes/fomoio/landingpage/images/FOMO_logo.png"
            />
            <div
              className="
            text-center justify-start text-white font-semibold font-['Pretendard'] leading-normal
            text-xl md:text-2xl
            "
            >
              에서만 즐길 수 있는
            </div>
          </div>
          <div
            className="
          text-center justify-start text-white font-semibold font-['Pretendard'] leading-tight
          text-xl md:text-2xl
          "
          >
            오리지널 독점 게임도 놓치지 마세요!
          </div>
        </div>
      </div>

      <div className="self-stretch pt-12 inline-flex justify-center items-center gap-2.5">
        <div className="w-full inline-flex flex-col justify-start items-center gap-[17px]">
          {/* mobile */}
          <div className="md:hidden w-[313px] h-[76px] relative">
            <div className="left-[9px] top-0 absolute text-center justify-center text-white text-3xl font-normal font-['Changa'] leading-[38px]">
              단 몇 번의 클릭으로
              <br />
              웰컴 보너스를 받으세요!
            </div>
            <div data-svg-wrapper className="left-0 top-[26.69px] absolute">
              <svg
                width="319"
                height="29"
                viewBox="0 0 319 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 25.5156L316 3.03604"
                  stroke="url(#paint0_linear_4003_33562)"
                  strokeOpacity="0.19"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4003_33562"
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
            <div data-svg-wrapper className="left-[71.25px] top-[23px] absolute">
              <svg
                width="199"
                height="41"
                viewBox="0 0 199 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25 3.34375L196.397 37.6201"
                  stroke="url(#paint0_linear_4003_33563)"
                  strokeOpacity="0.19"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4003_33563"
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
          <div className="md:hidden w-full text-center justify-center">
            <span className="text-white text-xs font-normal font-['Changa'] leading-normal">
              첫{' '}
            </span>
            <span className="text-white text-[17px] font-normal font-['Changa'] leading-normal">
              3회
            </span>
            <span className="text-white text-xs font-normal font-['Changa'] leading-normal">
              {' '}
              입금으로
              <br />
              최대{' '}
            </span>
            <span className="text-white text-[17px] font-normal font-['Changa'] leading-normal">
              $500
            </span>
            <span className="text-white text-xs font-normal font-['Changa'] leading-normal">
              {' '}
              보너스 획득!
            </span>
          </div>

          {/* desktop */}
          <div className="hidden md:inline-flex w-full max-w-[1310px] flex-col justify-start items-center">
            <div className="w-[1121px] h-[140px] relative">
              <div data-svg-wrapper className="left-[47.30px] top-[45.92px] absolute">
                <svg
                  width="1053"
                  height="53"
                  viewBox="0 0 1053 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.79688 48.0039L1047.79 5.91761"
                    stroke="url(#paint0_linear_4290_39606)"
                    strokeOpacity="0.19"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4290_39606"
                      x1="6.01871"
                      y1="53.4995"
                      x2="1048.02"
                      y2="11.4132"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FE018C" />
                      <stop offset="1" stopColor="#FF006F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div data-svg-wrapper className="left-[284.50px] top-[39px] absolute">
                <svg
                  width="653"
                  height="75"
                  viewBox="0 0 653 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5L647.997 69.1723"
                    stroke="url(#paint0_linear_4290_39607)"
                    strokeOpacity="0.19"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4290_39607"
                      x1="4.45372"
                      y1="10.4728"
                      x2="647.451"
                      y2="74.6451"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FE018C" />
                      <stop offset="1" stopColor="#FF006F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="left-0 top-0 absolute text-center justify-center text-white text-[62px] font-normal font-['Changa'] leading-[140px]">
                단 몇 번의 클릭으로 웰컴 보너스를 받으세요!
              </div>
            </div>
            <div className="text-center justify-center text-white text-[34px] font-normal font-['Changa'] leading-normal">
              첫 3회 입금으로 최대 $500 보너스 획득!
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
                지금 가입하기
              </div>
            </div>
          </button>

          <button
            className="cursor-pointer"
            onClick={() => setEventEmitterS({ type: 'url', info: '/bonus-terms/' })}
          >
            <div
              className="
          text-center justify-center text-white font-['Changa'] underline underline-offset-3 decoration-2 decoration-[#FF008C]
          text-[13px] font-normal leading-[4px] md:text-xl md:font-semibold md:leading-[80px]
          "
            >
              보너스는 입금 전 '입금 페이지'에서 반드시 신청해야 합니다.
            </div>
          </button>
        </div>
      </div>

      <div className="mt-20 md:pt-6">
        <OneOfTheKind />
      </div>

      <div className="self-stretch pt-12 inline-flex justify-center items-center gap-2.5 px-3">
        <div className="w-full inline-flex flex-col justify-start items-start gap-[18px] px-4 max-w-5xl">
          <div
            className="
          w-full pl-[23px] border-l-4 border-[#FF008C] justify-center text-white font-normal font-['Changa']
          text-3xl leading-[38px] md:text-[52px] md:leading-[76px]
          "
          >
            암호화폐 OK! <br className="md:hidden" />
            법정화폐도 OK!
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
              <img src={getCDNUrl(`/themes/fomoio/landingpage/images/page02/ball-m.png`)} alt="" />
            </div>

            <div
              className="
            h-[45px] left-[29.17px] top-[170px] absolute justify-center text-white font-normal font-['Changa'] leading-snug
            w-[285px] text-lg md:w-full md:text-[35px] md:leading-[42px]
            "
            >
              암호화폐가 없으신가요? 걱정 마세요!
              <br />
              카드만 사용하세요.
            </div>
            <div
              className="
            left-[29.18px] absolute inline-flex justify-between items-center overflow-hidden
            top-[95px] w-[272px] md:top-[94px] md:w-[460px]
            "
            >
              <img
                src={getCDNUrl(`/themes/fomoio/landingpage/images/page02/coin-list-m.png`)}
                alt=""
              />
            </div>
            <div
              className="
            h-[53px] left-[29.16px] top-[32px] absolute justify-center text-white font-['Changa']
            w-[272px] text-[25px] font-semibold leading-[25px] md:w-full md:text-[48px] md:font-extrabold md:leading-[42px]
            "
            >
              암호화폐를 입금하세요.
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
                무료로 플레이하세요
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
