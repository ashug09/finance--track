import React from "react";
import splash_image from "../images/splash-image.png";
import Image from "next/image";
import { useRouter } from "next/router";
const SplashScreen = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500">
      <Image src={splash_image} alt="Splash Image" />
      <div className="text-white text-4xl font-bold mb-4">Splitway</div>
      <div className="text-white text-lg mb-2">
        Your Personal Finance Tracker
      </div>
      <div>
        <button onClick={()=>router.push("/mobile/auth/login")} className="bg-white text-blue-500 my-2 mx-2 px-8 py-2 rounded-xl">
          Log In
        </button>
        <button
          onClick={() => router.push("/mobile/auth/register")}
          className="bg-white text-blue-500 my-2 mx-2 px-8 py-2 rounded-xl"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
