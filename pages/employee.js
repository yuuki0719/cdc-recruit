import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "../components/slider";

export default function Employee(props) {
  const TOP = props.TOP;
  const enp = props.enp;
  return (
    <>
        <title>社員紹介|CDC新卒採用</title>
      <Header />
      <div>
        <Slider />
      </div>
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
        <li className="my-[60px] lg:ml-[5%]">
          <Link href="/interview/1" className="flex  items-center ">
            <div className="ml-[21px] mr-[25px] max-w-[50%] w-1/2">
              <Image
                src={enp[1].images[0]}
                alt={enp[1].names[0]}
                width="500"
                height="667"
              />
            </div>
            <div className="items-center  lg:ml-[100px] w-1/2">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-3xl mt-0 md:text-4xl lg:text-5xl">
                {enp[1].names[0]}
              </h2>
              <h3 className="text-xl md:text-3xl md:mt-1 ">
                    {enp[1].since[0]}
                  </h3>
                  <h4 className="text-[14px] md:text-[20px] mb-[5px] md:mt-1 md:my-[30px] font-bold">
                    {enp[1].job[0]}
                  </h4>
              <p className="text-base font-normal min-w-[176px] md:text-2xl lg:text-3xl mr-3">
                {enp[1].p[0]}
                <br />
                {enp[1].p[1]}
                <br />
                {enp[1].p[2]}
                <br />
                {enp[1].p[3]}
              </p>
            </div>
          </Link>
        </li>

        <li className="mb-[60px] lg:mx-[5%]">
          <Link
            className="flex items-center justify-between"
            href="/interview/2"
          >
            <div className="ml-[21px] md:ml-[50px] mr-[25px] items-center w-1/2">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-3xl mt-0 md:text-4xl lg:text-5xl ">
                {enp[1].names[1]}
              </h2>
              <h3 className="text-xl md:text-3xl md:mt-1">
                    {enp[1].since[1]}
                  </h3>
                  <h4 className="text-[14px] md:text-[20px] mb-[5px] md:mt-1 md:my-[30px] font-bold">
                    {enp[1].job[1]}
                  </h4>
              <p className="text-base  font-normal min-w-[176px] md:text-2xl ">
                {enp[1].p[4]}
                <br />
                {enp[1].p[5]}
                <br />
                {enp[1].p[6]}
                <br />
                {enp[1].p[7]}
              </p>
            </div>
            <div className="mr-3 max-w-[50%] w-1/2">
              <Image
                src={enp[1].images[1]}
                alt={enp[1].names[1]}
                width="500"
                height="667"
              />
            </div>
          </Link>
        </li>

        <li className="mb-[60px] lg:ml-[5%]">
          <Link className="flex items-center" href="/interview/3">
            <div className="ml-[21px]  mr-[25px] max-w-[50%] w-1/2">
              <Image
                src={enp[1].images[2]}
                alt={enp[1].names[2]}
                width="500"
                height="667"
              />
            </div>
            <div className="items-center lg:ml-[100px] w-1/2">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-3xl mt-0 md:text-4xl lg:text-5xl">
                {enp[1].names[2]}
              </h2>
              <h3 className="text-xl md:text-3xl md:mt-1">
                    {enp[1].since[2]}
                  </h3>
                  <h4 className="text-[14px] md:text-[20px] mb-[5px] md:mt-1 md:my-[30px] font-bold">
                    {enp[1].job[2]}
                  </h4>
              <p className="text-[16px] font-normal min-w-[176px] md:text-2xl mr-3">
                {enp[1].p[8]}
                <br />
                {enp[1].p[9]}
                <br />
                {enp[1].p[10]}
                <br />
                {enp[1].p[11]}
              </p>
            </div>
          </Link>
        </li>

        <li className="mb-[60px] lg:mx-[5%]">
          <Link className="flex items-center justify-between" href="/interview/4">
            <div className="ml-[21px] mr-[25px] items-center w-1/2">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-3xl mt-0 md:text-4xl lg:text-5xl ">
                {enp[1].names[3]}
              </h2>
              <h3 className="text-xl md:text-3xl md:mt-1 ">
                    {enp[1].since[3]}
                  </h3>
                  <h4 className="text-[14px] md:text-[20px] mb-[5px] md:mt-1 md:my-[30px] font-bold">
                    {enp[1].job[3]}
                  </h4>
              <p className="text-base  font-normal min-w-[176px] md:text-2xl ">
                {enp[1].p[12]}
                <br />
                {enp[1].p[13]}
                <br />
                {enp[1].p[14]}
              </p>
            </div>
            <div className="mr-3 max-w-[50%] w-1/2">
              <Image
                src={enp[1].images[3]}
                alt={enp[1].names[3]}
                width="500"
                height="667"
              />
            </div>
          </Link>
        </li>

        <li className="mb-[60px] lg:ml-[5%]">
          <Link className="flex items-center" href="/interview/5">
            <div className="ml-[21px] mr-[25px] max-w-[50%] w-1/2">
              <Image
                src={enp[1].images[4]}
                alt={enp[1].names[4]}
                width="500"
                height="667"
              />
            </div>
            <div className="items-center lg:ml-[100px] w-1/2">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-3xl mt-0 md:text-4xl lg:text-5xl">
                {enp[1].names[4]}
              </h2>
              <h3 className="text-xl md:text-3xl md:mt-1 ">
                    {enp[1].since[4]}
                  </h3>
                  <h4 className="text-[14px] md:text-[20px] mb-[5px] md:mt-1 md:my-[30px] font-bold">
                    {enp[1].job[4]}
                  </h4>
              <p className="text-[16px] font-normal min-w-[176px] md:text-2xl  mr-3">
                {enp[1].p[15]}
                <br />
                {enp[1].p[16]}
                <br />
                {enp[1].p[17]}
                <br />
                {enp[1].p[18]}
              </p>
            </div>
          </Link>
        </li>

        <li className="mb-[60px] lg:mx-[5%]">
          <Link className="flex items-center justify-between" href="/interview/6">
            <div className="ml-[21px] mr-[25px] items-center w-1/2">
              <h2 className="text-[#00A0E8] mb-[1.6rem] text-3xl mt-0 md:text-4xl lg:text-5xl ">
                {enp[1].names[5]}
              </h2>
              <h3 className="text-xl md:text-3xl md:mt-1 ">
                    {enp[1].since[5]}
                  </h3>
                  <h4 className="text-[14px] md:text-[20px] mb-[5px] md:mt-1 md:my-[30px] font-bold">
                    {enp[1].job[5]}
                  </h4>
              <p className="text-base  font-normal min-w-[176px] md:text-2xl ">
                {enp[1].p[19]}
                <br />
                {enp[1].p[20]}
                <br />
                {enp[1].p[21]}
              </p>
            </div>
            <div className="mr-3 max-w-[50%] w-1/2">
              <Image
                src={enp[1].images[5]}
                alt={enp[1].names[5]}
                width="500"
                height="667"
              />
            </div>
          </Link>
        </li>
      </ul>
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
