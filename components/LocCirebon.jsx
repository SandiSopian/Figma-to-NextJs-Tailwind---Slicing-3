import uniqid from "uniqid";
import React from "react";
import { cirebon } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";
import Link from "next/link";

// Hutan Kera Plangon
export function HutanKP() {
  return (
    <section>
      {cirebon.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Plangon Cirebon adalah sebuah hutan di atas perbukitan yang dihuni oleh beberapa kelompok monyet ekor panjang, dan di puncak bukit Plangon ini terdapat makam Pangeran Panjunan dan Pengeran Kejaksan, dua orang penyebar
                  agama Islam di wilayah Cirebon.
                </h3>
                <h3>
                  Gapura candi bentar Plangon yang menggunakan gaya Hindu Majahapitan, serta deretan undakan di belakangnya menjadi penanda pintu masuk ke dalam kawasan perbukitan Plangon Cirebon yang kabarnya telah ditetapkan sebagai Benda
                  Cagar Budaya.
                </h3>
                <Link href="https://goo.gl/maps/xzQ75afQe9oWEjAB9">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/xzQ75afQe9oWEjAB9</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.hutanKP.img1}>
                  <Image
                    key={uniqid}
                    src={location.hutanKP.img1}
                    alt={location.hutanKP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.hutanKP.img2}>
                  <Image
                    key={uniqid}
                    src={location.hutanKP.img2}
                    alt={location.hutanKP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.hutanKP.img3}>
                  <Image
                    key={uniqid}
                    src={location.hutanKP.img3}
                    alt={location.hutanKP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.hutanKP.img4}>
                  <Image
                    key={uniqid}
                    src={location.hutanKP.img4}
                    alt={location.hutanKP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.hutanKP.img5}>
                  <Image
                    key={uniqid}
                    src={location.hutanKP.img5}
                    alt={location.hutanKP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.hutanKP.img6}>
                  <Image
                    key={uniqid}
                    src={location.hutanKP.img6}
                    alt={location.hutanKP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.hutanKP.img7}>
                  <Image
                    key={uniqid}
                    src={location.hutanKP.img7}
                    alt={location.hutanKP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.hutanKP.img8}>
                  <Image
                    key={uniqid}
                    src={location.hutanKP.img8}
                    alt={location.hutanKP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.hutanKP.img9}>
                  <Image
                    key={uniqid}
                    src={location.hutanKP.img9}
                    alt={location.hutanKP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.hutanKP.img10}>
                  <Image
                    key={uniqid}
                    src={location.hutanKP.img10}
                    alt={location.hutanKP.name}
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

// Makam Sunan Gunung Jati
export function MakamSGJ() {
  return (
    <section>
      {cirebon.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Makam Sunan Gunung Jati merupakan sebuah objek wisata religi berupa ziarah makam yang terletak di antara bukit gunung sembung dan bukit gunung jati. Karena itulah kemudian lebih dikenal dengan nama Sunan Gunung Jati.
                </h3>
                <h3>
                  Berada di sebuah kompleks pemakaman yang terletak di atas lahan seluas lima hektar. Makam tersebut dibagi menjadi dua kompleks makam. Kompleks utama adalah kompleks tempat makam Sunan Gunung Jati berada, yaitu di Gunung
                  Sembung yang memuat sekitar 500 makam.
                </h3>

                <Link href="https://goo.gl/maps/sWAg5Ss6JPptZrFF9">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/sWAg5Ss6JPptZrFF9</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.makamSGJ.img1}>
                  <Image
                    key={uniqid}
                    src={location.makamSGJ.img1}
                    alt={location.makamSGJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.makamSGJ.img2}>
                  <Image
                    key={uniqid}
                    src={location.makamSGJ.img2}
                    alt={location.makamSGJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.makamSGJ.img3}>
                  <Image
                    key={uniqid}
                    src={location.makamSGJ.img3}
                    alt={location.makamSGJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.makamSGJ.img4}>
                  <Image
                    key={uniqid}
                    src={location.makamSGJ.img4}
                    alt={location.makamSGJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.makamSGJ.img5}>
                  <Image
                    key={uniqid}
                    src={location.makamSGJ.img5}
                    alt={location.makamSGJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.makamSGJ.img6}>
                  <Image
                    key={uniqid}
                    src={location.makamSGJ.img6}
                    alt={location.makamSGJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.makamSGJ.img7}>
                  <Image
                    key={uniqid}
                    src={location.makamSGJ.img7}
                    alt={location.makamSGJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.makamSGJ.img8}>
                  <Image
                    key={uniqid}
                    src={location.makamSGJ.img8}
                    alt={location.makamSGJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.makamSGJ.img9}>
                  <Image
                    key={uniqid}
                    src={location.makamSGJ.img9}
                    alt={location.makamSGJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.makamSGJ.img10}>
                  <Image
                    key={uniqid}
                    src={location.makamSGJ.img10}
                    alt={location.makamSGJ.name}
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

// Setu Patok
export function SetuP() {
  return (
    <section>
      {cirebon.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Setu Patok merupakan objek wisata sederhana namun tetap layak dikunjungi. Sederhana yang dimaksud di sini tidak terlalu mewah dan tidak perlu membutuhkan banyak biaya. Setu sendiri tidak lain adalah sebuah Sungai dengan
                  keindahan alam sekitar yang masih asri. Tempat ini berada di Cirebon, tepatnya di kawasan Mundu yang terkenal masih alami.
                </h3>
                <h3>
                  Suasana alam ternyata bukan satu-satunya alasan pengunjung datang. Lokasi tempat ini tergolong strategis, tidak jauh dari pusat kota Cirebon. Di sekitar danau terdapat berbagai macam fasilitas penunjang, jadi tidak perlu
                  khawatir. Bagi anak-anak, ada berbagai wahana yang disediakan sebagai daya tarik utamanya.
                </h3>
                <Link href="https://goo.gl/maps/x5xvH4pEs5rgXVTN6">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/x5xvH4pEs5rgXVTN6</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.setuP.img1}>
                  <Image
                    key={uniqid}
                    src={location.setuP.img1}
                    alt={location.setuP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.setuP.img2}>
                  <Image
                    key={uniqid}
                    src={location.setuP.img2}
                    alt={location.setuP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.setuP.img3}>
                  <Image
                    key={uniqid}
                    src={location.setuP.img3}
                    alt={location.setuP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.setuP.img4}>
                  <Image
                    key={uniqid}
                    src={location.setuP.img4}
                    alt={location.setuP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.setuP.img5}>
                  <Image
                    key={uniqid}
                    src={location.setuP.img5}
                    alt={location.setuP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.setuP.img6}>
                  <Image
                    key={uniqid}
                    src={location.setuP.img6}
                    alt={location.setuP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.setuP.img7}>
                  <Image
                    key={uniqid}
                    src={location.setuP.img7}
                    alt={location.setuP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.setuP.img8}>
                  <Image
                    key={uniqid}
                    src={location.setuP.img8}
                    alt={location.setuP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.setuP.img9}>
                  <Image
                    key={uniqid}
                    src={location.setuP.img9}
                    alt={location.setuP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.setuP.img10}>
                  <Image
                    key={uniqid}
                    src={location.setuP.img10}
                    alt={location.setuP.name}
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

// Wisata Goa Sunyaragi
export function WisataGS() {
  return (
    <section>
      {cirebon.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Gua Sunyaragi atau Taman Sari Guwa Sunyaragi adalah sebuah gua yang berlokasi di kelurahan Sunyaragi, Kesambi, Kota Cirebon di mana terdapat bangunan mirip candi yang disebut Gua Sunyaragi, atau Taman Air Sunyaragi, atau
                  sering disebut sebagai Tamansari Sunyaragi. Nama "Sunyaragi" berasal dari kata "sunya" yang artinya sepi dan "ragi" yang berarti raga, keduanya adalah bahasa Sanskerta. Tujuan utama didirikannya gua tersebut adalah sebagai
                  tempat beristirahat dan meditasi para Sultan Cirebon dan keluarganya.
                </h3>
                <Link href="https://goo.gl/maps/ay7zey5dR8JHsDgk9">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/ay7zey5dR8JHsDgk9</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataGS.img1}>
                  <Image
                    key={uniqid}
                    src={location.wisataGS.img1}
                    alt={location.wisataGS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataGS.img2}>
                  <Image
                    key={uniqid}
                    src={location.wisataGS.img2}
                    alt={location.wisataGS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataGS.img3}>
                  <Image
                    key={uniqid}
                    src={location.wisataGS.img3}
                    alt={location.wisataGS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataGS.img4}>
                  <Image
                    key={uniqid}
                    src={location.wisataGS.img4}
                    alt={location.wisataGS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataGS.img5}>
                  <Image
                    key={uniqid}
                    src={location.wisataGS.img5}
                    alt={location.wisataGS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataGS.img6}>
                  <Image
                    key={uniqid}
                    src={location.wisataGS.img6}
                    alt={location.wisataGS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataGS.img7}>
                  <Image
                    key={uniqid}
                    src={location.wisataGS.img7}
                    alt={location.wisataGS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataGS.img8}>
                  <Image
                    key={uniqid}
                    src={location.wisataGS.img8}
                    alt={location.wisataGS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataGS.img9}>
                  <Image
                    key={uniqid}
                    src={location.wisataGS.img9}
                    alt={location.wisataGS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataGS.img10}>
                  <Image
                    key={uniqid}
                    src={location.wisataGS.img10}
                    alt={location.wisataGS.name}
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

// Wisata Kura-Kura Belawa
export function WisataKKB() {
  return (
    <section>
      {cirebon.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>Obyek Wisata Cikuya Belawa menjadi salah satu alternatif wisata warga Jawa Barat, khususnya Cirebon dan sekitarnya.</h3>
                <h3>
                  Di Obyek Wisata Cikuya, terdapat kura-kura langka. Warga Cirebon menyebutnya dengan Kura-kura Belawa atau kura–kura dengan nama latin Aquatic Tortose Ortilia Norneensis. Obyek wisata dengan luas sekitar 200 meter persegi
                  begitu asri. Sejumlah pohon besar rindang, ditambah adanya mata air, membuat suasa terasa nyaman.
                </h3>
                <Link href="https://goo.gl/maps/hYvZENH4SUPTeHXCA">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/hYvZENH4SUPTeHXCA</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataKKB.img1}>
                  <Image
                    key={uniqid}
                    src={location.wisataKKB.img1}
                    alt={location.wisataKKB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataKKB.img2}>
                  <Image
                    key={uniqid}
                    src={location.wisataKKB.img2}
                    alt={location.wisataKKB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataKKB.img3}>
                  <Image
                    key={uniqid}
                    src={location.wisataKKB.img3}
                    alt={location.wisataKKB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataKKB.img4}>
                  <Image
                    key={uniqid}
                    src={location.wisataKKB.img4}
                    alt={location.wisataKKB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataKKB.img5}>
                  <Image
                    key={uniqid}
                    src={location.wisataKKB.img5}
                    alt={location.wisataKKB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataKKB.img6}>
                  <Image
                    key={uniqid}
                    src={location.wisataKKB.img6}
                    alt={location.wisataKKB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataKKB.img7}>
                  <Image
                    key={uniqid}
                    src={location.wisataKKB.img7}
                    alt={location.wisataKKB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataKKB.img8}>
                  <Image
                    key={uniqid}
                    src={location.wisataKKB.img8}
                    alt={location.wisataKKB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataKKB.img9}>
                  <Image
                    key={uniqid}
                    src={location.wisataKKB.img9}
                    alt={location.wisataKKB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.wisataKKB.img10}>
                  <Image
                    key={uniqid}
                    src={location.wisataKKB.img10}
                    alt={location.wisataKKB.name}
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
