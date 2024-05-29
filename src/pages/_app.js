import Header from "@/components/shared/header";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [width, setwidth] = useState(0);
  useEffect(() => {
    if (window) {
      setwidth(window?.innerWidth);
    }
  }, []);
  console.log(width);
  return (
    <div
      className={`mx-auto max-w-[2200px] relative transition-all duration-300 ease-in-out ${
        width < 1920 ? "overflow-visible" : " overflow-hidden"
      }   `}
    >
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
