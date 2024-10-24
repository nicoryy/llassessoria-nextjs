import Image, { StaticImageData } from "next/image";
import React from "react";

interface Item {
  id: number;
  title: string;
  sub: string;
  img: StaticImageData;
}

const Carrousel = ({ items }: { items: Item[] }) => {
  return (
    <div className="carousel w-full h-[calc(100vh-68px)]">
      {items.map((item) => (
        <div
          key={item.id}
          id={`slide${item.id}`}
          className="carousel-item relative w-full grid place-items-center"
        >
          <Image
            placeholder="blur"
            width={1920}
            height={1080}
            loading="lazy"
            quality={80}
            src={item.img}
            alt={item.title}
            className="w-full absolute h-full object-cover"
          />
          <span className="bg-black/50 absolute left-0 top-0 h-full w-full" />
          <div className="text-white flex-col items-center justify-center transform w-96 lg:w-[60em] text-center">
            <h1 className="text-3xl font-bold mb-10 uppercase">{item.title}</h1>
            <p className="text-xl">{item.sub}</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${item.id === 1 ? items.length : item.id - 1}`}
              className="btn-circle text-3xl text-[#f3f3f3]"
            >
              ❮
            </a>
            <a
              href={`#slide${item.id === items.length ? 1 : item.id + 1}`}
              className="btn-circle text-3xl text-[#f3f3f3]"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
