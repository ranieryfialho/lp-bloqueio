import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Button } from "../components/ui/button";
import { Particles } from "../components/magic-ui/particles";

export function CtaFinal() {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-bg py-16 md:py-20">
      <Particles
        className="absolute inset-0"
        quantity={75}
        color="#C9D2DF"
      />
      <div className="relative mx-auto max-w-7xl px-4">
        <CardSpotlight className="w-full">
          <div className="relative overflow-hidden rounded-2xl border border-line/40 bg-[linear-gradient(180deg,rgba(8,38,51,0.85),rgba(7,24,34,0.9))] p-6 shadow-2xl ring-1 ring-white/5 md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(102,224,219,0.14),transparent)] blur-2xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(227,199,160,0.14),transparent)] blur-2xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <FadeIn>
                <h2 className="font-title text-3xl leading-tight md:text-4xl">
                  Não deixe a dor controlar sua vida
                </h2>
              </FadeIn>
              <div className="mt-4 text-muted md:mt-6">
                <FadeIn delay={0.05}>
                  <p>
                    O bloqueio de nervos é o primeiro passo para voltar a caminhar, treinar e viver sem limitações. Agende sua avaliação e descubra qual tratamento é o mais indicado para o seu caso.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.15}>
                <div className="mt-8">
                  <Button 
                    asChild 
                    variant="gold" 
                    size="lg" 
                    className="font-bold h-auto whitespace-normal text-center px-8 py-4 md:px-12 md:py-5 text-sm md:text-base leading-relaxed"
                  >
                    <a href="https://api.whatsapp.com/send/?phone=5585994326619&text=Ol%C3%A1%21+Vim+do+site+de+dor+no+joelho+e+gostaria+de+agendar+uma+consulta&type=phone_number&app_absent=0">
                      Quero agendar minha avaliação agora
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
}