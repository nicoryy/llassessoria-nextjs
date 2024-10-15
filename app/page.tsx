import Carrousel from "@/components/ui/Carrousel";
import { data } from "@/data/CarrouselData";
import Image from "next/image";
import { FaClock, FaPhoneAlt, FaSuitcase } from "react-icons/fa";

import img1 from "../assets/random/sobre1.jpg";
import img2 from "../assets/eventos/ampliando_itarema_cascavel/img1.jpg";
import Title from "@/components/ui/Title";
import CardBlog from "@/components/layout/CardBlog";

import { news } from "../data/news";
import { prefeituras } from "@/data/prefeituras";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Carrousel items={data.map((item) => ({ ...item, img: item.img.src }))} />

      {/* Serviços */}
      <section className="my-20 lg:mx-40 mx-10">
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
      <section className="my-20 lg:mx-40 mx-10">
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
                hover:text-primary"
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
      <section className="my-20 lg:mx-40 mx-10">
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

      {/* Clientes */}
      <section className="my-20 lg:mx-40 mx-10 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Title title="Clientes" />
          <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 xl:grid-cols-4">
            {prefeituras.map((item) => (
              <a
                href={item.link}
                target="_blank"
                key={item.key}
                className="flex justify-center items-center bg-base-300 shadow-sm h-24 rounded-2xl"
              >
                <img src={item.img.src} className="w-32" alt={item.name} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="my-20 lg:mx-40 mx-10">
        <section className="bg-base-200">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <Title title="Contato" />

            <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8">
              <article className="grid grid-cols-2 lg:pl-0 gap-5 justify-items-center">
                <div className="flex flex-col text-center lg:flex-row lg:text-left gap-5 items-center">
                  <div className="bg-primary p-2 rounded-full items-center">
                    <FaPhoneAlt size={20} color="white" className="relative" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-primary">Telefone</p>
                    <p className="text-sm text-base-content">(85) 3621-3181</p>
                  </div>
                </div>

                <div className="flex flex-col text-center lg:flex-row lg:text-left gap-5 items-center">
                  <div className="bg-primary p-2 rounded-full items-center">
                    <IoMdMail size={20} color="white" className="relative" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-primary">E-mail</p>
                    <p className="text-sm text-base-content break-words lg:max-w-none max-w-14">
                      contato_ll@hotmail.com
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-center lg:flex-row lg:text-left gap-5 items-center">
                  <div className="bg-primary p-2 rounded-full items-center">
                    <FaClock size={20} color="white" className="relative" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-primary">Horário de Atendimento</p>
                    <p className="text-sm text-base-content max-w-40">
                      Seg a Sex 7h30–17h00 Sab e Dom (Fechado)
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-center lg:flex-row lg:text-left gap-5 items-center">
                  <div className="bg-primary p-2 rounded-full items-center">
                    <FaLocationDot size={20} color="white" className="relative" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-primary">Endereço</p>
                    <p className="text-sm text-base-content max-w-52">
                      Avenida Bezerra de Menezes, 1250, sala 803, São Gerardo
                    </p>
                  </div>
                </div>
              </article>

              <div className="rounded-lg bg-base-300 p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg focus:outline-primary p-3 text-sm"
                      placeholder="Nome e Sobrenome"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg focus:outline-primary p-3 text-sm"
                        placeholder="Email"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg focus:outline-primary p-3 text-sm"
                        placeholder="Número de telefone"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full rounded-lg focus:outline-primary p-3 text-sm"
                      placeholder="Mensagem"
                      rows={8}
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Enviar Consulta
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
