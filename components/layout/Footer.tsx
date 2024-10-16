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
        <a className="link link-hover">Sobre</a>
        <a className="link link-hover">Contato</a>
        <a className="link link-hover">Certificados</a>
        <a className="link link-hover">Acervo Público</a>
        <a className="link link-hover">Galeria de eventos</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="/" className="link link-hover">
            <FaXTwitter size={30} />
          </Link>
          <Link href="/" className="link link-hover">
            <FaFacebook size={30} />
          </Link>
          <Link href="/" className="link link-hover">
            <FaInstagram size={30} />
          </Link>
          <Link href="/" className="link link-hover">
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
