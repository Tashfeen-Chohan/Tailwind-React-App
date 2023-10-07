import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div>
      <div id="hero" className="flex flex-col w-full h-screen text-center justify-center text-white mt-[-80px]">
        <p className="text-green-400 text-md md:text-2xl">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-2xl md:text-5xl p-2">Grow with data.</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Fast, flexible financing for Mongodb",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Fast, flexible financing for Express Js",
            1000,
            "Fast, flexible financing for React Js",
            1000,
          ]}
          wrapper="span"
          speed={30}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
        <button className="bg-green-400 text-black rounded-md w-[200px] px-3 py-2 mx-auto my-5">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
