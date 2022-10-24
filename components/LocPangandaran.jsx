import uniqid from "uniqid";
import React from "react";
import { pangandaran } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";
import Link from "next/link";

// Cagar Alam Pangandaran
export function CagarAP() {
  return (
    <section>
      {pangandaran.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Cagar Alam Pangandaran terletak di semenanjuk dan menjadi Batas Pantai Timur Pangandaran dan Pantai Barat Pangandaran. Di lokasi tersebut yang berupa Taman Nasional, terdapat berbagai macam flora dan fauna yang hidup
                  bebas, mandiri & dilindungi. Fauna yang hidup di Kawasan Konservasi Taman Wisata Alam ini banyak sekali jenisnya mulai dari monyet, lutung, landak, kijang, kelelawar dll. Kebanyakan adalah kiriman/bukan fauna asli dari
                  Cagar Alam. Adapun Flora yang hidup disini amat dijaga kelestariannya, masyarakat atau pengunjung tidak diperkenankan untuk mengambil atau menebang satu batang pohonpun.
                </h3>
                <Link href="https://goo.gl/maps/p6P9esQBTF6XkuY59">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/p6P9esQBTF6XkuY59</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.cagarAP.img1}>
                  <Image
                    key={uniqid}
                    src={location.cagarAP.img1}
                    alt={location.cagarAP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.cagarAP.img2}>
                  <Image
                    key={uniqid}
                    src={location.cagarAP.img2}
                    alt={location.cagarAP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.cagarAP.img3}>
                  <Image
                    key={uniqid}
                    src={location.cagarAP.img3}
                    alt={location.cagarAP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.cagarAP.img4}>
                  <Image
                    key={uniqid}
                    src={location.cagarAP.img4}
                    alt={location.cagarAP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.cagarAP.img5}>
                  <Image
                    key={uniqid}
                    src={location.cagarAP.img5}
                    alt={location.cagarAP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.cagarAP.img6}>
                  <Image
                    key={uniqid}
                    src={location.cagarAP.img6}
                    alt={location.cagarAP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.cagarAP.img7}>
                  <Image
                    key={uniqid}
                    src={location.cagarAP.img7}
                    alt={location.cagarAP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.cagarAP.img8}>
                  <Image
                    key={uniqid}
                    src={location.cagarAP.img8}
                    alt={location.cagarAP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.cagarAP.img9}>
                  <Image
                    key={uniqid}
                    src={location.cagarAP.img9}
                    alt={location.cagarAP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.cagarAP.img10}>
                  <Image
                    key={uniqid}
                    src={location.cagarAP.img10}
                    alt={location.cagarAP.name}
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

// Goa Lanang Selasari
export function GoaLS() {
  return (
    <section>
      {pangandaran.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Goa Lanang berawal dari sejarah Prabu Anggalarang mendapat julukan sebagai pangeran lanang yang berada di dusun cikawung, desa selasari, kecamatan Parigi, Pangandaran. Dia kemudian memilih goa untuk dijadikan sebagai
                  tempat untuk pemerintahannya. Maka dari itulah, sampai sekarang goa tersebut disebut dengan sebutan goa lanang. Sesuai dengan letak geografis lingkup kekuasaan Kerajaan Pananjung pada waktu itu adalah sekitar kota
                  Pangandaran saat ini dan sebelah barat dayanya. Karena kerajaannya sudah tidak ada, maka kini lokasi yang dulu menjadi keraton kini dijadikan sebagai salah satu lokasi wisata sejarah yang sangat unik dan menarik.
                </h3>
                <h3>
                  Disebut juga goa lanang karena didalamnya terdapat batuan endapan yang berbentuk seperti alat vital laki-laki. Keunikan dari Goa Lanang lainnya adalah wisatawan dapat menulusuri goa sepanjang 360 meter serta dapat berphoto
                  ria didalam goa untuk sekedar napak tilas sejarah yang telah terjadi di Goa Lanang.
                </h3>
                <Link href="https://g.page/goalanangselasari?share">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://g.page/goalanangselasari?share</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.goaLS.img1}>
                  <Image
                    key={uniqid}
                    src={location.goaLS.img1}
                    alt={location.goaLS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.goaLS.img2}>
                  <Image
                    key={uniqid}
                    src={location.goaLS.img2}
                    alt={location.goaLS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.goaLS.img3}>
                  <Image
                    key={uniqid}
                    src={location.goaLS.img3}
                    alt={location.goaLS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.goaLS.img4}>
                  <Image
                    key={uniqid}
                    src={location.goaLS.img4}
                    alt={location.goaLS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.goaLS.img5}>
                  <Image
                    key={uniqid}
                    src={location.goaLS.img5}
                    alt={location.goaLS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.goaLS.img6}>
                  <Image
                    key={uniqid}
                    src={location.goaLS.img6}
                    alt={location.goaLS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.goaLS.img7}>
                  <Image
                    key={uniqid}
                    src={location.goaLS.img7}
                    alt={location.goaLS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.goaLS.img8}>
                  <Image
                    key={uniqid}
                    src={location.goaLS.img8}
                    alt={location.goaLS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.goaLS.img9}>
                  <Image
                    key={uniqid}
                    src={location.goaLS.img9}
                    alt={location.goaLS.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.goaLS.img10}>
                  <Image
                    key={uniqid}
                    src={location.goaLS.img10}
                    alt={location.goaLS.name}
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

// Green Canyon
export function GreenC() {
  return (
    <section>
      {pangandaran.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Green Canyon merupakan wisata alam berupa aliran sungai yang diapit oleh dua buah bukit bebatuan yang menembus gua. Pada mulut goa dihiasi gemercik tetesan air yang menyerupai hujan abadi yang memberikan kesan kesempurnaan
                  akan keindahan alam.
                </h3>
                <h3>
                  Destinasi wisata yang terletak di Desa Kertayasa, Kecamatan Cijulang, Kabupaten Pangandaran ini memiliki beberapa titik atraksi wisata diantaranya Gua Cukang Taneuh, Batu Tengah, Batu Payung dan Pemandian Putri. Green
                  Canyon menawarkan aktivitas wisata mulai dari berperahu untuk wisatawan yang hanya ingin sekedar menikmati pemandangan alam, berenang, body rafting, terjun ke dalam air dan menjelajahi tebing bagi wisatawan yang menyukai
                  tantangan yang memacu adrenalin.
                </h3>
                <Link href="https://goo.gl/maps/wWiK3ZVyqUYAnQZ46">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/wWiK3ZVyqUYAnQZ46</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenC.img1}>
                  <Image
                    key={uniqid}
                    src={location.greenC.img1}
                    alt={location.greenC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenC.img2}>
                  <Image
                    key={uniqid}
                    src={location.greenC.img2}
                    alt={location.greenC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenC.img3}>
                  <Image
                    key={uniqid}
                    src={location.greenC.img3}
                    alt={location.greenC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenC.img4}>
                  <Image
                    key={uniqid}
                    src={location.greenC.img4}
                    alt={location.greenC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenC.img5}>
                  <Image
                    key={uniqid}
                    src={location.greenC.img5}
                    alt={location.greenC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenC.img6}>
                  <Image
                    key={uniqid}
                    src={location.greenC.img6}
                    alt={location.greenC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenC.img7}>
                  <Image
                    key={uniqid}
                    src={location.greenC.img7}
                    alt={location.greenC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenC.img8}>
                  <Image
                    key={uniqid}
                    src={location.greenC.img8}
                    alt={location.greenC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenC.img9}>
                  <Image
                    key={uniqid}
                    src={location.greenC.img9}
                    alt={location.greenC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.greenC.img10}>
                  <Image
                    key={uniqid}
                    src={location.greenC.img10}
                    alt={location.greenC.name}
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

// Konservasi Penyu
export function KonservasiP() {
  return (
    <section>
      {pangandaran.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Penangkaran atau konservasi penyu di Pangandaran dikelola oleh Kelompok Pelestari Biota Laut (KPBL) yang berada di Desa Ciliang, Kecamatan Parigi, Kabupaten Pangandaran, berjarak sekitar 17 Kilometer dari Tugu Marlin
                  Pangandaran dengan waktu tempuh sekitar 30 menit masih berada di satu kawasan wisata Batu Hiu ke arah barat.
                </h3>
                <h3>
                  Di tempat konservasi ini pengunjung diperbolehkan untuk bercengkrama dengan biota laut ini, mulai mengelus, memberi makan bahkan berphoto bersama penyu-penyu lucu yang berada di penangkaran tersebut. Jika sedang beruntung
                  pengunjung diperbolehkan ikut dalam pelepasan tukik (anak panyu) ke lautan bersama pengelola konservasi.
                </h3>

                <Link href="https://goo.gl/maps/aCabLwUAGFhNdjsj7">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/aCabLwUAGFhNdjsj7</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.konservasiP.img1}>
                  <Image
                    key={uniqid}
                    src={location.konservasiP.img1}
                    alt={location.konservasiP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.konservasiP.img2}>
                  <Image
                    key={uniqid}
                    src={location.konservasiP.img2}
                    alt={location.konservasiP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.konservasiP.img3}>
                  <Image
                    key={uniqid}
                    src={location.konservasiP.img3}
                    alt={location.konservasiP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.konservasiP.img4}>
                  <Image
                    key={uniqid}
                    src={location.konservasiP.img4}
                    alt={location.konservasiP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.konservasiP.img5}>
                  <Image
                    key={uniqid}
                    src={location.konservasiP.img5}
                    alt={location.konservasiP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.konservasiP.img6}>
                  <Image
                    key={uniqid}
                    src={location.konservasiP.img6}
                    alt={location.konservasiP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.konservasiP.img7}>
                  <Image
                    key={uniqid}
                    src={location.konservasiP.img7}
                    alt={location.konservasiP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.konservasiP.img8}>
                  <Image
                    key={uniqid}
                    src={location.konservasiP.img8}
                    alt={location.konservasiP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.konservasiP.img9}>
                  <Image
                    key={uniqid}
                    src={location.konservasiP.img9}
                    alt={location.konservasiP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.konservasiP.img10}>
                  <Image
                    key={uniqid}
                    src={location.konservasiP.img10}
                    alt={location.konservasiP.name}
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

// Pantai Pangandaran
export function PantaiPG() {
  return (
    <section>
      {pangandaran.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Pantai Pangandaran adalah salah satu pantai terbaik di Kabupaten Pangandaran yang letaknya berada paling selatan Jawa Barat dan berbatasan langsung dengan Samudera Hindia, tidak heran jika destinasi wisata ini tak pernah
                  absen oleh wisatawan lokal maupun mancanegara. Pantai ini merupakan icon pariwisata di Kabupaten Pangandaran.
                </h3>
                <h3>
                  Destinasi wisata ini memiliki dua sisi Pantai yaitu timur dan barat. Pantai Barat memiliki ombak yang tidak begitu besar dengan hamparan pasirnya yang luas membentang disepanjang sisinya. Aktifitas yang bisa dilakukan di
                  Pantai ini di antaranya seperti : berenang, menaiki perahu menuju Pasir Putih ataupun berkeliling di TWA Cagar Alam, snorkeling, berkuda, berkeliling Pangandaran dengan menyewa mobil gowes atau trail mini, surfing,
                  berjemur dibawah matahari atau menikmati pemandangan sekitar sembari menunggu menyaksikan matahari terbenam.
                </h3>
                <Link href="https://goo.gl/maps/u9tJwSpAJf4wsPrc9">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/u9tJwSpAJf4wsPrc9</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPG.img1}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPG.img1}
                    alt={location.pantaiPG.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPG.img2}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPG.img2}
                    alt={location.pantaiPG.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPG.img3}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPG.img3}
                    alt={location.pantaiPG.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPG.img4}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPG.img4}
                    alt={location.pantaiPG.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPG.img5}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPG.img5}
                    alt={location.pantaiPG.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPG.img6}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPG.img6}
                    alt={location.pantaiPG.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPG.img7}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPG.img7}
                    alt={location.pantaiPG.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPG.img8}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPG.img8}
                    alt={location.pantaiPG.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPG.img9}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPG.img9}
                    alt={location.pantaiPG.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiPG.img10}>
                  <Image
                    key={uniqid}
                    src={location.pantaiPG.img10}
                    alt={location.pantaiPG.name}
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
