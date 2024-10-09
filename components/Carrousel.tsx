import Image from "next/image";
import React from "react";

interface Items {
  id: number; // Adicionando id como parte da interface
  title: string;
  sub: string; // Para o subtítulo
  img: string; // A imagem agora é uma string
}

interface CarrouselProps {
  items: Items[]; // Mudando para items
}

const Carrousel: React.FC<CarrouselProps> = ({ items }) => {
  return (
    <div className="carousel w-full h-[calc(100vh-68px)]">
      {items.map((item) => (
        <div
          key={item.id}
          id={`slide${item.id}`}
          className="carousel-item relative w-full grid place-items-center"
        >
          <Image
            width={1920}
            height={1080}
            loading="lazy"
            quality={80}
            src={item.img}
            alt={item.title}
            className="w-full absolute h-full object-cover"
          />
          <span className="bg-black/50 absolute left-0 top-0 h-full w-full" />
          <div className="text-white flex-col items-center gap-5 justify-center transform w-96 lg:w-[70em]">
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="text-lg">{item.sub}</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${item.id === 1 ? items.length : item.id - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${item.id === items.length ? 1 : item.id + 1}`}
              className="btn btn-circle"
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
