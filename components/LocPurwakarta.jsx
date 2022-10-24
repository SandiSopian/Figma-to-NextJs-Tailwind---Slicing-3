import uniqid from "uniqid";
import React from "react";
import { purwakarta } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";
import Link from "next/link";

// Curug Cipurut
export function CurugC() {
  return (
    <section>
      {purwakarta.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Curug Cipurut berada di kaki Gunung Burangrang dan termasuk dalam Kawasan Cagar Alam Gunung Burangrang sehingga pengelolaan saat ini masih dilakukan oleh Balai Konservasi Sumber Daya Alam Jabar I dengan operasional
                  dilapangan dibantu oleh Desa Sumurugul dan Desa Wanayasa.
                </h3>
                <h3>
                  Kondisi curug secara umum dibagi kedalam tiga bagian yaitu curug utama yang terdapat di ujung tebing dengan tinggi ± 25 m, serta dua curug lainnya yang lebih landai yang biasanya digunakan oleh pengunjung sebagai tempat
                  seluncur. Pada curug utama aliran air jatuh seperti tangga melewati batu-batu yang tersusun menurun ke bawah. aliran airnya tidak terlalu keras sehinga dapat dinikmati secara dekat untuk mandi atau membasuh muka.
                </h3>
                <Link href="https://goo.gl/maps/viQNeP5uA5fMJMR88">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/viQNeP5uA5fMJMR88</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Nama Pasir Langlang sendiri disematkan oleh warga sekitar, dengan pasir yang berarti bukit dalam bahasa Sunda, sementara langlang berarti mengembara ke suatu tempat. Tak heran, karena lokasi ini memang berada di ketinggian
                  dengan jajaran pepohonan di sekitarnya. Melancong ke sini serasa menyesatkan diri di dalam hutan dan memungkinkan seseorang untuk melupakan sejenak rutinitas yang padat.
                </h3>
                <h3>
                  Terletak 28,5 km jauhnya dari pusat kota Purwakarta, atau bisa ditempuh dengan satu jam berkendara, kawasan seluas 43 hektar ini menawarkan panorama indah dan sejuknya udara dengan pepohonan pinus yang terhampar sepanjang
                  mata memandang.
                </h3>
                <Link href="https://goo.gl/maps/daqfdht5H3qjvZac8">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/daqfdht5H3qjvZac8</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Sumber Air Panas Ciracas merupakan salah satu objek tempat wisata di Purwakarta berupa pemandian yang dikelilingi oleh pepohonan dan hamparan sawah. Objek tempat wisata di Purwakarta yang satu ini memiliki udara yang sejuk
                  segar khas pedesaan. Disini terdapat dua kolam pemandian utama dan terpisah antara laki-laki dengan perempuan. Kolamnya sendiri seperti bak di kamar mandi berbentuk persegi panjang dengan ukuran sekitar 5×10 meter.
                </h3>
                <h3>
                  Nah bagi kalian yang ingin refreshing untuk menjernihkan, tempat wisata yang satu ini dapat kalian kunjungi. Kalian bisa menikmati kesegaran air panasnya yang jernih dan menyegarkan. Bahkan katanya mandi di tempat ini
                  dipercaya dapat menyembukan berbagai penyakit kulit, rematik, pegal-pegal dan lain sebagainya.
                </h3>
                <Link href="https://goo.gl/maps/vnaUqTUSUKvwhT8G8">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/vnaUqTUSUKvwhT8G8</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Taman Air Sri Baduga dilengkapi dengan air mancur menari setinggi enam meter, serta papan berbentuk “T” di tengah danau yang diperuntukkan sebagai tempat pementasan tari di sela pertunjukkan air mancur. Untuk melengkapi
                  suasana taman, sorotan lampu laser siap memberi efek untuk memperindah Taman Air Mancur Sri Baduga.
                </h3>
                <h3>
                  Taman Air Mancur Sri Baduga kini memiliki kurang lebih 100 pipa yang bisa memancarkan air setinggi 10 meter. Pipa air tersebut mengelilingi taman air berluas 2 hektar. Berhiaskan kerlap-kerlip lampu dengan paduan warna
                  yang cantik, dan juga musik yang membuat air ‘menari’ mengikuti irama.
                </h3>
                <Link href="https://goo.gl/maps/Y1eoJkfR5DvNNfudA">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/Y1eoJkfR5DvNNfudA</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Waduk Jatiluhur adalah sebuah waduk yang terletak di Kecamatan Jatiluhur, Kabupaten Purwakarta, Provinsi Jawa Barat (±9 km dari pusat Kota Purwakarta). Waduk yang resminya diberi nama Waduk Ir. H. Juanda ini adalah waduk
                  terbesar di Indonesia. Waduk Jatiluhur memikiki potensi air sebesar 12,9 miliar m3/tahun dan merupakan waduk serbaguna pertama di Indonesia.
                </h3>
                <h3>
                  Selain berfungsi sebagai PLTA dengan sistem limpasan terbesar di dunia, kawasan Jatiluhur memiliki banyak fasilitas rekreasi yang memadai, seperti hotel dan bungalow, bar dan restaurant, lapangan tenis, bilyard,
                  perkemahan, kolam renang dengan water slide, ruang pertemuan, sarana rekreasi dan olahraga air, playground dan fasilitas lainnya. Sarana olahraga dan rekreasi air misalnya mendayung, selancar angin, kapal pesiar, ski air,
                  boating dan lainnya.{" "}
                </h3>
                <Link href="https://goo.gl/maps/7TLoatgdWBsDz9x46">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/7TLoatgdWBsDz9x46</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
