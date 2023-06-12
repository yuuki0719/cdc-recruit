import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

export default function Home(props) {
  const TOP = props.TOP;
  const enp = props.enp;
  return (
    <>
      <title>TOP|CDC新卒採用</title>
      <Header />
      <div>
        <div className="w-[100%] h-auto relative ">
          <Image
            src={TOP[1].mein}
            width={1920}
            height={1000}
            alt={TOP[1].alt}
            className=" w-[100%] h-auto lg:w-[90%] lg:mx-[5%]"
          />
          <div className="skew-y-[-6deg] origin-top-left absolute w-[100%] translate-y-[-100%]  md:translate-y-[-150%]">
            <p className="py-[20px] md:py-[40px] lg:py-[60px] text-center text-[28px] md:text-[45px] lg:text-[55px] font-bold bg-[#00A0E8] animate-slide-in-blurred-left">
              貫き続ける覚悟はあるか
            </p>
          </div>
        </div>
        <p className=" mx-[10%] mt-[60px]  mb-[60px] text-base font-medium lg:text-xl">
          {TOP[1].P}
        </p>
      </div>
      <article>
        <h1 className="text-[30px] text-center font-bold mb-[30px] md:mb-[60px] md:text-[34px] lg:my-[120px] lg:text-[40px]">
          {TOP[2].h1}
        </h1>
        <div className="flex flex-wrap  lg:w-[90%] lg:mx-[5%]">
          <Link className="w-full md:w-1/2" href="/job/1">
            <Image
              src={TOP[2].job1}
              width={1170}
              height={606}
              alt={TOP[2].alt[0]}
            />
          </Link>
          <Link className="w-full md:w-1/2" href="/job/2">
            <Image
              src={TOP[2].job2}
              width={1170}
              height={606}
              alt={TOP[2].alt[1]}
            />
          </Link>
          <Link className="w-full md:w-1/2" href="/job/3">
            <Image
              src={TOP[2].job3}
              width={1170}
              height={606}
              alt={TOP[2].alt[2]}
            />
          </Link>
          <Link className="w-full md:w-1/2" href="/job/4">
            <Image
              src={TOP[2].job4}
              width={1170}
              height={606}
              alt={TOP[2].alt[3]}
            />
          </Link>
        </div>
      </article>
      <section>
        <h1 className="text-[30px] text-center font-bold mt-[60px] mb-[30px] md:mb-[60px] mb:text-[34px] lg:my-[120px] lg:text-[40px]">
          {TOP[3].h1}
        </h1>
        <Image className="lg:w-[90%] lg:mx-[5%]" src={TOP[3].image} width={1920} height={1000} alt={TOP[3].alt} />
        <section  className="lg:mx-[20%]">
          <h2 className="text-[20px] text-center text-black font-bold md:text-[24px] lg:text-[30px]">
            {TOP[3].h2}
          </h2>
          <Splide
            options={{
              autoplay: true, // 自動再生を有効
              interval: 3000,
              rewind: true,
            }}
          >
            <SplideSlide>
              <Link
                href="/interview/1"
                className="flex  items-center  py-[30px] justify-center"
              >
                <div className="ml-[21px] mr-[25px] max-w-[50%]">
                  <Image
                    className="w-auto max-h-[155px] md:max-h-[195px] lg:max-h-[220px]"
                    src={enp[1].images[0]}
                    alt={enp[1].names[0]}
                    width="500"
                    height="667"
                  />
                </div>
                <div className="items-center lg:ml-9">
                  <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                    {enp[1].names[0]}
                  </h2>
                  <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                    {enp[1].p[0]}
                    <br />
                    {enp[1].p[1]}
                    <br />
                    {enp[1].p[2]}
                    <br />
                    {enp[1].p[3]}
                  </h3>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link
                href="/interview/2"
                className="flex  items-center  py-[30px] justify-center"
              >
                <div className="ml-[21px] mr-[25px] max-w-[50%]">
                  <Image
                    className="w-auto max-h-[155px] md:max-h-[195px] lg:max-h-[220px]"
                    src={enp[1].images[1]}
                    alt={enp[1].names[1]}
                    width="500"
                    height="667"
                  />
                </div>
                <div className="items-center lg:ml-9">
                  <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                    {enp[1].names[1]}
                  </h2>
                  <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                    {enp[1].p[4]}
                    <br />
                    {enp[1].p[5]}
                    <br />
                    {enp[1].p[6]}
                    <br />
                    {enp[1].p[7]}
                  </h3>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link
                href="/interview/3"
                className="flex  items-center  py-[30px] justify-center"
              >
                <div className="ml-[21px] mr-[25px] max-w-[50%]">
                  <Image
                    className="w-auto max-h-[155px] md:max-h-[195px] lg:max-h-[220px]"
                    src={enp[1].images[2]}
                    alt={enp[1].names[2]}
                    width="500"
                    height="667"
                  />
                </div>
                <div className="items-center lg:ml-9">
                  <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                    {enp[1].names[2]}
                  </h2>
                  <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                    {enp[1].p[8]}
                    <br />
                    {enp[1].p[9]}
                    <br />
                    {enp[1].p[10]}
                    <br />
                    {enp[1].p[11]}
                  </h3>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link
                href="/interview/4"
                className="flex items-center  py-[30px] justify-center"
              >
                <div className="ml-[21px] mr-[25px] max-w-[50%]">
                  <Image
                    className="w-auto max-h-[155px] md:max-h-[195px] lg:max-h-[220px]"
                    src={enp[1].images[3]}
                    alt={enp[1].names[3]}
                    width="500"
                    height="667"
                  />
                </div>
                <div className="items-center lg:ml-9">
                  <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                    {enp[1].names[3]}
                  </h2>
                  <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                    {enp[1].p[12]}
                    <br />
                    {enp[1].p[13]}
                    <br />
                    {enp[1].p[14]}
                  </h3>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link
                href="/interview/5"
                className="flex  items-center  py-[30px] justify-center"
              >
                <div className="ml-[21px] mr-[25px] max-w-[50%]">
                  <Image
                    className="w-auto max-h-[155px] md:max-h-[195px] lg:max-h-[220px]"
                    src={enp[1].images[4]}
                    alt={enp[1].names[4]}
                    width="500"
                    height="667"
                  />
                </div>
                <div className="items-center lg:ml-9">
                  <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                    {enp[1].names[4]}
                  </h2>
                  <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                    {enp[1].p[15]}
                    <br />
                    {enp[1].p[16]}
                    <br />
                    {enp[1].p[17]}
                    <br />
                    {enp[1].p[18]}
                  </h3>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link
                href="/interview/6"
                className="flex  items-center  py-[30px] justify-center"
              >
                <div className="ml-[21px] mr-[25px] max-w-[50%]">
                  <Image
                    className="w-auto max-h-[155px] md:max-h-[195px] lg:max-h-[220px]"
                    src={enp[1].images[5]}
                    alt={enp[1].names[5]}
                    width="500"
                    height="667"
                  />
                </div>
                <div className="items-center lg:ml-9">
                  <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                    {enp[1].names[5]}
                  </h2>
                  <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                    {enp[1].p[19]}
                    <br />
                    {enp[1].p[20]}
                    <br />
                    {enp[1].p[21]}
                  </h3>
                </div>
              </Link>
            </SplideSlide>
          </Splide>
          <Link
            className="flex justify-end mr-[5%] items-center my-[30px] lg:my-[60px]"
            href="/employee"
          >
            <Image
              className="mr-3"
              src={TOP[3].button}
              width={35}
              height={35}
              alt="ボタン"
            />
            <p className="text-base font-bold lg:text-[20px] ">
              {TOP[3].button_p}
            </p>
          </Link>
        </section>
        <Image  className="lg:w-[90%] lg:mx-[5%]" src={TOP[4].image} width={1920} height={1000} alt={TOP[4].alt} />
        <section>
          <h2 className="text-[20px] lg:text-[30px] mb-[60px] text-center text-black font-bold  md:text-[24px]">
            {TOP[4].h2}
          </h2>
          <h3 className="text-[18px] lg:text-[24px] text-center text-black  md:text-[20px] font-[600]">
            {TOP[4].h3_1}
          </h3>
          <p className="text-[14px] ] mx-[10%] text-center text-black font-normal  my-[30px] md:text-[16px] lg:text-xl lg:my-[60px]">
            {TOP[4].p_1}
          </p>
          <h3 className="text-[18px] lg:text-[24px] text-center text-black md:text-[20px] font-[600]">
            {TOP[4].h3_2}
          </h3>
          <p className="text-[14px]  text-center text-black font-normal mx-[28px] my-[30px] md:text-[16px] lg:text-xl lg:mt-[60px] lg:mb-[120px]">
            {TOP[4].p_2}
          </p>
        </section>
      </section>
      <Footer />
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
