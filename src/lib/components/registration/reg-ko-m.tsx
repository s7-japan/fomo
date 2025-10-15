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
        <div className="self-stretch flex flex-col justify-center items-center overflow-hidden">
          <div className="self-stretch justify-center">
            <span className="text-white text-2xl font-medium font-['Gmarket_Sans'] leading-[28.80px]">
              무료로{' '}
            </span>
            <span className="text-[#ff008c] text-2xl font-medium font-['Gmarket_Sans'] leading-[28.80px]">
              크립토{' '}
            </span>
            <span className="text-white text-2xl font-medium font-['Gmarket_Sans'] leading-[28.80px]">
              획득!
            </span>
          </div>
          <div className="self-stretch text-right justify-center">
            <span className="text-white text-2xl font-medium font-['Gmarket_Sans'] leading-[28.80px]">
              가입만 해도{' '}
            </span>
            <span className="text-[#ff008c] text-2xl font-medium font-['Gmarket_Sans'] leading-[28.80px]">
              10회 보장 승리
            </span>
            <span className="text-white text-2xl font-medium font-['Gmarket_Sans'] leading-[28.80px]">
              !
            </span>
          </div>
        </div>
        <div className="size- px-[42px] py-2 bg-black rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-start text-white text-2xl font-normal font-['Gmarket_Sans'] leading-7">
            무료로 플레이하기
          </div>
        </div>
        <div className="w-full text-center justify-start">
          <span className="text-white text-base font-normal font-['Inter'] leading-normal">
            회원가입 후 원하는 게임을 선택하세요.
            <br />
            10회의 무료 보장 승리 스핀이 즉시 열립니다!
            <br />
            <br />
            모든 당첨금은 현금 보상으로 지급되며,
            <br />
          </span>
          <span className="text-[#ff008c] text-base font-bold font-['Inter'] leading-normal">
            입금이 필요 없습니다
          </span>
          <span className="text-white text-base font-normal font-['Inter'] leading-normal">.</span>
        </div>
        <div
          className="
        max-w-[418px] inline-flex justify-between items-center overflow-hidden
        gap-1 md:gap-4
        "
        >
          <img className="w-28 h-[150px]" src="https://placehold.co/112x150" />
          <img className="w-28 h-[150px]" src="https://placehold.co/112x150" />
          <img className="w-28 h-[150px]" src="https://placehold.co/112x150" />
        </div>
        <div className="w-full text-center justify-start text-white text-base font-normal font-['Inter'] leading-normal">
          플레이 제한이나 베팅 조건 없이
          <br />
          바로 크립토 승리를 즐기세요!{' '}
        </div>
        <div className="size- px-[42px] py-2 bg-black rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-start text-white text-2xl font-normal font-['Gmarket_Sans'] leading-7">
            무료로 플레이하기
          </div>
        </div>
        <div className="w-full text-center justify-start text-white text-[13px] font-normal font-['Inter'] leading-normal">
          ※ 신규 회원 한정 프로모션입니다.
        </div>
      </div>

      <div className="w-[350px] pt-12 inline-flex flex-col justify-start items-center gap-[35px] px-3">
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <img className="w-[65.75px] h-[34.34px]" src="/images/game-tag-m.png" />
          <div className="text-center justify-start text-[#ff008c] text-6xl font-semibold font-['Inter'] leading-[60px]">
            5,000+
          </div>
          <div className="text-center justify-start text-white text-xl font-semibold font-['Pretendard'] leading-normal">
            모든 장르의 게임이 기다리고 있습니다!
          </div>
        </div>
        <div className="max-w-[992px]">
          <img className="md:hidden" src="/images/game-list-m.png" alt="" />
          <img className="hidden md:block" src="/images/game-list-d.png" alt="" />
        </div>
        <div className="text-center justify-start text-[#ff008c] text-xl font-semibold font-['Pretendard'] leading-[30px]">
          슬롯, 라이브카지노, 바카라, 룰렛등
          <br />전 세계 메이저 리그와 빅매치 베팅까지!
        </div>

        <div className="self-stretch inline-flex flex-col justify-start items-center gap-0.5 overflow-hidden">
          <div className="size- inline-flex justify-start items-center gap-[7px]">
            <img
              className="w-[83px] h-5"
              src="https://fomoio.netlify.app/themes/fomoio/landingpage/images/FOMO_logo.png"
            />
            <div className="text-center justify-start text-white text-xl font-semibold font-['Pretendard'] leading-normal">
              에서만 즐길 수 있는
            </div>
          </div>
          <div className="text-center justify-start text-white text-xl font-semibold font-['Pretendard'] leading-tight">
            오리지널 독점 게임도 놓치지 마세요!
          </div>
        </div>
      </div>

      <div className="self-stretch pt-12 inline-flex justify-center items-center gap-2.5">
        <div className="w-full inline-flex flex-col justify-start items-center gap-[17px]">
          <div className="w-[313px] h-[76px] relative">
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

          <div className="w-full text-center justify-center">
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

          <StepsM />

          <div className="w-[312px] h-10 py-1 bg-[#252525] rounded-[76px] inline-flex justify-center items-center gap-3">
            <div className="justify-start text-black text-[26px] font-normal font-['Inter'] tracking-wide">
              🚀
            </div>
            <div className="text-center justify-center text-white text-base font-normal font-['Changa'] leading-[21px]">
              지금 가입하기
            </div>
          </div>

          <div className="text-center justify-center text-white text-[13px] font-normal font-['Changa'] leading-[4px] underline underline-offset-3 decoration-2 decoration-[#FF008C]">
            보너스는 입금 전 '입금 페이지'에서 반드시 신청해야 합니다.
          </div>
        </div>
      </div>

      <div className="mt-20 md:pt-6">
        <OneOfTheKind />
      </div>

      <div className="self-stretch pt-12 inline-flex justify-center items-center gap-2.5 px-3">
        <div className="w-full inline-flex flex-col justify-start items-start gap-[18px] px-4 max-w-5xl">
          <div className="w-full pl-[23px] border-l-4 border-[#FF008C] justify-center text-white text-3xl font-normal font-['Changa'] leading-[38px]">
            암호화폐 OK!
            <br />
            법정화폐도 OK!
          </div>

          <div className="w-full h-[613.24px] relative">
            <div className="w-full h-[541px] left-[6.66px] top-0 absolute bg-white/5 rounded-[21px]" />

            <div className="top-[227px] absolute">
              <img src="/images/ball-m.png" alt="" />
            </div>

            <div className="w-[285px] h-[45px] left-[29.17px] top-[170px] absolute justify-center text-white text-lg font-normal font-['Changa'] leading-snug">
              암호화폐가 없으신가요? 걱정 마세요!
              <br />
              카드만 사용하세요.
            </div>
            <div className="w-[272px] left-[29.18px] top-[95px] absolute inline-flex justify-between items-center overflow-hidden">
              <img src="/public/images/coin-list-m.png" alt="" />
            </div>
            <div className="w-[272px] h-[53px] left-[29.16px] top-[32px] absolute justify-center text-white text-[25px] font-semibold font-['Changa'] leading-[25px]">
              암호화폐를 입금하세요.
            </div>
          </div>

          <div className="w-full max-w-[312px] self-center h-10 py-1 bg-[#252525] rounded-[76px] inline-flex justify-center items-center gap-3">
            <div className="justify-start text-black text-[26px] font-normal font-['Inter'] tracking-wide">
              🚀
            </div>
            <div className="text-center justify-center text-white text-sm font-normal font-['Changa'] leading-[21px]">
              무료로 플레이하세요
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[140px]"></div>
    </div>
  )
}
