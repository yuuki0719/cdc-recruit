import fsPromises from 'fs/promises'
import path from 'path'
import Image from 'next/image'
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Interview(props) {

const interview = props.interview;
return (
<body>
    <Header />
    <Image src={interview[1].mein} width={1170} height={780} alt={interview[1].alt} />
    <div className='px-12 space-y-10 my-[60px] '>
        <p className=''>{interview[1].p_1}</p>
    </div>
    <Image src={interview[1].images[0]} width={1170} height={780} alt={interview[1].alt} />
    <h2>{interview[1].h2[0]}</h2>
    <h3>{interview[1].h3[0]}</h3>
    <div className='px-12 space-y-10 mb-[60px] '>
        <p>{interview[1].p_2[0]}</p>
        <p>{interview[1].p_2[1]}</p>
        <p>{interview[1].p_2[2]}</p>
    </div>
    <div className='px-12 space-y-10 my-[60px] '>
        <h2>{interview[1].h2[1]}</h2>
        <p className='mt-[30px]'>{interview[1].p_3[0]}</p>
        <p>{interview[1].p_3[1]}</p>
        <p>{interview[1].p_3[2]}</p>
    </div>
    <Image src={interview[1].images[1]} width={1170} height={780} alt={interview[0].alt} />
    <div className='px-12 space-y-10 my-[60px] '>
        <h2>{interview[1].h2[2]}</h2>
        <p>{interview[1].p_4[0]}</p>
        <p>{interview[1].p_4[1]}</p>
        <p>{interview[1].p_4[2]}</p>
        <p>{interview[1].p_4[3]}</p>
    </div>
    <div className='px-12 space-y-10 my-[60px] '>
        <h2>{interview[1].h2[3]}</h2>
        <p>{interview[1].p_5[0]}</p>
        <p>{interview[1].p_5[1]}</p>
    </div>
    <h1>{interview[1].footer_h1}</h1>
    <Footer />
</body>
        )
}



export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data.json');

  const data = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(data);

  return {
    props: objectData
  }
}