import React, {useState} from "react";
import ImageModal from "./ImageModal";
import {Icon} from "@iconify/react";

const ImageContainer = ({data}) => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState({});
  const closeHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <ImageModal content={content} onclose={closeHandler} />}
      <h1 className="text-sm px-10">Results for query</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-10">
        {data.map((img, key) => (
          <div
            key={key}
            className="shadow-md rounded-md"
            onClick={() => {
              setShowModal(true);
              setContent({
                url: img.urls.full,
                likes: img.likes,
                username: img.user.first_name,
              });
            }}
          >
            <img
              src={img.urls.full}
              key={key}
              className="w-72 h-72 rounded-md object-cover"
            />
            <div className="flex justify-between py-2">
              <div className="flex align-middle justify-start gap-1">
                <Icon icon="mdi:user-outline" className="mt-1" />
                <p className="font-content text-sm">{img.user.first_name}</p>
              </div>
              <div className="flex align-middle px-5 justify-start gap-1">
                <Icon icon="clarity:heart-solid" color="red" className="mt-1" />
                <p className="font-content text-sm">{img.likes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageContainer;
