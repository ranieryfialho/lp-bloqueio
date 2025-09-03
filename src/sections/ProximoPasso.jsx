import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

function TratamentoCard({ badge, title, description }) {
  return (
    <CardSpotlight className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line/40 bg-bg p-6 shadow-lg ring-1 ring-white/5">
        <Badge variant="outline" className="mb-4 w-fit bg-bg2/80">{badge}</Badge>
        <h3 className="font-title text-lg text-text">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{description}</p>
    </CardSpotlight>
  )
}

export function ProximoPasso() {
  return (
    <section id="proximo-passo" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn className="text-center">
          <h2 className="font-title text-3xl md:text-4xl">
            O próximo passo: alívio duradouro com ablação de nervos
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-muted">
            Após o bloqueio inicial, você pode evoluir para opções que oferecem resultados prolongados. Ambos são realizados em centro cirúrgico, com alta no mesmo dia e retorno rápido às atividades.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <TratamentoCard
                badge="A Mais Indicada"
                title="Radioablação"
                description='"Desativa" os nervos da dor por mais de 1 ano.'
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <TratamentoCard
                badge="Alternativa"
                title="Crioablação"
                description="Congela o nervo, com efeito médio de ~9 meses."
            />
          </FadeIn>
        </div>
         <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
                <Button asChild variant="gold" size="lg" className="font-bold">
                    <a href="https://wa.me/+555585994326619?text=Ol%C3%A1,%20gostaria%20de%20saber%20se%20posso%20fazer%20o%20procedimento%20de%20abla%C3%A7%C3%A3o%20de%20nervos."
                        target="_blank">
                        Quero saber se posso fazer esse procedimento
                    </a>
                </Button>
            </div>
        </FadeIn>
      </div>
    </section>
  );
}