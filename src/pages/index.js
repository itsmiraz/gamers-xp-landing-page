import Expertise from "@/components/home/expertise";
import Feature from "@/components/home/feature";
import GameCenter from "@/components/home/gameCenter";
import Hero from "@/components/home/hero";
import Partners from "@/components/home/partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <Expertise />
      <GameCenter />
      <Feature />
      <Partners />
    </main>
  );
}
