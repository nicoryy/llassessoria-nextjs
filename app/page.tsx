import Carrousel from "@/components/Carrousel";
import { data } from "@/data/CarrouselData";

export default function Home() {
  return (
    <>
      <Carrousel items={data.map((item) => ({ ...item, img: item.img.src }))} />
    </>
  );
}
