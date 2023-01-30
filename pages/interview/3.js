import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Link from "next/link";

export default function Interview(props) {
<<<<<<< HEAD
  const enp = props.enp;
  const interview = props.interview;
  return (
    <body>
      <Head>
        <title>インタビュー|CDC新卒採用</title>
      </Head>
      <Header />
      <Image
        src={interview[2].main}
        width={1560}
        height={1040}
        alt={interview[2].alt}
        className="w-[100%]"
      />
      <div className="px-12 space-y-10 my-[60px] ">
        <p className="">{interview[1].p_1}</p>
      </div>
      <Image
        src={interview[2].images[0]}
        width={5568}
        height={3712}
        alt={interview[2].alt}
      />
      <div className="mx-[25px] mb-[39px]">
        <h2 className="mb-[30px] text-[20px] md:text-[30px]">
          {interview[2].h2[0]}
        </h2>
        <h3 className="md:text-[20px]">{interview[2].h3[0]}</h3>
      </div>
      <div className="px-12 space-y-10 mb-[60px] ">
        <p>{interview[2].p_2[0]}</p>
        <p>{interview[2].p_2[1]}</p>
        <p>{interview[2].p_2[2]}</p>
      </div>
      <div className="mx-[25px] mb-[39px] ">
        <h2 className="mb-[30px] text-[20px] md:text-[30px]">
          {interview[2].h2[1]}
        </h2>
        <h3 className="md:text-[20px]">{interview[2].h3[1]}</h3>
      </div>
      <div className="px-12 space-y-10 my-[60px] ">
        <p className="mt-[30px]">{interview[2].p_3[0]}</p>
        <p>{interview[2].p_3[1]}</p>
        <p>{interview[2].p_3[2]}</p>
      </div>
      <Image
        src={interview[2].images[1]}
        width={5568}
        height={3712}
        alt={interview[2].alt}
      />
      <div className="mx-[25px]  mb-[39px]">
        <h2 className="mb-[30px] text-[20px] md:text-[30px]">
          {interview[2].h2[2]}
        </h2>
        <h3 className="md:text-[20px]">{interview[2].h3[2]}</h3>
      </div>
      <div className="px-12 space-y-10 my-[60px] ">
        <p>{interview[2].p_4[0]}</p>
        <p>{interview[2].p_4[1]}</p>
        <p>{interview[2].p_4[2]}</p>
      </div>
      <div className="mx-[25px]  mb-[39px]">
        <h2 className="mb-[30px] text-[20px] md:text-[30px]">
          {interview[2].h2[3]}
        </h2>
        <h3 className="md:text-[20px]">{interview[2].h3[3]}</h3>
      </div>
      <div className="px-12 space-y-10 my-[60px] ">
        <p>{interview[2].p_5[0]}</p>
        <p>{interview[2].p_5[1]}</p>
        <p>{interview[2].p_5[2]}</p>
      </div>
      <h1 className="text-center text-[30px] my-[60px] font-bold">
        {interview[2].footer_h1}
      </h1>
      <Splide
=======
    const enp = props.enp;
const interview = props.interview;
return (
<body>
    <Header />
    <Image src={interview[2].main} width={1560} height={1040} alt={interview[2].alt} className="w-[100%]" />
    <div className='px-12 space-y-10 my-[60px] '>
        <p className=''>{interview[1].p_1}</p>
    </div>
    <Image src={interview[2].images[0]} width={5568} height={3712} alt={interview[2].alt} />
    <div className='mx-[25px] mb-[39px]'>
    <h2 className='mb-[30px] text-[20px] md:text-[30px]'>{interview[2].h2[0]}</h2>
    <h3 className='md:text-[20px]'>{interview[2].h3[0]}</h3>
    </div>
    <div className='px-12 space-y-10 mb-[60px] '>
        <p>{interview[2].p_2[0]}</p>
        <p>{interview[2].p_2[1]}</p>
        <p>{interview[2].p_2[2]}</p>
    </div>
    <div className='mx-[25px] mb-[39px] '>
    <h2  className='mb-[30px] text-[20px] md:text-[30px]'>{interview[2].h2[1]}</h2>
    <h3 className='md:text-[20px]'>{interview[2].h3[1]}</h3>
    </div>
    <div className='px-12 space-y-10 my-[60px] '>
        <p className='mt-[30px]'>{interview[2].p_3[0]}</p>
        <p>{interview[2].p_3[1]}</p>
        <p>{interview[2].p_3[2]}</p>
    </div>
    <Image src={interview[2].images[1]} width={5568} height={3712} alt={interview[2].alt} />
    <div className='mx-[25px]  mb-[39px]'>
    <h2 className='mb-[30px] text-[20px] md:text-[30px]'>{interview[2].h2[2]}</h2>
    <h3 className='md:text-[20px]'>{interview[2].h3[2]}</h3>
    </div>
    <div className='px-12 space-y-10 my-[60px] '>
        <p>{interview[2].p_4[0]}</p>
        <p>{interview[2].p_4[1]}</p>
        <p>{interview[2].p_4[2]}</p>
    </div>
    <div className='mx-[25px]  mb-[39px]'>
    <h2 className='mb-[30px] text-[20px] md:text-[30px]'>{interview[2].h2[3]}</h2>
    <h3 className='md:text-[20px]'>{interview[2].h3[3]}</h3>
    </div>
    <div className='px-12 space-y-10 my-[60px] '>
        <p>{interview[2].p_5[0]}</p>
        <p>{interview[2].p_5[1]}</p>
        <p>{interview[2].p_5[2]}</p>
    </div>
    <h1 className='text-center text-[30px] my-[60px] font-bold'>{interview[2].footer_h1}</h1>
    <Splide
>>>>>>> ff628ef57ec185a711ddcd11e63b4c8e28976a3b
        className=""
        options={{
          rewind: true,
        }}
      >
        <SplideSlide className="">
<<<<<<< HEAD
          <Link
=======
        <Link
>>>>>>> ff628ef57ec185a711ddcd11e63b4c8e28976a3b
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
<<<<<<< HEAD
                {enp[1].names[0]}
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                {enp[1].p[0]}
=======
              {enp[1].names[0]}
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
              {enp[1].p[0]}
>>>>>>> ff628ef57ec185a711ddcd11e63b4c8e28976a3b
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
<<<<<<< HEAD
          <Link
=======
        <Link
>>>>>>> ff628ef57ec185a711ddcd11e63b4c8e28976a3b
            href="/interview/3"
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
<<<<<<< HEAD
                {enp[1].names[1]}
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                {enp[1].p[4]}
=======
              {enp[1].names[1]}
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
              {enp[1].p[4]}
>>>>>>> ff628ef57ec185a711ddcd11e63b4c8e28976a3b
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
            href="/interview/4"
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
<<<<<<< HEAD
                {enp[1].names[3]}
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                {enp[1].p[12]}
=======
              {enp[1].names[3]}
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
              {enp[1].p[12]}
>>>>>>> ff628ef57ec185a711ddcd11e63b4c8e28976a3b
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
<<<<<<< HEAD
                {enp[1].names[4]}
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                {enp[1].p[15]}
=======
              {enp[1].names[4]}
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
              {enp[1].p[15]}
>>>>>>> ff628ef57ec185a711ddcd11e63b4c8e28976a3b
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
<<<<<<< HEAD
                {enp[1].names[5]}
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                {enp[1].p[19]}
=======
              {enp[1].names[5]}
              </h2>
              <h3 className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
              {enp[1].p[19]}
>>>>>>> ff628ef57ec185a711ddcd11e63b4c8e28976a3b
                <br />
                {enp[1].p[20]}
                <br />
                {enp[1].p[21]}
              </h3>
            </div>
          </Link>
        </SplideSlide>
      </Splide>
<<<<<<< HEAD
      <Footer />
    </body>
  );
=======
    <Footer />
</body>
        )
>>>>>>> ff628ef57ec185a711ddcd11e63b4c8e28976a3b
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");

  const data = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(data);

  return {
    props: objectData,
  };
};
