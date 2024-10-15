import { StaticImageData } from "next/image";

interface HeroProps {
  title: string;
  srcImage: StaticImageData;
}

const Hero = ({ title, srcImage }: HeroProps) => {
  return (
    <section
      className="hero min-h-48"
      style={{
        backgroundImage: "url(" + srcImage.src + ")",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-white text-left">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold font-title">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
