import uniqid from "uniqid";
import React, { useEffect, useState } from "react";
import { locations } from "../public/assets";

function Gallery({ name }) {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag == "All" ? setFilteredImages(locations) : setFilteredImages(locations.filter((locations) => locations.tag == tag));
  }, [tag]);

  if (!locations.length) return null;
  return (
    <section>
      <div className="pt-40">
        <TagButton name={name} handleSetTag={setTag} />
        {filteredImages.map((locations) => (
          <div key={uniqid} name={name}>
            <img src={locations.source} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

// // TagButton Filter
const TagButton = ({ name, handleSetTag }) => {
  return <button onClick={() => handleSetTag(name)}>{name}</button>;
};

export default Gallery;
