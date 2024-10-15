import heroimage from "@/assets/random/low-angle-view-skyscrapers.jpg";

export default function sobre() {
  return (
    <>
      <section
        className="h-64 font-title font-medium flex justify-start items-center pl-20 text-[#f3f3f3] bg-no-repeat bg-cover text-5xl"
        style={{
          backgroundColor: "rgba(0, 0, 0, 1)", // adiciona uma cor preta com opacidade 0.5
          backgroundImage: `url(${heroimage.src})`,
        }}
      >
        Sobre a L & L
      </section>
    </>
  );
}
