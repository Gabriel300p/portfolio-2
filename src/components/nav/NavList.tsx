"use client";

import { ProjectorScreenChartIcon } from "@/assets/icons/PhosphornIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface NavListProps {}

const NavList: FC<NavListProps> = ({}) => {
  const pathname = usePathname();
  const [icon, setIcon] = useState<string>("regular");

  const navLinks = [
    {
      title: "Portfolio",
      menu: {
        name: "Meus projetos",
        href: "/",
      },
    },
    {
      title: "Teste",
      menu: {
        name: "Meus projetos",
        href: "/teste",
      },
    },
  ];

  return (
    <div className="flex-col justify-center items-start gap-5 flex w-full">
      {navLinks.map((link: any) => {
        const isActive = pathname.startsWith(link.href);
        if (isActive) {
          setIcon("fill");
        }
        return (
          <div
            key={link.menu.name}
            className={`${
              isActive ? "bg-teal-700" : ""
            } p-2 flex-col justify-center items-start gap-4 flex w-full text-white text-lg font-bold`}
          >
            <div className="text-neutral-400 text-sm font-normal">
              {link.title}
            </div>

            <Link
              className={isActive ? "bg-teal-600" : "bg-transparent"}
              href={link.menu.href}
            >
              <ProjectorScreenChartIcon size={24} weight={icon} />
              {link.menu.name}
            </Link>
          </div>
        );
      })}

      <div className=" p-2 flex-col justify-center items-start gap-4 flex">
        <div className="justify-center items-center gap-3 inline-flex">
          <div className="text-neutral-400 text-sm font-normal">Sobre mim</div>
        </div>
        <div className="flex-col justify-center items-start gap-8 flex">
          <div className="justify-center items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="text-neutral-200 text-lg font-medium">Resumo</div>
          </div>
          <div className="justify-center items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="text-neutral-200 text-lg font-medium">
              Experiências
            </div>
          </div>
          <div className="justify-center items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="text-neutral-200 text-lg font-medium">Educação</div>
          </div>
          <div className="justify-center items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="text-neutral-200 text-lg font-medium">
              Habilidades
            </div>
          </div>
          <div className="justify-center items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="text-neutral-200 text-lg font-medium">
              Baixar curriculo
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 flex-col justify-center items-start gap-5 flex">
        <div className="justify-center items-center gap-3 inline-flex">
          <div className="text-neutral-400 text-sm font-normal">
            Fale comigo
          </div>
        </div>
        <div className="justify-center items-center gap-3 inline-flex">
          <div className="w-6 h-6 relative" />
          <div className="text-neutral-200 text-lg font-medium">Contato</div>
        </div>
      </div>
    </div>
  );
};

export default NavList;
