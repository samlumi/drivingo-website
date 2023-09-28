import Head from "next/head";
import Image from "next/image";

export default function Service() {
  return (
    <>
      <Head>
        <title>Drivingo | Service</title>
      </Head>

      <main>
        <div className="relative">
          <Image alt="banner" src={"/assets/images/banners/service.jpg"} width={1920} height={800} priority />
          <span className="absolute top-0 left-0 w-full h-full banner-effect" />
        </div>
      </main>
    </>
  );
};
