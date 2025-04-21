import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header Section */}
      <div className="w-auto px-4 py-6">
        <Image
          src={`/images/FOMO_logo.png`}
          alt={`FOMO`}
          width={142}
          height={35}
        />
      </div>

      <section className="relative py-16 md:py-32 lg:py-48 flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold ml-10 mb-4">
          <Image
            src={`/images/FOMO_logo.png`}
            alt={`FOMO`}
            width={800}
            height={350}
          />
        </h1>

        <p className="text-3xl md:text-3x1 font-semibold text-white mb-6">
          Play Freely with Crypto - Your New Online Casino Starts Here
        </p>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-100 md:w-250 md:h-250 z-20">
          <Image
            src="/images/trophy.png"
            alt="Trophy Background"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="text-center relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-sm md:text-base">
              Get a 100% bonus on your first deposit (up to USDT₮300). Start now
              and aim for the jackpot!
            </p>
            <button className="bg-transparent border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white">
              Join Now
            </button>
          </div>

          <div className="mt-12">
            <p className="text-xl md:text-2xl font-semibold text-white mb-2">
              <span className="text-5xl font-extrabold text-[#FF008C]">
                3,000+
              </span>{" "}
              Games Across All Genres
            </p>
            <div className="text-sm md:text-base text-[#FF008C]">
              Slots, live casino, baccarat, roulette,
              <p className="text-white inline-block ml-1">and more Exclusive</p>
              <Image
                src="/images/FOMO_logo.png"
                alt="FOMO Logo"
                width={50}
                height={50}
                className="inline-block align-middle m-2"
              />
              original games
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-100 md:h-100 lg:h-[400px]">
        <Image
          src="/images/bg.png"
          alt="Casino Games Background"
          layout="fill"
          objectFit="cover"
        />
        <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#252525] text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white z-10">
          🚀 Find your favorite Game
        </button>
      </section>
      <div className="flex justify-around mt-3">
        <div>
          <p>
            MEGA JACKPOT Exceeds USDT₮1,000,000! 4 different jackpot tiers
            available
          </p>
          <p>The MEGA JACKPOT is exclusive for FOMO players</p>
        </div>
        <button className="bg-transparent border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white">
          Join Now
        </button>
      </div>

      <section className="bg-black text-white py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Just a Few Clicks to Get Started!
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-8">
            Get a <span className="text-[#FF008C]">100% Bonus</span> on your
            First Deposit (Up to USDT₮300)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-[#1A1A1A] rounded-lg flex flex-col relative">
              <div className="absolute top-4 left-0 flex items-center">
                <div className="h-20 w-1 bg-[#FF008C] mr-2"></div>
                <div className="ml-2">
                  <h3 className="text-xs font-semibold text-white">STEP</h3>
                  <h3 className="text-2xl font-semibold text-white mb-2">1</h3>
                </div>
              </div>

              <div className="relative w-50 h-50 left-35">
                <Image
                  src="/images/wheel.png"
                  alt="Dollar"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <p className="text-sm font-bold text-gray-300 mb-1 self-start ml-5">
                Sign up with:
              </p>
              <p className="text-xs text-gray-400 self-start ml-5">
                Email, Telegram, Metamask wallet.
              </p>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg flex flex-col relative">
              <div className="absolute top-4 left-0 flex items-center">
                <div className="h-20 w-1 bg-[#FF008C] mr-2"></div>
                <div className="ml-2">
                  <h3 className="text-xs font-semibold text-white">STEP</h3>
                  <h3 className="text-2xl font-semibold text-white mb-2">2</h3>
                </div>
              </div>

              <div className="relative w-50 h-50 left-35">
                <Image
                  src="/images/bolt.png"
                  alt="bolt"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <p className="text-sm font-bold text-gray-300 mb-1 self-start ml-5">
                Minimum Deposit:
              </p>
              <p className="text-xs text-gray-400 self-start ml-5 mb-5">
                Make a deposit of USDT₮10 to begin.
              </p>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg flex flex-col relative">
              <div className="absolute top-4 left-0 flex items-center">
                <div className="h-20 w-1 bg-[#FF008C] mr-2"></div>
                <div className="ml-2">
                  <h3 className="text-xs font-semibold text-white">STEP</h3>
                  <h3 className="text-2xl font-semibold text-white mb-2">3</h3>
                </div>
              </div>

              <div className="relative w-50 h-50 left-35">
                <Image
                  src="/images/dollar.png"
                  alt="Dollar"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <p className="text-sm font-bold text-gray-300 mb-1 self-start ml-5">
                Get welcome bonus:
              </p>
              <p className="text-xs text-gray-400 self-start ml-5">
                Enjoy a bonus (up to USDT₮300)
              </p>
            </div>
          </div>

          <button className="bg-[#252525] text-white py-3 px-8 rounded-full font-semibold mt-8 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white">
            <span className="mr-2">🚀</span> Let's Play Now !
          </button>

          <p className="text-xs text-white underline decoration-[#FF008C] mt-2">
            Bonus applied instantly after deposit
          </p>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8 md:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A One-of-a-Kind
            <br />
            Betting Experience Only on
            <Image
              src="/images/FOMO_logo.png"
              alt="FOMO Logo"
              width={170}
              height={170}
              className="inline-block align-middle ml-10"
            />
          </h1>

          <div className="text-2xl text-[#FF008C]">
            Play More, Earn More &nbsp;
            <p className="text-lg text-gray-400 mb-8 inline-block">
              {" "}
              - Rewards Like No Other
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden">
              <div className="bg-[#FF008C] text-white py-6 px-6">
                <h2 className="text-6xl font-bold mb-2">1</h2>
                <h3 className="text-lg font-semibold">
                  FOMO-ExcluFOMO-Exclusive
                  <br />
                  Betting Event
                </h3>
              </div>
              <div className="bg-[#1A1A1A] py-6 px-6">
                <ul className="list-disc list-inside text-sm text-gray-400">
                  <li className="mb-2">
                    Bet on special odds and formats only available on FOMO
                  </li>
                  <li>
                    Participate in limited competitions and earn real prizes
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <div className="bg-[#FF008C] text-white py-6 px-6">
                <h2 className="text-6xl font-bold mb-2">2</h2>
                <h3 className="text-lg font-semibold">Nonstop Reward System</h3>
                <br></br>
              </div>
              <div className="bg-[#1A1A1A] py-6 px-6">
                <ul className="list-disc list-inside text-sm text-gray-400">
                  <li className="mb-2">
                    Every bet comes with a chance to earn rewards
                  </li>
                  <li>
                    Get rake back on every bet, and cashback when you lose.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <div className="bg-[#FF008C] text-white py-6 px-6">
                <h2 className="text-6xl font-bold mb-2">3</h2>
                <h3 className="text-lg font-semibold">
                  Referral Program - Earn
                  <br />
                  up to 35%
                </h3>
              </div>
              <div className="bg-[#1A1A1A] py-6 px-6">
                <ul className="list-disc list-inside text-sm text-gray-400">
                  <li className="mb-2">
                    Get commissions from both direct and indirect referrals
                  </li>
                  <li>Earn rewards even when your referrals win</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 md:py-24 px-8 md:px-24 overflow-hidden">
        <div className="flex items-center mb-8">
          <div className="h-8 w-1 bg-[#FF008C] mr-4"></div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Crypto-Friendly and Fiat-Ready
          </h1>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-start gap-12 ">
          <div className="flex-1 mt-20 bg-[#121212] px-20 py-5 md:-mr-100  -mb-10">
            <div className="mb-12 ">
              <h2 className="text-xl font-semibold mb-2">
                Supported cryptocurrencies:
              </h2>
              <p className="text-gray-400 text-sm">
                USDT, USDC, ETH, POL, BNB, BTC, LTC, DOGE
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                No crypto? No problem!
              </h2>
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-6">
                  <Image
                    src="/icons/apple.png"
                    alt="Apple Pay"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="relative w-12 h-6">
                  <Image
                    src="/icons/gpay.png"
                    alt="Google Pay"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="relative w-16 h-6">
                  <Image
                    src="/icons/visa.png"
                    alt="Visa"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="relative w-12 h-6">
                  <Image
                    src="/icons/mastercard.png"
                    alt="Mastercard"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-100 h-100 rounded-full right-30">
            <Image
              src="/images/basketball.png"
              alt="Basketball Bubble"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 relative z-10 flex justify-center">
          <button className="bg-[#1A1A1A] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#333333] transition-colors duration-200 flex items-center">
            <span className="mr-2">🚀</span> Let's Play Now !
          </button>
        </div>
      </div>
      <footer className="bg-black text-gray-400 py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-4">
            <div className="inline-block">
              <Image
                src="/images/FOMO_logo.png"
                alt="FOMO Logo"
                width={80}
                height={24}
              />
            </div>
          </div>
          <nav className="text-xs">
            <ul className="flex justify-center space-x-4 md:space-x-6">
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
          <p className="text-xs mt-4">
            © {new Date().getFullYear()} FOMO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
