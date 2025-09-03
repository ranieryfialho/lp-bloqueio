import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Badge } from "../components/ui/badge";
import { Dna, Droplets } from "lucide-react";
import { Particles } from "../components/magic-ui/particles";

function TratamentoCard({ icon: Icon, title, children }) {
  return (
    <CardSpotlight className="relative h-full w-full overflow-hidden rounded-2xl border border-line/40 bg-bg p-6 shadow-lg ring-1 ring-white/5">
        <div className="flex h-full flex-col">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-bg2/60 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-title text-lg text-text">{title}</h3>
            <p className="mt-1 flex-1 text-sm text-muted">{children}</p>
        </div>
    </CardSpotlight>
  )
}

export function TratamentosAssociados() {
  return (
    <section id="associacoes" className="relative overflow-hidden bg-bg2/50 py-16 md:py-24">
      
      <Particles
        className="absolute inset-0"
        quantity={75}
        color="#C9D2DF"
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <FadeIn className="text-center">
          <Badge>Protocolo Combinado</Badge>
          <h2 className="mt-3 font-title text-3xl md:text-4xl">
            Associações que potencializam os resultados
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-muted">
            O bloqueio ou a ablação podem ser combinados a tratamentos ortobiológicos e infiltrações. Essa combinação oferece alívio da dor e melhora funcional a longo prazo, além de acelerar o processo de reabilitação por fornecer um resultado já imediato.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <TratamentoCard icon={Dna} title="PRP e BMA (Células-Tronco)">
              Estimulam a regeneração e recuperação da articulação.
            </TratamentoCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <TratamentoCard icon={Droplets} title="Ácido Hialurônico">
              Melhora a lubrificação e reduz o atrito da articulação.
            </TratamentoCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}