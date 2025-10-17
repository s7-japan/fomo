import Page01 from '../lib/components/page01/_main'
import Page02 from '../lib/components/page02/_main'
import { LangType, setLng, setupI18n } from '../lib/services/i18n.service'
import { addAdobeFonts, CDN_TMP } from '../lib/services/layout.service'

addAdobeFonts()
setupI18n('en')

interface IAppProps {
  lang: LangType
  is_show_header_footer: boolean
}

export default function LandingPage(props: IAppProps) {
  const isShowHeaderFooter = props.is_show_header_footer

  setLng(props.lang)

  return (
    <div className=" bg-black text-white antialiased en:font-changa">
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

      {<Page01 {...props} />}
      {/* {<Page02 {...props} />} */}

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
