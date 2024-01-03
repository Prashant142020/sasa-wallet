import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

function LogoGroupSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[4.81rem]">
      <Separator
        color="#ffffff33"
        className="h-2 border-t border-t-[#ffffff33]"
      />
      <div className=" py-[3.12rem] md:py-[4.2rem]   ">
        <Image
         width={1704}
         height={212}
          src="/images/logo-group.png"
          alt="logo group"
          className="hidden md:block"
        />
        <Image
         width={309.5}
         height={33}
          src="/images/logo-group-mobile.png"
          alt="logo group mobile"
          className="   block md:hidden"
        />
      </div>

      <Separator
        color="#ffffff33"
        className="h-2 border-b border-b-[#ffffff33]"
      />
    </div>
  );
}

export default LogoGroupSection;
