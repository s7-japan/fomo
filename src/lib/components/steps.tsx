import { t } from 'i18next'
import { getCDNUrl } from '../services/layout.service'

export default function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mx-6 md:mx-[80px]">
      <div className="bg-[#1A1A1A] rounded-lg flex flex-col relative px-4 py-6">
        <div className="absolute top-4 left-0 flex items-center">
          <div className="h-17 w-1 bg-[#FF008C] mr-2"></div>
          <div className="ml-2">
            <h3
              className="
                        text-white
                        en:text-[21px] en:md:text-[22px]
                        jakoth:font-changa jakoth:text-[21px] jakoth:md:text-[22px]
                        "
            >
              {t('page.STEP')}
            </h3>
            <h3
              className="
                        text-white mb-2 text-center
                        en:text-[26px] en:md:text-[30px]
                        jakoth:font-changa jakoth:text-[26px] jakoth:md:text-[30px]
                        "
            >
              1
            </h3>
          </div>
        </div>

        <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] ml-40 md:ml-30 -mt-5 md:-mt-10">
          <img
            src={getCDNUrl(`/themes/fomoio/landingpage/images/wheel.png`)}
            alt="wheel"
            className="absolute w-full h-full object-contain"
          />
        </div>

        <p
          className="
                    text-white mb-1 ml-2 md:ml-0 text-left -mt-10 pt-4
                    en:text-[22px] en:font-bold en:md:text-[18px]
                    jakoth:text-[25px] jakoth:font-black jakoth:md:text-[17px]
                    "
        >
          {t('page.Sign up with')}
        </p>
        <p
          className="
                    text-white ml-2 -mr-1 md:ml-0 text-left
                    en:text-[18px] en:md:text-[16px]
                    jakoth:text-[12px] jakoth:md:text-[12px] tracking-[-1px]
                    "
        >
          {t('page.Email, Telegram, Metamask wallet.')}
        </p>
      </div>

      <div className="bg-[#1A1A1A] rounded-lg flex flex-col relative px-4 py-6">
        <div className="absolute top-4 left-0 flex items-center">
          <div className="h-17 w-1 bg-[#FF008C] mr-2"></div>
          <div className="ml-2">
            <h3
              className="
                        text-white
                        en:text-[21px] en:md:text-[22px]
                        jakoth:font-changa jakoth:text-[21px] jakoth:md:text-[22px]
                        "
            >
              {t('page.STEP')}
            </h3>
            <h3
              className="
                        text-white mb-2 text-center
                        en:text-[26px] en:md:text-[30px]
                        jakoth:font-changa jakoth:text-[26px] jakoth:md:text-[30px]
                        "
            >
              2
            </h3>
          </div>
        </div>

        <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] ml-40 md:ml-30 -mt-5 md:-mt-10">
          <img
            src={getCDNUrl(`/themes/fomoio/landingpage/images/bolt.png`)}
            alt="wheel"
            className="absolute w-full h-full object-contain"
          />
        </div>

        <p
          className="
                    text-white mb-1 ml-2 md:ml-0 text-left -mt-10 pt-4
                    en:text-[22px] en:font-bold en:md:text-[18px]
                    jakoth:text-[25px] jakoth:font-black jakoth:md:text-[17px]
                    "
        >
          {t('page.Minimum deposit')}
        </p>
        <p
          className="
                    text-white ml-2 -mr-1 md:ml-0 text-left
                    en:text-[18px] en:md:text-[16px]
                    jakoth:text-[12px] jakoth:md:text-[12px] tracking-[-1px]
                    "
        >
          {t('page.Make a deposit of $10 to begin.')}
        </p>
      </div>

      <div className="bg-[#1A1A1A] rounded-lg flex flex-col relative px-4 py-6">
        <div className="absolute top-4 left-0 flex items-center">
          <div className="h-17 w-1 bg-[#FF008C] mr-2"></div>
          <div className="ml-2">
            <h3
              className="
                        text-white
                        en:text-[21px] en:md:text-[22px]
                        jakoth:font-changa jakoth:text-[21px] jakoth:md:text-[22px]
                        "
            >
              {t('page.STEP')}
            </h3>
            <h3
              className="
                        text-white mb-2 text-center
                        en:text-[26px] en:md:text-[30px]
                        jakoth:font-changa jakoth:text-[26px] jakoth:md:text-[30px]
                        "
            >
              3
            </h3>
          </div>
        </div>

        <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] ml-40 md:ml-30 -mt-5 md:-mt-10">
          <img
            src={getCDNUrl(`/themes/fomoio/landingpage/images/dollar.png`)}
            alt="wheel"
            className="absolute w-full h-full object-contain"
          />
        </div>

        <p
          className="
                    text-white mb-1 ml-2 md:ml-0 text-left -mt-10 pt-4
                    en:text-[22px] en:font-bold en:md:text-[18px]
                    jakoth:text-[25px] jakoth:font-black jakoth:md:text-[17px]
                    "
        >
          {t('page.Get Welcome Bonus')}
        </p>
        <p
          className="
                    text-white ml-2 -mr-1 md:ml-0 text-left
                    en:text-[18px] en:md:text-[16px]
                    jakoth:text-[12px] jakoth:md:text-[12px] tracking-[-1px]
                    "
        >
          {t('page.Enjoy a Bonus up to $300')}
        </p>
      </div>
    </div>
  )
}
