import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Link from "next/link";

export default function Enp(props) {
  const TOP = props.TOP;
  const enp = props.enp;
  return (
    <div class="">
      <Image
        className="w-[100%] h-auto"
        src={enp[0].main[0]}
        alt={enp[1].names[0]}
        width="1170"
        height="780"
      />
      <div>
        <h1 className=" text-center text-[30px] md:text-[32px] font-bold my-[60px]">
          {enp[0].h1}
        </h1>
        <p className=" text-base mx-[10%]">{enp[0].p}</p>
      </div>
      <div>
        <h1 className=" text-center text-[30px] md:text-[32px] font-bold mt-[60px] mb-0">
          {enp[1].h1}
        </h1>
        <h2 className=" text-center text-[18px] mt-0 text-black">
          {enp[1].h2}
        </h2>
      </div>

      <ul>
        <li class="my-[60px] lg:ml-[5%]">
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
        </li>

        <li class="mb-[60px] lg:mx-[5%]">
          <Link
            class="flex items-center justify-between"
            href="/about"
            title=""
          >
            <div class="ml-[21px] mr-[25px] items-center">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl ">
                {enp[1].names[1]}
              </h2>
              <h3 class="text-base  font-normal min-w-[176px] md:text-2xl ">
                {enp[1].p[4]}
                <br />
                {enp[1].p[5]}
                <br />
                {enp[1].p[6]}
                <br />
                {enp[1].p[7]}
              </h3>
            </div>
            <div class="mr-3 max-w-[50%]">
              <Image
                className=""
                src={enp[1].images[1]}
                alt={enp[1].names[1]}
                width="500"
                height="667"
              />
            </div>
          </Link>
        </li>

        <li class="mb-[60px] lg:ml-[5%]">
          <a class="flex items-center" href="" title="">
            <div class="ml-[21px]  mr-[25px] max-w-[50%] ">
              <Image
                className=""
                src={enp[1].images[2]}
                alt={enp[1].names[2]}
                width="500"
                height="667"
              />
            </div>
            <div class="items-center lg:ml-9">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                {enp[1].names[2]}
              </h2>
              <h3 class="text-[16px] font-normal min-w-[176px] md:text-2xl mr-3">
                {enp[1].p[8]}
                <br />
                {enp[1].p[9]}
                <br />
                {enp[1].p[10]}
                <br />
                {enp[1].p[11]}
              </h3>
            </div>
          </a>
        </li>

        <li class="mb-[60px] lg:mx-[5%]">
          <a class="flex items-center justify-between" href="" title="">
            <div class="ml-[21px] mr-[25px] items-center">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl ">
                {enp[1].names[3]}
              </h2>
              <h3 class="text-base  font-normal min-w-[176px] md:text-2xl ">
                {enp[1].p[12]}
                <br />
                {enp[1].p[13]}
                <br />
                {enp[1].p[14]}
              </h3>
            </div>
            <div class="mr-3 max-w-[50%]">
              <Image
                className=""
                src={enp[1].images[3]}
                alt={enp[1].names[3]}
                width="500"
                height="667"
              />
            </div>
          </a>
        </li>

        <li class="mb-[60px] lg:ml-[5%]">
          <a class="flex items-center" href="" title="">
            <div class="ml-[21px] mr-[25px] max-w-[50%]">
              <Image
                className=""
                src={enp[1].images[4]}
                alt={enp[1].names[4]}
                width="500"
                height="667"
              />
            </div>
            <div class="items-center lg:ml-9 ">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl">
                {enp[1].names[4]}
              </h2>
              <h3 class="text-[16px] font-normal min-w-[176px] md:text-2xl  mr-3">
                {enp[1].p[15]}
                <br />
                {enp[1].p[16]}
                <br />
                {enp[1].p[17]}
                <br />
                {enp[1].p[18]}
              </h3>
            </div>
          </a>
        </li>

        <li class="mb-[60px] lg:mx-[5%]">
          <a class="flex items-center justify-between" href="" title="">
            <div class="ml-[21px] mr-[25px] items-center">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-2xl mt-0 md:text-4xl lg:text-5xl ">
                {enp[1].names[5]}
              </h2>
              <h3 class="text-base  font-normal min-w-[176px] md:text-2xl ">
                {enp[1].p[19]}
                <br />
                {enp[1].p[20]}
                <br />
                {enp[1].p[21]}
              </h3>
            </div>
            <div class="mr-3 max-w-[50%]">
              <Image
                className=""
                src={enp[1].images[5]}
                alt={enp[1].names[5]}
                width="500"
                height="667"
              />
            </div>
          </a>
        </li>
      </ul>
    </div>
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
