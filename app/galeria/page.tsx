import Hero from "@/components/layout/Hero";

import img from "@/assets/lel/galeriabanner.jpg";
import Title from "@/components/ui/Title";

import { events } from "@/data/events";
import Image from "next/image";
import EventButton from "@/components/ui/EventButton";

export default function galeria() {
  return (
    <>
      <Hero title="Galeria de Eventos" srcImage={img} />

      <section className="my-10">
        <Title title="Galeria" />
        <section className="mt-10 mb-20 mx-5 lg:mx-20 flex flex-col items-center my-20">
          {/* GRID EVENTS */}
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 font-title">
            {/* CARD EVENTS */}
            {events.map((item) => {
              return (
                <article
                  key={item.key}
                  className="flex flex-col bg-base-200 transition rounded-lg hover:shadow-xl shadow-base-300"
                >
                  <div className="h-44 relative m-5 -mb-2">
                    <Image
                      fill
                      className="object-cover rounded"
                      src={item.img}
                      placeholder="blur"
                      alt="img"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between h-[60%]">
                    <p className="capitalize text-md font-semibold line-clamp-3">
                      {item.name}
                    </p>

                    <div className="flex flex-col gap-2">
                      <EventButton
                        title={item.name}
                        date={item.data}
                        imageList={item.list}
                      />
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
