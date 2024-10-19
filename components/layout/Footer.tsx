import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link href='/sobre' className="link link-hover">Sobre</Link>
        <Link href='/contato' className="link link-hover">Contato</Link>
        <Link href='/certificados' className="link link-hover">Certificados</Link>
        <Link href='/acervo' className="link link-hover">Acervo Público</Link>
        <Link href='/galeria' className="link link-hover">Galeria de eventos</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            href="https://twitter.com/Llassessoria_"
            className="link link-hover"
          >
            <FaXTwitter size={30} />
          </Link>
          <Link
            href="http://facebook.com/llassessoriaeservicos"
            className="link link-hover"
          >
            <FaFacebook size={30} />
          </Link>
          <Link
            href="http://instagram.com/llassessoriaeservico"
            className="link link-hover"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ll-assessoria-e-servi%C3%A7os-6513ab216/?originalSubdomain=br"
            className="link link-hover"
          >
            <FaLinkedin size={30} />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Todos os direitos reservados
          pela LL Assessorias e Serviços Ltda.
        </p>
        <p>
          Site desenvolvido por:{" "}
          <a
            target="_blank"
            className="link text-purple-500 font-bold"
            href="https://github.com/nicoryy"
          >
            Pedro Nicory
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
