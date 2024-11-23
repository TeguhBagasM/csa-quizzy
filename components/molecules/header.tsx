"use client";
import SwitchTheme from "../atoms/switch-theme";
import { useQuestionStore } from "@/store/quiz-store";
import { backgroundColors, cn } from "@/lib/utils";
import Image from "next/image";
import { MotionHeader } from "../animated/motion-header";

const Header = () => {
  const selectedQuizz = useQuestionStore((state) => state.selectedQuizz);

  return (
    <MotionHeader
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 w-full px-4 py-2 md:py-4"
    >
      <div className="flex flex-col xs:flex-row items-center justify-between w-full gap-4 md:gap-6">
        {/* Logo Section */}
        <div className="w-32 md:w-40 lg:w-48">
          <Image
            src="/assets/images/logo-csa.png"
            alt="CSA Logo"
            width={160}
            height={160}
            className="w-full h-auto"
          />
        </div>

        {/* Quiz Title and Theme Switch Section */}
        <div className="flex items-center justify-between w-full xs:w-auto gap-4">
          {selectedQuizz && (
            <div className="flex items-center gap-2 md:gap-4">
              <div
                className="p-1.5 md:p-2 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: backgroundColors[selectedQuizz.title] }}
              >
                <Image
                  src={selectedQuizz.icon}
                  alt="Icon"
                  width={30}
                  height={30}
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <p className="text-dark-blue dark:text-white font-bold text-sm md:text-lg lg:text-xl xl:text-2xl">
                {selectedQuizz.title}
              </p>
            </div>
          )}

          <div className="ml-auto">
            <SwitchTheme />
          </div>
        </div>
      </div>
    </MotionHeader>
  );
};

export default Header;
