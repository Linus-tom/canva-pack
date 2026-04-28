import { ArrowRightCircle, CheckCircle2 } from "lucide-react";

const UPGRADE_URL = "https://pay.kirvano.com/1ff83d6f-f7bf-481b-8da8-91d37248051e";
const BASIC_URL = "https://pay.kirvano.com/d3700e35-2e55-4e84-999e-d308363957cd";

const HERO_IMG = "https://projetotita.com/wp-content/uploads/2025/12/1-1-1024x1024-2.webp";

const CHECK_ITEMS = [
  "Pacote com +5.000 artes",
  "Acesso Vitalício;",
  "7 Dias de Garantia",
];

const BONUS_ITEMS = [
  "Bônus 01: +100 Carrosséis Lendários",
  "Bônus 02: Acesso a ContentBoss IA",
  "Bônus 03: Pack de Sites editáveis Canva",
  "Bônus 04: +11.000 Elementos 4K e 3D do Canva (Pack do Tigre)",
  "Bônus Extra: Pack esportivo 4K",
  "Bônus Extra: Google Drive da edição(cursos e packs de design)",
  "Presente Surpresa: Você Também Receberá um Presentinho Especial que Preparamos para Você Ainda Hoje",
];

const OfertaEspecial = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* TOP RED BANNER */}
      <div className="w-full bg-[#ff0000] py-3 px-4">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#ffea00]">
          Oferta Especial Liberada 😱
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-3xl mx-auto px-4 py-8 sm:py-10 text-center">
        {/* HEADLINE */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-black">
          Espere! Você e Outras{" "}
          <span className="text-[#ff0000]">4 Pessoas</span> Receberam uma Oferta
          Especial de Upgrade!
        </p>

        {/* SUBHEAD */}
        <p className="mt-6 text-base sm:text-lg">
          <span className="underline">Garanta Acesso Vitalício + Bônus</span>
        </p>
        <p className="mt-2 text-base sm:text-lg">
          Exclusivos de{" "}
          <strong className="text-[#ff0000]">R$37,00</strong> por{" "}
          <strong className="text-[#1cad1c]">R$24,90!</strong>
        </p>

        {/* HERO IMAGE */}
        <div className="mt-6 sm:mt-8">
          <img
            src={HERO_IMG}
            alt="Oferta Especial"
            width={800}
            height={800}
            className="mx-auto w-full max-w-[600px] h-auto"
            loading="eager"
          />
        </div>

        {/* CALLOUT */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg">
          Apenas <span className="underline">Aqui e AGORA</span>, Por Apenas{" "}
          <span className="text-[#1cad1c] font-bold">R$24,90</span> Você Recebe:
        </p>

        <div className="h-6" />

        {/* BULLET LIST */}
        <ul className="text-left max-w-xl mx-auto space-y-3">
          {CHECK_ITEMS.map((t) => (
            <li key={t} className="flex items-start gap-3">
              <CheckCircle2
                className="shrink-0 mt-0.5 text-[#1cad1c]"
                size={22}
                fill="#1cad1c"
                color="#ffffff"
              />
              <span className="text-base sm:text-lg">{t}</span>
            </li>
          ))}
          {BONUS_ITEMS.map((t) => (
            <li key={t} className="flex items-start gap-3">
              <ArrowRightCircle
                className="shrink-0 mt-0.5 text-[#1cad1c]"
                size={22}
              />
              <span className="text-base sm:text-lg">{t}</span>
            </li>
          ))}
        </ul>

        <div className="h-8" />

        {/* PRIMARY CTA — UPGRADE R$24,90 */}
        <a
          href={UPGRADE_URL}
          className="inline-block bg-[#ff0000] hover:bg-[#cc0000] transition text-white font-extrabold uppercase rounded-md px-6 sm:px-8 py-4 text-base sm:text-lg shadow-md"
        >
          🔥 SIM! QUERO FAZER O UPGRADE!
        </a>

        {/* SECONDARY CTA — BASIC R$17,00 (BUTTON) */}
        <div className="mt-6">
          <a
            href={BASIC_URL}
            className="inline-block bg-[#444] hover:bg-[#222] transition text-white font-bold rounded-md px-6 py-3 text-sm sm:text-base"
          >
            Continuar com o Pacote Básico de R$17,00
          </a>
        </div>

        {/* FINAL TEXT LINK — BASIC R$17,00 */}
        <p className="mt-6">
          <a
            href={BASIC_URL}
            className="text-[#0066cc] hover:text-[#003d7a] underline text-sm sm:text-base"
          >
            Não, Obrigado! Quero o Pacote Básico de R$17,00.
          </a>
        </p>

        <div className="h-12" />
      </main>
    </div>
  );
};

export default OfertaEspecial;
