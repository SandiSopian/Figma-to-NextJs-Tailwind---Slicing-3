import uniqid from "uniqid";
import React, { useEffect, useState } from "react";
import { locations } from "../public/assets";

// // TagButton Filter

const TagButton = ({ name, handleSetTag, activeTag }) => {
  return (
    <button className={`tag ${activeTag ? "active" : null}`} onClick={() => handleSetTag(name)}>
      {name.replace("-", " ")}
    </button>
  );
};

export function Gallery() {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag == "All" ? setFilteredImages(locations) : setFilteredImages(locations.filter((locations) => locations.tag == tag));
  }, [tag]);

  if (!locations.length) return null;
  return (
    <section>
      <div className="pt-40 ">
        <div className="flex justify-center flex-wrap gap-4 px-1">
          <TagButton name="All" handleSetTag={setTag} activeTag={tag == "All" ? true : false} />
          <TagButton name="curug-dago" handleSetTag={setTag} activeTag={tag == "curug-dago" ? true : false} />
          <TagButton name="gedung-sate" handleSetTag={setTag} activeTag={tag == "gedung-sate" ? true : false} />
          <TagButton name="jalan-braga" handleSetTag={setTag} activeTag={tag == "jalan-braga" ? true : false} />
          <TagButton name="tangkuban-perahu" handleSetTag={setTag} activeTag={tag == "tangkuban-perahu" ? true : false} />
        </div>
        {filteredImages.map((locations) => (
          <div key={uniqid} className="p-4">
            <img src={locations.source} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function Gallery2() {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag == "All" ? setFilteredImages(locations) : setFilteredImages(locations.filter((locations) => locations.tag == tag));
  }, [tag]);

  if (!locations.length) return null;
  return (
    <section>
      <div className="pt-40">
        <TagButton name="All" handleSetTag={setTag} />
        <TagButton name="gedung-sate" handleSetTag={setTag} />
        {filteredImages.map((locations) => (
          <div key={uniqid}>
            <img src={locations.source} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
