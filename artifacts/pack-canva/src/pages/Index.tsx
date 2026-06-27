import { ArrowDown, Check, X, ShieldCheck, Zap, Infinity as InfinityIcon, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Marquee } from "@/components/Marquee";

const ALL_ARTS_POOL = [
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/1.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/2.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/3.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/4.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/5.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/6.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/7.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/8.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/9.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/10.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/11.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/12.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/13.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/14.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/47.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/48.png",
];

const HERO = "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/hero.webp";

const ART_GRID_1 = [
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/15.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/16.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/17.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/18.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/19.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/20.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/21.png",
];

const ART_GRID_2 = [
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Cartoes(1).png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Cartoes(2).png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Cartoes(3).png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Cartoes(4).png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Cartoes(5).png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Cartoes(6).png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Cartoes(7).png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Cartoes(8).png",
];

const ART_CAROUSEL = [
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/22.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/23.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/24.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/25.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/26.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/27.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/28.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/29.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/30.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/31.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/32.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/33.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/34.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/35.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/36.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/37.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/38.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/39.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/40.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/41.jpg",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/42.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/43.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/44.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/45.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/46.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/carrosel.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/demais/carrossel.png",
];

const SITES = [
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/1.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Captura%20de%20tela%202026-05-21%20161639.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Captura%20de%20tela%202026-05-21%20161753.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Captura%20de%20tela%202026-05-21%20161943.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Captura%20de%20tela%202026-05-21%20162047.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Captura%20de%20tela%202026-05-21%20162131.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Captura%20de%20tela%202026-05-21%20162226.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Captura%20de%20tela%202026-05-21%20162407.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Captura%20de%20tela%202026-06-02%20092132.png",
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/canvapro/Captura%20de%20tela%202026-06-02%20092209.png",
];

const CHECKOUT_URL = "https://pay.kirvano.com/bf80c29f-2f27-4e72-bd59-322714a12cc6";
const BASIC_URL = "/oferta-especial";

const CTAButton = ({ href = "#oferta", children, className = "" }: { href?: string; children: React.ReactNode; className?: string }) => (
  <a
    href={href}
    className={`inline-block bg-gradient-cta text-cta-foreground font-extrabold uppercase tracking-wide rounded-full px-8 py-4 text-base sm:text-lg shadow-cta pulse-cta hover:brightness-110 transition ${className}`}
  >
    {children}
  </a>
);

const SectionTitle = ({ children, accent }: { children: React.ReactNode; accent?: boolean }) => (
  <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight ${accent ? "text-cyan-glow" : ""}`}>
    {children}
  </h2>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="bg-gradient-hero py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-cyan-glow leading-tight">
            Chega de post feio: +15.000 templates profissionais prontos pra usar no Canva
          </h1>
          <p className="text-lg sm:text-2xl font-semibold">
            Economize horas toda semana e publique conteúdo de nível agência — só trocando texto e cores.
          </p>
          <ArrowDown className="mx-auto text-primary arrow-bounce" size={48} />
          <p className="text-sm sm:text-base text-muted-foreground">
            Veja por que centenas de criadores já pararam de improvisar e passaram a publicar com consistência.
          </p>

          <img src={HERO} alt="Canva Boss — pacote de templates" className="mx-auto max-w-full md:max-w-2xl drop-shadow-[0_0_60px_hsl(187_100%_50%/0.3)]" loading="eager" />

          <div className="space-y-2 pt-4">
            <p className="text-base sm:text-lg">DE <span className="line-through text-muted-foreground">R$97,00</span></p>
            <p className="text-xl sm:text-2xl font-bold">HOJE POR APENAS</p>
            <p className="text-6xl sm:text-7xl font-black text-[hsl(var(--price))] drop-shadow-[0_0_30px_hsl(51_100%_55%/0.4)]">R$17</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-cyan-glow">GARANTIA TOTAL!</p>
            <p className="text-base sm:text-lg font-bold text-destructive uppercase">⏰ Oferta por tempo limitado!</p>
          </div>

          <ul className="text-left max-w-md mx-auto space-y-3 pt-4">
            {[
              "Totalmente editáveis",
              "Acesso Vitalício",
              "Garantia incondicional de 7 dias",
              "Liberação Imediata",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <Check className="text-accent shrink-0" size={22} />
                <span className="text-base sm:text-lg">{t}</span>
              </li>
            ))}
          </ul>

          <p className="italic text-muted-foreground pt-2">(Últimas horas com valor promocional)</p>

          <div id="oferta" className="pt-4">
            <CTAButton href="#ofertas">Quero baixar agora</CTAButton>
          </div>
        </div>
      </header>

      {/* MAIS COMPLETO */}
      <section className="py-16 space-y-6">
        <div className="max-w-5xl mx-auto text-center space-y-4 px-4">
          <SectionTitle accent>...O ACERVO MAIS COMPLETO QUE VOCÊ VAI ENCONTRAR...</SectionTitle>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Templates com acabamento profissional para qualquer nicho</h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Aquelas artes com profundidade, iluminação e estilo que parecem feitas por designer? É exatamente o que você vai receber.
          </p>
        </div>

        <div className="space-y-4">
          <Marquee images={[...ART_GRID_1, ...ALL_ARTS_POOL]} duration={70} itemClassName="h-64 sm:h-72 md:h-80 aspect-[4/5]" />
          <Marquee images={[...ALL_ARTS_POOL, ...ART_GRID_1].reverse()} reverse duration={85} itemClassName="h-64 sm:h-72 md:h-80 aspect-[4/5]" />
        </div>
      </section>

      {/* O QUE VAI RECEBER */}
      <section className="py-16 bg-card/40 space-y-6">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle accent>O QUE VOCÊ IRÁ RECEBER?</SectionTitle>
        </div>

        <div className="space-y-4">
          <Marquee images={ART_GRID_2} duration={60} itemClassName="h-72 sm:h-80 md:h-96 aspect-[3/4]" />
          <Marquee images={[...ART_GRID_2].reverse()} reverse duration={75} itemClassName="h-72 sm:h-80 md:h-96 aspect-[3/4]" />
        </div>

        <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-6 px-4">
          {[
            "+15.000 artes ultraeditadas de qualidade absurda",
            "Edite no celular ou computador em minutos",
            "Designs profissionais que atraem atenção",
            "Economize com designer (pague uma vez e use pra sempre)",
            "Conteúdo pronto todo mês (sem bloquear na criação)",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3 bg-secondary/60 rounded-lg p-4">
              <Check className="text-accent shrink-0 mt-0.5" size={22} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CARROSSEL DE ARTES */}
      <section className="py-16 space-y-6">
        <div className="max-w-6xl mx-auto text-center space-y-4 px-4">
          <SectionTitle accent>QUALIDADE QUE IMPRESSIONA — TUDO DENTRO DO CANVA</SectionTitle>
          <p className="text-base sm:text-lg max-w-3xl mx-auto">
            Cada template foi criado com atenção a detalhes: ambientação, iluminação, efeitos e estilo. Nível profissional sem precisar de Photoshop.
          </p>
          <p className="text-sm text-muted-foreground">Dê uma olhada no que você vai ter acesso ⭣</p>
        </div>

        <div className="space-y-4">
          <Marquee images={ART_CAROUSEL} duration={90} itemClassName="h-64 sm:h-72 md:h-80 aspect-[4/5]" />
          <Marquee images={[...ART_CAROUSEL].reverse()} reverse duration={110} itemClassName="h-64 sm:h-72 md:h-80 aspect-[4/5]" />
          <Marquee images={[...ART_CAROUSEL, ...ALL_ARTS_POOL]} duration={130} itemClassName="h-64 sm:h-72 md:h-80 aspect-[4/5]" />
        </div>

        <div className="text-center space-y-2 pt-4">
          <p className="text-5xl font-black text-cyan-glow">100%</p>
          <p className="text-xl font-bold">editável no Canva</p>
        </div>

        <div className="text-center pt-4">
          <CTAButton href="#ofertas">Quero baixar os templates do Canva</CTAButton>
        </div>
      </section>

      {/* SITES BÔNUS */}
      <section className="py-16 bg-card/40 space-y-6">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h3 className="text-2xl sm:text-3xl font-bold">
            <span className="text-cyan-glow">BÔNUS:</span> Veja modelos de <span className="text-cyan-glow">Sites do Canva</span> que você receberá
          </h3>
        </div>

        <Marquee images={SITES} duration={70} itemClassName="h-80 sm:h-96 md:h-[28rem] aspect-[5/8]" />

        <p className="text-muted-foreground text-center px-4">
          Esses são alguns dos <strong className="text-foreground">sites editáveis que você vai receber no Canva Boss</strong>.
        </p>
      </section>

      {/* O QUE ESPERAR */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <SectionTitle>
            O QUE ESPERAR DO <span className="text-cyan-glow">CANVA BOSS</span>
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-4 pt-6 text-left">
            {[
              { icon: Zap, title: "Visual de agência", text: "Milhares de templates com acabamento profissional — o tipo de arte que normalmente custa caro contratar ou leva horas para criar." },
              { icon: ShieldCheck, title: "Pronto para publicar", text: "Cada design já vem completo: fundos trabalhados, tipografia escolhida, efeitos aplicados. Você só personaliza se quiser." },
              { icon: InfinityIcon, title: "100% no Canva", text: "Sem instalar nada. Acesse, edite e publique direto pelo Canva — no celular ou computador." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-secondary/60 rounded-xl p-6 border border-border">
                <Icon className="text-primary mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">{title}</h4>
                <p className="text-muted-foreground text-sm">{text}</p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <CTAButton href="#ofertas">Sim, quero essa super oferta</CTAButton>
          </div>
        </div>
      </section>

      {/* OFERTAS */}
      <section id="ofertas" className="py-16 px-4 bg-card/40">
        <div className="max-w-6xl mx-auto space-y-8">
          <SectionTitle accent>ESCOLHA A MELHOR OFERTA PARA VOCÊ</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6 pt-6">
            {/* BÁSICO */}
            <div className="bg-secondary/60 border border-border rounded-2xl p-8 space-y-4">
              <p className="uppercase text-sm tracking-widest text-muted-foreground">Plano Básico</p>
              <p className="text-xl font-bold">Pagamento Único</p>
              <p className="text-5xl font-black text-foreground">R$17</p>
              <ul className="space-y-2 pt-2">
                {["pacote de 5000 artes", "Acesso Vitalício", "7 Dias de Garantia"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check size={18} className="text-accent" />{t}</li>
                ))}
                {["Sem bônus adicionais", "Sem Presentinho Surpresa", "Zero Suporte"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-muted-foreground"><X size={18} className="text-destructive" />{t}</li>
                ))}
              </ul>
              <a href={BASIC_URL} className="block text-center w-full bg-secondary border border-border text-foreground font-bold rounded-full py-3 hover:bg-muted transition">
                Quero essa opção
              </a>
            </div>

            {/* PREMIUM */}
            <div className="relative bg-gradient-to-b from-primary/10 to-transparent border-2 border-primary rounded-2xl p-8 space-y-4 shadow-glow">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-cta text-cta-foreground text-xs font-extrabold uppercase tracking-widest px-4 py-1 rounded-full">
                Mega Oferta — Melhor Negócio
              </span>
              <p className="uppercase text-sm tracking-widest text-primary">Plano Premium</p>
              <p className="text-xl font-bold">Pacote Completo</p>
              <ul className="space-y-2 pt-2">
                {[
                  "Pacote com +15.000 artes",
                  "Acesso Vitalício",
                  "7 Dias de Garantia",
                  "Templates Canva PREMIUM",
                  "Carrosséis Lendários",
                  "Acesso a IA de conteúdo",
                  "Pack de elementos",
                  "Fontes Exclusivas do Canva",
                  "Painel NOTION",
                  "Pack de Sites editáveis Canva",
                  "Flyers em Imagem",
                  "Flyers em vídeo animados",
                  "Caixa de ferramenta com estratégias milionárias",
                  "Stories Interativos",
                  "Google Drive da edição (cursos e packs de design)",
                  "Pack esportivo 4K",
                  "Templates Minimalist",
                  "Presentinho bônus (surpresa)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><Check size={18} className="text-accent mt-0.5 shrink-0" /><span>{t}</span></li>
                ))}
              </ul>
              <div className="pt-2 space-y-1">
                <p className="line-through text-muted-foreground">Valor Total: R$297,00</p>
                <p className="text-sm font-semibold">Hoje pagamento único…</p>
                <p className="text-5xl font-black text-[hsl(var(--price))]">R$37,00</p>
              </div>
              <CTAButton href={CHECKOUT_URL} className="w-full text-center block">
                Sim, quero essa super oferta
              </CTAButton>
              <p className="text-sm text-center text-muted-foreground"><strong>Aproveite agora:</strong> Você NÃO vai encontrar esse preço depois.</p>
            </div>
          </div>

          <p className="text-center text-muted-foreground">Antes de comprar… Veja a oferta MAIS VANTAJOSA para você!</p>
        </div>
      </section>

      {/* RESUMO */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <SectionTitle accent>Não leu tudo? Vou resumir para você...</SectionTitle>
          <p className="text-lg">
            São <strong>milhares de templates profissionais, 100% editáveis no Canva</strong>, para você nunca mais ficar em branco na hora de criar conteúdo.
          </p>
          <p className="text-muted-foreground">
            <strong>A proposta é direta:</strong> você recebe tudo pronto, personaliza em minutos e publica com confiança.
          </p>
          <CTAButton href="#ofertas">Quero ter acesso ao pacote!</CTAButton>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 px-4 bg-card/40">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <ShieldCheck className="mx-auto text-accent" size={64} />
          <SectionTitle>O produto tem <span className="text-accent">garantia incondicional de 7 dias</span></SectionTitle>
          <p className="text-muted-foreground">
            Explore todo o acervo, use os templates, veja se faz sentido para você…
          </p>
          <p>
            Se por qualquer razão não ficou satisfeito, basta mandar um e-mail para (<a className="text-primary underline" href="mailto:suporte@agaf.store">suporte@afag.shop</a>) dentro de 7 dias e devolvemos 100% do seu dinheiro, sem perguntas.
          </p>
          <p className="font-bold">Devolvemos cada centavo — sem burocracia.</p>
          <p className="text-sm uppercase tracking-widest text-cyan-glow">Acesso liberado com desconto especial!</p>
          <CTAButton href="#ofertas">Quero ter acesso ao pacote!</CTAButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <SectionTitle accent>Dúvidas Frequentes</SectionTitle>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "E se eu não souber nada de design?", a: "Perfeito, esse pacote foi feito exatamente pra quem não sabe nada — só arrastar e trocar as imagens e textos." },
              { q: "Em quanto tempo recebo o acesso?", a: "Imediatamente! Logo após a aprovação do seu pagamento, você receberá no seu e-mail de compra os seus dados de login e poderá começar imediatamente." },
              { q: "O pagamento é único?", a: "Sim! Pagamento único e nada mais." },
              { q: "O pagamento é seguro?", a: "Sim! O pagamento é 100% seguro, processado com criptografia. Seguimos a Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709, de 2018." },
              { q: "Em quantos dispositivos posso usar os arquivos?", a: "Você pode baixar e usar em todos os dispositivos de forma livre." },
              { q: "Por quanto tempo posso baixar os arquivos?", a: "Você poderá acessar as artes sempre que quiser. Sem prazos ou limite. O acesso é vitalício!" },
              { q: "Preciso ter algum conhecimento específico?", a: "Você precisa apenas saber usar o Canva. Dentro da plataforma há tutoriais ensinando tudo, caso não saiba." },
              { q: "Caso eu não goste do conteúdo, o que devo fazer?", a: "Oferecemos 7 dias de garantia de satisfação. Após o acesso liberado, você possui 7 dias para nos enviar um e-mail solicitando a devolução integral, sem maiores questionamentos." },
              { q: "Preciso ficar sempre online?", a: "Não! Você baixa tudo para o seu computador ou celular e usa livremente." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-secondary/60 rounded-lg px-4 border-border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4 border-t border-border text-center text-sm text-muted-foreground space-y-2">
        <p className="font-bold text-foreground">Todos os direitos reservados</p>
        <p>Canva Pro — 2026</p>
        <p>Suporte: <a href="mailto:suporte@agaf.store" className="text-primary">suporte@afag.shop</a></p>
        <div className="flex items-center justify-center gap-2 pt-2">
          <Clock size={14} /><span>Liberação imediata após o pagamento</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
