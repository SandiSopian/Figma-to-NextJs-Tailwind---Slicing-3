import uniqid from "uniqid";
import React from "react";
import { sukabumi } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";

// Curug Cimarinjung
export function CurugCim() {
  return (
    <section>
      {sukabumi.map((location) => {
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
                <LightgalleryItem key="uniqid" src={location.curugCim.img1}>
                  <Image
                    key={uniqid}
                    src={location.curugCim.img1}
                    alt={location.curugCim.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugCim.img2}>
                  <Image
                    key={uniqid}
                    src={location.curugCim.img2}
                    alt={location.curugCim.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugCim.img3}>
                  <Image
                    key={uniqid}
                    src={location.curugCim.img3}
                    alt={location.curugCim.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugCim.img4}>
                  <Image
                    key={uniqid}
                    src={location.curugCim.img4}
                    alt={location.curugCim.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugCim.img5}>
                  <Image
                    key={uniqid}
                    src={location.curugCim.img5}
                    alt={location.curugCim.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugCim.img6}>
                  <Image
                    key={uniqid}
                    src={location.curugCim.img6}
                    alt={location.curugCim.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugCim.img7}>
                  <Image
                    key={uniqid}
                    src={location.curugCim.img7}
                    alt={location.curugCim.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugCim.img8}>
                  <Image
                    key={uniqid}
                    src={location.curugCim.img8}
                    alt={location.curugCim.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugCim.img9}>
                  <Image
                    key={uniqid}
                    src={location.curugCim.img9}
                    alt={location.curugCim.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugCim.img10}>
                  <Image
                    key={uniqid}
                    src={location.curugCim.img10}
                    alt={location.curugCim.name}
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

// Danau Bacan
export function DanauBac() {
  return (
    <section>
      {sukabumi.map((location) => {
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
                <LightgalleryItem key="uniqid" src={location.danauBac.img1}>
                  <Image
                    key={uniqid}
                    src={location.danauBac.img1}
                    alt={location.danauBac.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.danauBac.img2}>
                  <Image
                    key={uniqid}
                    src={location.danauBac.img2}
                    alt={location.danauBac.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.danauBac.img3}>
                  <Image
                    key={uniqid}
                    src={location.danauBac.img3}
                    alt={location.danauBac.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.danauBac.img4}>
                  <Image
                    key={uniqid}
                    src={location.danauBac.img4}
                    alt={location.danauBac.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.danauBac.img5}>
                  <Image
                    key={uniqid}
                    src={location.danauBac.img5}
                    alt={location.danauBac.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.danauBac.img6}>
                  <Image
                    key={uniqid}
                    src={location.danauBac.img6}
                    alt={location.danauBac.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.danauBac.img7}>
                  <Image
                    key={uniqid}
                    src={location.danauBac.img7}
                    alt={location.danauBac.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.danauBac.img8}>
                  <Image
                    key={uniqid}
                    src={location.danauBac.img8}
                    alt={location.danauBac.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.danauBac.img9}>
                  <Image
                    key={uniqid}
                    src={location.danauBac.img9}
                    alt={location.danauBac.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.danauBac.img10}>
                  <Image
                    key={uniqid}
                    src={location.danauBac.img10}
                    alt={location.danauBac.name}
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

// Pantai Pelabuhan Ratu
export function PantaiPR() {
  return (
    <section>
      {sukabumi.map((location) => {
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
                <LightgalleryItem key="uniqid" src={location.pantaiPR.img1}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPR.img1}
                    alt={location.pantaiPR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPR.img2}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPR.img2}
                    alt={location.pantaiPR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPR.img3}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPR.img3}
                    alt={location.pantaiPR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPR.img4}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPR.img4}
                    alt={location.pantaiPR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPR.img5}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPR.img5}
                    alt={location.pantaiPR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPR.img6}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPR.img6}
                    alt={location.pantaiPR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPR.img7}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPR.img7}
                    alt={location.pantaiPR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPR.img8}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPR.img8}
                    alt={location.pantaiPR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPR.img9}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPR.img9}
                    alt={location.pantaiPR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPR.img10}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPR.img10}
                    alt={location.pantaiPR.name}
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

// Pemandian Air Panas Cisolok
export function PemandianAPCis() {
  return (
    <section>
      {sukabumi.map((location) => {
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
                <LightgalleryItem key="uniqid" src={location.pemandianAPCis.img1}>
                  <Image
                    key={uniqid}
                    src={location.pemandianAPCis.img1}
                    alt={location.pemandianAPCis.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPCis.img2}>
                  <Image
                    key={uniqid}
                    src={location.pemandianAPCis.img2}
                    alt={location.pemandianAPCis.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPCis.img3}>
                  <Image
                    key={uniqid}
                    src={location.pemandianAPCis.img3}
                    alt={location.pemandianAPCis.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPCis.img4}>
                  <Image
                    key={uniqid}
                    src={location.pemandianAPCis.img4}
                    alt={location.pemandianAPCis.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPCis.img5}>
                  <Image
                    key={uniqid}
                    src={location.pemandianAPCis.img5}
                    alt={location.pemandianAPCis.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPCis.img6}>
                  <Image
                    key={uniqid}
                    src={location.pemandianAPCis.img6}
                    alt={location.pemandianAPCis.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPCis.img7}>
                  <Image
                    key={uniqid}
                    src={location.pemandianAPCis.img7}
                    alt={location.pemandianAPCis.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPCis.img8}>
                  <Image
                    key={uniqid}
                    src={location.pemandianAPCis.img8}
                    alt={location.pemandianAPCis.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPCis.img9}>
                  <Image
                    key={uniqid}
                    src={location.pemandianAPCis.img9}
                    alt={location.pemandianAPCis.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPCis.img10}>
                  <Image
                    key={uniqid}
                    src={location.pemandianAPCis.img10}
                    alt={location.pemandianAPCis.name}
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

// Tebing Panenjoan
export function TebingPan() {
  return (
    <section>
      {sukabumi.map((location) => {
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
                <LightgalleryItem key="uniqid" src={location.tebingPan.img1}>
                  <Image
                    key={uniqid}
                    src={location.tebingPan.img1}
                    alt={location.tebingPan.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tebingPan.img2}>
                  <Image
                    key={uniqid}
                    src={location.tebingPan.img2}
                    alt={location.tebingPan.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tebingPan.img3}>
                  <Image
                    key={uniqid}
                    src={location.tebingPan.img3}
                    alt={location.tebingPan.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tebingPan.img4}>
                  <Image
                    key={uniqid}
                    src={location.tebingPan.img4}
                    alt={location.tebingPan.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tebingPan.img5}>
                  <Image
                    key={uniqid}
                    src={location.tebingPan.img5}
                    alt={location.tebingPan.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tebingPan.img6}>
                  <Image
                    key={uniqid}
                    src={location.tebingPan.img6}
                    alt={location.tebingPan.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tebingPan.img7}>
                  <Image
                    key={uniqid}
                    src={location.tebingPan.img7}
                    alt={location.tebingPan.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tebingPan.img8}>
                  <Image
                    key={uniqid}
                    src={location.tebingPan.img8}
                    alt={location.tebingPan.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tebingPan.img9}>
                  <Image
                    key={uniqid}
                    src={location.tebingPan.img9}
                    alt={location.tebingPan.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tebingPan.img10}>
                  <Image
                    key={uniqid}
                    src={location.tebingPan.img10}
                    alt={location.tebingPan.name}
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
