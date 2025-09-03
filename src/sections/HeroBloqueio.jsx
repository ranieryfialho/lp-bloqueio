import { Button } from "../components/ui/button";
import { FadeIn } from "../components/motion/fade-in";

const imagemDeFundo = `${import.meta.env.BASE_URL}images/tratamentos/bloqueio-equipamento.jpeg`;

export function HeroBloqueio() {
  return (
    <section className="relative overflow-hidden flex items-center min-h-[700px] lg:min-h-[100svh]">
      <img
        src={imagemDeFundo}
        alt="Tratamento de dor articular"
        className="absolute inset-0 h-full w-full object-cover z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2B45]/90 via-[#0C1C2A]/95 to-[#07111A]/95 z-20" />
      <div className="relative z-30 mx-auto max-w-4xl px-4 text-center">
        <FadeIn className="w-full">
          <h1 className="font-title text-4xl leading-tight md:text-6xl">
            Alívio rápido da <span className="text-accent">dor articular</span>, feito em consultório e sem cirurgia.
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted">
            O bloqueio de nervos geniculares é um procedimento rápido e minimamente invasivo que proporciona alívio imediato da dor e ajuda a identificar se você é candidato a técnicas de maior durabilidade, como a radioablação. [cite: 4, 5]
          </p>

          <div className="mt-8">
            <Button asChild variant="gold" size="lg" className="font-bold">
              <a href="https://wa.me/+555585994326619?text=Ol%C3%A1,%20vim%20da%20p%C3%A1gina%20sobre%20bloqueio%20de%20nervos%20e%20gostaria%20de%20saber%20mais."
              target="blank"
              >
                Quero agendar minha avaliação
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}