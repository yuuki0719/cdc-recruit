import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import Image from "next/image";
import Link from "next/link";

export default function Slider(){
  return (
    <>
      <Splide
        options={{
          autoplay: true, // 自動再生を有効
          interval: 3000,
          rewind : true,
        }}
      >
        <SplideSlide>
        <Link href="/interview/1">
          <Image className="slide-img block  object-cover w-[100%] " src="/image/interview_mv_f.jpg" alt="藤井 歩" width="1560" height="1040"/>
        </Link>
        </SplideSlide>
        <SplideSlide>
        <Link href="/interview/2">
        <Image className="slide-img block  object-cover w-[100%] " src="/image/interview_mv_t.jpg" alt="高野 祐実" width="1560" height="1040"/>
        </Link>
        </SplideSlide>
        <SplideSlide>
        <Link href="/interview/3">
        <Image className="slide-img block  object-cover w-[100%] " src="/image/interview_mv_y.jpg" alt="山本 航大" width="1560" height="1040"/>
        </Link>
        </SplideSlide>
        <SplideSlide>
        <Link href="/interview/4">
        <Image className="slide-img block object-cover w-[100%] " src="/image/interview_mv_o.jpg" alt="小田 真大" width="1560" height="1040"/>
        </Link>
        </SplideSlide>
        <SplideSlide>
        <Link href="/interview/5">
        <Image className="slide-img block object-cover w-[100%] " src="/image/interview_mv_m.jpg" alt="三井倉 理絵" width="1560" height="1040"/>
        </Link>
        </SplideSlide>
        <SplideSlide>
        <Link href="/interview/6">
        <Image className="slide-img block object-cover w-[100%] " src="/image/interview_mv_h.jpg" alt="平山 陽" width="1560" height="1040"/>
        </Link>
        </SplideSlide>
      </Splide>
    </>
  );
};
