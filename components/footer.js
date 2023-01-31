import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Link
        href="/"
        className="bg-[#00A0E8] text-[65px] my-[60px] text-white text-center px-[60px] py-[50px] block mx-[5%] md:mx-[20%] md:my[120px] font-bold"
      >
        Entry
      </Link>
      <div className="flex justify-between mx-[15px] mt-[60px]">
        <div>
          <Link href="/">
            <Image
              src="/image/logo_f.png"
              width={60}
              height={40}
              alt="キャリアデザインセンター"
            />
          </Link>
          <Link href="/" className="text-[14px] text-black my-[22px] pl-[13px]">
            <p>TOP</p>
          </Link>
          <Link
            href="/employee"
            className="text-[14px] text-black my-[22px] pl-[13px]"
          >
            <p>社員紹介/インタビュー</p>
          </Link>
        </div>
        <Link
          href="#"
          className="flex justify-end mr-[15px] mt-auto scroll-smooth"
        >
          <Image src="/image/upbtn.png" width={40} height={40} />
        </Link>
      </div>
      <p className="text-center my-3">© 2022</p>
    </footer>
  );
}
