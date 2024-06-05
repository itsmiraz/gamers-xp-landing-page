import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`mx-auto relative transition-all duration-300 ease-in-out overflow-hidden
        `}
    >
      <Component {...pageProps} />
    </div>
  );
}
