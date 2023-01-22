import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home(props) {
  const TOP = props.TOP;
  const enp = props.enp;

  const [navbar, setNavbar] = useState(false);
  return (
    <body>
      <Head>
        <title>CDC</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full  shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <Image
                  src={TOP[0].logo}
                  width={150}
                  height={41}
                  alt={TOP[0].alt}
                />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#00A0E8]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#00A0E8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="font-bold">
                  <Link href="/">{TOP[0].nav[0]}</Link>
                </li>
                <li className="font-bold">
                  <Link href="/">{TOP[0].nav[1]}</Link>
                </li>
                <li className="font-bold">
                  <Link href="/">{TOP[0].nav[2]}</Link>
                </li>
                <li className="font-bold">
                  <Link href="/enp">{TOP[0].nav[3]}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <Image
          className="w-[100%]"
          src={TOP[1].mein}
          width={1170}
          height={780}
          alt={TOP[1].alt}
        />
        <p className=" mx-[10%] my-[60px] text-base font-medium">{TOP[1].P}</p>
      </div>
      <div>
        <h1 className="text-[30px] text-center font-bold mb-[30px] md:mb-[60px] md:text-[34px] ">
          {TOP[2].h1}
        </h1>
        <div class="flex flex-wrap">
          <Link href="/job/1">
            <Image
              class="w-full md:w-1/2"
              src={TOP[2].job1}
              width={1170}
              height={606}
              alt={TOP[2].alt[0]}
            />
          </Link>
          <Image
            class="w-full md:w-1/2"
            src={TOP[2].job2}
            width={1170}
            height={606}
            alt={TOP[2].alt[1]}
          />
          <Image
            class="w-full md:w-1/2"
            src={TOP[2].job3}
            width={1170}
            height={606}
            alt={TOP[2].alt[2]}
          />
          <Image
            class="w-full md:w-1/2"
            src={TOP[2].job4}
            width={1170}
            height={606}
            alt={TOP[2].alt[3]}
          />
        </div>
      </div>
      <div>
        <h1 className="text-[30px] text-center font-bold mt-[60px] mb-[30px] md:mb-[60px] mb:text-[34px]">
          {TOP[3].h1}
        </h1>
        <Image
          className="lg:mx-[10%]"
          src={TOP[3].image}
          width={1170}
          height={780}
          alt={TOP[3].alt}
        />
        <h2 className="text-[20px] text-center text-black font-bold md:text-[24px] ">
          {TOP[3].h2}
        </h2>
        <Link href="/interview" class="flex  items-center ">
          <div class="ml-[21px] mr-[25px] max-w-[50%]">
            <Image
              className=""
              src={enp[1].images[0]}
              alt={enp[1].names[0]}
              width="500"
              height="667"
            />
          </div>
          <div class="items-center lg:ml-9">
            <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
              {enp[1].names[0]}
            </h2>
            <h3 class="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
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

        <div className="flex justify-end mr-[5%] items-center">
          <Image className="mr-3" src={TOP[3].button} width={35} height={35} />
          <p className="text-base">{TOP[3].button_p}</p>
        </div>
      </div>

      <div>
        <Image
          className="lg:mx-[10%]"
          src={TOP[4].image}
          width={1170}
          height={780}
          alt={TOP[4].alt}
        />
        <h2 className="text-[20px] mb-[60px] text-center text-black font-bold  md:text-[24px]">
          {TOP[4].h2}
        </h2>
        <h3 className="text-[18px] text-center text-black font-medium md:text-[20px]">
          {TOP[4].h3_1}
        </h3>
        <p className="text-[14px] mx-[10%] text-center text-black font-normal  my-[30px] md:text-[16px] ">
          {TOP[4].p_1}
        </p>
        <h3 className="text-[18px] text-center text-black font-medium md:text-[20px]">
          {TOP[4].h3_2}
        </h3>
        <p className="text-[14px]  text-center text-black font-normal mx-[28px] my-[30px] md:text-[16px] ">
          {TOP[4].p_2}
        </p>
      </div>
      <footer>
        <div className="flex justify-between mx-[15px]">
          <div>
            <Image src={TOP[5].logo} width={60} height={40} />
            <p className="text-[14px] text-black my-[22px] pl-[13px]">
              {TOP[5].link_1}
            </p>
            <p className="text-[14px] text-black my-[22px] pl-[13px]">
              {TOP[5].link_2}
            </p>
          </div>
          <div className="flex justify-end mr-[15px] mt-auto">
            <Image src={TOP[5].button} width={40} height={40} />
          </div>
        </div>
        <p className="text-center">{TOP[5].copy}</p>
      </footer>
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
