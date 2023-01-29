import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Link from "next/link";

export default function Interview(props) {
  const interview = props.interview;
  const enp = props.enp;
  return (
    <body>
      <div>
        <Header />
      </div>
      <Image
        className="w-[100%]"
        src={interview[0].mein}
        width={1170}
        height={780}
        alt={interview[0].alt}
      />
      <div className="px-12 space-y-10 my-[60px] ">
        <p className="text-xs md:text-base leading-5">{interview[0].p_1[0]}</p>
        <p className="text-xs md:text-base leading-5">{interview[0].p_1[1]}</p>
        <p className="text-xs md:text-base leading-5">{interview[0].p_1[2]}</p>
      </div>
      <Image
        className="w-[100%]"
        src={interview[0].images[0]}
        width={1170}
        height={780}
        alt={interview[0].alt}
      />
      <div className="px-12 space-y-10 my-[60px] ">
        <h2>{interview[0].h2[0]}</h2>
        <p className="">{interview[0].p_2[0]}</p>
        <p>{interview[0].p_2[1]}</p>
        <p>{interview[0].p_2[2]}</p>
      </div>
      <div className="px-12 space-y-10 my-[60px] ">
        <h2>{interview[0].h2[1]}</h2>
        <p className="mt-[30px]">{interview[0].p_3[0]}</p>
        <p>{interview[0].p_3[1]}</p>
        <p>{interview[0].p_3[2]}</p>
      </div>
      <Image
        className="w-[100%]"
        src={interview[0].images[1]}
        width={1170}
        height={780}
        alt={interview[0].alt}
      />
      <div className="px-12 space-y-10 my-[60px] ">
        <h2>{interview[0].h2[2]}</h2>
        <p>{interview[0].p_4[0]}</p>
        <p>{interview[0].p_4[1]}</p>
        <p>{interview[0].p_4[2]}</p>
        <p>{interview[0].p_4[3]}</p>
      </div>
      <div className="px-12 space-y-10 my-[60px] ">
        <h2>{interview[0].h2[3]}</h2>
        <p>{interview[0].p_5[0]}</p>
        <p>{interview[0].p_5[1]}</p>
      </div>
      <h1 className="text-[30px] font-bold text-center my-[60px]">{interview[0].footer_h1}</h1>
      <Splide
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
            href="/interview"
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
            href="/interview"
            className="flex  items-center  py-[30px] justify-center"
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
            href="/interview"
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
            href="/interview"
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
      <div>
        <Footer />
      </div>
    </body>
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