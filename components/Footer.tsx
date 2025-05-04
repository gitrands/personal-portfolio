"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useEffect, useState } from "react";

const Footer = () => {
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setWebGLAvailable(!!gl);
    } catch (e) {
      setWebGLAvailable(false);
    }
  }, []);

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid - with WebGL fallback */}
      {webGLAvailable ? (
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
          />
        </div>
      ) : (
        <div className="w-full absolute left-0 -bottom-72 min-h-96 bg-gray-800 opacity-50"></div>
      )}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:jeevara2002@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          2025 Jeeva . R . A
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={
                info.id === 1
                  ? "https://github.com/gitrands"
                  : info.id === 2
                  ? "https://www.linkedin.com/in/jeeva-r-809ba01ba"
                  : "https://x.com/Jeeva_xt"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-110 transition-all duration-300"
            >
              <img
                src={info.img}
                alt={`${
                  info.id === 1
                    ? "GitHub"
                    : info.id === 2
                    ? "LinkedIn"
                    : "Twitter"
                } icon`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
