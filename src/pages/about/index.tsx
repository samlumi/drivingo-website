import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Button from "@/components/shared/Button";
import { teamConfig } from "@/config/landing";
import { TeamConfigType } from "@/types/config";
import MemeberDescription from "@/components/about/MemberDescription";
import { fadeSmallUpVariant, fadeVariant, shrinkVariant } from "@/utils/animations";

export default function About() {
  return (
    <>
      <Head>
        <title>Drivingo | About</title>
      </Head>

      <main>
        <div className="relative">
          <Image alt="banner" src={"/assets/images/banners/about.jpg"} width={1920} height={800} priority />
          <motion.span
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeVariant()}
            className="absolute top-0 left-0 w-full h-full banner-effect"
          />

          <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full text-white">
            <motion.h1
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={shrinkVariant(0.75)}
              className="hidden md:block text-5xl"
            >
              Empower Accessibility. Elevate Experience
            </motion.h1>

            <motion.p
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={shrinkVariant(0.75, 0.5)}
              className="hidden md:block font-normal text-lg text-center w-1/2 dx:w-1/3 pt-10"
            >
              Drivingo is the world&apos;s first and only speech-independent gesture recognition technology for restaurant and drive thru services.
            </motion.p>
          </div>
        </div>

        <div className="flex justify-center bg-[#353535] dark:bg-secondary font-normal text-white text-lg md:text-2xl pb-20 md:pb-48">
          <div className="container flex justify-center">
            <Link href={"#story"} className="px-8 md:px-20 py-12">Our Story</Link>
            <Link href={"#team"} className="px-8 md:px-20 py-12">Meet Our Team</Link>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="container px-4 md:px-20">
            <div id="story" className="w-full shadow-lg px-8 py-16 -mt-20 md:-mt-48 rounded-md bg-white dark:bg-dark text-center">
              <h1 className="text-primary text-2xl text-center mb-8">OUR STORY</h1>

              <p className="font-normal text-lg text-center my-6 [&>span]:text-primary">
                At <span>Drivingo</span>, our journey is rooted in a simple yet powerful idea: <span>accessibility</span> for all. It&apos;s a story of determination, innovation, and a commitment to <span>breaking down barriers</span> in the drive-thru experience.
              </p>

              <p className="font-normal text-lg text-center my-6 [&>span]:text-primary">
                This is our story, and it&apos;s a story of empowerment, inclusivity, and a commitment to a more accessible future. Welcome to Drivingo - <span>where accessibility meets innovation</span>.
              </p>

              <Button className="w-48 p-3 mt-12">Read more</Button>
            </div>

            <div className="flex justify-center w-full py-24">
              <motion.iframe
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeSmallUpVariant(0.5, 0.5)}
                title="Introduction"
                src="https://www.youtube.com/embed/M09uYrC0Ob8"
                className="w-[800px] h-[250px] md:h-[450px] border-8 border-primary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div id="team" className="flex flex-col w-full md:px-8 md:py-12">
              <motion.h1
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                variants={shrinkVariant()}
                className="text-primary text-2xl text-center mb-8"
              >MEET OUR TEAM</motion.h1>

              <div className="flex flex-wrap">
                {
                  teamConfig.map((member: TeamConfigType) => (
                    <MemeberDescription key={member.id} {...member} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
