"use client";

import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Rápida instação",
    description:
      "Instalação em Tempo recorde, em até 24 horas, garantindo agilidade para o início de suas operações.",
    link: "#",
  },
  {
    title: "Sistema de afiliados e sub-afiliados",
    description:
      "O sistema de afiliados e sub afiliados mais completo e vantajoso do mercado, sem custos adicionais",
    link: "#",
  },
  {
    title: "Atendimento via WhatsApp",
    description:
      "Tenha um canal de suporte ágil, direto e personalizado, com nosso time de especialistas pelo WhatsApp.",
    link: "#",
  },
  {
    title: "Alta segurança",
    description:
      "Nossa certificação internacional de segurança ISO 27001 e PCI - DSS garantem que suas informações estejam sempre protegidas.",
    link: "#",
  },
  {
    title: "Robustez e escalabilidade",
    description:
      "Capacidade impressionante de processamento de 1 milhão de transações por segundo, garantindo que suas operações sejam rápidas e seguras.",
    link: "#",
  },
  {
    title: "Custo benefício",
    description:
      "Oferecemos aos clientes um custo-benefício excepcional, garantindo o máximo retorno para seu negócio",
    link: "#",
  },
];
