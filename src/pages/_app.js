import "@/styles/globals.css";
import { Fredoka } from "next/font/google";
import Mobile_nav from "./mobile/mobile_nav";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import SplashScreen from "./splashScreen";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoginForm from "./mobile/auth/login";
import Register from "./mobile/auth/register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
// If loading a variable font, you don't need to specify the font weight
const fredoka = Fredoka({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const accessTokenValue = Cookies.get("accessToken");
  //   if (accessTokenValue) {
  //     axios
  //       .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/verifytoken`, {
  //         token: accessTokenValue,
  //       })
  //       .then((response) => {
  //         // response.data === true
  //         //   ? setIsAuthenticated(true)
  //         //   : console.log(response.data);
  //         setIsAuthenticated(response.data);
  //         // router.reload()
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, []);

  // return isAuthenticated ?(
  //   <main className={fredoka.className}>
  //     {isMobile ? (
  //       <div
  //         className={`${
  //           router.pathname === "/" ||
  //           router.pathname === "/mobile/auth/login" ||
  //           router.pathname === "/mobile/auth/register" ||
  //           router.pathname === "/mobile/mobile_add_expense"
  //             ? "hidden"
  //             : null
  //         }`}
  //       >
  //         <Mobile_nav />
  //       </div>
  //     ) : null}

  //     <Component {...pageProps} />
  //   </main>
  // ) : (
  //   <main className={fredoka.className}>
  //     {router.pathname === "/mobile/auth/login" ? <LoginForm /> : null}
  //     {router.pathname === "/mobile/auth/register" ? <Register /> : null}
  //     <SplashScreen />
  //   </main>
  // );

  return (
    <main className={fredoka.className}>
      {/* Same as */}
      {isMobile ? (
        <div
          className={`${
            router.pathname === "/" ||
            router.pathname === "/mobile/auth/login" ||
            router.pathname === "/mobile/auth/register" ||
            router.pathname === "/mobile/mobile_add_expense"
              ? "hidden"
              : null
          }`}
        >
          <Mobile_nav />
        </div>
      ) : null}

      <Component {...pageProps} />
      <Toaster/>
    </main>
  );
}
