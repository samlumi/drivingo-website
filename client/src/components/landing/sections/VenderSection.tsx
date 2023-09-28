import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import { venderConfig } from "@/config/landing";

const VenderSection = () => {
  const { theme } = useTheme();
  const [backGradient, setBackGradient] = useState("white");

  useEffect(() => {
    setBackGradient(theme === "dark" ? "#271406" : "white");
  }, [theme]);

  return (
    <div className="flex justify-center py-20">
      <div className="container">
        <div className="vender-container">
          <div className="vender-track hidden md:flex">
            {venderConfig.map((url: string, index: number) => (
              <Image
                key={index}
                alt="vender"
                src={url}
                width={240}
                height={120}
                className="mx-12"
              />
            ))}
          </div>

          <div className="vender-track-mobile flex md:hidden">
            {venderConfig.map((url: string, index: number) => (
              <Image key={index} alt="vender" src={url} width={120} height={60} className="mx-2" />
            ))}
          </div>

          <span
            className="absolute top-0 left-0 w-1/3 h-full"
            style={{ background: `linear-gradient(to right, ${backGradient}, transparent)` }}
          />

          <span
            className="absolute top-0 right-0 w-1/3 h-full"
            style={{ background: `linear-gradient(to left, ${backGradient}, transparent)` }}
          />
        </div>
      </div>

      <style jsx>{`
        .vender-container {
          position: relative;
          width: 100%;
          padding: 24px 0;
          overflow: hidden;
        }

        .vender-track {
          width: 4704px;
          animation: vender_slide 40s linear infinite;
        }

        .vender-track-mobile {
          width: 1904px;
          animation: vender_mobile_slide 30s linear infinite;
        }

        @keyframes vender_slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-2352px);
          }
        }

        @keyframes vender_mobile_slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-952px);
          }
        }
      `}</style>
    </div>
  );
};

export default VenderSection;
