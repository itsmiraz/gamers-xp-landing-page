import Expertise from "@/components/home/expertise";
import Feature from "@/components/home/feature";
import GameCenter from "@/components/home/gameCenter";
import Hero from "@/components/home/hero";
import Partners from "@/components/home/partners";
import Head from "next/head";
import Blob1 from "../../public/assets/icons/blob-1";
import Blob2 from "../../public/assets/icons/blob-2";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import ellipsis from "../../public/assets/images/ellipsis.png";
import Newellipsis from "../../public/assets/images/new ellipsis.png";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 1,
  };
  const rotateBlob1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotateBlob2 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const rotateEllipsis = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const springRotateEllipsis = useSpring(rotateEllipsis, springConfig);
  return (
    <main>
      <Head>
        <title>
          The Gamers Reward Platform - Play PC Games with No Downloads and Earn
          Real Rewards
        </title>
        <meta
          name="description"
          content="Explore The Gamers Reward Platform to play your favorite PC games without downloads and earn real rewards. Connect with blockchain technology and continue enjoying the games you love."
        />
        <meta
          name="keywords"
          content="Gamers Reward Platform, PC Games, No Downloads, Earn Real Rewards, Blockchain Gaming, Play and Earn, Gaming Rewards, Crypto Gaming"
        />
      </Head>{" "}
      <Header />
      <Hero />
      <Expertise />
      <GameCenter />
      <Feature />
      <Partners />
      <Footer />
      <motion.div
        style={{ rotate: springRotateEllipsis }}
        className="fixed md:w-[2300px] w-[1200px] -top-[300px] md:-top-[900px] z-[-100] -right-[500px]  md:-right-[550px] opacity-50 mx-auto"
      >
        <Image src={Newellipsis} alt="ellipsis" />
      </motion.div>
      <motion.div
        className="fixed  opacity-60 -z-10 top-20 -right-[550px]"
        style={{ rotate: rotateBlob1 }}
        transition={{ ease: "easeInOut", duration: 4 }}
      >
        <Blob1 />
      </motion.div>
      <motion.div
        className="fixed opacity-60  -z-10 top-96 -right-[550px]"
        style={{ rotate: rotateBlob2 }}
        transition={{ ease: "easeInOut", duration: 4 }}
      >
        <Blob2 />
      </motion.div>
    </main>
  );
}

// // Adjust these values for a slower response
// const springConfig = {
//   stiffness: 40,
//   damping: 100,
//   mass: 1,
// };

// const springYProgress = useSpring(scrollYProgress, springConfig);

// const [windowDimensions, setWindowDimensions] = useState({
//   width: 0,
//   height: 0,
// });

// useEffect(() => {
//   if (typeof window !== "undefined") {
//     setWindowDimensions({
//       width: window?.innerWidth,
//       height: window?.innerHeight,
//     });
//   }
// }, []);

// const x = useTransform(
//   springYProgress,
//   [0, 0.25, 0.5, 1, 0],
//   [400, -1200, 400, -1200, 400]
// );
// const y = useTransform(
//   springYProgress,
//   [0, 0.25, 0.5, 1, 0],
//   [-400, 0, 0, -100, 400]
// );

// // top right - (x = 400 , y = -400),
// // left bottom - (x =  -1200, y = 0),
// // top right - ( x= 400 , y = 0)
// // left  middle  - ( x= -1200 , y = -100)
// // bottom  rifht  - ( x= 400 , y = 400)

// console.log(x, y);
