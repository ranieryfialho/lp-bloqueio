import React from "react";
import { FadeIn } from "../components/motion/fade-in";
import { Badge } from "../components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Particles } from "../components/magic-ui/particles";

const FAQ_ITEMS = [
  {
    id: "dor",
    q: "O procedimento de bloqueio de nervos dói?",
    a: "O desconforto é mínimo. O procedimento é realizado com anestesia local para garantir seu conforto.",
  },
  {
    id: "definitivo",
    q: "O bloqueio de nervos é um tratamento definitivo?",
    a: "Não, o bloqueio tem um efeito temporário, durando de semanas a poucos meses. Ele funciona como um 'teste' para confirmar se você é um bom candidato para tratamentos de longa duração, como a radioablação.",
  },
  {
    id: "duradouros",
    q: "Quais são os tratamentos mais duradouros?",
    a: "A radioablação, com efeito que pode superar 1 ano, e a crioablação, com efeito médio de 9 meses. Ambas 'desativam' os nervos por um período prolongado.",
  },
  {
    id: "local",
    q: "Onde o bloqueio é realizado?",
    a: "O bloqueio de nervos geniculares é um procedimento rápido e seguro, realizado no próprio consultório, sem necessidade de internação ou centro cirúrgico.",
  },
];

export function FaqBloqueio() {
  return (
    <section id="faq" className="relative overflow-hidden bg-bg py-16 md:py-24">

      <Particles
        className="absolute inset-0"
        quantity={75}
        color="#C9D2DF"
      />

      <div className="relative mx-auto max-w-4xl px-4">
        <FadeIn className="text-center mb-12">
          <Badge>Dúvidas Comuns</Badge>
          <h2 className="mt-3 font-title text-3xl md:text-4xl">
            Perguntas Frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}