import React from "react"
import LogoImage from "@logos/ChatLink.png";
import Link from "../../node_modules/next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "../../node_modules/next/image";

function Logo() {
  return <Link href='/' prefetch={false} className="overflow-hidden">
    <div className="flex items-center w-44 h-48">
      <AspectRatio
      ratio ={16 / 9}
      className="flex items-center justify-center"
      >
        <Image
          priority
          src={LogoImage}
          alt="logo"
          className="rounded-md dark:filter dark:invert"
        />
      </AspectRatio>
    </div>
  </Link>;

}

export default Logo
