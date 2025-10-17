// import Page01 from '../lib/components/page01/_main'
import Page02 from '../lib/components/page02/_main'
import { setupI18n } from '../lib/services/i18n.service'
import { addAdobeFonts, getCDNUrl, getIsShowHeaderFooter } from '../lib/services/layout.service'

addAdobeFonts()
setupI18n('en')

const isShowHeaderFooterS = getIsShowHeaderFooter()

export default function LandingPage() {
  return (
    <div className=" bg-black text-white antialiased en:font-changa">
      {isShowHeaderFooterS() ? (
        <div className="w-auto px-4 py-6">
          <img
            src={getCDNUrl(`/themes/fomoio/landingpage/images/FOMO_logo.png`)}
            alt={`FOMO`}
            width={100}
            height={50}
          />
        </div>
      ) : (
        ''
      )}

      {/* {<Page01 />} */}
      {<Page02 />}

      {isShowHeaderFooterS() ? (
        <footer className="bg-black text-gray-400 py-8 mt-12 md:mt-20 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-4">
              <div className="inline-block">
                <img
                  src={getCDNUrl(`/themes/fomoio/landingpage/images/FOMO_logo.png`)}
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
