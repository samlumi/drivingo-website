import Head from "next/head";

import HeaderSection from "@/components/landing/sections/HeaderSection";
import AboutSection from "@/components/landing/sections/AboutSection";
import ServiceSection from "@/components/landing/sections/ServiceSection";
import ProductSection from "@/components/landing/sections/ProductSection";
import TeamSection from "@/components/landing/sections/TeamSection";
import CustomerSection from "@/components/landing/sections/CustomerSection";
import BlogSection from "@/components/landing/sections/BlogSection";
import SubscribeSection from "@/components/landing/sections/SubscribeSection";
import VenderSection from "@/components/landing/sections/VenderSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Drivingo | Home</title>
      </Head>

      <main>
        <HeaderSection />
        <AboutSection />
        <ServiceSection />
        <ProductSection />
        <TeamSection />
        <CustomerSection />
        <BlogSection />
        <SubscribeSection />
        <VenderSection />
      </main>
    </>
  );
};
