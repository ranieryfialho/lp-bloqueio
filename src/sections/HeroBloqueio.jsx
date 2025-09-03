import { Button } from "../components/ui/button";
import { FadeIn } from "../components/motion/fade-in";

const imagemIlustrativa = `${import.meta.env.BASE_URL}images/tratamentos/bloqueio-equipamento.jpeg`;

export function HeroBloqueio() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2B45]/90 via-[#0C1C2A]/95 to-[#07111A]/95 z-0" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">

        <div className="text-center md:text-left">
          <FadeIn>
            <h1 className="font-title text-4xl leading-tight md:text-5xl">
              Alívio rápido da <span className="text-accent">dor articular</span>, feito em consultório e sem cirurgia.
            </h1>
            <p className="mt-6 text-lg text-muted">
              O bloqueio de nervos geniculares é um procedimento rápido e minimamente invasivo que proporciona alívio imediato da dor e ajuda a identificar se você é candidato a técnicas de maior durabilidade, como a radioablação.
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

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-sm md:max-w-md">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line/40 bg-bg/60 shadow-lg ring-1 ring-white/5">
              <img
                src={imagemIlustrativa}
                alt="Ilustração do procedimento de bloqueio de nervos"
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}