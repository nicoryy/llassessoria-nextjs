import Hero from "@/components/layout/Hero";

import img from "@/assets/lel/galeriabanner.jpg";
import Title from "@/components/ui/Title";

import { events } from "@/data/events";
import Image from "next/image";

export default function galeria() {
  return (
    <>
      <Hero title="Galeria de Eventos" srcImage={img} />

      <section className="my-20">
        <Title title="Galeria" />
        <section className="mt-10 mb-20 mx-20 flex flex-col items-center my-20">
          {/* GRID EVENTS */}
          <section className="grid lg:grid-cols-4 gap-5 font-title">
            {/* CARD EVENTS */}
            {events.map((item) => {
              return (
                <article
                  key={item.key}
                  className="flex flex-col bg-base-200 transition rounded-lg hover:shadow-xl shadow-base-300"
                >
                  <div className="h-44 relative">
                    <Image
                      fill
                      className="object-cover"
                      src={item.img}
                      alt="img"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between h-[60%]">
                    <p className="capitalize text-md font-semibold line-clamp-3">
                      {item.name}
                    </p>

                    <div className="flex flex-col gap-2">
                      <button
                        className="flex items-center gap-2 w-24 relative border-ppwoodland text-sm"
                        // onClick={() => detailPage(item)}
                      >
                        <p className="text-sm text-primary font-bold uppercase">
                          Ler Mais <span>→</span>
                        </p>
                      </button>
                      <p className="text-xs">{item.data}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
}
