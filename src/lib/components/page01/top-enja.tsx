import { setEventEmitterS } from '../../services/event.service'
import { i18nT } from '../../services/i18n.service'
import { getCDNUrl } from '../../services/layout.service'

const t = i18nT

interface IAppEvent {}

export default function App(props: IAppEvent) {
  return (
    <>
      <section className="relative py-16 md:py-32 lg:py-48 flex flex-col items-center justify-center overflow-hidden">
        <div className="md:mt-32 lg:-mt-27 text-center sm:-mt-20">
          <h1 className="mt-[130px] md:mt-10 mb-4 md:ml-2 w-full flex justify-center">
            <img
              src={getCDNUrl(`/themes/fomoio/landingpage/images/FOMO_logo.png`)}
              alt={`FOMO`}
              width={800}
              height={350}
              style={{ maxWidth: '100%' }}
            />
          </h1>

          {/* text-center w-full */}
          <p
            className="
            text-white mb-6 sm:w-full sm:text-center text-center w-full 
            en:text-[16px] en:font-impact en:font-normal en:md:text-[32px]
            jakoth:text-[13px] jakoth:font-notosansjp jakoth:font-black jakoth:md:text-[32px]
            "
          >
            {t('page.Play Freely with Crypto - Your New Online Casino Starts Here')}
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6/24 md:-translate-y-[23%] w-210 h-210 md:w-[950px] md:h-[950px] z-50">
          <img
            src={getCDNUrl(`/themes/fomoio/landingpage/images/trophy.png`)}
            alt="Trophy Background"
            className="absolute w-full h-full object-contain"
          />
        </div>

        <div className={`bg-black text-white`}>
          <div className="text-center relative mt-20 md:mt-40">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-[140px] md:mt-0">
              <span
                className="
              en:text-[12px] en:font-normal en:md:text-[20px]
              jakoth:text-[12px] jakoth:font-bold jakoth:md:text-[19px]
              "
              >
                {t('page.Get a 100% bonus on your first deposit (up to $300).')}
                <p
                  className="
                block md:inline-block
                en:text-[12px] en:font-normal en:md:text-[20px]
                jakoth:text-[12px] jakoth:font-bold jakoth:md:text-[19px]
                "
                >
                  {t('page.Start now and aim for the jackpot!')}
                </p>
              </span>
              <button
                onClick={() => setEventEmitterS({ type: 'signUp' })}
                className="
                relative z-90 bg-transparent border border-white text-white py-1 md:py-1 px-6 md:px-8 rounded-full ring-1 hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black focus:ring-2 focus:ring-white cursor-pointer
                en:text-[20px] en:font-normal en:md:text-[20px]
                jakoth:text-[16px] jakoth:font-bold jakoth:md:text-[18px]
                "
              >
                {t('page.Join Now')}
              </button>
            </div>

            <div className="max-w-[84vw] mt-12 md:mt-12 ml-2 mr-2 text-left md:text-center md:ml-0">
              <p className="text-xl md:text-5xl  text-white mb-2">
                <span
                  className="
                  text-[#FF008C] md:inline-block 
                  en:text-[44px] en:font-semibold en:leading-[38px] en:md:text-[64px] en:md:font-normal
                  jakoth:text-[20px] jakoth:font-black jakoth:md:text-[36px]
                  "
                >
                  {t('page.3,000+')}
                </span>{' '}
                <span
                  className="
                text-white block md:inline-block
                  en:text-[30px] en:font-normal en:leading-[38px] en:md:text-[64px] en:md:font-normal
                  jakoth:text-[16px] jakoth:font-black jakoth:md:text-[36px]
                  "
                >
                  {t('page.Games Across All Genres')}
                </span>
              </p>
              {/* text-[#FF008C] */}
              <div className="mt-6">
                <span
                  className="
                  en:text-[#FF008C] en:text-[13px] en:leading-6 en:md:text-[20px] 
                  jakoth:text-[#FF008C] jakoth:text-[14px] jakoth:font-changa jakoth:font-bold jakoth:leading-6 jakoth:md:text-[18px]
                  "
                >
                  {t('page.Slots, live casino, baccarat,')}{' '}
                </span>
                <span
                  className="
                  block md:inline-block
                  en:text-[#FF008C] en:text-[13px] en:leading-6 en:md:text-xl
                  jakoth:text-[#FF008C] jakoth:text-[14px] jakoth:font-changa jakoth:font-bold jakoth:leading-6 jakoth:md:text-[18px]
                  "
                >
                  {t('page.roulette, play top leagues, major matches')}
                </span>
                <p
                  className="
                  inline-block
                  en:ml-0 en:text-[13px] en:leading-6 en:md:text-xl en:md:ml-1
                  jakoth:text-[#FF008C] jakoth:text-[14px] jakoth:font-changa jakoth:font-bold jakoth:leading-6 jakoth:md:text-[18px]
                  "
                >
                  {t('page.and more Exclusive')}
                </p>
                <img
                  src={getCDNUrl(`/themes/fomoio/landingpage/images/FOMO_logo.png`)}
                  alt="FOMO Logo"
                  className="
                  inline-block align-middle m-0 mx-2 h-4 md:h-7 md:align-bottom
                  "
                />
                <span
                  className="
                text-white
                  en:text-[#FF008C] en:text-[13px] en:leading-6 en:md:text-xl
                  jakoth:text-[14px] jakoth:font-changa jakoth:font-bold jakoth:leading-6 jakoth:md:text-[18px]
                  "
                >
                  {t('page.Original games')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 mb-20 md:-mt-40 h-64 md:h-100 lg:h-[400px] opacity-75">
        <img
          src={getCDNUrl(`/themes/fomoio/landingpage/images/bg.png`)}
          alt="Casino Games Background"
          className="z-0 absolute w-full h-full object-cover"
        />
        <div className="absolute mt-43 md:mt-[300px] left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center">
          <button
            onClick={() => setEventEmitterS({ type: 'url', info: '/casino/' })}
            className="
            bg-[#252525] text-white py-2 px-8 mb-6 mt-[90px] md:mt-0 lg:mt-0 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer
            en:text-[16px] en:md:text-[22px]
            jakoth:text-[14px] jakoth:font-extrabold jakoth:md:text-[20px]
            "
          >
            {t('page.🚀 Find your favorite Game!')}
          </button>
        </div>
      </section>

      <div className="bg-[#0C0C0C] -mt-0 md:-mt-20">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center mt-5 mx-10 md:mx-10">
          <div className="text-sm md:text-base py-5 md:mr-30 text-center md:text-left">
            <p
              dangerouslySetInnerHTML={{
                __html: t(
                  'page.Get a 100% bonus on your first deposit (up to $300). Start now and aim for the jackpot!'
                ),
              }}
              className="
              block text-left md:hidden
              en:text-[12px]
              jakoth:text-[12px] jakoth:font-bold
              "
            ></p>
            <p
              className="
              hidden md:block
              en:md:text-[16px]
              "
            >
              {t('page.MEGA JACKPOT Exceeds $1,000,000!')}
            </p>
            <p
              className="
              hidden md:block
              en:md:text-[20px]
              "
            >
              {t(
                'page.4 different jackpot tiers available. The MEGA JACKPOT is exclusive for FOMO players'
              )}
            </p>
          </div>
          <button
            onClick={() => setEventEmitterS({ type: 'signUp' })}
            className="
            bg-black text-white py-1 md:py-1 px-6 md:px-8 border-2 border-white mb-6 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-1 focus:ring-white self-start md:self-auto  cursor-pointer
            en:text-[12px] en:md:text-[20px]
            jakoth:text-[12px] jakoth:font-extrabold jakoth:md:text-[16px] jakoth:md:font-bold jakoth:md:font-changa
            "
          >
            {t('page.Join Now')}
          </button>
        </div>
      </div>
    </>
  )
}
