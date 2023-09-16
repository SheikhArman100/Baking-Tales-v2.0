import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default async function LocalImage({src,className,alt,priority}) {
  const buffer = await fs.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer);
  

  return (
    <Image
      src={src}
      className={twMerge(" w-full h-full",className)}
      fill
      alt={alt}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      placeholder="blur"
      blurDataURL={base64}
      priority={!!priority}

    />
  );
}
