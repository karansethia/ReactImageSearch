import React from "react";
import {createPortal} from "react-dom";
import {Icon} from "@iconify/react";

const ImageContent = (props) => {
  console.log(props.content);
  return (
    <div className="fixed z-10 mt-14 bg-slate-100 rounded-lg p-3">
      <div className="flex justify-between">
        <h1 className="font-header text-base font-semibold">Image details</h1>
        <Icon
          icon="icomoon-free:cross"
          onClick={props.onclose}
          color="purple"
          className="cursor-pointer"
        />
      </div>
      <img src={props.content.url} className="w-72 h-100 p-5" />
      <div className="flex align-middle px-5 justify-start gap-1">
        <Icon icon="mdi:user-outline" className="mt-1" />
        <p className="font-content">{props.content.username}</p>
      </div>
      <div className="flex align-middle px-5 justify-start gap-1">
        <Icon icon="clarity:heart-solid" color="red" className="mt-1" />
        <p className="font-content">{props.content.likes}</p>
      </div>
    </div>
  );
};
const ImageModal = (props) => {
  return (
    <>
      {createPortal(
        <div className="flex justify-center align-end w-full h-full">
          <ImageContent content={props.content} onclose={props.onclose} />
        </div>,
        document.getElementById("image")
      )}
    </>
  );
};

export default ImageModal;
