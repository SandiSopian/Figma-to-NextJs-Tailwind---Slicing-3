import React from "react";
import Image from "next/image";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export async function getStaticProps() {
  const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.SUPABASE_SERVICE_ROLE_KEY || "");
  const { data } = await supabaseAdmin.from("images").select("*").order("id");
  return {
    props: {
      images: data,
    },
  };
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join("");
}

type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  location: string;
};

export default function Gallery({ images }: { images: Image[] }) {
  return (
    <div className="relative max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 md:max-2-7xl lg:max-w-full lg:px-0">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 2xl:grid-cols-5 2xl:gap-x-6">
        {images?.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div>
      <a href={image.href} className="group">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={image.imageSrc}
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
