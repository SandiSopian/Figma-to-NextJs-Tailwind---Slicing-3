import uniqid from "uniqid";
import React from "react";
import Image from "next/image";
import { profileImg } from "../public/data";

export default function About() {
  return (
    <div className="mt-24 md:flex md:flex-cols gap-2">
      <div className="md:w-6/12 mx-6">
        {profileImg.map((profile) => {
          return (
            <div className="flex justify-center ">
              <Image
                key={uniqid}
                src={profile.img}
                alt={profile.name}
                width={400}
                height={600}
                objectFit="cover"
                className="w-full sm:w-[50%] md:w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg shadow-sm cursor-pointer "
              />
            </div>
          );
        })}
      </div>

      <div className="md:w-6/12 m-4 ">
        <h1 className="mt-6 text-bold text-2xl mb-2 text-center md:text-left">BIO</h1>
        <p>
          Saya seorang front end engineer web developer yang sedang memperbanyak website portfolio untuk mengasah kemampuan, semua asset yang ada dalam web ini di ambil dari Google hanya untuk keperluan portfolio saja tanpa ada maksud
          komersial
        </p>
      </div>
    </div>
  );
}
