import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Interview(props) {
  const job = props.job;
  const TOP = props.TOP;
  return (
    <body>
      <div>
        <Image
          className="w-[100%]"
          src={job[1].mein}
          width={1560}
          height={808}
          alt={TOP[1].alt}
        />
        <div>
          <h1 className="text-[30px]    text-center my-[60px] font-bold">
            {job[1].h1[0]}
          </h1>
          <p className="text-base text-center mx-[10%]">{job[1].p[0]}</p>
        </div>
        <div>
          <h1 className="text-[30px] text-center my-[60px] font-bold">
            {job[1].h1[1]}
          </h1>
          <p className="text-base text-center mx-[10%]">{job[1].p[1]}</p>
        </div>
        <div>
          <h1 className="text-[30px] text-center my-[60px] font-bold">
            {job[1].h1[2]}
          </h1>
          <p className="text-base text-center mx-[10%] mb-[60px]">
            {job[1].p[2]}
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <Image
              className=""
              src={job[0].sch}
              width={390}
              height={679}
              alt={TOP[1].alt}
            />
          </div>

          <h1 className="text-[30px] text-center my-[60px] font-bold">
            {job[1].h1[3]}
          </h1>
          <div class="flex flex-wrap">
            <Image
              class="w-full md:w-1/3"
              src={TOP[2].job2}
              width={1170}
              height={606}
              alt={TOP[2].alt[1]}
            />
            <Image
              class="w-full md:w-1/3"
              src={TOP[2].job3}
              width={1170}
              height={606}
              alt={TOP[2].alt[2]}
            />
            <Image
              class="w-full md:w-1/3"
              src={TOP[2].job4}
              width={1170}
              height={606}
              alt={TOP[2].alt[3]}
            />
          </div>
        </div>
      </div>
      <footer>
        <div className="flex justify-between mx-[15px] mt-[60px]">
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
