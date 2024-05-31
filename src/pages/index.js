import Expertise from "@/components/home/expertise";
import Feature from "@/components/home/feature";
import GameCenter from "@/components/home/gameCenter";
import Hero from "@/components/home/hero";
import Partners from "@/components/home/partners";
import Head from "next/head";

export default function Home() {
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
      </Head>
      <Hero />
      <Expertise />
      <GameCenter />
      <Feature />
      <Partners />
    </main>
  );
}
