import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <h1 className="mt-20 md:mt-0 text-4xl font-bold md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Discover the secrets to creating captivating music with our expert guidance. Experience the power of music
          theory and master your skills with our advanced composition courses. Join us on a journey to unlock your
          creative potential.
        </p>
        <div className="mt-4">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link href={"/courses"} className="flex items-center justify-center w-full h-full">
              Explore Courses
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
