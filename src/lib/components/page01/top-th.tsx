import { setEventEmitterS } from '../../services/event.service'
import { CDN_TMP } from '../../services/layout.service'

interface IAppEvent {}

export default function App(props: IAppEvent) {
  return (
    <>
      {/* mobile */}
      <div className="block md:hidden">
        <Mobile {...props} />
      </div>
      {/* desktop */}
      <div className="hidden md:block">
        <Desktop {...props} />
      </div>
    </>
  )
}

function Mobile(props: IAppEvent) {
  return (
    <>
      <img src={`${CDN_TMP}/themes/fomoio/landingpage/images/ko/top-img-m.png`} alt="top-img" />

      <div className="w-full flex justify-center px-2">
        <div className="inline-flex flex-col justify-start items-center gap-[30px]">
          <div className="w-full max-w-[362px] min-w-[94vw] h-[49px] relative">
            <div className="text-center justify-start text-white text-[22px] font-black font-['Noto_Sans_JP']">
              เล่นได้อย่างอิสระด้วยคริปโตเคอร์เรนซี!คาสิโนออนไลน์ใหม่เปิดแล้ว!
            </div>
          </div>
          <div className="text-center justify-start text-white text-lg font-normal font-['Inter'] leading-normal max-w-[340px]">
            รับโบนัส 100% สูงสุดถึง 300 $ ทันทีที่ฝากเงินครั้งแรก! ลุ้นแจ็คพ็อตตอนนี้เลย!
          </div>
          <button onClick={() => setEventEmitterS({ type: 'signUp' })}>
            <div className="px-[42px] py-2 bg-black rounded-[100px] outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
              <span className="text-center justify-start text-white text-2xl font-normal leading-7">
                สมัครเลย
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center gap-[35px] px-2 my-[58px]">
        <div className="flex flex-col justify-start items-center gap-4">
          <img
            className="w-[65.75px]"
            src={`${CDN_TMP}/themes/fomoio/landingpage/images/ko/game-badge.png`}
          />
          <div className="text-center justify-start text-[#ff008c] text-6xl font-semibold font-['Pretendard'] leading-[60px]">
            3,000+
          </div>
          <div className="text-center justify-start text-white text-xl font-semibold font-['Pretendard'] leading-normal">
            เกมทุกประเภทกำลังรอคุณอยู่!
          </div>
        </div>
        <img src={`${CDN_TMP}/themes/fomoio/landingpage/images/ko/game-list-m.png`} alt="games" />
        <div className="text-center justify-start text-[#ff008c] text-xl font-semibold font-['Pretendard'] leading-[30px]">
          สล็อต คาสิโนสด บาคาร่า รูเล็ตต์ และอื่นๆ
          <br />
          พนันลีกใหญ่และแมตช์ใหญ่ทั่วโลก!
        </div>
        <div className="w-[285px] h-[55px] relative">
          <div className="left-[111px] top-0 absolute text-center justify-start text-white text-xl font-semibold font-['Pretendard'] leading-normal">
            เฉพาะที่
          </div>
          <img
            className="w-[83px] left-[21px] top-[4px] absolute"
            src={`${CDN_TMP}/themes/fomoio/landingpage/images/FOMO_logo.png`}
          />
          <div className="left-0 top-[35px] absolute text-center justify-start text-white text-xl font-semibold font-['Pretendard'] leading-tight">
            อย่าพลาดเกมสุดพิเศษเฉพาะทาง!
          </div>
        </div>
      </div>
    </>
  )
}

function Desktop(props: IAppEvent) {
  return (
    <>
      <img src={`${CDN_TMP}/themes/fomoio/landingpage/images/ko/top-img-d.png`} alt="top-img" />

      <div className="w-full flex justify-center mt-[-54px]">
        <div className="inline-flex flex-col justify-start items-center gap-[38px]">
          <div className="w-[892.93px] relative">
            <div className="text-center justify-start text-white text-[55px] font-black">
              เล่นได้อย่างอิสระด้วยคริปโตเคอร์เรนซี!คาสิโนออนไลน์ใหม่เปิดแล้ว!
            </div>
          </div>
          <div className="self-stretch text-center justify-start text-white text-2xl font-normal font-['Pretendard'] leading-normal">
            รับโบนัส 100% สูงสุดถึง 300 $ ทันทีที่ฝากเงินครั้งแรก! ลุ้นแจ็คพ็อตตอนนี้เลย!
          </div>
          <button
            onClick={() => setEventEmitterS({ type: 'signUp' })}
            className="cursor-pointer px-[54px] py-4 bg-black rounded-[100px] outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5"
          >
            <div className="text-center justify-start text-white text-[28px] font-semibold font-['Pretendard'] leading-7">
              สมัครเลย
            </div>
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center my-[120px]">
        <div className="w-[992px] inline-flex flex-col justify-start items-center gap-[35px]">
          <div className="flex flex-col justify-start items-center gap-[34px]">
            <img
              className="w-[100px]"
              src={`${CDN_TMP}/themes/fomoio/landingpage/images/ko/game-badge.png`}
            />
            <div className="text-center justify-start text-[#ff008c] text-[100px] font-semibold font-['Pretendard'] leading-[100px]">
              3,000+
            </div>
            <div className="self-stretch text-center justify-start text-white text-4xl font-semibold font-['Pretendard'] leading-9">
              เกมทุกประเภทกำลังรอคุณอยู่!
            </div>
          </div>
          <img src={`${CDN_TMP}/themes/fomoio/landingpage/images/ko/game-list-d.png`} alt="games" />
          <div className="flex flex-col justify-start items-center gap-[15px]">
            <div className="text-center justify-start text-[#ff008c] text-2xl font-semibold font-['Pretendard'] leading-normal">
              สล็อต คาสิโนสด บาคาร่า รูเล็ตต์ และอื่นๆ พนันลีกใหญ่และแมตช์ใหญ่ทั่วโลก!
            </div>
            <div className="inline-flex justify-start items-center gap-[9px]">
              <img
                className="w-[100px]"
                src={`${CDN_TMP}/themes/fomoio/landingpage/images/FOMO_logo.png`}
              />
              <div className="text-center justify-start text-white text-2xl font-semibold font-['Pretendard'] leading-normal">
                เฉพาะที่ อย่าพลาดเกมสุดพิเศษเฉพาะทาง!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
