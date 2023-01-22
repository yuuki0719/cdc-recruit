import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";

export default function Interview(props) {
  const interview = props.interview;
  return (
    <body>
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
      <h1>{interview[0].footer_h1}</h1>
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
