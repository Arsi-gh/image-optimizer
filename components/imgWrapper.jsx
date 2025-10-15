import { usePercentage } from "@/provider/percentageProvider";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

let newWidth;
let newHeight;

export default function ImgWrapper({ img }) {
  const { file, imgUrl, name, size } = img;

  const imgRef = useRef();

  const { percentage } = usePercentage();

  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const imgElement = imgRef.current;

    const handleLoad = () => {
      if (imgElement) {
        setImgWidth(imgElement.naturalWidth);
        setImgHeight(imgElement.naturalHeight);
      }
    };

    if (imgElement && imgElement.complete) {
      handleLoad();
    } else if (imgElement) {
      imgElement.addEventListener("load", handleLoad);
    }

    console.log(String(name).split('.'))

    return () => {
      if (imgElement) {
        imgElement.removeEventListener("load", handleLoad);
      }
    };

  }, [imgUrl]);

  useEffect(() => {
    if (percentage == 100) return;

    newWidth = (imgWidth * percentage) / 100;
    newHeight = (imgHeight * percentage) / 100;

    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    canvas.width = newWidth;
    canvas.height = newHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);

    a.href = canvas.toDataURL("image/webp", 0.5);
    a.download = String(name).split('.')[0];
    a.click();
  }, [percentage]);

  return (
    <figure id="img-item" className="w-full p-2 flex gap-3 border rounded-xl border-zinc-800 relative" >
      <div className="size-18 rounded-[6px] bg-black/30 absolute top-2 left-2"></div>
      <Image ref={imgRef} onLoad={() => URL.revokeObjectURL(imgUrl)} width={100} height={100} alt={name} src={imgUrl} className="size-18 rounded-lg bg-zinc-800 border border-zinc-800 object-cover" />
      <figcaption className="text-xs text-zinc-400">
        <p className="text-sm mb-1 text-zinc-300">
          {name.length > 20 ? name.slice(0, 18) + "..." : name}
        </p>
        <p>width : {imgWidth}</p>
        <p>height : {imgHeight}</p>
        <p>{+size / 100} kb</p>
      </figcaption>
    </figure>
  );
}
