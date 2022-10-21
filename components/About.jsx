import uniqid from "uniqid";
import React from "react";
import Image from "next/image";
import { profileImg } from "../public/data";

export default function About() {
  return (
    <div className="mt-24 flex flex-cols gap-2">
      <div className="mx-6">
        {profileImg.map((profile) => {
          return (
            <div>
              <Image key={uniqid} src={profile.img} alt={profile.name} width={400} height={600} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg shadow-sm cursor-pointer" />
            </div>
          );
        })}
      </div>

      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eius, ducimus maiores nam omnis quaerat? Ratione delectus laborum esse assumenda!</p>
      </div>
    </div>
  );
}
