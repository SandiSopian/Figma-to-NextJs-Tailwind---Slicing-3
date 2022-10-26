import uniqid from "uniqid";
import React from "react";
import { cianjur } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";
import Link from "next/link";

// Istana Presiden Cipanas
export function IstanaPC() {
  return (
    <section>
      {cianjur.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Istana Kepresidenan Cipanas terletak di antara jalur Jalan Raya Jakarta dan Bandung arah Puncak, di sekitar 103 kilometer dari Jakarta, atau sekitar 20 kilometer dari kota Kabupaten Cianjur. Tepatnya, istana ini berlokasi
                  di Desa Cipanas, Kecamatan Pacet, Kabupaten Cianjur, di kaki Gunung Gede, Jawa Barat, pada ketinggian 1.100 meter dari permukaan laut. Bangunan istana berdiri di atas areal lebih kurang 26 hektar, dengan luas bangunan
                  sekitar 7.760 meter persegi.
                </h3>
                <h3>
                  Istana Cipanas dibangun sebagai tempat peristirahatan dan persinggahan. Udaranya bersih, sejuk, dan segar. Halamannya terbagi dalam dua areal, yakni areal taman istana dan areal hutan istana. Di dalamnya berdiri pula
                  sebuah rumah kebun mungil, tempat merancang bunga taman istana.
                </h3>
                <Link href="https://goo.gl/maps/JqqseFr5iNxYmQvh9">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/JqqseFr5iNxYmQvh9</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.istanaPC.img1}>
                  <Image
                    key={uniqid()}
                    src={location.istanaPC.img1}
                    alt={location.istanaPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.istanaPC.img2}>
                  <Image
                    key={uniqid()}
                    src={location.istanaPC.img2}
                    alt={location.istanaPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.istanaPC.img3}>
                  <Image
                    key={uniqid()}
                    src={location.istanaPC.img3}
                    alt={location.istanaPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.istanaPC.img4}>
                  <Image
                    key={uniqid()}
                    src={location.istanaPC.img4}
                    alt={location.istanaPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.istanaPC.img5}>
                  <Image
                    key={uniqid()}
                    src={location.istanaPC.img5}
                    alt={location.istanaPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.istanaPC.img6}>
                  <Image
                    key={uniqid()}
                    src={location.istanaPC.img6}
                    alt={location.istanaPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.istanaPC.img7}>
                  <Image
                    key={uniqid()}
                    src={location.istanaPC.img7}
                    alt={location.istanaPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.istanaPC.img8}>
                  <Image
                    key={uniqid()}
                    src={location.istanaPC.img8}
                    alt={location.istanaPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.istanaPC.img9}>
                  <Image
                    key={uniqid()}
                    src={location.istanaPC.img9}
                    alt={location.istanaPC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.istanaPC.img10}>
                  <Image
                    key={uniqid()}
                    src={location.istanaPC.img10}
                    alt={location.istanaPC.name}
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

// Kebon Raya Cibodas
export function KebonRC() {
  return (
    <section>
      {cianjur.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Kebun Raya Cibodas atau Cibodas Botanical Garden adalah taman hijau nan indah yang luasnya hampir 80 hektar dengan topografi lapangan yang bergelombang dan berbukit-bukit menjadikan kebun raya cibodas salah satu tujuan
                  wisata utama di kawasan Cibodas. Keindahan Kebun Raya Cibodas sudah terkenal sejak lama dan menjadi tujuan wisata domestik maupun mancanegara. Bahkan ahli fisiologi tumbuhan, Dr. F.W. Went menggambarkan keindahan Kebun
                  Raya Cibodas sebagai salah satu sorga dunia. Bahkan ada yang menjulukinya sebagai Taman Firdaus di Asia.
                </h3>

                <Link href="https://g.page/KebunRayaCibodas?share">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://g.page/KebunRayaCibodas?share</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebonRC.img1}>
                  <Image
                    key={uniqid()}
                    src={location.kebonRC.img1}
                    alt={location.kebonRC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebonRC.img2}>
                  <Image
                    key={uniqid()}
                    src={location.kebonRC.img2}
                    alt={location.kebonRC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebonRC.img3}>
                  <Image
                    key={uniqid()}
                    src={location.kebonRC.img3}
                    alt={location.kebonRC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebonRC.img4}>
                  <Image
                    key={uniqid()}
                    src={location.kebonRC.img4}
                    alt={location.kebonRC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebonRC.img5}>
                  <Image
                    key={uniqid()}
                    src={location.kebonRC.img5}
                    alt={location.kebonRC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebonRC.img6}>
                  <Image
                    key={uniqid()}
                    src={location.kebonRC.img6}
                    alt={location.kebonRC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebonRC.img7}>
                  <Image
                    key={uniqid()}
                    src={location.kebonRC.img7}
                    alt={location.kebonRC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebonRC.img8}>
                  <Image
                    key={uniqid()}
                    src={location.kebonRC.img8}
                    alt={location.kebonRC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebonRC.img9}>
                  <Image
                    key={uniqid()}
                    src={location.kebonRC.img9}
                    alt={location.kebonRC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebonRC.img10}>
                  <Image
                    key={uniqid()}
                    src={location.kebonRC.img10}
                    alt={location.kebonRC.name}
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

// Kebun Agro Inkarla
export function KebunAI() {
  return (
    <section>
      {cianjur.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Wisata Agro Inkarla salah satu obyek wisata menarik dikabupaten Cianjur yang menawarkan konsep penginapan dengan nuansa taman bunga. Taman bunga dengan latar belakang pegunungan yang sangat eksotis adalah salah satu dari
                  berbagai hal yang akan anda nikmati selama berwisata dan menginap di Wisata Agro Inkarla.
                </h3>
                <Link href="https://goo.gl/maps/ZeSR2DKczLhtdXVt6">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/ZeSR2DKczLhtdXVt6</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebunAI.img1}>
                  <Image
                    key={uniqid()}
                    src={location.kebunAI.img1}
                    alt={location.kebunAI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebunAI.img2}>
                  <Image
                    key={uniqid()}
                    src={location.kebunAI.img2}
                    alt={location.kebunAI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebunAI.img3}>
                  <Image
                    key={uniqid()}
                    src={location.kebunAI.img3}
                    alt={location.kebunAI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebunAI.img4}>
                  <Image
                    key={uniqid()}
                    src={location.kebunAI.img4}
                    alt={location.kebunAI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebunAI.img5}>
                  <Image
                    key={uniqid()}
                    src={location.kebunAI.img5}
                    alt={location.kebunAI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebunAI.img6}>
                  <Image
                    key={uniqid()}
                    src={location.kebunAI.img6}
                    alt={location.kebunAI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebunAI.img7}>
                  <Image
                    key={uniqid()}
                    src={location.kebunAI.img7}
                    alt={location.kebunAI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebunAI.img8}>
                  <Image
                    key={uniqid()}
                    src={location.kebunAI.img8}
                    alt={location.kebunAI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebunAI.img9}>
                  <Image
                    key={uniqid()}
                    src={location.kebunAI.img9}
                    alt={location.kebunAI.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.kebunAI.img10}>
                  <Image
                    key={uniqid()}
                    src={location.kebunAI.img10}
                    alt={location.kebunAI.name}
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

// Taman Bunga Nusantara
export function TamanBN() {
  return (
    <section>
      {cianjur.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Taman Bunga Nusantara adalah sebuah taman bunga seluas 35 hektare yang terletak dekat Gunung Gede Pangrango dan Kebun Teh Bogor dengan jarak tempuh sekitar 2,5 - 3 jam perjalanan dari Jakarta, tepatnya berada di antara dua
                  desa yaitu, Kawungluwuk, Sukaresmi, Cianjur dengan Sukawangi, Sukamakmur, Jonggol. Di taman ini disimpan berbagai tipe bunga dari seluruh dunia yang tumbuh di tempat ini, dalam hal ini terutama budi daya anggrek.
                  Diperkirakan ada sekitar 2000 jenis anggrek yang dirawat di tempat ini.
                </h3>
                <Link href="https://goo.gl/maps/8gAYp5pN518DbuBa8">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/8gAYp5pN518DbuBa8</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanBN.img1}>
                  <Image
                    key={uniqid()}
                    src={location.tamanBN.img1}
                    alt={location.tamanBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanBN.img2}>
                  <Image
                    key={uniqid()}
                    src={location.tamanBN.img2}
                    alt={location.tamanBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanBN.img3}>
                  <Image
                    key={uniqid()}
                    src={location.tamanBN.img3}
                    alt={location.tamanBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanBN.img4}>
                  <Image
                    key={uniqid()}
                    src={location.tamanBN.img4}
                    alt={location.tamanBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanBN.img5}>
                  <Image
                    key={uniqid()}
                    src={location.tamanBN.img5}
                    alt={location.tamanBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanBN.img6}>
                  <Image
                    key={uniqid()}
                    src={location.tamanBN.img6}
                    alt={location.tamanBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanBN.img7}>
                  <Image
                    key={uniqid()}
                    src={location.tamanBN.img7}
                    alt={location.tamanBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanBN.img8}>
                  <Image
                    key={uniqid()}
                    src={location.tamanBN.img8}
                    alt={location.tamanBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanBN.img9}>
                  <Image
                    key={uniqid()}
                    src={location.tamanBN.img9}
                    alt={location.tamanBN.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanBN.img10}>
                  <Image
                    key={uniqid()}
                    src={location.tamanBN.img10}
                    alt={location.tamanBN.name}
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

// Telaga Biru Cipanas
export function TelagaBC() {
  return (
    <section>
      {cianjur.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Telaga Biru merupakan sebuah destinasi alam berupa danau eksotis dengan air berwarna kebiruan. Terletak di Taman Nasional Gunung Gede Pangrango, spot ini menjadi pemandangan memukau kala mendaki Gunung Gede Pangrango atau
                  rekreasi ke objek wisata Air Terjun Cibeureum.
                </h3>
                <Link href="https://goo.gl/maps/s982nWTBE1CxETXr6">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/s982nWTBE1CxETXr6</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.telagaBC.img1}>
                  <Image
                    key={uniqid()}
                    src={location.telagaBC.img1}
                    alt={location.telagaBC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.telagaBC.img2}>
                  <Image
                    key={uniqid()}
                    src={location.telagaBC.img2}
                    alt={location.telagaBC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.telagaBC.img3}>
                  <Image
                    key={uniqid()}
                    src={location.telagaBC.img3}
                    alt={location.telagaBC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.telagaBC.img4}>
                  <Image
                    key={uniqid()}
                    src={location.telagaBC.img4}
                    alt={location.telagaBC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.telagaBC.img5}>
                  <Image
                    key={uniqid()}
                    src={location.telagaBC.img5}
                    alt={location.telagaBC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.telagaBC.img6}>
                  <Image
                    key={uniqid()}
                    src={location.telagaBC.img6}
                    alt={location.telagaBC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.telagaBC.img7}>
                  <Image
                    key={uniqid()}
                    src={location.telagaBC.img7}
                    alt={location.telagaBC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.telagaBC.img8}>
                  <Image
                    key={uniqid()}
                    src={location.telagaBC.img8}
                    alt={location.telagaBC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.telagaBC.img9}>
                  <Image
                    key={uniqid()}
                    src={location.telagaBC.img9}
                    alt={location.telagaBC.name}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:scale-110 transition-all duration-9000 shadow-sm cursor-pointer"
                  />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.telagaBC.img10}>
                  <Image
                    key={uniqid()}
                    src={location.telagaBC.img10}
                    alt={location.telagaBC.name}
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
