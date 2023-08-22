import Foto from "@/assets/image/minha-foto.png";
import { Separator } from "@/components/ui/Separator";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { FC, useState } from "react";
import NavList from "./nav/NavList";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const locale = useLocale();
  const t = useTranslations();

  const nav = [
    {
      section1: {
        title: "Portfolio",
        menu: {
          section1: t("portfolio.menu"),
          href1: "/meus-projetos",
        },
      },
    },
  ];

  return (
    <>
      <div className=" min-w-fit px-5 py-7 bg-neutral-950 rounded-xl border-r border-neutral-800 flex-col justify-center items-start gap-6 inline-flex">
        <div className="justify-start items-center gap-4 inline-flex">
          <Image src={Foto} alt="Minha foto de perfil" />
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-white text-xl font-bold">Gabriel Andrade</div>
            <div className="text-neutral-300 text-base font-normal">
              Full Stack Designer
            </div>
          </div>
        </div>
        <Separator />
        <NavList />
        <div className="self-stretch grow shrink basis-0 flex-col justify-end items-start gap-6 flex">
          <div className="self-stretch h-[0px] border border-neutral-800"></div>
          <div className="self-stretch px-4 py-2.5 bg-white bg-opacity-10 rounded-lg justify-between items-center gap-1 inline-flex">
            <div className="text-neutral-200 text-lg font-semibold">
              Minhas redes sociais
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
