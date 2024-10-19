"use client";

import Image from "next/image";
import logo from "./../../assets/logomarca.png";
import Link from "next/link";
import ThemeController from "../util/ThemeController";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isFixed, setFixed] = useState(false);

  const stickyHeader = () => {
    if (window.scrollY >= 30) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
    return () => {
      window.addEventListener("scroll", stickyHeader);
    };
  }, []);

  return (
    // DaisyUI
    <div
      className={`navbar bg-base-100 lg:px-10 ${
        isFixed
          ? "fixed z-50 shadow-xl bg-opacity-90 backdrop-blur-md"
          : ""
      }`}
    >
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Acervo</Link>
              <ul className="p-2">
                <li>
                  <Link href={"/"}>Público</Link>
                </li>
                <li>
                  <Link href={"/"}>Privativo</Link>
                </li>
                <li>
                  <Link href={"/"}>Certificados</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/sobre"}>Sobre</Link>
            </li>
            <li>
              <Link href={"/galeria"}>Eventos</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            src={logo}
            loading="lazy"
            alt="Logo da L&L Assessoria e Serviços"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <div className="bg-pp navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <details className="z-50">
              <summary>Acervo</summary>
              <ul className="p-2">
                <li>
                  <Link href={"/"}>Público</Link>
                </li>
                <li>
                  <Link href={"/"}>Privativo</Link>
                </li>
                <li>
                  <Link href={"/"}>Certificados</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/sobre"}>Sobre</Link>
          </li>
          <li>
            <Link href={"/galeria"}>Eventos</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex gap-2">
        <Link href={"/"} className="btn bg-secondary text-white">
          Contato
        </Link>

        <ThemeController />
      </div>
    </div>
  );
};
