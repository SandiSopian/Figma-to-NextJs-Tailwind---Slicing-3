import uniqid from "uniqid";
import React from "react";
import { bandung } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";

// Curug Dago
export function CurugDg() {
  return (
    <section>
      {bandung.map((location) => {
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
                <LightgalleryItem src={location.curugDg.img1}>
                  <Image
                    key={uniqid}
                    src={location.curugDg.img1}
                    alt={location.curugDg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugDg.img2}>
                  <Image
                    key={uniqid}
                    src={location.curugDg.img2}
                    alt={location.curugDg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugDg.img3}>
                  <Image
                    key={uniqid}
                    src={location.curugDg.img3}
                    alt={location.curugDg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugDg.img4}>
                  <Image
                    key={uniqid}
                    src={location.curugDg.img4}
                    alt={location.curugDg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugDg.img5}>
                  <Image
                    key={uniqid}
                    src={location.curugDg.img5}
                    alt={location.curugDg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugDg.img6}>
                  <Image
                    key={uniqid}
                    src={location.curugDg.img6}
                    alt={location.curugDg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugDg.img7}>
                  <Image
                    key={uniqid}
                    src={location.curugDg.img7}
                    alt={location.curugDg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugDg.img8}>
                  <Image
                    key={uniqid}
                    src={location.curugDg.img8}
                    alt={location.curugDg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugDg.img9}>
                  <Image
                    key={uniqid}
                    src={location.curugDg.img9}
                    alt={location.curugDg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.curugDg.img10}>
                  <Image
                    key={uniqid}
                    src={location.curugDg.img10}
                    alt={location.curugDg.name}
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

// Gedung Sate
export function GedungSt() {
  return (
    <section>
      {bandung.map((location) => {
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
                <LightgalleryItem src={location.gedungSt.img1}>
                  <Image
                    key={uniqid}
                    src={location.gedungSt.img1}
                    alt={location.gedungSt.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer "
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gedungSt.img2}>
                  <Image
                    key={uniqid}
                    src={location.gedungSt.img2}
                    alt={location.gedungSt.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer "
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gedungSt.img3}>
                  <Image
                    key={uniqid}
                    src={location.gedungSt.img3}
                    alt={location.gedungSt.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer "
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gedungSt.img4}>
                  <Image
                    key={uniqid}
                    src={location.gedungSt.img4}
                    alt={location.gedungSt.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer "
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gedungSt.img5}>
                  <Image
                    key={uniqid}
                    src={location.gedungSt.img5}
                    alt={location.gedungSt.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer "
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gedungSt.img6}>
                  <Image
                    key={uniqid}
                    src={location.gedungSt.img6}
                    alt={location.gedungSt.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer "
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gedungSt.img7}>
                  <Image
                    key={uniqid}
                    src={location.gedungSt.img7}
                    alt={location.gedungSt.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer "
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gedungSt.img8}>
                  <Image
                    key={uniqid}
                    src={location.gedungSt.img8}
                    alt={location.gedungSt.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer "
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gedungSt.img9}>
                  <Image
                    key={uniqid}
                    src={location.gedungSt.img9}
                    alt={location.gedungSt.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer "
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.gedungSt.img10}>
                  <Image
                    key={uniqid}
                    src={location.gedungSt.img10}
                    alt={location.gedungSt.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer "
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

// Jalan Braga
export function JalanBrg() {
  return (
    <section>
      {bandung.map((location) => {
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
                <LightgalleryItem src={location.jalanBrg.img1}>
                  <Image
                    key={uniqid}
                    src={location.jalanBrg.img1}
                    alt={location.jalanBrg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.jalanBrg.img2}>
                  <Image
                    key={uniqid}
                    src={location.jalanBrg.img2}
                    alt={location.jalanBrg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.jalanBrg.img3}>
                  <Image
                    key={uniqid}
                    src={location.jalanBrg.img3}
                    alt={location.jalanBrg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.jalanBrg.img4}>
                  <Image
                    key={uniqid}
                    src={location.jalanBrg.img4}
                    alt={location.jalanBrg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.jalanBrg.img5}>
                  <Image
                    key={uniqid}
                    src={location.jalanBrg.img5}
                    alt={location.jalanBrg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.jalanBrg.img6}>
                  <Image
                    key={uniqid}
                    src={location.jalanBrg.img6}
                    alt={location.jalanBrg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.jalanBrg.img7}>
                  <Image
                    key={uniqid}
                    src={location.jalanBrg.img7}
                    alt={location.jalanBrg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.jalanBrg.img8}>
                  <Image
                    key={uniqid}
                    src={location.jalanBrg.img8}
                    alt={location.jalanBrg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.jalanBrg.img9}>
                  <Image
                    key={uniqid}
                    src={location.jalanBrg.img9}
                    alt={location.jalanBrg.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.jalanBrg.img10}>
                  <Image
                    key={uniqid}
                    src={location.jalanBrg.img10}
                    alt={location.jalanBrg.name}
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

// Kawah Gunung Tangkuban Perahu
export function TangkubanPrh() {
  return (
    <section>
      {bandung.map((location) => {
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
                <LightgalleryItem src={location.tangkubanPrh.img1}>
                  <Image
                    key={uniqid}
                    src={location.tangkubanPrh.img1}
                    alt={location.tangkubanPrh.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tangkubanPrh.img2}>
                  <Image
                    key={uniqid}
                    src={location.tangkubanPrh.img2}
                    alt={location.tangkubanPrh.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tangkubanPrh.img3}>
                  <Image
                    key={uniqid}
                    src={location.tangkubanPrh.img3}
                    alt={location.tangkubanPrh.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tangkubanPrh.img4}>
                  <Image
                    key={uniqid}
                    src={location.tangkubanPrh.img4}
                    alt={location.tangkubanPrh.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tangkubanPrh.img5}>
                  <Image
                    key={uniqid}
                    src={location.tangkubanPrh.img5}
                    alt={location.tangkubanPrh.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tangkubanPrh.img6}>
                  <Image
                    key={uniqid}
                    src={location.tangkubanPrh.img6}
                    alt={location.tangkubanPrh.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tangkubanPrh.img7}>
                  <Image
                    key={uniqid}
                    src={location.tangkubanPrh.img7}
                    alt={location.tangkubanPrh.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tangkubanPrh.img8}>
                  <Image
                    key={uniqid}
                    src={location.tangkubanPrh.img8}
                    alt={location.tangkubanPrh.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tangkubanPrh.img9}>
                  <Image
                    key={uniqid}
                    src={location.tangkubanPrh.img9}
                    alt={location.tangkubanPrh.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tangkubanPrh.img10}>
                  <Image
                    key={uniqid}
                    src={location.tangkubanPrh.img10}
                    alt={location.tangkubanPrh.name}
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

// Taman Hutan Raya Djuanda
export function TamanRyDj() {
  return (
    <section>
      {bandung.map((location) => {
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
                <LightgalleryItem src={location.tamanRyDj.img1}>
                  <Image
                    key={uniqid}
                    src={location.tamanRyDj.img1}
                    alt={location.tamanRyDj.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanRyDj.img2}>
                  <Image
                    key={uniqid}
                    src={location.tamanRyDj.img2}
                    alt={location.tamanRyDj.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanRyDj.img3}>
                  <Image
                    key={uniqid}
                    src={location.tamanRyDj.img3}
                    alt={location.tamanRyDj.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanRyDj.img4}>
                  <Image
                    key={uniqid}
                    src={location.tamanRyDj.img4}
                    alt={location.tamanRyDj.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanRyDj.img5}>
                  <Image
                    key={uniqid}
                    src={location.tamanRyDj.img5}
                    alt={location.tamanRyDj.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanRyDj.img6}>
                  <Image
                    key={uniqid}
                    src={location.tamanRyDj.img6}
                    alt={location.tamanRyDj.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanRyDj.img7}>
                  <Image
                    key={uniqid}
                    src={location.tamanRyDj.img7}
                    alt={location.tamanRyDj.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanRyDj.img8}>
                  <Image
                    key={uniqid}
                    src={location.tamanRyDj.img8}
                    alt={location.tamanRyDj.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanRyDj.img9}>
                  <Image
                    key={uniqid}
                    src={location.tamanRyDj.img9}
                    alt={location.tamanRyDj.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem src={location.tamanRyDj.img10}>
                  <Image
                    key={uniqid}
                    src={location.tamanRyDj.img10}
                    alt={location.tamanRyDj.name}
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

console.log(uniqid());
