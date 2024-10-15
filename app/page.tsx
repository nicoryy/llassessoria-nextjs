import Carrousel from "@/components/ui/Carrousel";
import { data } from "@/data/CarrouselData";
import Image from "next/image";
import { FaSuitcase } from "react-icons/fa";

import img1 from "../assets/random/sobre1.jpg";
import img2 from "../assets/eventos/ampliando_itarema_cascavel/img1.jpg";
import Title from "@/components/ui/Title";
import CardBlog from "@/components/layout/CardBlog";

import { news } from "../data/news";

export default function Home() {
  return (
    <>
      <Carrousel items={data.map((item) => ({ ...item, img: item.img.src }))} />

      {/* Serviços */}
      <section className="my-20 lg:mx-40 mx-20">
        <Title title="Serviços" />

        <p className="text-normal my-8 mb-14 text-center">
          Os serviços prestados pela L&L Assessoria é composta por profissionais altamente
          capacitados e expertise demonstrada, atuante na área de Licitações e Contratações Públicas
          junto a órgãos públicos Prefeituras, Câmaras Municipais e Autarquias, instrui com
          orientações voltadas para melhor aplicação junto a gestão de recursos públicos. Nosso
          objetivo é garantir que nossos clientes estejam esclarecidos com a inovação e aplicação da
          Nova Lei de Licitações podendo lidar com as mais diversas ações nas contratações publicas
          de forma eficiente e estratégica.
        </p>

        <section
          className="grid gap-20 lg:grid-cols-2 place-items-center 
        grid-cols-1"
        >
          <div className="flex gap-5 max-w-[25rem]">
            <span>
              <FaSuitcase size={25} className="text-primary" />
            </span>
            <div>
              <p className="font-bold font-title text-xl text-primary ">
                Consultoria e Assessoria Especializada
              </p>
              <p className="text-sm">
                Esclarecemos dúvidas, fornecemos orientações e guiamos nossos clientes sobre
                procedimentos de maneira legal e coerente
              </p>
            </div>
          </div>
          <div className="flex gap-5 max-w-[25rem]">
            <span>
              <FaSuitcase size={25} className="text-primary" />
            </span>
            <div>
              <p className="font-bold font-title text-xl text-primary ">
                Acompanhamento de processos
              </p>
              <p className="text-sm">
                Utilizamos ferramentas para melhor acompanhamento de procedimentos administrativos
                nas contratações públicos do seu órgão
              </p>
            </div>
          </div>
          <div className="flex gap-5 max-w-[25rem]">
            <span>
              <FaSuitcase size={25} className="text-primary" />
            </span>
            <div>
              <p className="font-bold font-title text-xl text-primary ">Rotinas Administrativas</p>
              <p className="text-sm">
                Auxiliamos os setores envolvidos nos processos administrativos, para que possam
                desempenhas suas ações em obediências as normas e conceitos aplicados.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Divider */}
      <div className="w-full px-40">
        <div className="divider divider-primary"></div>
      </div>

      {/* Sobre */}
      <section className="my-20 lg:mx-40 mx-20">
        <Title title="Sobre a L&L" />

        <p className="text-normal my-5 text-center lg:mx-40">
          Com mais de 15 anos de experiência, a L&L Assessoria se dedica a fornecer serviços de
          consultoria personalizados que impulsionam o sucesso de instituições públicas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Image
            alt="Sobre Image"
            loading="lazy"
            quality={80}
            width={640}
            height={360}
            src={img2}
            className="rounded-2xl"
          />

          <div className="h-full flex flex-col gap-5">
            <p className="text-normal my-4 text-center">
              Na L&L Assessoria, somos especializados em desenvolver soluções sob medida para
              atender às necessidades exclusivas do planejamento e da gestão governamental. Nossa
              profunda compreensão do setor público, aliada ao nosso compromisso em aprimorar a
              eficiência operacional, garante estratégias que aumentam a eficácia e os resultados.
              Estamos comprometidos com o sucesso das instituições que atendemos, oferecendo
              expertise que promove o crescimento e o desenvolvimento no ambiente governamental.
            </p>
            <p className="text-normal my-4 text-center">
              Nosso diferencial está em nossa capacidade de adaptação às constantes mudanças
              legislativas e regulatórias. Acompanhamos de perto as novas demandas do setor público,
              como a implementação da Lei 14.133/21, garantindo que nossos clientes estejam sempre
              em conformidade e preparados para enfrentar os desafios atuais. Atuamos lado a lado
              com as instituições para transformar processos e maximizar resultados.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="overflow-hidden bg-base-300 sm:grid 
        sm:grid-cols-2 "
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl text-center ltr:sm:text-left 
          rtl:sm:text-right"
          >
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Simplifique Seus Processos com Especialistas na Lei 14.133/21
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Está com dúvidas sobre a nova Lei de Licitações? Fale conosco agora! Nossa equipe está
              pronta para assessorar você em cada etapa dos procedimentos administrativos. Entre em
              contato e obtenha o suporte que sua empresa precisa.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-accent px-12 py-3 
                text-sm font-medium text-white transition 
                hover:bg-primary-content
                hover:text-primary focus:outline-none focus:ring
                focus:ring-yellow-400"
              >
                Solicite Sua Consultoria
              </a>
            </div>
          </div>
        </div>

        <Image
          alt="CTA Image"
          loading="lazy"
          quality={80}
          width={640}
          height={360}
          src={img1}
          className="w-full object-cover h-56 lg:h-full"
        />
      </section>

      {/* Noticias */}
      <section className="my-20 lg:mx-40 mx-20">
        <Title title="Noticias" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-8">
          {news.map((item) => (
            <CardBlog
              key={item.id}
              title={item.title}
              description={item.desc}
              img={item.img}
              data={item.data}
              link={item.link}
            />
          ))}
        </div>
      </section>
    </>
  );
}
