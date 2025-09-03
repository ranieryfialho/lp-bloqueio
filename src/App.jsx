import { Header } from "./components/nav/header";
import { HeroBloqueio } from "./sections/HeroBloqueio";
import { SintomasDor } from "./sections/SintomasDor";
import { ComoFuncionaBloqueio } from "./sections/ComoFuncionaBloqueio";
import { ProximoPasso } from "./sections/ProximoPasso";
import { TratamentosAssociados } from "./sections/TratamentosAssociados";
import { FaqBloqueio } from "./sections/FaqBloqueio";

import { Especialista } from "./sections/Especialista";
import { DepoimentosAcido } from "./sections/DepoimentosAcido";
import { CtaFinal } from "./sections/CtaFinal";
import { Localizacao } from "./sections/Localizacao";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBloqueio />
        <SintomasDor />
        <ComoFuncionaBloqueio />
        <ProximoPasso />
        <TratamentosAssociados />
        <Especialista />
        <DepoimentosAcido />
        <CtaFinal />
        <Localizacao />
        <FaqBloqueio />
      </main>
    </>
  );
}