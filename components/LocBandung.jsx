import uniqid from "uniqid";
import React from "react";
import { bandung } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";
import Link from "next/link";

// Curug Dago
export function CurugDg() {
  return (
    <section>
      {bandung.map((location) => {
        return (
          <div className=" pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Curug Dago Bandung menjadi salah satu objek wisata yang sangat sayang jika tidak dikunjungi oleh anda yang sedang melintas atau dengan sengaja melakukan perjalanan ke wilayah Taman Hutan Raya. Wisata di Bandung tersebut
                  tepatnya terletak di Desa Dago, Kecamatan Coblong, Kota Bandung, Propinsi Jawa Barat.
                </h3>
                <h3>
                  Lokasi Curug Dago sendiri memang cukup tersembunyi, karena lokas wisata di Bandung yang satu ini berada di daerah Bukit Dago di dalam kawasan Taman Hutan Raya di Jalan Ir H Djuanda. Curug yang dalam bahasa Indonesia
                  berarti Air terjun ini memang biasa terdapat di daerah daerah Bandung, karena daerah Bandung memang daerah yang dilingkari oleh perbukitan sehingga alamnya banyak menyajikan pemandangan yang sangat indah untuk dikunjungi.
                  Curug Dago ini berada di ketinggian 800 meter di atas permukaan laut dan terbentuk dari aliran sungai Cikapundung yang mengalir dari Maribaya ke kota Bandung.
                </h3>
                <Link href="https://goo.gl/maps/9X3SgtzUHZN4aX2EA">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/9X3SgtzUHZN4aX2EA</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-4 gap-2">
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>Gedung Sate merupakan ikon dari kota Bandung yang sangat populer. Gedung yang satu ini bukan hanya ikon kota semata, namun merupakan tempat bersejarah sekaligus kawasan wisata Bandung yang banyak dikunjungi.</h3>
                <h3>
                  Gedung Sate ini memiliki sejarah panjang yang sudah ada sejak masa Kolonial BelAnda. Peletakan batu pertamanya dilakukan pada 27 Juli 1920 yang dihadiri oleh Johanna Catherina Coops yang merupakan putri tertua Wali Kota
                  Bandung dan B. Coops serta Petronella Roelofsen yang mewakili Gubernur Jenderal di Batavia.
                </h3>
                <Link href="https://goo.gl/maps/1bSDEV3z2vsimxD9A">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/1bSDEV3z2vsimxD9A</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Jalan Braga adalah nama sebuah jalan utama di kota Bandung, Indonesia. Nama jalan ini cukup dikenal sejak masa pemerintahan Hindia Belanda. Sampai saat ini nama jalan tersebut tetap dipertahankan sebagai salah satu maskot
                  dan objek wisata kota Bandung yang dahulu dikenal sebagai Parijs van Java.
                </h3>
                <h3>
                  Di sisi kanan kiri Jalan Braga terdapat komplek toko yang memiliki arsitektur dan tata kota yang tetap mempertahankan ciri arsitektur kuno pada masa Hindia Belanda. Tata letak pertokoan tersebut mengikuti model yang ada di
                  Eropa sesuai dengan perkembangan kota Bandung pada masa itu (1920-1940an) sebagai kota mode yang cukup termasyhur seperti halnya kota Paris pada saat itu.
                </h3>
                <Link href="https://goo.gl/maps/pPQTH1xRfz3gZn4B7">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/pPQTH1xRfz3gZn4B7</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Gunung Tangkuban Perahu yang menjadi tujuan wisata populer di kawasan Bandung dan sekitarnya ini memiliki banyak sekali peminat baik itu wisatawan lokal maupun asing. Selain karena namanya yang sudah tersohor karena
                  legenda Sangkuriang, Gunung Tangkuban Perahu memang tempat wisata yang sangat indah. Gunung Tangkuban Perahu memiliki ketinggian 2.084 di atas permukaan laut atau sekitar 6.873 kaki. Suhu di gunung ini adalah 17 derajat
                  Celcius pada siang hari dan dapat mencapai 2 derajat Celcius pada malam hari. Karena suhunya yang dingin, pada saat berkunjung ke tempat wisata ini jangan lupa untuk membawa sweater atau jaket dan disarankan membawa masker
                  penutup mulut untuk menghindari bau gas belerang yang tajam.
                </h3>
                <h3>Lokasi wisata ini juga merupakan kawasan lindung hutan,yang masih terjaga kelestarian, keasrian dan kesegaran udaranya.</h3>
                <Link href="https://goo.gl/maps/YQemHFfV2EutEGE89">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/YQemHFfV2EutEGE89</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Taman Hutan Raya Ir. H. Djuanda (Tahura Djuanda) merupakan kawasan konservasi yang terpadu antara alam sekunder dengan hutan tanaman dengan jenis Pinus (Pinus merkusil) yang terletak di Sub-Daerah Aliran Sungai Cikapundung
                  dan DAS Citarum yang membentang mulai dari Curug Dago, Dago Pakar sampai Curug Maribaya yang merupakan bagian dari kelompok hutan Gunung Pulosari.
                </h3>
                <h3>
                  Taman terbesar yang pernah dibangun oleh Pemerintah Hindia Belanda ini pada awalnya merupakan hutan lindung dengan nama Hutan Lindung Pulosari dengan luas 590 ha. Perintisannya dimulai tahun 1912 bersamaan dengan
                  pembangunan terowongan penyadapan air Sungai Cikapundung, sekarang dikenal sebagai “Gua Belanda”, yang peresmiannya dilakukan tahun 1922.
                </h3>
                <h3>Sejak Indonesia merdeka, kawasan Hutan Lindung Pulosari ini otomatis menjadi aset pemerintahan Republik Indonesia yang dikelola oleh Djawatan Kehutanan.</h3>
                <Link href="https://g.page/tahuradjuanda-official?share">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://g.page/tahuradjuanda-official?share</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
