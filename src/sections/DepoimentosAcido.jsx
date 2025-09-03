import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Badge } from "../components/ui/badge";
import { Star, Quote } from "lucide-react";

const DEPOIMENTOS_EXEMPLO = [
  {
    id: "t1",
    nome: "Maria Adriana Hilario Freitas",
    texto:
      "Cheguei ao Dr. Felipe com muitas dores nos joelhos pois tenho artrose, fiz a aplicação de ácido hialurônico e tive uma grande melhora. Voltei a ter qualidade de vida.",
    rating: 5,
  },
  {
    id: "t2",
    nome: "Francisca Teixeira",
    texto:
      "Ótimo atendimento, fiz aplicação de ácido hialurônico e bloqueio de nervo fiquei sem dor nenhuma. Não troco por nada esse médico. Deus abençoe.",
    rating: 5,
  },
  {
    id: "t3",
    nome: "Hellany Kelly",
    texto:
      "Levei minha mãe para ser consultada pelo Dr Felipe Brasil, pois ela sentia fortes dores no joelho e andava caxingando. Durante toda a consulta o Dr. ouviu atentamente tudo o que minha mãe estava sentindo, avaliou sua caminhada e passou ultrassom para identificar o problema dela. Na mesma consulta já foi iniciado o tratamento com punção do excesso de líquido no joelho, aplicação de ácido hialurônico e fisioterapia. Toda a equipe nos recebeu bem e foram muito prestativos em sanar nossas dúvidas.",
    rating: 5,
  },
  {
    id: "t4",
    nome: "Amilton Santos",
    texto:
      "Gostei muito do atendimento, fiz os procedimentos de infiltração com ácido hialurônico e bloqueio perimeniscal, senti alívio imediato, equipe e atendimento excelente!!! 👍😊",
    rating: 5,
  },
  {
    id: "t5",
    nome: "Lucia Lobo",
    texto:
      "Vim de Itatira/Ce, estava com muitas dores em meu joelho direito. Dr Felipe realizou um tratamento excelente, que é o bloqueio da dor com ácido hialurônico. Estou muito bem e se Deus quiser semana que vem será o outro joelho. Excelente atendimento de sua equipe. 💜🙏",
    rating: 5,
  },
];

function RatingStars({ value = 5 }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${value} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < value ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/40"
          }`}
        />
      ))}
    </div>
  );
}

function DepoimentoCard({ item }) {
  const iniciais = item.nome
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <CardSpotlight className="h-full w-full">
      <article className="relative flex h-full w-full flex-col rounded-2xl border border-line/40 bg-bg/60 p-5 shadow-lg ring-1 ring-white/5">
        <RatingStars value={item.rating} />
        <p className="mt-4 flex-1 text-sm leading-relaxed text-text">
          <Quote className="mr-1 inline-block h-4 w-4 translate-y-[-1px] text-muted" />
          {item.texto}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-bg2/60 ring-1 ring-white/10">
            <span className="text-xs font-medium text-text">{iniciais}</span>
          </div>
          <div className="text-xs">
            <div className="font-medium text-text">{item.nome}</div>
            <div className="text-muted">Paciente verificado</div>
          </div>
        </div>
      </article>
    </CardSpotlight>
  );
}

export function DepoimentosAcido() {
  return (
    <section id="depoimentos" className="bg-bg2/50 py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <FadeIn className="text-center">
          <Badge>Experiências Reais</Badge>
          <h2 className="mt-3 font-title text-3xl md:text-4xl">
            Veja a experiência de pacientes que já fizeram este procedimento
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DEPOIMENTOS_EXEMPLO.slice(0, 3).map((depoimento, index) => (
              <FadeIn key={depoimento.id} delay={index * 0.1}>
                <DepoimentoCard item={depoimento} />
              </FadeIn>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
            {DEPOIMENTOS_EXEMPLO.slice(3, 5).map((depoimento, index) => (
              <FadeIn key={depoimento.id} delay={(index + 3) * 0.1}>
                <div className="w-full md:w-80 lg:w-96">
                  <DepoimentoCard item={depoimento} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
