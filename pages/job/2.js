import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import "flowbite";

export default function Interview(props) {
  const job = props.job;
  const TOP = props.TOP;
  return (
    <>
      <title>人材紹介事業|CDC新卒採用</title>
      <Header />
      <div>
        <Image
          className="w-[100%] lg:w-[90%] lg:mx-[5%]"
          src={job[1].mein}
          width={1560}
          height={808}
          alt={TOP[1].alt}
        />
        <div>
          <h1 className="text-[30px]    text-center mt-[60px] mb-[30px] md:mb-[60px] font-bold">
            {job[3].h1[0]}
          </h1>
          <p className="text-base text-center mx-[10%]">{job[3].p[0]}</p>
        </div>
        <div className="md:flex">
          <div className="md:w-1/2">
          <h1 className="text-[30px] text-center mt-[60px] mb-[30px] md:mb-[60px] font-bold">
            {job[3].h1[1]}
          </h1>
          <p className="text-base text-center mx-[10%]">{job[3].p[1]}</p>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-[30px] text-center mt-[60px] mb-[30px] md:mb-[60px] font-bold">
            {job[3].h1[2]}
          </h1>
          <p className="text-base text-center mx-[10%] mb-[60px]">
            {job[3].p[2]}
          </p>
        </div>
        </div>
        
        <div className="flex justify-center md:mx-[20%] lg:mx-[30%] md:my-[120px]">
          <Splide
            options={{
              rewind: true,
            }}
          >
            <SplideSlide>
              <Image
                src="/image/schedule_1.png"
                alt="スケジュール"
                width="1560"
                height="1648"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/image/schedule_2.png"
                alt="スケジュール"
                width="1560"
                height="1648"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/image/schedule_3.png"
                alt="スケジュール"
                width="1560"
                height="1648"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/image/schedule_4.png"
                alt="スケジュール"
                width="1560"
                height="1648"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/image/schedule_5.png"
                alt="スケジュール"
                width="1560"
                height="1648"
              />
            </SplideSlide>
          </Splide>
        </div>

        {/* <div>
          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            className="block mx-auto my-[60px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            スケジュール全体を見る
          </button>

          <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  md:h-full"
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 text-center">
                <Image
                  src="/image/job1_s.png"
                  width={1560}
                  height={2036}
                  alt="スケジュール"
                  className=" w-[100%] h-auto "
                />
              </div>
            </div>
          </div>
        </div> */}

        <div>
          <h1 className="text-[30px] text-center my-[60px] font-bold">
            {job[3].h1[3]}
          </h1>
          <div className="flex flex-wrap">
            <Link href="/job/1" className="w-full md:w-1/3">
              <Image
                src={TOP[2].job1}
                width={1170}
                height={606}
                alt={TOP[2].alt[1]}
              />
            </Link>
            <Link href="/job/3" className="w-full md:w-1/3">
              <Image
                src={TOP[2].job3}
                width={1170}
                height={606}
                alt={TOP[2].alt[3]}
              />
            </Link>
            <Link href="/job/4" className="w-full md:w-1/3">
              <Image
                src={TOP[2].job4}
                width={1170}
                height={606}
                alt={TOP[2].alt[3]}
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");

  const data = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(data);

  return {
    props: objectData,
  };
};
