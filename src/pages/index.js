import Image from "next/image";
import { Inter } from "next/font/google";
import Desktop_nav from "./desktop_nav";
import Recent_transaction from "./recent_transaction";
import Desktop_piechart from "./desktop_piechart";
import Group from "./group";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mx-8 mt-2">
      <Desktop_nav/>
      <div className="flex justify-around">
        <Recent_transaction/>
        <Desktop_piechart/>
      </div>
      
      <Group/>
    </div>
  );
}
