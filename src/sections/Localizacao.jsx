import { FadeIn } from "../components/motion/fade-in";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { Particles } from "../components/magic-ui/particles";

const CLINICA_ENDERECO = "Rua Felipe Nery, 1012 - Guararapes, Fortaleza - CE, 60821-775";
const GMAPS_ROTA_URL = "https://www.google.com/maps/dir/?api=1&destination=Rua+Felipe+Nery,+1012+-+Guararapes,+Fortaleza+-+CE,+60821-775";
const GMAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.332349766152!2d-38.48995358889823!3d-3.738012896324545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7461973557a07%3A0x8967f82784541a7b!2sR.%20Felipe%20Nery%2C%201012%20-%20Guararapes%2C%20Fortaleza%20-%20CE%2C%2060810-020!5e0!3m2!1spt-BR!2sbr!4v1692734493263!5m2!1spt-BR!2sbr"; // Placeholder, substitua pelo embed real

export function Localizacao() {
  return (
    <section id="localizacao" className="relative bg-bg">
      <div className="relative overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={75}
          color="#C9D2DF"
        />

        <div className="relative mx-auto max-w-7xl px-4 pt-16 md:pt-20">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-3">Nossa Localização</Badge>
              <h2 className="font-title text-3xl md:text-4xl">
                Onde nos encontrar
              </h2>
              <div className="mt-4 flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-muted">{CLINICA_ENDERECO}</p>
              </div>
              <p className="mt-4 text-sm text-muted">
                Nossa clínica está localizada em uma área de fácil acesso, com estacionamento disponível para sua comodidade.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="gold" className="w-full sm:w-auto font-bold">
                  <a
                    href={GMAPS_ROTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Traçar rota para a clínica"
                    className="inline-flex items-center gap-2"
                  >
                    <Navigation className="h-4 w-4" />
                    Traçar Rota
                  </a>
                </Button>
                 <Button asChild variant="outline" className="w-full sm:w-auto">
                   <a href="https://api.whatsapp.com/send/?phone=5585994326619&text=Ol%C3%A1%21+Vim+do+site+de+dor+no+joelho+e+gostaria+de+agendar+uma+consulta&type=phone_number&app_absent=0" target="blank" aria-label="Agendar avaliação com o especialista">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.1}>
        <div className="mt-12">
          <div className="w-full h-[450px] md:h-[500px]">
            <iframe
              src={GMAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da clínica no Google Maps"
            ></iframe>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}