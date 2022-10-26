import uniqid from "uniqid";
import React from "react";
import { ciwidey } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";
import Link from "next/link";

// Bukit Jamur
export function BukitJ() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Bukit Jamur berada di Bandung Selatan, tepatnya di kawasan Ciwidey. Daerah Ciwidey terkenal dengan udaranya yang dingin dan menyejukkan. Begitu pula di Bukit Jamur Ciwidey ini, udaranya yang sejuk menyatu dengan hijaunya
                  pepohonan ala ‘jamur’ ini, membuat siapapun yang datang menjadi kerasan disini. Banyak spot-spot yang instagramble disini, sangat asyik untuk hunting photo.
                </h3>

                <Link href="https://goo.gl/maps/N3K1hYuCvDC6DUUz8">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/N3K1hYuCvDC6DUUz8</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.bukitJ.img1}>
                  <Image
                    key={uniqid()}
                    src={location.bukitJ.img1}
                    alt={location.bukitJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.bukitJ.img2}>
                  <Image
                    key={uniqid()}
                    src={location.bukitJ.img2}
                    alt={location.bukitJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.bukitJ.img3}>
                  <Image
                    key={uniqid()}
                    src={location.bukitJ.img3}
                    alt={location.bukitJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.bukitJ.img4}>
                  <Image
                    key={uniqid()}
                    src={location.bukitJ.img4}
                    alt={location.bukitJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.bukitJ.img5}>
                  <Image
                    key={uniqid()}
                    src={location.bukitJ.img5}
                    alt={location.bukitJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.bukitJ.img6}>
                  <Image
                    key={uniqid()}
                    src={location.bukitJ.img6}
                    alt={location.bukitJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.bukitJ.img7}>
                  <Image
                    key={uniqid()}
                    src={location.bukitJ.img7}
                    alt={location.bukitJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.bukitJ.img8}>
                  <Image
                    key={uniqid()}
                    src={location.bukitJ.img8}
                    alt={location.bukitJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.bukitJ.img9}>
                  <Image
                    key={uniqid()}
                    src={location.bukitJ.img9}
                    alt={location.bukitJ.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.bukitJ.img10}>
                  <Image
                    key={uniqid()}
                    src={location.bukitJ.img10}
                    alt={location.bukitJ.name}
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

// Ciwidey Valley Resort Hot Spring Waterpark
export function CiwideyValleyRHSW() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Ciwidey Valley Resort Hot Spring Waterpark menawarkan akomodasi dengan restoran, parkir pribadi gratis, taman, dan teras di Bandung, beberapa langkah dari Kawah Putih. Fasilitas yang ditawarkan di akomodasi ini meliputi
                  resepsionis 24 jam, layanan kamar, dan Wi-Fi gratis di seluruh areanya. Beberapa kamar di akomodasi ini memiliki balkon dengan pemandangan kolam renang.
                </h3>
                <Link href="https://goo.gl/maps/reid7JPU39uZpV8PA">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/reid7JPU39uZpV8PA</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.ciwideyValleyRHSW.img1}>
                  <Image
                    key={uniqid()}
                    src={location.ciwideyValleyRHSW.img1}
                    alt={location.ciwideyValleyRHSW.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.ciwideyValleyRHSW.img2}>
                  <Image
                    key={uniqid()}
                    src={location.ciwideyValleyRHSW.img2}
                    alt={location.ciwideyValleyRHSW.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.ciwideyValleyRHSW.img3}>
                  <Image
                    key={uniqid()}
                    src={location.ciwideyValleyRHSW.img3}
                    alt={location.ciwideyValleyRHSW.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.ciwideyValleyRHSW.img4}>
                  <Image
                    key={uniqid()}
                    src={location.ciwideyValleyRHSW.img4}
                    alt={location.ciwideyValleyRHSW.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.ciwideyValleyRHSW.img5}>
                  <Image
                    key={uniqid()}
                    src={location.ciwideyValleyRHSW.img5}
                    alt={location.ciwideyValleyRHSW.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.ciwideyValleyRHSW.img6}>
                  <Image
                    key={uniqid()}
                    src={location.ciwideyValleyRHSW.img6}
                    alt={location.ciwideyValleyRHSW.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.ciwideyValleyRHSW.img7}>
                  <Image
                    key={uniqid()}
                    src={location.ciwideyValleyRHSW.img7}
                    alt={location.ciwideyValleyRHSW.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.ciwideyValleyRHSW.img8}>
                  <Image
                    key={uniqid()}
                    src={location.ciwideyValleyRHSW.img8}
                    alt={location.ciwideyValleyRHSW.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.ciwideyValleyRHSW.img9}>
                  <Image
                    key={uniqid()}
                    src={location.ciwideyValleyRHSW.img9}
                    alt={location.ciwideyValleyRHSW.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.ciwideyValleyRHSW.img10}>
                  <Image
                    key={uniqid()}
                    src={location.ciwideyValleyRHSW.img10}
                    alt={location.ciwideyValleyRHSW.name}
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

// D'Riam Riverside
export function DRiamR() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  D'Riam Riverside merupakan tempat menginap yang Cozy. Bookin pesan lewat aplikasi online ternyata dapat harga resort lebih murah daripada pesan langsung disana. Karyawan hotel ramah tamah. Penginapan yang lagi hits,
                  menginap disini dapat tiket masuk driam riversidenya perkamar/2org free tiket masuk, banyak spot foto kekinian di Driam Riverside tapi dibeberapa setiap foto spot ada yang berbayar beda harga setiap spot & ada fotographer
                  yang fotoin juga.
                </h3>
                <Link href="https://g.page/driamriverside?share">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://g.page/driamriverside?share</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.dRiamR.img1}>
                  <Image
                    key={uniqid()}
                    src={location.dRiamR.img1}
                    alt={location.dRiamR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.dRiamR.img2}>
                  <Image
                    key={uniqid()}
                    src={location.dRiamR.img2}
                    alt={location.dRiamR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.dRiamR.img3}>
                  <Image
                    key={uniqid()}
                    src={location.dRiamR.img3}
                    alt={location.dRiamR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.dRiamR.img4}>
                  <Image
                    key={uniqid()}
                    src={location.dRiamR.img4}
                    alt={location.dRiamR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.dRiamR.img5}>
                  <Image
                    key={uniqid()}
                    src={location.dRiamR.img5}
                    alt={location.dRiamR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.dRiamR.img6}>
                  <Image
                    key={uniqid()}
                    src={location.dRiamR.img6}
                    alt={location.dRiamR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.dRiamR.img7}>
                  <Image
                    key={uniqid()}
                    src={location.dRiamR.img7}
                    alt={location.dRiamR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.dRiamR.img8}>
                  <Image
                    key={uniqid()}
                    src={location.dRiamR.img8}
                    alt={location.dRiamR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.dRiamR.img9}>
                  <Image
                    key={uniqid()}
                    src={location.dRiamR.img9}
                    alt={location.dRiamR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.dRiamR.img10}>
                  <Image
                    key={uniqid()}
                    src={location.dRiamR.img10}
                    alt={location.dRiamR.name}
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

// Green Hill Park
export function GreenHP() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Dengan luas 21,32 Ha, kawasan Green Hil Parak berdiri di kawasan pelestarian alam yang dimanfaatkan untuk pariwisata dan rekreasi alam. Green Hill Park terletak di pinggir jalan (di KM 41) kawasan wisata Ciwidey – Situ
                  Patenggang. Persisnya sekitar 300 meter dari jalan raya dan dekat dengan gerbang masuk ke kawasan wisata Kawah Putih.
                </h3>
                <h3>
                  Saat berkunjung ke Green Hill Park, wisatawan dapat menikmati kesejukan udara bersih, pemandangan hutan hujan kawasan Gunung Patuha, menikmati senasi mandi di sumber air panas. Sebagai area wisata terpadu, Green Hill Park
                  sangat pas bagi Anda dan keluarga untuk menjadikan tempat ini sebagai destinasi berlibur. Fasilitas yang ditawarkan Green Hill Par terbilang lengkap dengan adanya penginapan/bungalow, saung pertemuan, camping ground, kolam
                  air panas alami, kolam terapi ikan, waterpark, Saung Ulin (anak-anak), outbond, bird watching, trek sepeda gunung, dll.
                </h3>
                <Link href="https://g.page/greenhillciwidey?share">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://g.page/greenhillciwidey?share</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenHP.img1}>
                  <Image
                    key={uniqid()}
                    src={location.greenHP.img1}
                    alt={location.greenHP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenHP.img2}>
                  <Image
                    key={uniqid()}
                    src={location.greenHP.img2}
                    alt={location.greenHP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenHP.img3}>
                  <Image
                    key={uniqid()}
                    src={location.greenHP.img3}
                    alt={location.greenHP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenHP.img4}>
                  <Image
                    key={uniqid()}
                    src={location.greenHP.img4}
                    alt={location.greenHP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenHP.img5}>
                  <Image
                    key={uniqid()}
                    src={location.greenHP.img5}
                    alt={location.greenHP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenHP.img6}>
                  <Image
                    key={uniqid()}
                    src={location.greenHP.img6}
                    alt={location.greenHP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenHP.img7}>
                  <Image
                    key={uniqid()}
                    src={location.greenHP.img7}
                    alt={location.greenHP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenHP.img8}>
                  <Image
                    key={uniqid()}
                    src={location.greenHP.img8}
                    alt={location.greenHP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenHP.img9}>
                  <Image
                    key={uniqid()}
                    src={location.greenHP.img9}
                    alt={location.greenHP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenHP.img10}>
                  <Image
                    key={uniqid()}
                    src={location.greenHP.img10}
                    alt={location.greenHP.name}
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

// Kawah Putih
export function KawahP() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Kawah Putih adalah sebuah tempat wisata di Jawa Barat yang terletak di Desa Alam Endah, Kecamatan Rancabali, Kabupaten Bandung Jawa Barat yang terletak di kaki Gunung Patuha. Kawah putih merupakan sebuah danau yang
                  terbentuk dari letusan Gunung Patuha. Tanah yang bercampur belerang di sekitar kawah ini berwarna putih, lalu warna air yang berada di kawah ini berwarna putih kehijauan, yang unik dari kawah ini adalah airnya kadang
                  berubah warna. Danau Kawah Putih sendiri berada pada ketinggian 2194 m tapi luas total Danau Kawah Putih 25 ha yang dipakai wisata 5 ha dan lokasi kawah sendiri 3 ha.
                </h3>
                <h3>
                  Perairannya yang berwarna biru kristal berubah dengan kondisi cuaca, dan dilapisi dengan pasir putih halus, memberikan pengunjung pengalaman dunia lain. Bahkan vegetasi di sekitar area ini sangat berbeda dengan yang di
                  bawah.
                </h3>
                <Link href="https://goo.gl/maps/x8me8gAFM7WTQR6C9">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/x8me8gAFM7WTQR6C9</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahP.img1}>
                  <Image
                    key={uniqid()}
                    src={location.kawahP.img1}
                    alt={location.kawahP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahP.img2}>
                  <Image
                    key={uniqid()}
                    src={location.kawahP.img2}
                    alt={location.kawahP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahP.img3}>
                  <Image
                    key={uniqid()}
                    src={location.kawahP.img3}
                    alt={location.kawahP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahP.img4}>
                  <Image
                    key={uniqid()}
                    src={location.kawahP.img4}
                    alt={location.kawahP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahP.img5}>
                  <Image
                    key={uniqid()}
                    src={location.kawahP.img5}
                    alt={location.kawahP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahP.img6}>
                  <Image
                    key={uniqid()}
                    src={location.kawahP.img6}
                    alt={location.kawahP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahP.img7}>
                  <Image
                    key={uniqid()}
                    src={location.kawahP.img7}
                    alt={location.kawahP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahP.img8}>
                  <Image
                    key={uniqid()}
                    src={location.kawahP.img8}
                    alt={location.kawahP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahP.img9}>
                  <Image
                    key={uniqid()}
                    src={location.kawahP.img9}
                    alt={location.kawahP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahP.img10}>
                  <Image
                    key={uniqid()}
                    src={location.kawahP.img10}
                    alt={location.kawahP.name}
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

// Kawah Rengganis
export function KawahR() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Kawah Rengganis adalah kawah alam yang terbentuk dari proses alam jutaan tahun yang lalu. Dahulu kawah ini bernama Kawah Cibuni karena terletak di daerah Cibuni, tapi karena tempat ini sudah dikelola oleh agrowisata
                  Rancabali maka tempat ini diubah menjadi Kawah Rengganis. Dari pintu masuk, Anda masih diharuskan berjalan sekitar 1 km lagi untuk sampai di kawah. Namun meskipun agak jauh dijamin Anda tidak akan merasakan bosan dan lelah
                  karena disepanjang perjalanan ada hamparan pemandangan yang sangat hijau dan mengagumkan.
                </h3>

                <Link href="https://goo.gl/maps/CXAgh21gnpikguNf6">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/CXAgh21gnpikguNf6</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahR.img1}>
                  <Image
                    key={uniqid()}
                    src={location.kawahR.img1}
                    alt={location.kawahR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahR.img2}>
                  <Image
                    key={uniqid()}
                    src={location.kawahR.img2}
                    alt={location.kawahR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahR.img3}>
                  <Image
                    key={uniqid()}
                    src={location.kawahR.img3}
                    alt={location.kawahR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahR.img4}>
                  <Image
                    key={uniqid()}
                    src={location.kawahR.img4}
                    alt={location.kawahR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahR.img5}>
                  <Image
                    key={uniqid()}
                    src={location.kawahR.img5}
                    alt={location.kawahR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahR.img6}>
                  <Image
                    key={uniqid()}
                    src={location.kawahR.img6}
                    alt={location.kawahR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahR.img7}>
                  <Image
                    key={uniqid()}
                    src={location.kawahR.img7}
                    alt={location.kawahR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahR.img8}>
                  <Image
                    key={uniqid()}
                    src={location.kawahR.img8}
                    alt={location.kawahR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahR.img9}>
                  <Image
                    key={uniqid()}
                    src={location.kawahR.img9}
                    alt={location.kawahR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahR.img10}>
                  <Image
                    key={uniqid()}
                    src={location.kawahR.img10}
                    alt={location.kawahR.name}
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

// Pemandian Air Panas Ciwalini
export function PemandianAPC() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Pemandian Air Panas Ciwalini ini memanfaatkan melimpahnya sumber mata air panas di alam sekitarnya. Terletak di kaki Gunung Patuha, di ketinggian 2.400 meter di atas permukaan laut, obyek wisata ini cukup sejuk serta
                  menyajikan pemandangan alam yang indah dan eksotik.
                </h3>

                <Link href="https://g.page/pemandian-air-panas-ciwalini?share">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://g.page/pemandian-air-panas-ciwalini?share</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPC.img1}>
                  <Image
                    key={uniqid()}
                    src={location.pemandianAPC.img1}
                    alt={location.pemandianAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPC.img2}>
                  <Image
                    key={uniqid()}
                    src={location.pemandianAPC.img2}
                    alt={location.pemandianAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPC.img3}>
                  <Image
                    key={uniqid()}
                    src={location.pemandianAPC.img3}
                    alt={location.pemandianAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPC.img4}>
                  <Image
                    key={uniqid()}
                    src={location.pemandianAPC.img4}
                    alt={location.pemandianAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPC.img5}>
                  <Image
                    key={uniqid()}
                    src={location.pemandianAPC.img5}
                    alt={location.pemandianAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPC.img6}>
                  <Image
                    key={uniqid()}
                    src={location.pemandianAPC.img6}
                    alt={location.pemandianAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPC.img7}>
                  <Image
                    key={uniqid()}
                    src={location.pemandianAPC.img7}
                    alt={location.pemandianAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPC.img8}>
                  <Image
                    key={uniqid()}
                    src={location.pemandianAPC.img8}
                    alt={location.pemandianAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPC.img9}>
                  <Image
                    key={uniqid()}
                    src={location.pemandianAPC.img9}
                    alt={location.pemandianAPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pemandianAPC.img10}>
                  <Image
                    key={uniqid()}
                    src={location.pemandianAPC.img10}
                    alt={location.pemandianAPC.name}
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

// Perkebunan Teh Rancabali
export function PerkebunanTR() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Perkebunan Teh Rancabali yang berada di daerah Ciwidey, Kabupaten Bandung, menyajikan pemandangan menawan dengan hamparan pohon-pohon tehnya yang terlihat sangat indah dan sejuk di mata. Karpet hijau mulus yang tersusun
                  oleh deretan rapat pohon teh yang sangat luas itu terlihat dalam perjalanan menuju ke Situ Patengan.
                </h3>

                <Link href="https://goo.gl/maps/SC2JcjFRerMvQL777">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/SC2JcjFRerMvQL777</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.perkebunanTR.img1}>
                  <Image
                    key={uniqid()}
                    src={location.perkebunanTR.img1}
                    alt={location.perkebunanTR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.perkebunanTR.img2}>
                  <Image
                    key={uniqid()}
                    src={location.perkebunanTR.img2}
                    alt={location.perkebunanTR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.perkebunanTR.img3}>
                  <Image
                    key={uniqid()}
                    src={location.perkebunanTR.img3}
                    alt={location.perkebunanTR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.perkebunanTR.img4}>
                  <Image
                    key={uniqid()}
                    src={location.perkebunanTR.img4}
                    alt={location.perkebunanTR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.perkebunanTR.img5}>
                  <Image
                    key={uniqid()}
                    src={location.perkebunanTR.img5}
                    alt={location.perkebunanTR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.perkebunanTR.img6}>
                  <Image
                    key={uniqid()}
                    src={location.perkebunanTR.img6}
                    alt={location.perkebunanTR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.perkebunanTR.img7}>
                  <Image
                    key={uniqid()}
                    src={location.perkebunanTR.img7}
                    alt={location.perkebunanTR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.perkebunanTR.img8}>
                  <Image
                    key={uniqid()}
                    src={location.perkebunanTR.img8}
                    alt={location.perkebunanTR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.perkebunanTR.img9}>
                  <Image
                    key={uniqid()}
                    src={location.perkebunanTR.img9}
                    alt={location.perkebunanTR.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.perkebunanTR.img10}>
                  <Image
                    key={uniqid()}
                    src={location.perkebunanTR.img10}
                    alt={location.perkebunanTR.name}
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

// Ranca Upas
export function Rancaupas() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>Ranca Upas atau Kampung Cai merupakan salah satu bumi perkemahan yang berada di Bandung, Jawa Barat. Tepatnya di Jalan Raya Ciwidey-Patengan, Desa Patengan, Kecamatan Rancabali, Kabupaten Bandung.</h3>
                <h3>
                  Kawasan ini menyuguhkan pemandangan asri dengan masih banyak pepohonan dan dikelilingi areal perbukitan yang indah. Jadi kondisi inilah yang membuat setiap minggunya selalu ramai dikunjungi wisatawan yang ingin menenangkan
                  pikiran sejenak atau liburan keluarga.
                </h3>
                <h3>
                  Di sana para pengunjung dapat menjajal berbagai macam areal wisata seperti berkemah, penangkaran rusa, wahana outbond seperti flying fox, paint ball, fun games dan lain- lain. Tempat ini sering kali menjadi tempat wisata
                  alternatif yang berada di Kabupaten Bandung.
                </h3>
                <Link href="https://goo.gl/maps/hjFCwFmBp1iqbDJo6">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/hjFCwFmBp1iqbDJo6</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rancaupas.img1}>
                  <Image
                    key={uniqid()}
                    src={location.rancaupas.img1}
                    alt={location.rancaupas.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rancaupas.img2}>
                  <Image
                    key={uniqid()}
                    src={location.rancaupas.img2}
                    alt={location.rancaupas.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rancaupas.img3}>
                  <Image
                    key={uniqid()}
                    src={location.rancaupas.img3}
                    alt={location.rancaupas.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rancaupas.img4}>
                  <Image
                    key={uniqid()}
                    src={location.rancaupas.img4}
                    alt={location.rancaupas.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rancaupas.img5}>
                  <Image
                    key={uniqid()}
                    src={location.rancaupas.img5}
                    alt={location.rancaupas.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rancaupas.img6}>
                  <Image
                    key={uniqid()}
                    src={location.rancaupas.img6}
                    alt={location.rancaupas.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rancaupas.img7}>
                  <Image
                    key={uniqid()}
                    src={location.rancaupas.img7}
                    alt={location.rancaupas.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rancaupas.img8}>
                  <Image
                    key={uniqid()}
                    src={location.rancaupas.img8}
                    alt={location.rancaupas.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rancaupas.img9}>
                  <Image
                    key={uniqid()}
                    src={location.rancaupas.img9}
                    alt={location.rancaupas.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rancaupas.img10}>
                  <Image
                    key={uniqid()}
                    src={location.rancaupas.img10}
                    alt={location.rancaupas.name}
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

// Rengganis Suspension Bridge
export function RengganisSB() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Rengganis Suspension Bridge membentang sepanjang 370 meter dengan ketinggian lebih dari 100 meter. Fakta tersebut mampu mengalahkan Situ Gunung Suspension Bridge yang memiliki panjang 240 meter. Dengan perbandingan
                  tersebut, Rengganis Suspension Bridge layak mendapat predikat sebagai jembatan terpanjang se-ASEAN.
                </h3>
                <h3>
                  Dikelola oleh grup Glamping Lakeside Rancabali, Ciwidey, Jembatan Rengganis menjadi pintu masuk menuju area Kawah Rengganis dan Air Panas Rengganis yang sudah terkenal lebih dulu. Tidak jauh dari lokasi jembatan ini,
                  terdapat juga objek wisata alam lainnya seperti Situ Patenggang, Ranca Upas, dan Nimo Highland.
                </h3>

                <Link href="https://goo.gl/maps/jrELYtTe9rR6V6U48">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/jrELYtTe9rR6V6U48</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rengganisSB.img1}>
                  <Image
                    key={uniqid()}
                    src={location.rengganisSB.img1}
                    alt={location.rengganisSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rengganisSB.img2}>
                  <Image
                    key={uniqid()}
                    src={location.rengganisSB.img2}
                    alt={location.rengganisSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rengganisSB.img3}>
                  <Image
                    key={uniqid()}
                    src={location.rengganisSB.img3}
                    alt={location.rengganisSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rengganisSB.img4}>
                  <Image
                    key={uniqid()}
                    src={location.rengganisSB.img4}
                    alt={location.rengganisSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rengganisSB.img5}>
                  <Image
                    key={uniqid()}
                    src={location.rengganisSB.img5}
                    alt={location.rengganisSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rengganisSB.img6}>
                  <Image
                    key={uniqid()}
                    src={location.rengganisSB.img6}
                    alt={location.rengganisSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rengganisSB.img7}>
                  <Image
                    key={uniqid()}
                    src={location.rengganisSB.img7}
                    alt={location.rengganisSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rengganisSB.img8}>
                  <Image
                    key={uniqid()}
                    src={location.rengganisSB.img8}
                    alt={location.rengganisSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rengganisSB.img9}>
                  <Image
                    key={uniqid()}
                    src={location.rengganisSB.img9}
                    alt={location.rengganisSB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rengganisSB.img10}>
                  <Image
                    key={uniqid()}
                    src={location.rengganisSB.img10}
                    alt={location.rengganisSB.name}
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

// Situ Patenggang
export function SituP() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Situ Patenggang atau Situ Patengan adalah suatu danau yang terletak di kawasan objek wisata alam Bandung Selatan, Jawa Barat, Indonesia, tepatnya di Ciwidey. Terletak di ketinggian 1600 meter di atas permukaan laut, danau
                  ini memiliki pemandangan yang sangat eksotik.
                </h3>
                <Link href="https://goo.gl/maps/5N1dftTDBn7BMv3p7">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/5N1dftTDBn7BMv3p7</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.situP.img1}>
                  <Image
                    key={uniqid()}
                    src={location.situP.img1}
                    alt={location.situP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.situP.img2}>
                  <Image
                    key={uniqid()}
                    src={location.situP.img2}
                    alt={location.situP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.situP.img3}>
                  <Image
                    key={uniqid()}
                    src={location.situP.img3}
                    alt={location.situP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.situP.img4}>
                  <Image
                    key={uniqid()}
                    src={location.situP.img4}
                    alt={location.situP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.situP.img5}>
                  <Image
                    key={uniqid()}
                    src={location.situP.img5}
                    alt={location.situP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.situP.img6}>
                  <Image
                    key={uniqid()}
                    src={location.situP.img6}
                    alt={location.situP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.situP.img7}>
                  <Image
                    key={uniqid()}
                    src={location.situP.img7}
                    alt={location.situP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.situP.img8}>
                  <Image
                    key={uniqid()}
                    src={location.situP.img8}
                    alt={location.situP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.situP.img9}>
                  <Image
                    key={uniqid()}
                    src={location.situP.img9}
                    alt={location.situP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.situP.img10}>
                  <Image
                    key={uniqid()}
                    src={location.situP.img10}
                    alt={location.situP.name}
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

// Taman Kelinci Happy Farm
export function TamanKHF() {
  return (
    <section>
      {ciwidey.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Happyfarm Ciwidey merupakan taman kelinci. Tapi, bukan sekedar taman kelinci. Salah satu objek wisata baru di Ciwidey ini hadir dengan konsep eduwisata. Di dalamnya menawarkan aneka wahana menarik untuk keluarga. Selain
                  taman kelinci, ada juga candy house, petting zoo, menunggang kuda, dan lain-lain.
                </h3>
                <h3>
                  Taman kelinci cukup terkenal mewakili Happy Farm Ciwidey. Bahkan, tidak sedikit juga yang menyebut tempat ini Taman Kelinci Ciwidey. Binatang yang lucu ini memang ikonik di sini. Terutama bagi keluarga yang bersama
                  anak-anak, rumah kelinci merupakan spot terfavorit menghabiskan waktu di Happyfarm.
                </h3>
                <Link href="https://goo.gl/maps/qXVU7Hnqu8VgQdhu6">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/qXVU7Hnqu8VgQdhu6</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanKHF.img1}>
                  <Image
                    key={uniqid()}
                    src={location.tamanKHF.img1}
                    alt={location.tamanKHF.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanKHF.img2}>
                  <Image
                    key={uniqid()}
                    src={location.tamanKHF.img2}
                    alt={location.tamanKHF.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanKHF.img3}>
                  <Image
                    key={uniqid()}
                    src={location.tamanKHF.img3}
                    alt={location.tamanKHF.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanKHF.img4}>
                  <Image
                    key={uniqid()}
                    src={location.tamanKHF.img4}
                    alt={location.tamanKHF.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanKHF.img5}>
                  <Image
                    key={uniqid()}
                    src={location.tamanKHF.img5}
                    alt={location.tamanKHF.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanKHF.img6}>
                  <Image
                    key={uniqid()}
                    src={location.tamanKHF.img6}
                    alt={location.tamanKHF.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanKHF.img7}>
                  <Image
                    key={uniqid()}
                    src={location.tamanKHF.img7}
                    alt={location.tamanKHF.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanKHF.img8}>
                  <Image
                    key={uniqid()}
                    src={location.tamanKHF.img8}
                    alt={location.tamanKHF.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanKHF.img9}>
                  <Image
                    key={uniqid()}
                    src={location.tamanKHF.img9}
                    alt={location.tamanKHF.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanKHF.img10}>
                  <Image
                    key={uniqid()}
                    src={location.tamanKHF.img10}
                    alt={location.tamanKHF.name}
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
