import { t } from 'i18next'
import { getCDNUrl } from '../services/layout.service'
import { getCurrentLng } from '../services/i18n.service'
import { ngComputed } from '../common/preact-ng-signals'

const langS = getCurrentLng()

const infoS = ngComputed(() => {
  let base = {
    step1: {
      url: getCDNUrl(`/images/wheel.png`),
    },
    step2: {
      url: getCDNUrl(`/images/bolt.png`),
    },
    step3: {
      url: getCDNUrl(`/images/dollar.png`),
    },
  }

  if (langS() === 'ko') {
    base = {
      ...base,
      ...{
        step1: {
          url: '/images/02/step01-img.png',
        },
        step2: {
          url: '/images/02/step02-img.png',
        },
        step3: {
          url: '/images/02/step03-img.png',
        },
      },
    }
  }

  return base
})

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
            src={infoS().step1.url}
            alt="wheel"
            className="absolute w-full h-full object-contain"
            style={
              langS() === 'ko'
                ? {
                    right: '-10px',
                    width: '100px'
                  }
                : {}
            }
          />
        </div>

        <p
          className="
                    text-white mb-1 ml-2 md:ml-0 text-left -mt-10 pt-4
                    en:text-[22px] en:font-bold en:md:text-[18px]
                    jakoth:text-[25px] jakoth:font-black jakoth:md:text-[17px]
                    "
        >
          {t('page.step1_title')}
        </p>
        <p
          className="
                    text-white ml-2 -mr-1 md:ml-0 text-left
                    en:text-[18px] en:md:text-[16px]
                    jakoth:text-[14px] jakoth:md:text-[12px] tracking-[-1px]
                    "
        >
          {t('page.step1_description')}
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
            src={infoS().step2.url}
            alt="wheel"
            className="absolute w-full h-full object-contain"
            style={
              langS() === 'ko'
                ? {
                    right: '-10px',
                    width: '100px'
                  }
                : {}
            }
          />
        </div>

        <p
          className="
                    text-white mb-1 ml-2 md:ml-0 text-left -mt-10 pt-4
                    en:text-[22px] en:font-bold en:md:text-[18px]
                    jakoth:text-[25px] jakoth:font-black jakoth:md:text-[17px]
                    "
        >
          {t('page.step2_title')}
        </p>
        <p
          className="
                    text-white ml-2 -mr-1 md:ml-0 text-left
                    en:text-[18px] en:md:text-[16px]
                    jakoth:text-[14px] jakoth:md:text-[12px] tracking-[-1px]
                    "
          dangerouslySetInnerHTML={{ __html: t('page.step2_description') }}
        ></p>
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
            src={infoS().step3.url}
            alt="wheel"
            className="absolute w-full h-full object-contain"
            style={
              langS() === 'ko'
                ? {
                    right: '-10px',
                    width: '100px'
                  }
                : {}
            }
          />
        </div>

        <p
          className="
                    text-white mb-1 ml-2 md:ml-0 text-left -mt-10 pt-4
                    en:text-[22px] en:font-bold en:md:text-[18px]
                    jakoth:text-[25px] jakoth:font-black jakoth:md:text-[17px]
                    "
        >
          {t('page.step3_title')}
        </p>
        <p
          className="
                    text-white ml-2 -mr-1 md:ml-0 text-left
                    en:text-[18px] en:md:text-[16px]
                    jakoth:text-[14px] jakoth:md:text-[12px] tracking-[-1px]
                    "
        >
          {t('page.step3_description')}
        </p>
      </div>
    </div>
  )
}
