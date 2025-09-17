import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const imgRadioablacao = `${import.meta.env.BASE_URL}images/tratamentos/radioablacao.jpeg`;
const imgCrioablacao = `${import.meta.env.BASE_URL}images/tratamentos/crioablacao.jpeg`;


function TratamentoCard({ badge, title, description, imageSrc }) {
  return (
    <CardSpotlight className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line/40 bg-bg shadow-lg ring-1 ring-white/5">
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img src={imageSrc} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge variant="outline" className="mb-4 w-fit bg-bg2/80">{badge}</Badge>
        <h3 className="font-title text-lg text-text">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{description}</p>
      </div>
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
              imageSrc={imgRadioablacao}
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <TratamentoCard
              badge="Alternativa"
              title="Crioablação"
              description="Congela o nervo, com efeito médio de 9 meses."
              imageSrc={imgCrioablacao}
            />
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button asChild variant="gold" size="lg" className="font-bold h-auto whitespace-normal py-3 text-sm md:text-base">
              <a href="https://api.whatsapp.com/send/?phone=5585994326619&text=Ol%C3%A1%21+Vim+do+site+de+dor+no+joelho+e+gostaria+de+agendar+uma+consulta&type=phone_number&app_absent=0"
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