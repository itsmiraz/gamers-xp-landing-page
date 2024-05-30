import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`mx-auto relative transition-all duration-300 ease-in-out overflow-hidden
        `}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
