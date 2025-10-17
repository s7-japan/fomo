import { t } from "i18next"
import { getCDNUrl } from "../services/layout.service"

export default function App() {
  return (
    <div className="bg-black text-white py-8 md:py-16 px-4 md:px-8 ml-0 md:ml-40 -mt-8 md:-mt-20">
      <div className="max-w-6xl mx-auto">
        <h1
          className="
                    mb-4 mx-6 md:ml-0 md:mr-25
                    en:text-[30px] en:leading-[38px] en:md:text-[64px] en:md:leading-[70px] en:tracking-[-1px]
                    jakoth:text-[27px] jakoth:font-black jakoth:tracking-tighter jakoth:md:text-[48px]
                    "
        >
          {t('page.A One-of-a-Kind')}
          <br className="jakoth:hidden" />
          {t('page.Betting Experience Only')}
          <br className="block md:hidden jakoth:hidden" />
          <span
            className="
                      en:text-[30px] en:md:text-[50px]
                      jakoth:text-[27px] jakoth:font-black jakoth:md:text-[48px]
                      "
          >
            <span
              className="
                        en:md:ml-2
                        "
            >
              {t('page.on')}
            </span>
            &nbsp;
            <img
              src={getCDNUrl(`/themes/fomoio/landingpage/images/FOMO_logo.png`)}
              alt="FOMO Logo"
              className="
                          inline-block align-middle w-[80px] h-[24px] md:w-[170px] md:h-[50px] ml-0
                          jakoth:mt-1 jakoth:mb-1 jakoth:md:mb-2
                          "
            />
            &nbsp;
            {t('page.cc0')}
            <br className="hidden jakoth:hidden jakoth:md:block" />
            {t('page.cc1')}
          </span>
        </h1>

        <div
          className="
                    text-[#FF008C] mx-6 md:ml-0 md:mr-25
                    en:text-[17px] en:font-medium en:md:text-[32px] en:md:font-normal
                    jakoth:text-[14px] jakoth:font-extrabold jakoth:md:text-[32px]
                    "
        >
          {t('page.Play More, Earn More')}
          <p
            className="
                      text-white mb-6 md:mb-8 inline-block ml-1
                      en:text-[10px] en:md:text-[20px]
                      jakoth:text-[11px] jakoth:font-extrabold jakoth:md:text-[20px]
                      "
          >
            {t('page.– Rewards Like No Other')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mx-6 md:ml-0 md:mr-45">
          <div className="relative rounded-lg mt-10">
            <div className="bg-[#FF008C] text-white py-4 pl-6 pr-4 relative md:py-6 md:px-6 overflow-visible min-h-[84px] md:min-h-[108px]">
              <div
                className="
                          absolute -top-12 -left-1 text-[#FF008C] z-10
                          en:text-7xl en:font-extrabold
                          jakoth:text-7xl jakoth:font-extrabold jakoth:font-changa
                          "
                style={{ WebkitTextStroke: '3px black' }}
              >
                1
              </div>
              <h3
                className="
                          en:text-[18px] font-semibold en:md:text-[20px]
                          jakoth:text-[20px] jakoth:font-black jakoth:md:text-[20px]
                          "
                dangerouslySetInnerHTML={{ __html: t('page.FOMO-Exclusive Betting Events') }}
              ></h3>
            </div>
            <div className="bg-[#1A1A1A] py-4 px-4 md:py-6 md:px-6 min-h-[110px] md:min-h-[136px]">
              <ul
                className="
                          list-disc list-outside pl-5 md:pl-3 text-white
                          en:text-[13px] en:md:text-[14px]
                          jakoth:text-[14px] jakoth:font-bold jakoth:md:font-semibold
                          "
              >
                <li className="mb-4">
                  {t('page.Bet on special odds and formats only available on FOMO')}
                </li>
                <li>{t('page.Participate in limited competitions and earn real prizes')}</li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-lg mt-10">
            <div className="bg-[#FF008C] text-white py-4 pl-6 pr-4  relative md:py-6 md:px-6 overflow-visible min-h-[84px] md:min-h-[108px]">
              <div
                className="
                          absolute -top-12 -left-1 text-[#FF008C] z-10
                          en:text-7xl en:font-extrabold
                          jakoth:text-7xl jakoth:font-extrabold jakoth:font-changa
                          "
                style={{ WebkitTextStroke: '3px black' }}
              >
                2
              </div>
              <h3
                className="
                          en:text-[18px] font-semibold en:md:text-[20px]
                          jakoth:text-[20px] jakoth:font-black jakoth:md:text-[20px]
                          "
                dangerouslySetInnerHTML={{ __html: t('page.Nonstop Reward System') }}
              ></h3>
            </div>
            <div className="bg-[#1A1A1A] py-4 px-4 md:py-6 md:px-6 min-h-[110px] md:min-h-[136px]">
              <ul
                className="
                          list-disc list-outside pl-5 md:pl-3 text-white
                          en:text-[13px] en:md:text-[14px]
                          jakoth:text-[14px] jakoth:font-bold jakoth:md:font-semibold
                          "
              >
                <li className="mb-4">{t('page.Every bet comes with a chance to earn rewards')}</li>
                <li>{t('page.Get rakeback on every bet, and cashback when you lose.')}</li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-lg mt-10">
            <div className="bg-[#FF008C] text-white py-4 pl-6 pr-4  relative md:py-6 md:px-6 overflow-visible min-h-[84px] md:min-h-[108px]">
              <div
                className="
                          absolute -top-12 -left-1 text-[#FF008C] z-10
                          en:text-7xl en:font-extrabold
                          jakoth:text-7xl jakoth:font-extrabold jakoth:font-changa
                          "
                style={{ WebkitTextStroke: '3px black' }}
              >
                3
              </div>
              <h3
                className="
                          en:text-[18px] font-semibold en:md:text-[20px]
                          jakoth:text-[20px] jakoth:font-black jakoth:md:text-[20px]
                          "
                dangerouslySetInnerHTML={{
                  __html: t('page.Referral Program – Earn up to 35%'),
                }}
              ></h3>
            </div>
            <div className="bg-[#1A1A1A] py-4 px-4 md:py-6 md:px-6 min-h-[110px] md:min-h-[136px]">
              <ul
                className="
                          list-disc list-outside pl-5 md:pl-3 text-white
                          en:text-[13px] en:md:text-[14px]
                          jakoth:text-[14px] jakoth:font-bold jakoth:md:font-semibold
                          "
              >
                <li className="mb-4">
                  {t('page.Get commissions from both direct and indirect referrals')}
                </li>
                <li>{t('page.Earn rewards even when your referrals win')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
