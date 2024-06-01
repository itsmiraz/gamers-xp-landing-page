import Expertise from "@/components/home/expertise";
import Feature from "@/components/home/feature";
import GameCenter from "@/components/home/gameCenter";
import Hero from "@/components/home/hero";
import Partners from "@/components/home/partners";
import Head from "next/head";
import Blob1 from "../../public/assets/icons/blob-1";
import Blob2 from "../../public/assets/icons/blob-2";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Home() {
  const { scrollYProgress } = useScroll();
  // const [startFadeIn, setStartFadeIn] = useState(false);

  const rotateBlob1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotateBlob2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <main className="relative ">
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
      </Head>
      <Hero />
      <Expertise />
      <GameCenter />
      <Feature />
      <Partners />

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
