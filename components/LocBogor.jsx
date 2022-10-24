import uniqid from "uniqid";
import React from "react";
import { bogor } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";
import Link from "next/link";

// Curug Leuwi Hejo
export function CurugLH() {
  return (
    <section>
      {bogor.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Curug Leuwi Hejo merupakan salah satu destinasi wisata alam air terjun terkenal yang ada di kota Bogor. Meskipun kota Bogor memiliki banyak sekali air terjun, namun keindahan air terjun Leuwi Hejo memiliki daya tarik
                  tersendiri yang membuat para wisatawan datang ke air terjun ini.
                </h3>
                <h3>
                  Air terjun ini juga sering disebut sebagai “Green Canyon” nya kota Bogor. Hal ini dikarenakan air terjun Leuwi Hejo memiliki kolam berwarna hijau toska dibawah air terjunnya. Kolam berwarna hijau toska yang dimiliki Curug
                  Leuwi Hejo ini menambah keindahannya.
                </h3>
                <Link href="https://goo.gl/maps/6Fomb6Q2yPaEpT4b9">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/6Fomb6Q2yPaEpT4b9</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-4 gap-2">
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Gunung Pancar memiliki objek dan daya tarik wisata yang cukup menarik, yaitu pemandian air panas, makam keramat mbah putih yang di anggap sebagai leluhur oleh warga setempat dan menikmati pergelaran kesenian tradisional
                  daerah. Kegiatan wisata yang dapat dilakukan antara lain:
                </h3>
                <h3>• Wisata alam sambil olahraga (hiking, berkemah, berkuda, bersepeda, tenis, berenang (air panas), lintas alam) Wisata konvensi (berwisata sambil melakukan seminar, rapat, konferensi),</h3>
                <h3>• Wisata budaya (menikmati pergelaran seni tradisional dan ziarah ke makam keramat di Puncak Gunung Pancar).</h3>
                <h3>
                  Sarana prasarana wisata di Gunung Pancar di antaranya pusat informasi, pondok kerja, sarana olahraga, area kamping, tempat bermain anak, sarana pemandian air panas, rumah kecil, fasilitas penginapan dan ruang pertemuan.
                </h3>
                <Link href="https://goo.gl/maps/PgwuBe4LM8sV3Ae77">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/PgwuBe4LM8sV3Ae77</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Penangkaran Rusa Giri Jaya Cariu adalah taman penangkaran hewan rusa yang dikelola oleh Perhutani sebagai kawasan wisata yang menyenangkan. Tak hanya berwisata, lokasi ini juga bisa kamu jadikan sebagai wisata edukasi yang
                  ada di Bogor, Jawa Barat.
                </h3>
                <h3>
                  Jika biasanya liburan selalu identik dengan taman wisata dan sejenisnya, maka liburan kali ini dapat kamu nikmati dengan melihat tingkah lucu hewan rusa dan berbagai keindahan yang ada di taman ini. Tak hanya melihat hewan
                  rusa saja, kawasan ini juga menyediakan beberapa fasilitas permainan dan fasilitas kenyamanan untuk bersantai menikmati waktu libur yang menyenangkan.
                </h3>
                <Link href="https://goo.gl/maps/zQfcq8EK8KK19EFZ8">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/zQfcq8EK8KK19EFZ8</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Taman Safari Indonesia adalah tempat wisata keluarga berwawasan lingkungan yang berorientasi pada habitat satwa di alam bebas. Taman Safari Indonesia terletak di Desa Cibeureum Kecamatan Cisarua, Kabupaten Bogor, Jawa
                  Barat atau yang lebih dikenal dengan kawasan Puncak. Taman ini berfungsi menjadi penyangga Taman Nasional Gunung Gede Pangrango di ketinggian 900-1800 m di atas permukaan laut, serta mempunyai suhu rata-rata 16 - 24
                  derajat Celsius.
                </h3>
                <h3>
                  Keunikan tempat wisata ini dari kebun binatang lainnya di Indonesia adalah pengunjungnya bisa berkeliling ke berbagai tempat untuk bisa melihat dari dekat semua jenis binatang dengan memakai mobil pribadi ataupun naik bus
                  yang sudah disediakan pihak pengelola Taman Safari. Pengunjung juga bisa berinteraksi langsung dengan memberi makan hewan-hewan tersebut.
                </h3>
                <Link href="https://g.page/safaribogor?share">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://g.page/safaribogor?share</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-6 ">
            <div className="font-light p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p className="m-1 mb-4">
                <h3>
                  Kolam Air Panas Tirta Sanita Ciseeng terletak di Jalan Cogreg, Desa Bojong Indah, Kecamatan Parung, Bogor. Pemandian air panas ini berjarak sekitar 50 km dari kota Jakarta atau 1,5 jam perjalanan dengan mobil. Berdasarkan
                  penelitan TEMAC Thai Engineering Materials Analysis, C. Ltd., air panas di Tirta Sanita Ciseeng berasal dari gunung kapur yang mengandung belerang alami dan bermanfaat untuk mengobati penyakit tulang maupun kulit. Selain
                  itu, air panas di Tirta Sanita Ciseeng juga mengandung garam yang dapat membuat kulit menjadi semakin mulus setelah berendam.
                </h3>

                <Link href="https://goo.gl/maps/BNrAtTnzce9gVGTYA">
                  <div className="text-sm text-indigo-600 hover:cursor-pointer">https://goo.gl/maps/BNrAtTnzce9gVGTYA</div>
                </Link>
              </p>
              <div className="border-b-4 border-gray-400"></div>
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
