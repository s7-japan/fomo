import { setEventEmitterS } from '../../services/event.service'
import { getCurrentLng, i18nT } from '../../services/i18n.service'
import { getCDNUrl } from '../../services/layout.service'
import OneOfTheKind from '../one-of-the-kind'
import StepsM from '../steps'
import TopEnJa from './top-enja'
import TopKo from './top-ko'
import TopTh from './top-th'

const t = i18nT

const langS = getCurrentLng()

export default function LandingPage() {
  return (
    <>
      {langS() === 'ko' ? <TopKo /> : langS() === 'th' ? <TopTh /> : <TopEnJa />}

      <section className="bg-black text-white py-6 -mt-0 px-4 md:-mt-25 md:py-24 md:px-12 lg:px-24 lg:py-32 ">
        <div className="max-w-6xl mx-auto text-left md:text-center">
          <div>
            <div className="relative inline-block w-full md:w-auto">
              <img
                src={getCDNUrl(`/themes/fomoio/landingpage/images/line_bg.png`)}
                alt=""
                className="z-0 absolute w-full h-full object-contain"
              />
              <h2 className="relative z-10 text-center mb-4">
                <span
                  className="
                      en:text-[32px] en:leading-9 en:md:text-[50px]
                      jakoth:text-[20px] jakoth:font-black jakoth:md:text-[32px]
                      "
                >
                  {t('page.Just a')}{' '}
                </span>
                <span
                  className="
                      inline-block
                      en:text-[32px] en:leading-9 en:md:text-[64px]
                      jakoth:text-[20px] jakoth:font-black jakoth:md:text-[50px]
                      "
                >
                  {t('page.Few Clicks')}
                </span>{' '}
                <span
                  className="
                      en:md:mx-2
                      en:text-[32px] en:leading-9 en:md:text-[50px]
                      jakoth:text-[20px] jakoth:font-black jakoth:md:text-[32px]
                      "
                >
                  {t('page.to')}
                </span>{' '}
                <span
                  className="
                      block md:inline-block
                      en:text-[32px] en:leading-9 en:md:text-[64px]
                      jakoth:text-[20px] jakoth:font-black jakoth:md:text-[50px]
                      "
                >
                  {t('page.Get Started!')}
                </span>
              </h2>
            </div>

            {/* text-[12px] md:text-base */}
            <div className="text-white mb-8 md:px-0 px-2 text-center md:text-center">
              <span
                className="
                    en:text-[12px] en:md:text-[18px]
                    jakoth:text-[15px] jakoth:font-changa jakoth:font-bold jakoth:md:text-[26px]
                    "
              >
                {t('page.Get a')}
              </span>
              {/* text-lg md:text-2xl  */}
              <span
                className="
                    inline-block mx-1 md:mx-2
                    en:text-[17px] en:md:text-[30px]
                    jakoth:text-[15px] jakoth:font-changa jakoth:font-bold jakoth:md:text-[26px]
                    "
              >
                {t('page.100% Bonus')}
              </span>
              <span
                className="
                    en:text-[12px] en:md:text-[18px]
                    jakoth:text-[15px] jakoth:font-changa jakoth:font-bold jakoth:md:text-[26px]
                    "
              >
                {t('page.on your')}
              </span>
              {/* text-lg md:text-2xl  */}
              <span
                className="
                    inline-block mx-1 md:mx-2
                    en:text-[17px] en:md:text-[30px]
                    jakoth:text-[15px] jakoth:font-changa jakoth:font-bold jakoth:md:text-[26px]
                    "
              >
                {t('page.First Deposit')}
              </span>
              <p
                className="
                    block md:inline-block lg:inline-block
                    en:text-[13px] en:md:text-[24px]
                    jakoth:text-[15px] jakoth:font-changa jakoth:font-bold jakoth:md:text-[26px]
                    "
              >
                {t('page.(up to $300)')}
              </p>
            </div>
          </div>

          <StepsM />

          <div className="text-center flex flex-col items-center">
            <button
              onClick={() => setEventEmitterS({ type: 'signUp' })}
              className="
                  bg-[#252525] text-white py-2 px-15 mt-10 mb-3 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer
                  en:text-[16px] en:md:text-[20px]
                  jakoth:text-[14px] jakoth:font-extrabold jakoth:md:text-[20px]
                  "
            >
              <span className="mr-2">🚀</span> {t(`page.Let's Play Now !`)}
            </button>

            <button
              className="cursor-pointer"
              onClick={() => setEventEmitterS({ type: 'url', info: '/bonus-terms/' })}
            >
              <p
                className="
                  text-white underline decoration-[#FF008C] mt-2 md:ml-2
                    en:text-[13px] en:md:text-[14px]
                    jakoth:text-[12px] jakoth:font-semibold jakoth:md:text-[13px]
                    "
                dangerouslySetInnerHTML={{
                  __html: t('page.Bonus must be claimed on the Deposit Page before depositing.'),
                }}
              ></p>
            </button>
          </div>
        </div>
      </section>

      <OneOfTheKind />

      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center mb-8 lg:mb-12 ml-7 md:ml-25">
            <div className="h-20 w-1 bg-[#FF008C] mr-4"></div>
            <h1>
              {/* text-4xl md:text-4xl lg:text-5xl */}
              <span
                className="
                    en:text-[30px] en:md:text-[64px]
                    jakoth:text-[23px] jakoth:font-black jakoth:md:text-[50px]
                    "
              >
                {t('page.Crypto-Friendly')}
              </span>
              {/* inline-block text-3xl md:text-3xl lg:text-5xl  */}
              <span
                className="
                    mx-2 md:mx-4
                    en:text-[23px] en:md:text-[50px]
                    jakoth:text-[23px] jakoth:font-black jakoth:md:text-[36px]
                    "
              >
                {t('page.and')}
              </span>
              <span
                className="
                    block md:inline-block
                    en:text-[30px] en:md:text-[64px]
                    jakoth:text-[23px] jakoth:font-black jakoth:md:text-[50px]
                    "
              >
                {t('page.Fiat-Ready')}
              </span>
            </h1>
          </div>

          <div className="relative w-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div
                className="bg-[#121212] px-6 py-5 md:-mr-[200px] pb-[250px] md:ml-25 md:px-16 md:py-8 mx-4 md:mx-auto rounded-2xl 
      w-[calc(100%-2rem)] md:w-[100%] lg:w-[100%] lg:relative lg:z-10 lg:pb-8"
              >
                <div className="mb-8">
                  {/* text-3xl font-semibold md:text-3xl  */}
                  <h2
                    className="
                        mb-2
                        en:text-[28px] en:font-semibold en:leading-7 en:md:text-[36px]
                        jakoth:text-[25px] jakoth:font-black jakoth:md:text-[36px]
                        "
                  >
                    {t('page.Supported cryptocurrencies')}
                  </h2>
                  {/* font-semibold text-md md:text-lg */}
                  <p
                    className="
                        text-white mt-3
                        en:font-changa en:text-[15px] en:font-semibold en:md:text-[20px]
                        jakoth:font-changa jakoth:text-[15px] jakoth:font-semibold jakoth:md:text-[20px] jakoth:md:leading-10
                        "
                  >
                    {t('page.USDT, USDC, ETH, POL, BNB, BTC, LTC, DOGE')}
                  </p>
                </div>
                <div>
                  {/* text-xl md:text-2xl */}
                  <h2
                    className="
                        mb-2
                        en:text-[24px] en:md:text-[32px]
                        jakoth:text-[14px] jakoth:font-extrabold jakoth:md:text-[24px]
                        "
                  >
                    {t('page.No crypto? No problem!')}
                  </h2>
                  <div className="flex items-center space-x-2">
                    {['apple', 'gpay', 'visa', 'mastercard'].map((name) => (
                      <div key={name} className="relative w-8 h-4 md:w-12 md:h-6">
                        <img
                          src={getCDNUrl(`/themes/fomoio/landingpage/icons/${name}.png`)}
                          alt={name}
                          className="absolute w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[400px] mt-8 -top-[230px] md:-top-5 right-0 md:right-[140px] lg:mt-0 z-20  pointer-events-none">
                <img
                  src={getCDNUrl(`/themes/fomoio/landingpage/images/basketball.png`)}
                  alt="Basketball Bubble"
                  width={400}
                  height={400}
                  className="max-w-full h-auto"
                />
              </div>
            </div>

            <div className="text-center -mt-[190px] md:-mt-[50px]">
              <button
                onClick={() => setEventEmitterS({ type: 'signUp' })}
                className="
                    bg-[#252525] text-white py-2 px-17 mb-6 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer
                    en:text-[16px] en:md:text-[20px]
                    jakoth:text-[14px] jakoth:font-extrabold jakoth:md:text-[20px]
                    "
              >
                <span className="mr-2">🚀</span> {t(`page.Let's Play Now !`)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
