import { Check } from "lucide-react";

const UPGRADE_URL = "https://pay.kirvano.com/1ff83d6f-f7bf-481b-8da8-91d37248051e";
const BASIC_URL = "https://pay.kirvano.com/d3700e35-2e55-4e84-999e-d308363957cd";

const HERO_IMG = "https://projetotita.com/wp-content/uploads/2025/12/1-1-1024x1024-2.webp";

const BENEFITS = [
  "Pacote com +5.000 artes",
  "Acesso Vitalício",
  "7 Dias de Garantia",
  "Bônus 01: +700 Carrosséis Lendários",
  "Bônus 02: Acesso a ContentBoss IA",
  "Bônus 03: Pack de Sites editáveis Canva",
  "Bônus 04: +11.000 Elementos 4K e 3D do Canva (Pack do Tigre)",
  "Bônus Extra: Pack esportivo 4K",
  "Bônus Extra: Google Drive da edição (cursos e packs de design)",
  "Presente Surpresa: Você Também Receberá um Presentinho Especial que Preparamos para Você Ainda Hoje",
];

const OfertaEspecial = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-gradient-hero py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-glow leading-tight">
            Oferta Especial Liberada 😱
          </h1>
          <p className="text-lg sm:text-xl font-semibold">
            Espere! Você e Outras 4 Pessoas Receberam uma Oferta Especial de Upgrade!
          </p>
          <p className="text-xl sm:text-2xl font-bold">
            Garanta Acesso Vitalício + Bônus Exclusivos de{" "}
            <span className="line-through text-muted-foreground">R$37,00</span> por{" "}
            <span className="text-cyan-glow">R$24,90!</span>
          </p>

          <img
            src={HERO_IMG}
            alt="Oferta Especial Canva Boss"
            className="mx-auto max-w-full md:max-w-md drop-shadow-[0_0_60px_hsl(187_100%_50%/0.3)] rounded-xl"
            loading="eager"
          />

          <p className="text-base sm:text-lg font-bold uppercase tracking-wide">
            Apenas Aqui e AGORA, Por Apenas{" "}
            <span className="text-[hsl(var(--price))]">R$24,90</span> Você Recebe:
          </p>
        </div>
      </header>

      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3 bg-secondary/60 border border-border rounded-2xl p-6 md:p-8">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="text-accent shrink-0 mt-0.5" size={22} />
                <span className="text-base sm:text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <p className="text-2xl sm:text-3xl font-extrabold text-cyan-glow">
            DE <span className="line-through text-muted-foreground">R$37,00</span>
          </p>
          <p className="text-xl sm:text-2xl font-bold">POR APENAS</p>
          <p className="text-6xl sm:text-7xl font-black text-[hsl(var(--price))] drop-shadow-[0_0_30px_hsl(51_100%_55%/0.4)]">
            R$24,90
          </p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href={UPGRADE_URL}
            className="inline-block w-full sm:w-auto bg-gradient-cta text-cta-foreground font-extrabold uppercase tracking-wide rounded-full px-10 py-5 text-lg sm:text-xl shadow-cta pulse-cta hover:brightness-110 transition"
          >
            🔥 SIM! QUERO FAZER O UPGRADE!
          </a>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <a
            href={BASIC_URL}
            className="inline-block text-sm sm:text-base text-muted-foreground underline hover:text-foreground transition"
          >
            Não, Obrigado! Quero o Pacote Básico de R$17,00.
          </a>
          <div className="pt-2">
            <a
              href={BASIC_URL}
              className="inline-block bg-secondary border border-border text-foreground font-bold rounded-full px-8 py-3 hover:bg-muted transition"
            >
              Continuar com o Plano Básico de R$17,00
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 border-t border-border text-center text-sm text-muted-foreground space-y-2">
        <p className="font-bold text-foreground">Direitos reservados</p>
        <p>CANVA BOSS LTDA — 2026</p>
        <p>
          Suporte:{" "}
          <a href="mailto:contato@projetotita.com" className="text-primary">
            contato@projetotita.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default OfertaEspecial;
