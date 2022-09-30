import React from "react";
import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join("");
}

function BlurImage() {
  const [isLoading, setLoading] = useState(true);
  return (
    <div>
      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src="https://bit.ly/placeholder-img"
            alt=""
            layout="fill"
            objectFit="cover"
            className={cn("group-hover:opacity-75 duration-700 ease-in-out", isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100")}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Name</h3>
        <p className="mt-1 text-lg font-medium text-900">Lorem ipsum dolor sit amet.</p>
      </a>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="relative max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 md:max-2-7xl lg:max-w-full lg:px-0">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
        <BlurImage />
      </div>
    </div>
  );
}
