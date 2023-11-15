"use client";
import Button from "@/Components/Button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Cake,
  Facebook,
  Gift,
  Instagram,
  Star,
  Truck,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import image1 from "@/public/assets/homeImage1.jpg";
import image2 from "@/public/assets/pexels-jonathan-borba-9816191.jpg";
import Logo from "@/Components/header/Logo";
import SectionTitle from "@/Components/SectionTitle";
import FramerMagnetic from "@/Components/FramerMagnetic";
import image3 from "../../public/assets/frank-zhang-53nLF9woXE0-unsplash.jpg";


const HomeContainer = ({ children }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });
  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 20]);

  return (
    <section className="">
      {/* hero section starts */}
      <div ref={heroRef} className="relative h-[200vh] z-10 overflow-clip">
        <motion.div
          style={{
            scale,
          }}
          className="relative h-screen w-full mask [mask-position:center_center,center_top_12rem] md:[mask-position:center_center,center_top_65%] xl:[mask-position:center_center,center_top_71%]   bg-bgColor  flex flex-col md:flex-row md:items-center md:justify-between  items-center px-8 md:px-12 py-6 gap-x-[260px]"
        >
          <div className=" w-full md:w-1/2  flex flex-col items-center md:items-start md:gap-y-3 md:mt-[4rem] lg:ml-[2rem] xl:ml-[4rem]">
            <div className="flex items-center justify-center gap-x-1">
              <Star fill="#eab308" stroke="none" className="h-4 w-4" />
              <p className="text-textColor text-[0.7rem] font-medium">
                HOME MADE
              </p>
              <Star fill="#eab308" stroke="none" className="h-4 w-4" />
            </div>
            <p className="text-textColor text-3xl sm:text-4xl  md:text-left md:text-5xl xl:text-6xl font-semibold text-center">
              We are <br className="hidden md:block" /> baking for <br /> your
              pleasure
            </p>
            <Button className="" href="/shop">
              <Button.Border1 />
              <Button.Border2 />
              <Button.Title>Shop now</Button.Title>
              <Button.Icon>
                <ArrowRight className="stroke-white" />
              </Button.Icon>
            </Button>
          </div>
          <div className="hidden md:block md:absolute md:top-[55%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <svg
              viewBox="15 -10 228 40"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible h-full"
            >
              <path
                id="curve"
                d="M1 121C5.66667 82.6667 37.7446 -1.42649 129 1.00002C222.871 3.49607 253.887 83.1122 257 121"
                fill="transparent"
              />
              <text>
                <textPath
                  id="text-path"
                  href="#curve"
                  startOffset="25"
                  className="fill-accentColor text-4xl font-bold"
                >
                  Happiness Starts Here
                </textPath>
              </text>
            </svg>

            <div className="h-[380px] w-[252px] rounded-full  " />
          </div>
          <div className=" hidden md:flex flex-col items-end gap-y-2 md:mt-[5rem]  md:w-[50%] lg:mr-[3rem] xl:mr-[6rem]">
            <p className=" text-textColor text-center text-base font-semibold ">
              Enjoy your indulgent afternoon tea <br /> in te comfort of your
              home <br />
              with the delicious cake
            </p>
            <div className="  flex flex-col item-end mt-3 ">
              <SectionTitle title="New Items" />
              <div className="relative flex items-center justify-center mt-2 ">
                <div className="relative md:h-28 lg:h-32 aspect-square  rounded-full left-[5%]">
                  <Image
                    src={image2}
                    alt="home image 2"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full rounded-full "
                    placeholder="blur"
                  />
                </div>
                <div className="relative md:h-28 lg:h-32 aspect-square  rounded-full">
                  <Image
                    src={image3}
                    alt="home image 3"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full rounded-full "
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className=" flex justify-center flex-col gap-x-4 items-center mt-4 ">
                <h5 className="text-textColor text-sm">Follow us:</h5>
                <div className="flex   items-center justify-center  ">
                  <FramerMagnetic>
                    <Facebook
                      strokeWidth="1"
                      className="fill-accentColor stroke-black"
                    />
                  </FramerMagnetic>

                  <FramerMagnetic>
                    <Instagram
                      strokeWidth="1"
                      className="fill-accentColor  stroke-black"
                    />
                  </FramerMagnetic>

                  <FramerMagnetic>
                    <Twitter
                      strokeWidth="1"
                      className="fill-accentColor  stroke-black"
                    />
                  </FramerMagnetic>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* hero section ends */}
      <div className="h-[200vh] mt-[-190vh] relative ">
        <Image
          src={image1}
          alt="hero image 1"
          priority
          placeholder="blur"
          className="w-full h-full  object-cover"
        />

        <div className="h-screen w-full absolute top-[50%] left-0 bg-black opacity-70" />
        <div className="h-screen w-full absolute top-[50%] left-0  text-white flex flex-col items-center px-6 md:px-[5rem] py-8  ">
          <div className="h-[90%] aspect-[1.2/2] bg-black p-2">
            <div className="h-full w-full border border-orange-950 flex flex-col items-center justify-center p-2">
              <Logo />
              <div className="mt-4">
                <SectionTitle title="Exclusive" />
                <h4 className="text-2xl text-center">
                  Our Fall Product Collection is here
                </h4>
              </div>
              <Button className="z-10" href="/shop">
                <Button.Border1 />
                <Button.Border2 />
                <Button.Title>Shop now</Button.Title>
                <Button.Icon>
                  <ArrowRight className="stroke-white" />
                </Button.Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default HomeContainer;
