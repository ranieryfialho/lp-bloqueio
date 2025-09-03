import { FadeIn } from "../components/motion/fade-in";
import { CheckCircle2 } from "lucide-react";
import { Particles } from "../components/magic-ui/particles";

const imagemIlustrativa = `${import.meta.env.BASE_URL}images/tratamentos/img-aba2.png`;

function ListItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/10">
        <CheckCircle2 className="h-4 w-4 text-accent" />
      </span>
      <span className="text-muted">{children}</span>
    </li>
  );
}

export function SintomasDor() {
  const listaSintomas = [
    "Dor ao caminhar ou subir escadas.",
    "Rigidez ao acordar.",
    "Dificuldade até em tarefas simples.",
    "Limitação para praticar esportes ou manter sua rotina.",
  ];

  return (
    <section className="relative overflow-hidden bg-bg py-16 md:py-24">
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={80}
        color="#3B82F6"
        size={1.5}
        opacity={0.6}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-bg/20 pointer-events-none" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 z-10">
        <FadeIn>
          <h2 className="font-title text-3xl md:text-4xl">
            Você sente isso no seu dia a dia?
          </h2>
          <ul className="mt-6 space-y-4">
            {listaSintomas.map((sintoma, index) => (
              <ListItem key={index}>{sintoma}</ListItem>
            ))}
          </ul>
          <div className="mt-8 space-y-4 text-muted md:text-lg">
            <p className="text-text">
              O bloqueio de nervos pode ser a solução inicial para desligar o sinal da dor e devolver sua liberdade de movimento.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-line/40 bg-bg/60 shadow-lg ring-1 ring-white/5">
            <img
              src={imagemIlustrativa}
              alt="Ilustração do tratamento de dor articular"
              className="w-full object-cover"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}