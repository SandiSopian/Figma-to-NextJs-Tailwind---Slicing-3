import uniqid from "uniqid";
import React from "react";
import { bogor } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";

// Curug Leuwi Hejo
export function CurugLH() {
  return (
    <section>
      {bogor.map((location) => {
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
                <LightgalleryItem src={location.curugLH.img1}>
                  <Image
                    key={uniqid}
                    src={location.curugLH.img1}
                    alt={location.curugLH.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugLH.img2}>
                  <Image
                    key={uniqid}
                    src={location.curugLH.img2}
                    alt={location.curugLH.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugLH.img3}>
                  <Image
                    key={uniqid}
                    src={location.curugLH.img3}
                    alt={location.curugLH.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugLH.img4}>
                  <Image
                    key={uniqid}
                    src={location.curugLH.img4}
                    alt={location.curugLH.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugLH.img5}>
                  <Image
                    key={uniqid}
                    src={location.curugLH.img5}
                    alt={location.curugLH.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugLH.img6}>
                  <Image
                    key={uniqid}
                    src={location.curugLH.img6}
                    alt={location.curugLH.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugLH.img7}>
                  <Image
                    key={uniqid}
                    src={location.curugLH.img7}
                    alt={location.curugLH.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugLH.img8}>
                  <Image
                    key={uniqid}
                    src={location.curugLH.img8}
                    alt={location.curugLH.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugLH.img9}>
                  <Image
                    key={uniqid}
                    src={location.curugLH.img9}
                    alt={location.curugLH.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugLH.img10}>
                  <Image
                    key={uniqid}
                    src={location.curugLH.img10}
                    alt={location.curugLH.name}
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

// Gunung Pancar
export function GunungPncr() {
  return (
    <section>
      {bogor.map((location) => {
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
                <LightgalleryItem src={location.gunungPcnr.img1}>
                  <Image
                    key={uniqid}
                    src={location.gunungPcnr.img1}
                    alt={location.gunungPcnr.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gunungPcnr.img2}>
                  <Image
                    key={uniqid}
                    src={location.gunungPcnr.img2}
                    alt={location.gunungPcnr.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gunungPcnr.img3}>
                  <Image
                    key={uniqid}
                    src={location.gunungPcnr.img3}
                    alt={location.gunungPcnr.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gunungPcnr.img4}>
                  <Image
                    key={uniqid}
                    src={location.gunungPcnr.img4}
                    alt={location.gunungPcnr.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gunungPcnr.img5}>
                  <Image
                    key={uniqid}
                    src={location.gunungPcnr.img5}
                    alt={location.gunungPcnr.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gunungPcnr.img6}>
                  <Image
                    key={uniqid}
                    src={location.gunungPcnr.img6}
                    alt={location.gunungPcnr.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gunungPcnr.img7}>
                  <Image
                    key={uniqid}
                    src={location.gunungPcnr.img7}
                    alt={location.gunungPcnr.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gunungPcnr.img8}>
                  <Image
                    key={uniqid}
                    src={location.gunungPcnr.img8}
                    alt={location.gunungPcnr.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gunungPcnr.img9}>
                  <Image
                    key={uniqid}
                    src={location.gunungPcnr.img9}
                    alt={location.gunungPcnr.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gunungPcnr.img10}>
                  <Image
                    key={uniqid}
                    src={location.gunungPcnr.img10}
                    alt={location.gunungPcnr.name}
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

// Penangkaran Rusa Giri Jaya Cariu
export function RusaGJC() {
  return (
    <section>
      {bogor.map((location) => {
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
                <LightgalleryItem src={location.rusaGJC.img1}>
                  <Image
                    key={uniqid}
                    src={location.rusaGJC.img1}
                    alt={location.rusaGJC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.rusaGJC.img2}>
                  <Image
                    key={uniqid}
                    src={location.rusaGJC.img2}
                    alt={location.rusaGJC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.rusaGJC.img3}>
                  <Image
                    key={uniqid}
                    src={location.rusaGJC.img3}
                    alt={location.rusaGJC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.rusaGJC.img4}>
                  <Image
                    key={uniqid}
                    src={location.rusaGJC.img4}
                    alt={location.rusaGJC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.rusaGJC.img5}>
                  <Image
                    key={uniqid}
                    src={location.rusaGJC.img5}
                    alt={location.rusaGJC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.rusaGJC.img6}>
                  <Image
                    key={uniqid}
                    src={location.rusaGJC.img6}
                    alt={location.rusaGJC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.rusaGJC.img7}>
                  <Image
                    key={uniqid}
                    src={location.rusaGJC.img7}
                    alt={location.rusaGJC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.rusaGJC.img8}>
                  <Image
                    key={uniqid}
                    src={location.rusaGJC.img8}
                    alt={location.rusaGJC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.rusaGJC.img9}>
                  <Image
                    key={uniqid}
                    src={location.rusaGJC.img9}
                    alt={location.rusaGJC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.rusaGJC.img10}>
                  <Image
                    key={uniqid}
                    src={location.rusaGJC.img10}
                    alt={location.rusaGJC.name}
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

// Taman Safari Indonesia
export function TamanSI() {
  return (
    <section>
      {bogor.map((location) => {
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
                <LightgalleryItem src={location.tamanSI.img1}>
                  <Image
                    key={uniqid}
                    src={location.tamanSI.img1}
                    alt={location.tamanSI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanSI.img2}>
                  <Image
                    key={uniqid}
                    src={location.tamanSI.img2}
                    alt={location.tamanSI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanSI.img3}>
                  <Image
                    key={uniqid}
                    src={location.tamanSI.img3}
                    alt={location.tamanSI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanSI.img4}>
                  <Image
                    key={uniqid}
                    src={location.tamanSI.img4}
                    alt={location.tamanSI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanSI.img5}>
                  <Image
                    key={uniqid}
                    src={location.tamanSI.img5}
                    alt={location.tamanSI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanSI.img6}>
                  <Image
                    key={uniqid}
                    src={location.tamanSI.img6}
                    alt={location.tamanSI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanSI.img7}>
                  <Image
                    key={uniqid}
                    src={location.tamanSI.img7}
                    alt={location.tamanSI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanSI.img8}>
                  <Image
                    key={uniqid}
                    src={location.tamanSI.img8}
                    alt={location.tamanSI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanSI.img9}>
                  <Image
                    key={uniqid}
                    src={location.tamanSI.img9}
                    alt={location.tamanSI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanSI.img10}>
                  <Image
                    key={uniqid}
                    src={location.tamanSI.img10}
                    alt={location.tamanSI.name}
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

// Tirta Sanita Ciseeng
export function TirtaSC() {
  return (
    <section>
      {bogor.map((location) => {
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
                <LightgalleryItem src={location.tirtaSC.img1}>
                  <Image
                    key={uniqid}
                    src={location.tirtaSC.img1}
                    alt={location.tirtaSC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tirtaSC.img2}>
                  <Image
                    key={uniqid}
                    src={location.tirtaSC.img2}
                    alt={location.tirtaSC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tirtaSC.img3}>
                  <Image
                    key={uniqid}
                    src={location.tirtaSC.img3}
                    alt={location.tirtaSC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tirtaSC.img4}>
                  <Image
                    key={uniqid}
                    src={location.tirtaSC.img4}
                    alt={location.tirtaSC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tirtaSC.img5}>
                  <Image
                    key={uniqid}
                    src={location.tirtaSC.img5}
                    alt={location.tirtaSC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tirtaSC.img6}>
                  <Image
                    key={uniqid}
                    src={location.tirtaSC.img6}
                    alt={location.tirtaSC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tirtaSC.img7}>
                  <Image
                    key={uniqid}
                    src={location.tirtaSC.img7}
                    alt={location.tirtaSC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tirtaSC.img8}>
                  <Image
                    key={uniqid}
                    src={location.tirtaSC.img8}
                    alt={location.tirtaSC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tirtaSC.img9}>
                  <Image
                    key={uniqid}
                    src={location.tirtaSC.img9}
                    alt={location.tirtaSC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tirtaSC.img10}>
                  <Image
                    key={uniqid}
                    src={location.tirtaSC.img10}
                    alt={location.tirtaSC.name}
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
