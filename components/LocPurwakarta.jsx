import uniqid from "uniqid";
import React from "react";
import { purwakarta } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";

// Curug Cipurut
export function CurugC() {
  return (
    <section>
      {purwakarta.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-auto ">
            <div className="font-light border-b border-gray-400 p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugC.img1}>
                  <Image
                    key={uniqid}
                    src={location.curugC.img1}
                    alt={location.curugC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugC.img2}>
                  <Image
                    key={uniqid}
                    src={location.curugC.img2}
                    alt={location.curugC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugC.img3}>
                  <Image
                    key={uniqid}
                    src={location.curugC.img3}
                    alt={location.curugC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugC.img4}>
                  <Image
                    key={uniqid}
                    src={location.curugC.img4}
                    alt={location.curugC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugC.img5}>
                  <Image
                    key={uniqid}
                    src={location.curugC.img5}
                    alt={location.curugC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugC.img6}>
                  <Image
                    key={uniqid}
                    src={location.curugC.img6}
                    alt={location.curugC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugC.img7}>
                  <Image
                    key={uniqid}
                    src={location.curugC.img7}
                    alt={location.curugC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugC.img8}>
                  <Image
                    key={uniqid}
                    src={location.curugC.img8}
                    alt={location.curugC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugC.img9}>
                  <Image
                    key={uniqid}
                    src={location.curugC.img9}
                    alt={location.curugC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugC.img10}>
                  <Image
                    key={uniqid}
                    src={location.curugC.img10}
                    alt={location.curugC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Pasir Langlang
export function PasirLL() {
  return (
    <section>
      {purwakarta.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-auto ">
            <div className="font-light border-b border-gray-400 p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pasirLL.img1}>
                  <Image
                    key={uniqid}
                    src={location.pasirLL.img1}
                    alt={location.pasirLL.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pasirLL.img2}>
                  <Image
                    key={uniqid}
                    src={location.pasirLL.img2}
                    alt={location.pasirLL.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pasirLL.img3}>
                  <Image
                    key={uniqid}
                    src={location.pasirLL.img3}
                    alt={location.pasirLL.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pasirLL.img4}>
                  <Image
                    key={uniqid}
                    src={location.pasirLL.img4}
                    alt={location.pasirLL.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pasirLL.img5}>
                  <Image
                    key={uniqid}
                    src={location.pasirLL.img5}
                    alt={location.pasirLL.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pasirLL.img6}>
                  <Image
                    key={uniqid}
                    src={location.pasirLL.img6}
                    alt={location.pasirLL.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pasirLL.img7}>
                  <Image
                    key={uniqid}
                    src={location.pasirLL.img7}
                    alt={location.pasirLL.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pasirLL.img8}>
                  <Image
                    key={uniqid}
                    src={location.pasirLL.img8}
                    alt={location.pasirLL.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pasirLL.img9}>
                  <Image
                    key={uniqid}
                    src={location.pasirLL.img9}
                    alt={location.pasirLL.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pasirLL.img10}>
                  <Image
                    key={uniqid}
                    src={location.pasirLL.img10}
                    alt={location.pasirLL.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Sumber Air Panas Ciracas
export function SumberAPC() {
  return (
    <section>
      {purwakarta.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-auto ">
            <div className="font-light border-b border-gray-400 p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.sumberAPC.img1}>
                  <Image
                    key={uniqid}
                    src={location.sumberAPC.img1}
                    alt={location.sumberAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.sumberAPC.img2}>
                  <Image
                    key={uniqid}
                    src={location.sumberAPC.img2}
                    alt={location.sumberAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.sumberAPC.img3}>
                  <Image
                    key={uniqid}
                    src={location.sumberAPC.img3}
                    alt={location.sumberAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.sumberAPC.img4}>
                  <Image
                    key={uniqid}
                    src={location.sumberAPC.img4}
                    alt={location.sumberAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.sumberAPC.img5}>
                  <Image
                    key={uniqid}
                    src={location.sumberAPC.img5}
                    alt={location.sumberAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.sumberAPC.img6}>
                  <Image
                    key={uniqid}
                    src={location.sumberAPC.img6}
                    alt={location.sumberAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.sumberAPC.img7}>
                  <Image
                    key={uniqid}
                    src={location.sumberAPC.img7}
                    alt={location.sumberAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.sumberAPC.img8}>
                  <Image
                    key={uniqid}
                    src={location.sumberAPC.img8}
                    alt={location.sumberAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.sumberAPC.img9}>
                  <Image
                    key={uniqid}
                    src={location.sumberAPC.img9}
                    alt={location.sumberAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.sumberAPC.img10}>
                  <Image
                    key={uniqid}
                    src={location.sumberAPC.img10}
                    alt={location.sumberAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Taman Air Mancur Sri Baduga
export function TamanAMSB() {
  return (
    <section>
      {purwakarta.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-auto ">
            <div className="font-light border-b border-gray-400 p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanAMSB.img1}>
                  <Image
                    key={uniqid}
                    src={location.tamanAMSB.img1}
                    alt={location.tamanAMSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanAMSB.img2}>
                  <Image
                    key={uniqid}
                    src={location.tamanAMSB.img2}
                    alt={location.tamanAMSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanAMSB.img3}>
                  <Image
                    key={uniqid}
                    src={location.tamanAMSB.img3}
                    alt={location.tamanAMSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanAMSB.img4}>
                  <Image
                    key={uniqid}
                    src={location.tamanAMSB.img4}
                    alt={location.tamanAMSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanAMSB.img5}>
                  <Image
                    key={uniqid}
                    src={location.tamanAMSB.img5}
                    alt={location.tamanAMSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanAMSB.img6}>
                  <Image
                    key={uniqid}
                    src={location.tamanAMSB.img6}
                    alt={location.tamanAMSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanAMSB.img7}>
                  <Image
                    key={uniqid}
                    src={location.tamanAMSB.img7}
                    alt={location.tamanAMSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanAMSB.img8}>
                  <Image
                    key={uniqid}
                    src={location.tamanAMSB.img8}
                    alt={location.tamanAMSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanAMSB.img9}>
                  <Image
                    key={uniqid}
                    src={location.tamanAMSB.img9}
                    alt={location.tamanAMSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanAMSB.img10}>
                  <Image
                    key={uniqid}
                    src={location.tamanAMSB.img10}
                    alt={location.tamanAMSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Waduk Jatiluhur
export function WadukJ() {
  return (
    <section>
      {purwakarta.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-auto ">
            <div className="font-light border-b border-gray-400 p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wadukJ.img1}>
                  <Image
                    key={uniqid}
                    src={location.wadukJ.img1}
                    alt={location.wadukJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wadukJ.img2}>
                  <Image
                    key={uniqid}
                    src={location.wadukJ.img2}
                    alt={location.wadukJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wadukJ.img3}>
                  <Image
                    key={uniqid}
                    src={location.wadukJ.img3}
                    alt={location.wadukJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wadukJ.img4}>
                  <Image
                    key={uniqid}
                    src={location.wadukJ.img4}
                    alt={location.wadukJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wadukJ.img5}>
                  <Image
                    key={uniqid}
                    src={location.wadukJ.img5}
                    alt={location.wadukJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wadukJ.img6}>
                  <Image
                    key={uniqid}
                    src={location.wadukJ.img6}
                    alt={location.wadukJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wadukJ.img7}>
                  <Image
                    key={uniqid}
                    src={location.wadukJ.img7}
                    alt={location.wadukJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wadukJ.img8}>
                  <Image
                    key={uniqid}
                    src={location.wadukJ.img8}
                    alt={location.wadukJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wadukJ.img9}>
                  <Image
                    key={uniqid}
                    src={location.wadukJ.img9}
                    alt={location.wadukJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wadukJ.img10}>
                  <Image
                    key={uniqid}
                    src={location.wadukJ.img10}
                    alt={location.wadukJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
