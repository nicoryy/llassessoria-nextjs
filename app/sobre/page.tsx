import heroimage from "@/assets/lel/caminhada.jpg";
import image1 from "@/assets/random/sobre2.jpg";
import image2 from "@/assets/random/sobre3.jpg";
import image3 from "@/assets/random/sobre5.jpg";

import Hero from "@/components/layout/Hero";
import Image from "next/image";
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
        <h1 className="text-primary font-bold font-title text-2xl ">
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

      <section className="py-20 px-20 bg-base-300 grid gap-10 grid-cols-1 lg:grid-cols-2 place-items-center">
        <Image
          loading="lazy"
          src={image1}
          quality={60}
          alt="image1"
          width={400}
          height={200}
          className="object-cover w-full"
        />

        <div className="grid gap-5">
          <div className="grid place-items-center gap-2">
            <h3 className="text-primary text-center lg:text-left font-bold font-title text-2xl">
              Encorajamento: Fortalecendo Capacidades e Confianças
            </h3>
            <hr className="w-32 items-center border-2 border-primary" />
          </div>

          <p className="lg:text-left text-center">
            Reconhecemos a importância de encorajar e capacitar aqueles que
            estão na linha de frente das ações governamentais. Oferecemos
            treinamentos, workshops e suporte contínuo para garantir que os
            profissionais do setor público estejam sempre preparados para
            enfrentar os desafios atuais e futuros. Promovemos um ambiente onde
            a confiança e a competência são cultivadas, permitindo que os
            servidores públicos desempenhem suas funções com excelência.
          </p>
        </div>
      </section>

      <section className="py-20 px-20 gap-10 flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 place-items-center order-last ">
        <div className="grid gap-5">
          <div className="grid place-items-center gap-2">
            <h3 className="text-primary text-center font-bold font-title text-2xl lg:text-right">
              Engajamento: Conectando Pessoas e Ideias
            </h3>
            <hr className="w-32 items-center border-2 border-primary" />
          </div>

          <p className="lg:text-right text-center">
            Entendemos que a participação ativa e a colaboração são essenciais
            para o progresso. Por isso, nos dedicamos a engajar todas as partes
            interessadas – desde servidores públicos e gestores até cidadãos –
            em um diálogo aberto e construtivo. Nosso objetivo é criar uma rede
            de cooperação onde ideias inovadoras possam florescer e serem
            implementadas com eficiência.
          </p>
        </div>

        <Image
          loading="lazy"
          quality={60}
          src={image2}
          alt="image2"
          width={400}
          height={200}
          className="object-cover w-full"
        />
      </section>

      <section className="py-20 px-20 bg-base-300 grid gap-10 grid-cols-1 lg:grid-cols-2 place-items-center">
        <Image
          loading="lazy"
          src={image3}
          quality={60}
          alt="image3"
          width={400}
          height={200}
          className="object-cover w-full"
        />

        <div className="grid gap-5">
          <div className="grid place-items-center gap-2">
            <h3 className="text-primary text-center lg:text-left font-bold font-title text-2xl">
              Compromisso com a Ética e a Transparência
            </h3>
            <hr className="w-32 items-center border-2 border-primary" />
          </div>

          <p className="lg:text-left text-center">
            Nossa atuação é guiada por princípios éticos e pela busca incessante
            por transparência. Nos comprometemos a agir com integridade em todas
            as nossas iniciativas, garantindo que cada ação e decisão esteja
            alinhada com os valores de justiça, equidade e responsabilidade
            social. Conclusão A L&L Assessoria e Serviços está empenhada em ser
            uma força motriz na evolução da gestão pública, promovendo um
            ambiente onde a inovação, a colaboração e a eficiência são
            prioridades. Convidamos todos a se juntarem a nós nesta jornada de
            transformação, onde cada passo é dado com propósito e cada decisão é
            tomada com convicção e responsabilidade.
          </p>
        </div>
      </section>
    </>
  );
}
