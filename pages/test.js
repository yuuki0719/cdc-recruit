import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image from "next/image";
import Link from "next/link";
import 'flowbite';

export default function Slider() {
  return (
    <>
      {/* <Splide
        className=""
        options={{
          rewind: true,
        }}
      >
        <SplideSlide className="">
          <Link
            href="/interview"
            className="flex  items-center  py-[30px] justify-center"
          >
            <div className="ml-[21px] mr-[25px]  max-w-[50%] max-h-[250px]">
              <Image
                className=" w-auto max-h-[155px] md:max-h-[195px] lg:max-h-[220px]"
                src="/image/fujii.jpg"
                alt="藤井 歩"
                width="500"
                height="667"
              />
            </div>
            <div className="items-center lg:ml-9">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                藤井 歩
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                先輩の技術を盗み
                <br />
                自分のものにすることで
                <br />
                苦しい時期を
                <br />
                乗り越えることができた
              </h3>
            </div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            href="/interview"
            className="flex  items-center   py-[30px] justify-center"
          >
            <div className="ml-[21px] mr-[25px] max-w-[50%]">
              <Image
                className="w-auto max-h-[155px] md:max-h-[195px] lg:max-h-[220px]"
                src="/image/fujii.jpg"
                alt="藤井 歩"
                width="500"
                height="667"
              />
            </div>
            <div className="items-center lg:ml-9">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                藤井 歩
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                先輩の技術を盗み
                <br />
                自分のものにすることで
                <br />
                苦しい時期を
                <br />
                乗り越えることができた
              </h3>
            </div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            href="/interview"
            className="flex  items-center  py-[30px] justify-center"
          >
            <div className="ml-[21px] mr-[25px] max-w-[50%]">
              <Image
                className="w-auto max-h-[155px] md:max-h-[195px] lg:max-h-[220px]"
                src="/image/fujii.jpg"
                alt="藤井 歩"
                width="500"
                height="667"
              />
            </div>
            <div className="items-center lg:ml-9">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                藤井 歩
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                先輩の技術を盗み
                <br />
                自分のものにすることで
                <br />
                苦しい時期を
                <br />
                乗り越えることができた
              </h3>
            </div>
          </Link>
        </SplideSlide>
      </Splide> */}
      {/* <Splide
        className=""
        options={{
          rewind: true,
        }}
      >
        <SplideSlide className="">
        <Image
                className=""
                src="/image/schedule_1.png"
                alt="スケジュール"
                width="1560"
                height="1648"
              />
        </SplideSlide>
        <SplideSlide>
        <Image
                className=""
                src="/image/schedule_2.png"
                alt="スケジュール"
                width="1560"
                height="1648"
              />
        </SplideSlide>
        <SplideSlide>
        <Image
                className=""
                src="/image/schedule_3.png"
                alt="スケジュール"
                width="1560"
                height="1648"
              />
        </SplideSlide>
        <SplideSlide>
        <Image
                className=""
                src="/image/schedule_4.png"
                alt="スケジュール"
                width="1560"
                height="1648"
              />
        </SplideSlide>
        <SplideSlide>
        <Image
                className=""
                src="/image/schedule_5.png"
                alt="スケジュール"
                width="1560"
                height="1648"
              />
        </SplideSlide>
      </Splide> */}

      {/* <Link  href="/"  className="bg-[#00A0E8] text-white rounded-[100vh] px-[50px] py-[10px] font-bold">Entry</Link>
      <Link  href="/"  className="bg-[#00A0E8] text-[65px] text-white  px-[100px] py-[50px] font-bold">Entry</Link> */}
      {/* <div className="w-[100%] h-auto relative ">
        <Image src="/image/mein_v.jpg" width={1170} height={780} className=" w-[100%] h-auto " />
        <div className=" skew-y-[-6deg] origin-top-left">
          <div className="w-[100%] py-[20px] text-center text-[28px] md:text-[45px] lg:text-[55px] font-bold bg-[#00A0E8] absolute  p-0 m-0 translate-x-[-50%] translate-y-[-50%] animate-slide-in-blurred-left">貫き続ける覚悟はあるか</div>
        </div>
        
      </div>
       */}

<button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
スケジュール全体を見る
</button>


<div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div className="relative w-full h-full max-w-2xl md:h-auto">

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 "> 
                <Image src="/image/job1_s.png" alt="スケジュール" width={1560} height={2036} className=" w-[100%] h-auto " />

        </div>
    </div>
</div>
</>
  );
}