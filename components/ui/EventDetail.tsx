import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

interface Event {
  key: number;
  name: string;
  data: string;
  img: StaticImageData;
  list: { key: number; ref: StaticImageData }[];
}

const EventDetail = ({
  item,
  onClose,
}: {
  item: Event;
  onClose: () => void;
}) => {
  const blackRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (blackRef.current && !blackRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <section
      ref={blackRef}
      key={item.key}
      className="w-full h-full font-title bg-black bg-opacity-70 fixed z-50 grid place-items-center"
    >
      <IoClose
        size={50}
        color="black"
        className="bg-white rounded-full cursor-pointer absolute top-10 right-10"
        onClick={onClose}
      />
      <article className="bg-white rounded py-10 px-20 h-[34rem] lg:w-[60rem] w-96 flex flex-col gap-5">
        <p className="text-2xl font-medium  text-ppwoodland">{item.name}</p>
        <p>{item.data}</p>
        <div className=" overflow-y-scroll">
          <div
            className="grid lg:grid-cols-3 gap-5"
          >
            {item.list.map((image) => (
              <Image
                width={240}
                height={240}
                key={image.key}
                src={image.ref}
                alt={'imagem'}
                className="w-60"
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default EventDetail;