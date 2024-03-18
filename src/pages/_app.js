import "@/styles/globals.css";
import { Fredoka } from "next/font/google";
import Mobile_nav from "./mobile/mobile_nav";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

// If loading a variable font, you don't need to specify the font weight
const fredoka = Fredoka({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <main className={fredoka.className}>
      {isMobile ? (
        <div className={`${router.pathname === "/" || router.pathname === "/mobile/auth/login" || router.pathname === "/mobile/auth/register" || router.pathname === "/mobile/mobile_add_expense" ?  "hidden" : null}`}>
          <Mobile_nav />
        </div>
      ) : null}

      <Component {...pageProps} />
    </main>
  );
}
