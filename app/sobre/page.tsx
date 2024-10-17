import heroimage from "@/assets/lel/caminhada.jpg";
import Hero from "@/components/layout/Hero";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function sobre() {
  return (
    <>
      <Hero title="Sobre a L & L" srcImage={heroimage} />
      <section className="my-10 mx-20 text-center lg:text-left">
        <h1 className="text-primary font-bold font-title text-2xl">
          Nossa Missão: Transformar a Gestão Pública com Consciência,
          Engajamento e Decisões Assertivas
        </h1>

        <div className="grid text-sm gap-5 lg:place-items-baseline place-items-center">
          <p>
            Na L&L Assessoria e Serviços, nossa missão é ser um catalisador na
            formação de uma nova consciência na gestão pública, trabalhando lado
            a lado com as ações de governo para promover mudanças significativas
            e duradouras. Acreditamos que a transformação real e sustentável na
            administração pública só pode ser alcançada através de um
            engajamento genuíno, encorajamento contínuo e um foco inabalável em
            decisões assertivas e bem fundamentadas.
          </p>
          <p>Vamos conversar!</p>
          <Link
            className="text-primary font-semibold underline"
            href="/contato"
          >
            contato_ll@hotmail.com
          </Link>
          <div className="flex gap-2">
            <a
              href="http://facebook.com/llassessoriaeservicos"
              className="p-1 rounded-md bg-primary"
            >
              <FaFacebook size={20} color="white" />
            </a>
            <a
              href="http://instagram.com/llassessoriaeservico"
              className="p-1 rounded-md bg-primary"
            >
              <FaInstagram size={20} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/ll-assessoria-e-serviços-6513ab216/?originalSubdomain=br"
              className="p-1 rounded-md bg-primary"
            >
              <FaLinkedin size={20} color="white" />
            </a>
            <a
              href="https://twitter.com/Llassessoria_"
              className="p-1 rounded-md bg-primary"
            >
              <FaXTwitter size={20} color="white" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
