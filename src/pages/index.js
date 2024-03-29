import Image from "next/image";
import { Inter } from "next/font/google";
import Desktop_nav from "./desktop/desktop_nav";
import Recent_transaction from "./recent_transaction";
import Desktop_piechart from "./desktop/desktop_piechart";
import Group from "./group";
import { isMobile } from "react-device-detect";
import Mobile_nav from "./mobile/mobile_nav";
import Mobile_total_spending from "./mobile_total_spending";
import Mobile_piechart from "./mobile/mobile_piechart";
import Mobile_group from "./mobile/mobile_group";
import Mobile_category from "./mobile/mobile_category";
import SplashScreen from "./splashScreen";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  if (isMobile) {
    return (
      <>
        <SplashScreen/>
      </>
    );
  }
  return (
    <div className="mx-8 mt-2">
      <Desktop_nav />
      <div className="flex justify-around">
        <Recent_transaction />
        <Desktop_piechart />
      </div>
      <Group />
    </div>
  );
}
