import uniqid from "uniqid";
import React, { useEffect, useState } from "react";
import { bandung, bogor } from "../public/utils";
import GalleryContainer from "./GalleryContainer";
import Image from "next/image";

// // TagButton Filter
const TagButton = ({ name, handleSetTag, activeTag }) => {
  return (
    <button className={`tag ${activeTag ? "active" : null}`} onClick={() => handleSetTag(name)}>
      {name.replaceAll("-", " ")}
    </button>
  );
};

// Functions Bandung Gallery
export function GalleryBdg() {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag == "All" ? setFilteredImages(bandung) : setFilteredImages(bandung.filter((bandung) => bandung.tag == tag));
  }, [tag]);

  if (!bandung.length) return null;
  return (
    <section>
      <div className="pt-24 mx-auto ">
        <div className="flex justify-center flex-wrap gap-4 px-1 mb-5">
          <TagButton name="All" handleSetTag={setTag} activeTag={tag == "All" ? true : false} />
          <TagButton name="Curug-Dago" handleSetTag={setTag} activeTag={tag == "Curug-Dago" ? true : false} />
          <TagButton name="Gedung-Sate" handleSetTag={setTag} activeTag={tag == "Gedung-Sate" ? true : false} />
          <TagButton name="Jalan-Braga" handleSetTag={setTag} activeTag={tag == "Jalan-Braga" ? true : false} />
          <TagButton name="Kawah-Gunung-Tangkuban-Perahu" handleSetTag={setTag} activeTag={tag == "Kawah-Gunung-Tangkuban-Perahu" ? true : false} />
          <TagButton name="Taman-Hutan-Raya-Djuanda" handleSetTag={setTag} activeTag={tag == "Taman-Hutan-Raya-Djuanda" ? true : false} />
        </div>

        <GalleryContainer>
          {filteredImages.map((bandung) => (
            <div key={uniqid} className="flex rounded-lg bg-cover bg-center overflow-hidden transition-all duration-5000 shadow-2xl">
              <Image src={bandung.source} alt={bandung.name} placeholder={bandung.name} className="hover:cursor-pointer hover:scale-110 transition-all duration-9000 shadow-sm" />
            </div>
          ))}
        </GalleryContainer>
      </div>
    </section>
  );
}

// Functions Bogor Gallery
export function GalleryBgr() {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag == "All" ? setFilteredImages(bogor) : setFilteredImages(bogor.filter((bogor) => bogor.tag == tag));
  }, [tag]);

  if (!bogor.length) return null;
  return (
    <section>
      <div className="pt-24 mx-auto">
        <div className="flex justify-center flex-wrap gap-4 px-1 mb-5">
          <TagButton name="All" handleSetTag={setTag} activeTag={tag == "All" ? true : false} />
          <TagButton name="Curug-Leuwi-Hejo" handleSetTag={setTag} activeTag={tag == "Curug-Leuwi-Hejo" ? true : false} />
          <TagButton name="Gunung-Pancar" handleSetTag={setTag} activeTag={tag == "Gunung-Pancar" ? true : false} />
          <TagButton name="Penangkaran-Rusa-Giri-Jaya-Cariu" handleSetTag={setTag} activeTag={tag == "Penangkaran-Rusa-Giri-Jaya-Cariu" ? true : false} />
          <TagButton name="Taman-Safari-Indonesia" handleSetTag={setTag} activeTag={tag == "Taman-Safari-Indonesia" ? true : false} />
          <TagButton name="Tirta-Sanita-Ciseeng" handleSetTag={setTag} activeTag={tag == "Tirta-Sanita-Ciseeng" ? true : false} />
        </div>

        <GalleryContainer>
          {filteredImages.map((bogor) => (
            <div key={uniqid} className="flex rounded-lg bg-cover bg-center overflow-hidden transition-all duration-5000">
              <Image src={bogor.source} alt={bogor.name} placeholder={bogor.name} className="hover:cursor-pointer hover:scale-110 transition-all duration-9000 shadow-sm" />
            </div>
          ))}
        </GalleryContainer>
      </div>
    </section>
  );
}
