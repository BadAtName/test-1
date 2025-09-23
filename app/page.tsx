import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="/layout"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
        
    //   </main>
    // </div>
    <main>
      <section className="secigger">
          <Image
          className="brightness-53 z-1 flex-nowrap"
           src="/SaminHome.jpg"
           alt="nigger"
           fill={true}
          />
          <div className="judulContain"> 
            <h1 className="judulHome text-7xl">SEDULURGEN</h1>
            <h1 className="judulHome text-1xl kurunigger">(Sedulur Sikep For Z Generation)</h1>
            <h1 className="judulHome text-3xl mt-5">Website Edukasi Berbasis Nilai-Nilai Sedulur Sikep</h1>
            <h1 className="judulHome text-3xl kurunigger">sebagai Media Penguatan Karakter Generasi Z</h1>
            <a className="clickigger mt-30" href="/sejarah">➤ MULAI BELAJAR</a>
          </div>
      </section>
    </main>
  );
}
