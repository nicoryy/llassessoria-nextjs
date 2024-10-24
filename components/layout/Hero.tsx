import Image, { StaticImageData } from "next/image";

interface HeroProps {
  title: string;
  srcImage: StaticImageData;
}

const Hero = ({ title, srcImage }: HeroProps) => {
  return (
    <section className="hero h-64 relative overflow-hidden">
      <Image
        src={srcImage}
        placeholder='blur'
        alt={title}
        loading="lazy"
        quality={69}
        width={1200}
        height={600}
        className="object-cover absolute -z-50"
      />
      <div className="hero-overlay bg-black bg-opacity-70"></div>
      <div className="hero-content text-white relative w-full">
        <div className="max-w-md absolute left-20">
          <h1 className="mb-5 text-4xl font-semibold font-title">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
