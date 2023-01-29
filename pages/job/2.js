import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Interview(props) {
  const job = props.job;
  const TOP = props.TOP;
  return (
    <body>
      <div>
        <Header />
      </div>
      <div>
        <Image
          className="w-[100%]"
          src={job[1].mein}
          width={1560}
          height={808}
          alt={TOP[1].alt}
        />
        <div>
          <h1 className="text-[30px]    text-center mt-[60px] mb-[30px] md:mb-[60px] font-bold">
            {job[1].h1[0]}
          </h1>
          <p className="text-base text-center mx-[10%]">{job[1].p[0]}</p>
        </div>
        <div>
          <h1 className="text-[30px] text-center mt-[60px] mb-[30px] md:mb-[60px] font-bold">
            {job[1].h1[1]}
          </h1>
          <p className="text-base text-center mx-[10%]">{job[1].p[1]}</p>
        </div>
        <div>
          <h1 className="text-[30px] text-center mt-[60px] mb-[30px] md:mb-[60px] font-bold mx-5">
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
          <Link href="/job/1" class="w-full md:w-1/3">
              <Image
                src={TOP[2].job1}
                width={1170}
                height={606}
                alt={TOP[2].alt[1]}
              />
            </Link>
            <Link href="/job/3" class="w-full md:w-1/3">
              <Image
                src={TOP[2].job3}
                width={1170}
                height={606}
                alt={TOP[2].alt[2]}
              />
            </Link>
            <Link href="/job/4" class="w-full md:w-1/3">
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
<Footer />  
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
