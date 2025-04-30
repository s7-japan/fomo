import { MouseEvent } from 'react'
import { setLng, getCurrentLng, i18nT, LangType, setupI18n } from '../lib/services/i18n.service'

export type EventEmitType = 'signUp' | 'gotoCasino' | 'gotoBonusTerms'

export interface IAppProps {
  lang: LangType
  is_show_header_footer: boolean
  event_emit: (type: EventEmitType) => void
}

const CDN_TMP = 'https://fomoio.netlify.app'

setupI18n('en')
export default function LandingPage(props: IAppProps) {
  const t = i18nT
  const isShowHeaderFooter = JSON.parse(props.is_show_header_footer.toString())

  if (getCurrentLng() !== props.lang) {
    setLng(props.lang)
  }

  const singUp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    props.event_emit('signUp')
  }

  const gotoLink = (e: MouseEvent<HTMLButtonElement>, type: EventEmitType) => {
    e.preventDefault()
    props.event_emit(type)
  }

  return (
    <div className=" bg-black text-white font-changa">
      {isShowHeaderFooter ? (
        <div className="w-auto px-4 py-6">
          <img
            src={`${CDN_TMP}/themes/fomoio/landingpage/images/FOMO_logo.png`}
            alt={`FOMO`}
            width={100}
            height={50}
          />
        </div>
      ) : (
        ''
      )}

      <section className="relative py-16 md:py-32 lg:py-48 flex flex-col items-center justify-center overflow-hidden font-impact">
        <div className="md:mt-32 lg:-mt-27 text-center font-impact sm:-mt-20">
          <h1 className="mt-[130px] md:mt-10 mb-4 md:ml-2 w-full">
            <img
              src={`${CDN_TMP}/themes/fomoio/landingpage/images/FOMO_logo.png`}
              alt={`FOMO`}
              width={800}
              height={350}
              style={{ maxWidth: '100%' }}
            />
          </h1>

          <p
            className="md:text-[33px] text-white mb-6 sm:w-full sm:text-center"
            style={{
              fontFamily: 'Impact',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {t('page.Play Freely with Crypto - Your New Online Casino Starts Here')}
          </p>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-7/24 md:-translate-y-1/5 lg:-translate-y-1/5 w-210 h-210 md:w-[950px] md:h-[950px] z-50">
          <img
            src={`${CDN_TMP}/themes/fomoio/landingpage/images/trophy.png`}
            alt="Trophy Background"
            className="absolute w-full h-full object-contain"
          />
        </div>

        <div className={`bg-black text-white`}>
          <div className="text-center relative mt-20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-[170px] md:mt-0">
              <span className="text-sm md:text-base">
                {t('page.Get a 100% bonus on your first deposit (up to USDT₮300).01')}
                <p className="block md:inline-block">
                  {t('page.Get a 100% bonus on your first deposit (up to USDT₮300).02')}
                </p>
              </span>
              <button
                onClick={singUp}
                className="relative z-90 bg-transparent border border-white text-white py-1 md:py-1 px-6 md:px-8 text-sm rounded-full ring-1 hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black focus:ring-2 focus:ring-white cursor-pointer"
              >
                {t('page.Join Now')}
              </button>
            </div>

            <div className="mt-[120px] md:mt-12 ml-2 mr-2 text-left md:text-center md:ml-0">
              <p className="text-xl md:text-5xl  text-white mb-2">
                <span className="text-5xl md:text-5xl text-[#FF008C] md:inline-block font-semibold md:font-normal">
                  {t('page.3,000+')}
                </span>{' '}
                <span className="text-3xl md:text-5xl text-white block md:inline-block">
                  {t('page.Games Across All Genres')}
                </span>
              </p>
              <div className="text-[12px] md:text-base mt-2 text-[#FF008C]">
                {t('page.Slots, live casino, baccarat,')}{' '}
                <span className="block md:inline-block">
                  {t('page.roulette, play top leagues, major matches')}{' '}
                  <p className="text-white inline-block">{t('page.and more Exclusive')}</p>
                </span>
                <img
                  src={`${CDN_TMP}/themes/fomoio/landingpage/images/FOMO_logo.png`}
                  alt="FOMO Logo"
                  width={50}
                  height={50}
                  className="inline-block align-middle m-0 md:m-2 mr-2 md:mr-2"
                />
                {t('page.Original games')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 mb-20 md:-mt-40 h-64 md:h-100 lg:h-[400px] opacity-75">
        <img
          src={`${CDN_TMP}/themes/fomoio/landingpage/images/bg.png`}
          alt="Casino Games Background"
          className="z-0 absolute w-full h-full object-cover"
        />
        <div className="absolute mt-43 md:mt-[300px] left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center">
          <button
            onClick={(e) => gotoLink(e, 'gotoCasino')}
            className="bg-[#252525] text-white py-2 px-17 mb-6 mt-[90px] md:mt-0 lg:mt-0 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
          >
            {t('page.🚀 Find your favorite Game!')}
          </button>
        </div>
      </section>

      <div className="bg-[#0C0C0C] -mt-0 md:-mt-20">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center mt-5 mx-10 md:mx-10">
          <div className="text-sm md:text-base py-5 md:mr-30 text-center md:text-left">
            <p className="block text-left md:hidden">
              {t(
                'page.Get a 100% bonus on your first deposit (up to USDT₮300). Start now and aim for the jackpot!'
              )}
            </p>
            <p className="hidden md:block">{t('page.MEGA JACKPOT Exceeds USDT₮1,000,000!')}</p>
            <p className="hidden md:block">
              {t(
                'page.4 different jackpot tiers available. The MEGA JACKPOT is exclusive for FOMO players'
              )}
            </p>
          </div>
          <button
            onClick={singUp}
            className="bg-black text-white py-1 md:py-1 px-6 md:px-8 border-2 border-white mb-6 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-1 focus:ring-white  self-start md:self-auto  cursor-pointer"
          >
            {t('page.Join Now')}
          </button>
        </div>
      </div>

      <section className="bg-black text-white py-16 -mt-0 md:-mt-25 md:py-24 lg:py-32 px-4 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-left md:text-center">
          <div>
            <div className="relative inline-block w-full md:w-auto">
              <img
                src={`${CDN_TMP}/themes/fomoio/landingpage/images/line_bg.png`}
                alt=""
                className="z-0 absolute w-full h-full object-contain"
              />

              <h2 className="relative z-10 text-center text-3xl md:text-3xl lg:text-4xl mb-4">
                {t('page.Just a')}{' '}
                <span className="text-4xl md:text-5xl inline-block">{t('page.Few Clicks')}</span>{' '}
                {t('page.to')}{' '}
                <span className="text-4xl md:text-5xl block md:inline-block">
                  {t('page.Get Started!')}
                </span>
              </h2>
            </div>

            <div className="text-[12px] md:text-base text-white mb-8 md:px-0 px-2 text-center md:text-center">
              {t('page.Get a')}{' '}
              <span className="text-lg md:text-2xl inline-block">{t('page.100% Bonus')}</span>{' '}
              {t('page.on your')}{' '}
              <span className="text-lg md:text-2xl inline-block">{t('page.First Deposit')}</span>{' '}
              <p className="block md:inline-block lg:inline-block">{t('page.(up to USDT₮300)')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mx-10 md:mx-[80px]">
            <div className="bg-[#1A1A1A] rounded-lg flex flex-col relative px-4 py-6">
              <div className="absolute top-4 left-0 flex items-center">
                <div className="h-17 w-1 bg-[#FF008C] mr-2"></div>
                <div className="ml-2">
                  <h3 className="text-lg text-white">{t('page.STEP')}</h3>
                  <h3 className="text-3xl text-white mb-2">1</h3>
                </div>
              </div>

              <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] ml-40 md:ml-30 -mt-5 md:-mt-10">
                <img
                  src={`${CDN_TMP}/themes/fomoio/landingpage/images/wheel.png`}
                  alt="wheel"
                  className="absolute w-full h-full object-contain"
                />
              </div>

              <p className="text-[20px] md:text-xl font-bold text-white mb-1 ml-2 md:ml-0 text-left -mt-10">
                {t('page.Sign up with')}
              </p>
              <p className="text-md md:text-sm text-white ml-2 md:ml-0 text-left">
                {t('page.Email, Telegram, Metamask wallet.')}
              </p>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg flex flex-col relative px-4 py-6">
              <div className="absolute top-4 left-0 flex items-center">
                <div className="h-17 w-1 bg-[#FF008C] mr-2"></div>
                <div className="ml-2">
                  <h3 className="text-lg text-white">{t('page.STEP')}</h3>
                  <h3 className="text-3xl text-white mb-2">2</h3>
                </div>
              </div>

              <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] ml-40 md:ml-30 -mt-5 md:-mt-10">
                <img
                  src={`${CDN_TMP}/themes/fomoio/landingpage/images/bolt.png`}
                  alt="bolt"
                  className="absolute w-full h-full object-contain"
                />
              </div>

              <p className="text-[20px] md:text-xl font-bold text-white mb-1 ml-2 md:ml-0 text-left -mt-10">
                {t('page.Minimum deposit')}
              </p>
              <p className="text-md md:text-sm text-white ml-2 md:ml-0 text-left">
                {t('page.Make a deposit of USDT₮10 to begin.')}
              </p>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg flex flex-col relative px-4 py-6">
              <div className="absolute top-4 left-0 flex items-center">
                <div className="h-17 w-1 bg-[#FF008C] mr-2"></div>
                <div className="ml-2">
                  <h3 className="text-lg text-white">{t('page.STEP')}</h3>
                  <h3 className="text-3xl text-white mb-2">3</h3>
                </div>
              </div>

              <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] ml-40 md:ml-30 -mt-5 md:-mt-10">
                <img
                  src={`${CDN_TMP}/themes/fomoio/landingpage/images/dollar.png`}
                  alt="dollar"
                  className="absolute w-full h-full object-contain"
                />
              </div>

              <p className="text-[20px] md:text-xl font-bold text-white mb-1 ml-2 md:ml-0 text-left -mt-10">
                {t('page.Get Welcome Bonus')}
              </p>
              <p className="text-md md:text-sm text-white ml-2 md:ml-0 text-left">
                {t('page.Enjoy a Bonus up to USDT₮300')}
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={singUp}
              className="bg-[#252525] text-white py-2 px-15 mt-10 mb-6 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            >
              <span className="mr-2">🚀</span> {t(`page.Let's Play Now !`)}
            </button>

            <button className="cursor-pointer" onClick={(e) => gotoLink(e, 'gotoBonusTerms')}>
              <p className="text-xs text-white underline decoration-[#FF008C] mt-2 md:ml-2">
                {t('page.Bonus must be claimed on the Deposit Page before depositing.')}
              </p>
            </button>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-8 md:py-16 px-4 md:px-8 ml-0 md:ml-40 -mt-8 md:-mt-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-6xl mb-4 ml-9 md:ml-0 mr-0 md:mr-25">
            {t('page.A One-of-a-Kind')}
            <br />
            {t('page.Betting Experience Only')} <br className="block md:hidden" />
            <span className="inline-flex items-center">
              {t('page.on')}&nbsp;
              <img
                src={`${CDN_TMP}/themes/fomoio/landingpage/images/FOMO_logo.png`}
                alt="FOMO Logo"
                width={80}
                height={24}
                className="inline-block align-middle w-[80px] h-[24px] md:w-[170px] md:h-[50px] ml-0 md:ml-5"
              />
            </span>
          </h1>

          <div className="text-[15px] md:text-3xl text-[#FF008C] mr-10 ml-10 md:ml-0 md:mr-25">
            {t('page.Play More, Earn More')} &nbsp;
            <p className="text-[12px] md:text-xl text-white mb-6 md:mb-8 inline-block">
              {' '}
              {t('page.– Rewards Like No Other')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mx-10 md:ml-0 md:mr-45">
            <div className="relative rounded-lg mt-10">
              <div className="bg-[#FF008C] text-white py-4 pl-10 relative px-4 md:py-6 md:px-6 overflow-visible min-h-[84px] md:min-h-[104px]">
                <div
                  className="absolute -top-12 -left-1 text-[#FF008C] text-7xl font-extrabold z-10"
                  style={{ WebkitTextStroke: '3px black' }}
                >
                  1
                </div>
                <h3 className="text-[18px] md:text-lg font-semibold">
                  {t('page.FOMO-Exclusive Betting Events')}
                </h3>
              </div>
              <div className="bg-[#1A1A1A] py-4 px-4 md:py-6 md:px-6 min-h-[110px] md:min-h-[136px]">
                <ul className="list-disc list-outside pl-5 md:pl-3 text-[13px] md:text-sm text-white">
                  <li className="mb-1 md:mb-2">
                    {t('page.Bet on special odds and formats only available on FOMO')}
                  </li>
                  <li>{t('page.Participate in limited competitions and earn real prizes')}</li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-lg mt-10">
              <div className="bg-[#FF008C] text-white py-4 pl-10 relative px-4 md:py-6 md:px-6 overflow-visible min-h-[84px] md:min-h-[104px]">
                <div
                  className="absolute -top-12 -left-1 text-[#FF008C] text-7xl font-extrabold z-10"
                  style={{ WebkitTextStroke: '3px black' }}
                >
                  2
                </div>
                <h3 className="text-[18px] md:text-lg font-semibold">
                  {t('page.Nonstop Reward System')}
                </h3>
              </div>
              <div className="bg-[#1A1A1A] py-4 px-4 md:py-6 md:px-6 min-h-[110px] md:min-h-[136px]">
                <ul className="list-disc list-outside pl-5 md:pl-3 text-[13px] md:text-sm text-white">
                  <li className="mb-1 md:mb-2">
                    {t('page.Every bet comes with a chance to earn rewards')}
                  </li>
                  <li>{t('page.Get rakeback on every bet, and cashback when you lose.')}</li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-lg mt-10">
              <div className="bg-[#FF008C] text-white py-4 pl-10 relative px-4 md:py-6 md:px-6 overflow-visible min-h-[84px] md:min-h-[104px]">
                <div
                  className="absolute -top-12 -left-1 text-[#FF008C] text-7xl font-extrabold z-10"
                  style={{ WebkitTextStroke: '3px black' }}
                >
                  3
                </div>
                <h3 className="text-[18px] md:text-lg font-semibold">
                  {t('page.Referral Program – Earn up to 35%')}
                </h3>
              </div>
              <div className="bg-[#1A1A1A] py-4 px-4 md:py-6 md:px-6 min-h-[110px] md:min-h-[136px]">
                <ul className="list-disc list-outside pl-5 md:pl-3 text-[13px] md:text-sm text-white">
                  <li className="mb-1 md:mb-2">
                    {t('page.Get commissions from both direct and indirect referrals')}
                  </li>
                  <li>{t('page.Earn rewards even when your referrals win')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center mb-8 lg:mb-12 ml-7 md:ml-25">
            <div className="h-20 w-1 bg-[#FF008C] mr-4"></div>
            <h1 className="text-4xl md:text-4xl lg:text-5xl">
              {t('page.Crypto-Friendly')}{' '}
              <span className="text-3xl md:text-3xl lg:text-5xl inline-block">{t('page.and')}</span>{' '}
              <span className="block md:inline-block">{t('page.Fiat-Ready')}</span>
            </h1>
          </div>

          <div className="relative w-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div
                className="bg-[#121212] px-6 py-5 md:-mr-[200px] pb-[250px] md:ml-25 md:px-16 md:py-8 mx-4 md:mx-auto rounded-2xl 
  w-[calc(100%-2rem)] md:w-[100%] lg:w-[100%] lg:relative lg:z-10 lg:pb-8"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold mb-2 md:text-3xl">
                    {t('page.Supported cryptocurrencies')}
                  </h2>
                  <p className="text-white font-semibold text-md md:text-lg mt-3">
                    {t('page.USDT, USDC, ETH, POL, BNB, BTC, LTC, DOGE')}
                  </p>
                </div>
                <div>
                  <h2 className="text-xl mb-2 md:text-2xl">{t('page.No crypto? No problem!')}</h2>
                  <div className="flex items-center space-x-2">
                    {['apple', 'gpay', 'visa', 'mastercard'].map((name) => (
                      <div key={name} className="relative w-8 h-4 md:w-12 md:h-6">
                        <img
                          src={`${CDN_TMP}/themes/fomoio/landingpage/icons/${name}.png`}
                          alt={name}
                          className="absolute w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[400px] mt-8 -top-[230px] md:-top-5 right-0 md:right-[270px] lg:mt-0 z-20  pointer-events-none">
                <img
                  src={`${CDN_TMP}/themes/fomoio/landingpage/images/basketball.png`}
                  alt="Basketball Bubble"
                  width={400}
                  height={400}
                  className="max-w-full h-auto"
                />
              </div>
            </div>

            <div className="text-center -mt-[190px] md:-mt-[50px]">
              <button
                onClick={singUp}
                className="bg-[#252525] text-white py-2 px-17 mb-6 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
              >
                <span className="mr-2">🚀</span> {t(`page.Let's Play Now !`)}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isShowHeaderFooter ? (
        <footer className="bg-black text-gray-400 py-8 mt-12 md:mt-20 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-4">
              <div className="inline-block">
                <img
                  src={`${CDN_TMP}/themes/fomoio/landingpage/images/FOMO_logo.png`}
                  alt="FOMO Logo"
                  width={80}
                  height={24}
                />
              </div>
            </div>
            <nav className="text-xs">
              <ul className="flex flex-col items-center sm:items-start md:flex-row md:space-x-6 md:ml-55 gap-5 md:gap-0">
                <li>
                  <div className="hover:text-white">Community Guidelines</div>
                </li>
                <li>
                  <div className="hover:text-white">DMCA Policy</div>
                </li>
                <li>
                  <div className="hover:text-white">Privacy Policy</div>
                </li>
                <li>
                  <div className="hover:text-white">Terms of Service</div>
                </li>
                <li>
                  <div className="hover:text-white">Help & Support</div>
                </li>
                <li>
                  <div className="hover:text-white">Responsible Gaming</div>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      ) : (
        <div className="min-h-[140px]"></div>
      )}
    </div>
  )
}
