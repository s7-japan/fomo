import { setEventEmitterS } from '../../../lib/services/event.service'
import { getCDNUrl } from '../../../lib/services/layout.service'
import OneOfTheKind from '../one-of-the-kind'
import StepsM from '../steps'
import GameList from './game-list'

export default function App() {
  return (
    <div className="inline-flex flex-col justify-start items-center">
      <div className="self-stretch inline-flex flex-col justify-center items-center gap-1.5 -mb-6 md:-mb-11">
        {/* src={getCDNUrl(`/images/page02/big-header-m-ko.png`)} */}
        <img className="block md:hidden w-full" src={`/images/02/big-header-m-ko.png`} />
        {/* src={getCDNUrl(`/images/page02/big-header-d-ko_02.png`)} */}
        <img className="hidden md:block w-full" src={`/images/02/big-header-d-ko.png`} />
      </div>

      <div className="inline-flex flex-col items-center gap-[30px] px-9 mt-7 md:items-start md:mt-20">
        {/* mobile */}
        <div className="md:hidden self-stretch inline-flex justify-start items-start gap-[23px]">
          {/* <div className="w-[77px] h-0 origin-top-left rotate-90 outline outline-[3px] outline-offset-[-1.50px] outline-[#fe006e]"></div> */}
          <div className="w-full border-l-4 border-[#fe006e] pl-6">
            <span className="text-white text-[32px] font-bold font-['Gmarket_Sans'] leading-[38px]">
              신용카드 or 코인? <br />
            </span>
            <span className="text-white text-2xl font-medium font-['Gmarket_Sans'] leading-[38px]">
              원하는 방식으로 즐기세요.
            </span>
          </div>
        </div>
        <div className="md:hidden self-stretch relative">
          <img src={`/images/02/card-m-ko.png`} alt="card" />
        </div>

        {/* desktop */}
        <div className="hidden h-[112px] border-l-8 border-[#fe006e] pl-6 md:inline-flex text-center items-center text-white text-5xl font-bold font-['Gmarket_Sans'] leading-[42px]">
          신용카드 or 코인? 원하는 방식으로 즐기세요.
        </div>
        <div className="hidden self-stretch max-w-[1200px] mt-[-20px] relative md:inline-flex">
          <img src={`/images/02/card-d-ko.png`} alt="card" />
        </div>
      </div>

      <div className="w-full pt-12 inline-flex flex-col justify-start items-center gap-[35px] px-3">
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
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
          text-center justify-start text-white font-semibold font-['Pretendard'] 
          text-xl leading-normal md:text-4xl md:leading-9
          "
          >
            모든 장르의 게임이 기다리고 있습니다!
          </div>
        </div>
        <div className="max-w-[992px]">
          <img className="md:hidden" src={getCDNUrl(`/images/page02/game-list-m.png`)} alt="" />
          <img
            className="hidden md:block"
            src={getCDNUrl(`/images/page02/game-list-d.png`)}
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
            <img className="w-[83px] h-5" src={getCDNUrl(`/images/FOMO_logo.png`)} />
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

      <div className="md:w-[720px] inline-flex flex-col justify-start items-center gap-[30px] px-3 mt-32">
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
          text-center justify-start text-white font-normal font-['Gmarket_Sans'] translate-y-[2px]
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
          text-center justify-start text-white font-normal font-['Gmarket_Sans'] translate-y-[2px]
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

      <div className="self-stretch mt-12 inline-flex justify-center items-center gap-2.5 md:mt-32">
        <div className="w-full inline-flex flex-col justify-start items-center gap-[17px]">
          {/* mobile */}
          <div className="w-[263px] px-4 py-2 bg-[#ff008c] rounded-[100px] inline-flex justify-center items-center gap-2.5 md:hidden">
            <div className="text-center justify-center text-white text-2xl font-bold font-['Gmarket_Sans']">
              선착순 1,000명 한정
            </div>
          </div>

          <div className="w-[324px] h-[76px] relative md:hidden">
            <div className="left-0 top-0 absolute text-center justify-center">
              <span className="text-white text-3xl font-bold font-['Gmarket_Sans'] leading-[38px]">
                첫 손실금 100% 캐시백!
                <br />
              </span>
              <span className="text-white text-base font-light font-['Gmarket_Sans'] leading-[38px]">
                최대
              </span>
              <span className="text-white text-3xl font-bold font-['Gmarket_Sans'] leading-[38px]">
                {' '}
                $77 ( 11만원 상당)
              </span>
            </div>
            <div data-svg-wrapper className="left-[3px] top-[26.69px] absolute">
              <svg
                width="318"
                height="28"
                viewBox="0 0 318 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.49219 24.9844L315.492 2.50479"
                  stroke="url(#paint0_linear_5167_60703)"
                  stroke-opacity="0.19"
                  stroke-width="5"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5167_60703"
                    x1="2.61705"
                    y1="30.483"
                    x2="315.966"
                    y2="23.3654"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FE018C" />
                    <stop offset="1" stop-color="#FF006F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div data-svg-wrapper className="left-[74.25px] top-[23px] absolute">
              <svg
                width="199"
                height="40"
                viewBox="0 0 199 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.46875 2.53516L195.615 36.8115"
                  stroke="url(#paint0_linear_5167_60704)"
                  stroke-opacity="0.19"
                  stroke-width="5"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5167_60704"
                    x1="2.16051"
                    y1="8.02655"
                    x2="196.618"
                    y2="18.9408"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FE018C" />
                    <stop offset="1" stop-color="#FF006F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* desktop */}
          <div className="hidden size- px-20 py-6 bg-[#ff008c] rounded-[100px] justify-center items-center gap-2.5 md:inline-flex">
            <div className="text-center justify-center text-white text-[40px] font-bold font-['Gmarket_Sans']">
              선착순 1,000명 한정
            </div>
          </div>

          <div className="hidden w-[1056px] h-[173px] relative md:inline-flex">
            <div data-svg-wrapper className="left-[0px] top-[65.92px] absolute">
              <svg
                width="1052"
                height="53"
                viewBox="0 0 1052 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 47.0859L1047 4.99964"
                  stroke="url(#paint0_linear_5167_60294)"
                  stroke-opacity="0.19"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5167_60294"
                    x1="5.22184"
                    y1="52.5815"
                    x2="1047.22"
                    y2="10.4952"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FE018C" />
                    <stop offset="1" stop-color="#FF006F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div data-svg-wrapper className="left-[331px] top-[59px] absolute">
              <svg
                width="653"
                height="75"
                viewBox="0 0 653 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5L647.997 69.1723"
                  stroke="url(#paint0_linear_5167_60295)"
                  stroke-opacity="0.19"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5167_60295"
                    x1="4.45372"
                    y1="10.4728"
                    x2="647.451"
                    y2="74.6451"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FE018C" />
                    <stop offset="1" stop-color="#FF006F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="left-0 top-0 absolute text-center justify-center">
              <span className="text-white text-[72px] font-bold font-['Gmarket_Sans'] leading-[173px]">
                첫 손실금 100% 캐시백!{' '}
              </span>
              <span className="text-white text-[50px] font-medium font-['Gmarket_Sans'] leading-[173px]">
                최대
              </span>
              <span className="text-white text-[50px] font-bold font-['Gmarket_Sans'] leading-[173px]">
                {' '}
              </span>
              <span className="text-white text-[72px] font-bold font-['Gmarket_Sans'] leading-[173px]">
                $77
              </span>
            </div>
          </div>

          <StepsM />

          <button
            className="cursor-pointer"
            onClick={() =>
              setEventEmitterS({ type: 'url', info: '/promotion-page/limited_cashback/' })
            }
          >
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
                바로 가입하기
              </div>
            </div>
          </button>

          <button
            className="cursor-pointer"
            onClick={() =>
              setEventEmitterS({ type: 'url', info: '/promotion-page/registration_reward/' })
            }
          >
            <div
              className="
          text-center justify-center text-white font-['Changa'] underline underline-offset-3 decoration-2 decoration-[#FF008C]
          text-[13px] font-normal leading-[4px] md:text-xl md:font-semibold md:leading-[80px]
          "
            >
              ⚡ 선착순 1,000명 한정!
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
              <img src={getCDNUrl(`/images/page02/ball-m.png`)} alt="" />
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
              <img src={getCDNUrl(`/images/page02/coin-list-m.png`)} alt="" />
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
