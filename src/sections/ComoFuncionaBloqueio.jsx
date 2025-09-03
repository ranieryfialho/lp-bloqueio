import { FadeIn } from "../components/motion/fade-in";
import { CheckCircle2 } from "lucide-react";

const imagemProcedimento = `${import.meta.env.BASE_URL}images/tratamentos/bloqueio-nervos-ilustracao.avif`;

function BeneficioItem({ children }) {
    return (
        <li className="flex items-start gap-3">
            <span className="mt-1">
                <CheckCircle2 className="h-5 w-5 text-accent" />
            </span>
            <span className="text-text">{children}</span>
        </li>
    );
}

export function ComoFuncionaBloqueio() {
    const listaBeneficios = [
        "Procedimento realizado em consultório.",
        "Sem necessidade de centro cirúrgico.",
        "Menor custo.",
        "Alívio rápido, perceptível já na primeira sessão.",
    ];

    return (
        <section id="como-funciona" className="bg-bg2/50 py-16 md:py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
                <FadeIn>
                    <div className="mx-auto max-w-sm md:max-w-md">
                        <div className="relative aspect-square overflow-hidden rounded-2xl border border-line/40 bg-bg/60 shadow-lg ring-1 ring-white/5">
                            <img
                                src={imagemProcedimento}
                                alt="Procedimento de bloqueio de nervos"
                                className="absolute h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <h2 className="font-title text-3xl md:text-4xl">
                        Como funciona o bloqueio de nervos geniculares?
                    </h2>
                    <p className="mt-4 text-muted md:text-lg">
                        Aplicamos uma pequena dose de anestésico nos nervos que transmitem a dor da articulação para o cérebro.
                    </p>
                    <ul className="mt-6 space-y-3">
                        {listaBeneficios.map((beneficio, index) => (
                            <BeneficioItem key={index}>{beneficio}</BeneficioItem>
                        ))}
                    </ul>
                     <p className="mt-6 text-muted">
                        O efeito é temporário (semanas a poucos meses), mas estratégico para indicar os candidatos à radioablação ou crioablação.
                    </p>
                    <p className="mt-4 rounded-lg border border-line/40 bg-bg/50 p-4 text-sm text-muted/80 italic">
                        NOTA: embora a grande maioria dos pacientes respondam bem ao procedimento de bloqueio de nervos, nem todos terão o alívio esperado. Por isso, ele é considerado um "bloqueio teste".
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}