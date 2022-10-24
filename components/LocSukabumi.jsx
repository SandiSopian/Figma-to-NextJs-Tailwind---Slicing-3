import uniqid from "uniqid";
import React from "react";
import { sukabumi } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";
import Link from "next/link";

// Curug Cimarinjung
export function CurugCim() {
  return (
    <section>
      {sukabumi.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>Curug Cimarinjung merupakan sebuah air terjun berketinggian sekitar 50 meter yang berada di Kabupaten Sukabumi, Provinsi Jawa Barat.</h3>
                <h3>
                  Panorama Curug Cimarinjung adalah suasana alam dipadu dengan curahan airnya yang sangat deras. Dan yang lebih mempesona ialah tebing-tebing batuannya yang sangat menakjubkan. Tebing berwarna merah kecoklatan ditambah
                  dengan tumbuhan hijau yang menempel di tebing membuat Curug Cimarinjung kian indah. Tak hanya itu, lokasi Curug Cimarinjung pun makin indah dengan adanya dua bongkah batu berukuran besar yang mengapit aliran air sebelum
                  turun ke bawah. Terdapat beberapa fasilitas penunjang wisata di area air terjun ini.
                </h3>
                <Link href="https://goo.gl/maps/m1PrmCA4soUkQxXMA">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/m1PrmCA4soUkQxXMA</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Danau Bacan adalah salah satu danau yang sangat unik. Keunikan yang dimiliki oleh danau ini bisa dilihat dari jejak sejarah yang dimilikinya. Danau Bacan dulunya adalah sebuah pertambangan. Akan tetapi pertambangan sudah
                  tidak dilakukan sehingga tempat tersebut terbengkalai. Akan tetapi suatu ketika tempa ini menjadi sangat populer melalui sosial media di area tersebut. hal ini disebabkan karena tiba-tiba saja muncul genangan air di
                  tambang tersebut.
                </h3>
                <h3>
                  Uniknya lagi air yang muncul di bekas tambang ini memiliki warna kehijauan mirip dengan warna dari Batu Bacan. Hal inilah yang menyebabkan danau ini disebut dengan Danau Bacan. Keberadaan danau ini disebabkan karena adanya
                  air yang keluar dari dalam bumi. Hal ini dibuktikan dengan banyaknya penambang yang dahulu mengeluh bahwa tempat tambangnya selalu tergenang air. bukti lainnya juga didapatkan dari keberadaan danau ini di musim kemarau. Di
                  musim kemarau Danau Bacan tidak mengering bahkan airnya dimanfaatkan oleh warga sekitar untuk keperluan sehari-hari.
                </h3>
                <Link href="https://goo.gl/maps/kgtdWZpSsCQxvA3N7">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/kgtdWZpSsCQxvA3N7</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Pantai Palabuhanratu, atau lebih populer sebagai Pantai Pelabuhan Ratu, adalah sebuah tempat wisata di pesisir Samudra Hindia di selatan Jawa Barat, Indonesia. Lokasinya terletak sekitar 60 km ke arah selatan dari Kota
                  Sukabumi.
                </h3>
                <h3>
                  Pantai ini dikenal memiliki ombak yang sangat kuat dan karena itu berbahaya bagi perenang pantai. Topografinya berupa perpaduan antara pantai yang curam dan landai, tebing karang terjal, hempasan ombak, dan hutan cagar
                  alam.
                </h3>
                <Link href="https://goo.gl/maps/iAYu7e1GDjws7qe8A">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/iAYu7e1GDjws7qe8A</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Air Panas Cisolok ini dilengkapi dengan keindahan air mancurnya yang tidak mengandung belerang. Selain itu timbunan bebatuan yang mengelilingi setiap semburan air panas ini layaknya suasana pemandian khas pedesaan yang
                  masih alami.
                </h3>

                <Link href="https://goo.gl/maps/fDARFDc6mVrFJJyTA">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/fDARFDc6mVrFJJyTA</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Tebing Panenjoan Sukabumi atau Bukit Panenjoan merupakan pintu masuk untuk menyaksikan keindahan Geopark Ciletuh Pelabuhan Ratu. Seluruh keindahan Geopark Ciletuh Pelabuhan Ratu bisa kamu saksikan di sini. Maka tak heran
                  jika tempat ini juga di sebut sebagai Mega Amphitheater.
                </h3>
                <h3>
                  Panenjoan sendiri memiliki arti ‘tempat untuk melihat’. Di bukit ini, kamu bisa melihat panorama keindahan alam yang telah Tuhan ciptakan. Tebing Panenjoan berada di kawasan Geopark Ciletuh Pelabuhan Ratu, yakni di
                  Kecamatan Ciemas, Kabupaten Sukabumi, Jawa Barat.
                </h3>
                <Link href="https://g.page/properti-sukabumi?share">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://g.page/properti-sukabumi?share</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
