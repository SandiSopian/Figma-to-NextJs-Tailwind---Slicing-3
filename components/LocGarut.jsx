import uniqid from "uniqid";
import React from "react";
import { garut } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";
import Link from "next/link";

// Curug Batu Nyusun
export function CurugBN() {
  return (
    <section>
      {garut.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>Curug Batu Nyusun adalah air terjun indah di tebing bebatuan yang indah pula. Dinamakan demikian karena tebingnya terlihat seperti bebatuan yang tersusun rapi dan berlapis-lapis.</h3>
                <h3>Lebih indah dilihat di saat musim kemarau. Karena jatuhan airnya lebih sedikit. Air terjun jatuh berundak-undak mengikuti bentuk tebingnya.</h3>
                <Link href="https://goo.gl/maps/gcizM6neJzr2XfXW7">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/gcizM6neJzr2XfXW7</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugBN.img1}>
                  <Image
                    key={uniqid()}
                    src={location.curugBN.img1}
                    alt={location.curugBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugBN.img2}>
                  <Image
                    key={uniqid()}
                    src={location.curugBN.img2}
                    alt={location.curugBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugBN.img3}>
                  <Image
                    key={uniqid()}
                    src={location.curugBN.img3}
                    alt={location.curugBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugBN.img4}>
                  <Image
                    key={uniqid()}
                    src={location.curugBN.img4}
                    alt={location.curugBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugBN.img5}>
                  <Image
                    key={uniqid()}
                    src={location.curugBN.img5}
                    alt={location.curugBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugBN.img6}>
                  <Image
                    key={uniqid()}
                    src={location.curugBN.img6}
                    alt={location.curugBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugBN.img7}>
                  <Image
                    key={uniqid()}
                    src={location.curugBN.img7}
                    alt={location.curugBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugBN.img8}>
                  <Image
                    key={uniqid()}
                    src={location.curugBN.img8}
                    alt={location.curugBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugBN.img9}>
                  <Image
                    key={uniqid()}
                    src={location.curugBN.img9}
                    alt={location.curugBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugBN.img10}>
                  <Image
                    key={uniqid()}
                    src={location.curugBN.img10}
                    alt={location.curugBN.name}
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

// Gunung Papandayan
export function GunungP() {
  return (
    <section>
      {garut.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Gunung Papandayan merupakan salah satu yang terbaik di kabupaten Garut. Banyak keindahan yang tidak dimiliki dari gunung gunung lainnya. Seperti padang bunga edelweiss dan hutan mati yang menjadi daya tarik dari gunung
                  yang pernah meletus di tahun 1772 ini. Menurut pendaki yang telah mendaki gunung ini, treck disini cukup mudah dan bersahabat, Cocok untuk pendaki pemula. Ada jalan aspal yang menghubungkan dari bawah hingga dekat kawah
                  gunung dan dapat dilalui oleh kendaraan bermotor seperti motor trail.
                </h3>
                <Link href="https://goo.gl/maps/3hC42neRdmPrjZrw6">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/3hC42neRdmPrjZrw6</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungP.img1}>
                  <Image
                    key={uniqid()}
                    src={location.gunungP.img1}
                    alt={location.gunungP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungP.img2}>
                  <Image
                    key={uniqid()}
                    src={location.gunungP.img2}
                    alt={location.gunungP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungP.img3}>
                  <Image
                    key={uniqid()}
                    src={location.gunungP.img3}
                    alt={location.gunungP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungP.img4}>
                  <Image
                    key={uniqid()}
                    src={location.gunungP.img4}
                    alt={location.gunungP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungP.img5}>
                  <Image
                    key={uniqid()}
                    src={location.gunungP.img5}
                    alt={location.gunungP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungP.img6}>
                  <Image
                    key={uniqid()}
                    src={location.gunungP.img6}
                    alt={location.gunungP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungP.img7}>
                  <Image
                    key={uniqid()}
                    src={location.gunungP.img7}
                    alt={location.gunungP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungP.img8}>
                  <Image
                    key={uniqid()}
                    src={location.gunungP.img8}
                    alt={location.gunungP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungP.img9}>
                  <Image
                    key={uniqid()}
                    src={location.gunungP.img9}
                    alt={location.gunungP.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungP.img10}>
                  <Image
                    key={uniqid()}
                    src={location.gunungP.img10}
                    alt={location.gunungP.name}
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

// Kawah Kamojang
export function KawahK() {
  return (
    <section>
      {garut.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Kawah kamojang merupakan kawah gunung berapi yang masih aktif, hal ini ditandai dengan adanya gemuruh uap yang dihasilkan keluar dari perut bumi. Pada awal memasuki kawasan ini, pemandangan yang tak biasa ditemui yaitu
                  banyak pipa-pipa besar yang berujung pada beberapa bangunan. Pipa tersebut adalah bagian Pembangkit Listrik Tenaga Panas Bumi (PLTP) yang dikelola oleh PT. Pertamina dan PT. Indonesia Power; dan disinilah untuk pertama
                  kalinya, energi panas bumi dimanfaatkan (seperti yang diusulkan warga kebangsaan Belanda, JB Van Dijk pada tahun 1918) secara komersial (1983).
                </h3>
                <h3>
                  Kawah Kamojang memiliki beberapa kawah antara lain kawah manuk, kawah kereta. Nama yang diberikan memiliki makna sendiri seperti kawah manuk yang dikarenakan beberapa lubang tersebut menghasilkan bunyi yang menyerupai
                  suara burung manuk atau kawah kereta karena bunyinya seperti kereta (lebih mirip suara pesawat jet).
                </h3>
                <Link href="https://goo.gl/maps/N7udic7jNfjs6Trc9">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/N7udic7jNfjs6Trc9</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahK.img1}>
                  <Image
                    key={uniqid()}
                    src={location.kawahK.img1}
                    alt={location.kawahK.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahK.img2}>
                  <Image
                    key={uniqid()}
                    src={location.kawahK.img2}
                    alt={location.kawahK.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahK.img3}>
                  <Image
                    key={uniqid()}
                    src={location.kawahK.img3}
                    alt={location.kawahK.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahK.img4}>
                  <Image
                    key={uniqid()}
                    src={location.kawahK.img4}
                    alt={location.kawahK.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahK.img5}>
                  <Image
                    key={uniqid()}
                    src={location.kawahK.img5}
                    alt={location.kawahK.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahK.img6}>
                  <Image
                    key={uniqid()}
                    src={location.kawahK.img6}
                    alt={location.kawahK.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahK.img7}>
                  <Image
                    key={uniqid()}
                    src={location.kawahK.img7}
                    alt={location.kawahK.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahK.img8}>
                  <Image
                    key={uniqid()}
                    src={location.kawahK.img8}
                    alt={location.kawahK.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahK.img9}>
                  <Image
                    key={uniqid()}
                    src={location.kawahK.img9}
                    alt={location.kawahK.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kawahK.img10}>
                  <Image
                    key={uniqid()}
                    src={location.kawahK.img10}
                    alt={location.kawahK.name}
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

// Kompleks Wisata Cipanas
export function KompleksWC() {
  return (
    <section>
      {garut.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Objek wisata cipanas garut merupakan salah satu obejek wisata yang paling banyak dikunjungi. Lokasinya yang strategis dan dekat dengan pusat kota Garut membuat temapat wista yang satu ini selalu ramai pengunjung menjelang
                  akhir pekan dan hari libur. Cipanas merupakan nama suatu daerah yang berada dikawasan kecamatan Tarogong Kaler. Dikawasan cipanas terdapat banyak hotel dan penginapan serta kolam pemandian air panas atau water park. Baga
                  para pecinta wahana air kawasan ini sangat cocok untuk anda yang ingin berlibur bersama keluarga tercinta menghabiskan waktu dalam hangatnya air cipanas bersama-sama bersenang-senang dan bergembira sambil menikmati
                  indahnya pemandangan Gunung Guntur dan suasana kota Garut.
                </h3>

                <Link href="https://goo.gl/maps/NTFLRHTCe8P6C7qeA">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/NTFLRHTCe8P6C7qeA</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kompleksWC.img1}>
                  <Image
                    key={uniqid()}
                    src={location.kompleksWC.img1}
                    alt={location.kompleksWC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kompleksWC.img2}>
                  <Image
                    key={uniqid()}
                    src={location.kompleksWC.img2}
                    alt={location.kompleksWC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kompleksWC.img3}>
                  <Image
                    key={uniqid()}
                    src={location.kompleksWC.img3}
                    alt={location.kompleksWC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kompleksWC.img4}>
                  <Image
                    key={uniqid()}
                    src={location.kompleksWC.img4}
                    alt={location.kompleksWC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kompleksWC.img5}>
                  <Image
                    key={uniqid()}
                    src={location.kompleksWC.img5}
                    alt={location.kompleksWC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kompleksWC.img6}>
                  <Image
                    key={uniqid()}
                    src={location.kompleksWC.img6}
                    alt={location.kompleksWC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kompleksWC.img7}>
                  <Image
                    key={uniqid()}
                    src={location.kompleksWC.img7}
                    alt={location.kompleksWC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kompleksWC.img8}>
                  <Image
                    key={uniqid()}
                    src={location.kompleksWC.img8}
                    alt={location.kompleksWC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kompleksWC.img9}>
                  <Image
                    key={uniqid()}
                    src={location.kompleksWC.img9}
                    alt={location.kompleksWC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kompleksWC.img10}>
                  <Image
                    key={uniqid()}
                    src={location.kompleksWC.img10}
                    alt={location.kompleksWC.name}
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

// Pantai Rancabuaya
export function PantaiRB() {
  return (
    <section>
      {garut.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Ranca Buaya adalah tempat wisata pantai yang berada di sebelah Kabupaten Garut, Jawa Barat. Ranca Buaya ini terletak di kecamatan Caringin. Jarak untuk mencapai laut ini dari pusat kota Kabupaten Garut sekitar kurang lebih
                  90 km atau dengan perjalanan darat membutuhkan waktu sekitar 4 jam perjalanan.
                </h3>
                <h3>
                  Pantai ini tidak cocok untuk dijadikan tempat berenang, karena memiliki banyak batuan karang yang cukup besar. Selain itu, bagian barat pantai berbatasan langsung dengan Samudera Hindia, maka ombaknya cukup besar. Meski
                  tidak bisa berenang, kamu masih bisa melihat ikan-ikan kecil yang terjebak diantara batuan karang dan menikmati ikan hasil tangkapan nelayan.
                </h3>
                <Link href="https://goo.gl/maps/q2yg7aFGL32Y2gFH8">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/q2yg7aFGL32Y2gFH8</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiRB.img1}>
                  <Image
                    key={uniqid()}
                    src={location.pantaiRB.img1}
                    alt={location.pantaiRB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiRB.img2}>
                  <Image
                    key={uniqid()}
                    src={location.pantaiRB.img2}
                    alt={location.pantaiRB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiRB.img3}>
                  <Image
                    key={uniqid()}
                    src={location.pantaiRB.img3}
                    alt={location.pantaiRB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiRB.img4}>
                  <Image
                    key={uniqid()}
                    src={location.pantaiRB.img4}
                    alt={location.pantaiRB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiRB.img5}>
                  <Image
                    key={uniqid()}
                    src={location.pantaiRB.img5}
                    alt={location.pantaiRB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiRB.img6}>
                  <Image
                    key={uniqid()}
                    src={location.pantaiRB.img6}
                    alt={location.pantaiRB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiRB.img7}>
                  <Image
                    key={uniqid()}
                    src={location.pantaiRB.img7}
                    alt={location.pantaiRB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiRB.img8}>
                  <Image
                    key={uniqid()}
                    src={location.pantaiRB.img8}
                    alt={location.pantaiRB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiRB.img9}>
                  <Image
                    key={uniqid()}
                    src={location.pantaiRB.img9}
                    alt={location.pantaiRB.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.pantaiRB.img10}>
                  <Image
                    key={uniqid()}
                    src={location.pantaiRB.img10}
                    alt={location.pantaiRB.name}
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
