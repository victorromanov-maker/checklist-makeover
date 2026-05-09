import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Star, Lock, Sparkles, Droplets, Sun, Scissors, Hand, GlassWater, Moon, Salad, Stethoscope, Brain, Eye } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const CHECKOUT_URL = "https://victorromanov-maker.github.io/checklist/COLE_AQUI_LINK_MERCADO_PAGO";

const topics = [
  { Icon: Droplets, tone: "blush", tag: "pele", title: "Hidratação da pele", desc: "O que aplicar de manhã e à noite para manter a pele viçosa, sem gastar muito." },
  { Icon: Sun, tone: "clay", tag: "essencial", title: "Protetor solar diário", desc: "Por que o FPS 30+ é o item mais importante da sua rotina e como usar certo." },
  { Icon: Scissors, tone: "sage", tag: "cabelo", title: "Rotina capilar por tipo", desc: "Como cuidar do cabelo liso, ondulado, cacheado ou crespo do jeito certo." },
  { Icon: Hand, tone: "blush", tag: "unhas", title: "Unhas bonitas em casa", desc: "Dicas simples para ter unhas cuidadas todo dia sem precisar ir ao salão." },
  { Icon: GlassWater, tone: "sage", tag: "saúde", title: "Hidratação diária", desc: "A quantidade certa de água para o seu peso e como criar o hábito sem esquecer." },
  { Icon: Moon, tone: "clay", tag: "bem-estar", title: "Qualidade do sono", desc: "Rotina noturna que melhora o sono — e por que isso reflete na sua beleza." },
  { Icon: Salad, tone: "sage", tag: "saúde", title: "Alimentação anti-inflamatória", desc: "O que incluir e o que reduzir para ter mais energia, menos inchaço e pele bonita." },
  { Icon: Stethoscope, tone: "blush", tag: "prevenção", title: "Exames preventivos por idade", desc: "Os exames que toda mulher deve fazer — com frequência e alertas por faixa etária." },
  { Icon: Brain, tone: "clay", tag: "mente", title: "Saúde mental e autoestima", desc: "Pequenos hábitos diários que fortalecem a autoconfiança e fazem você se sentir bem." },
  { Icon: Eye, tone: "blush", tag: "make", title: "Maquiagem rápida de 5 min", desc: "Um passo a passo minimalista para você se sentir bem mesmo nos dias corridos." },
];

const toneStyles: Record<string, { wrap: string; icon: string }> = {
  blush: { wrap: "bg-blush/50 ring-1 ring-blush/60", icon: "text-clay" },
  clay: { wrap: "clay-gradient shadow-lg shadow-primary/20", icon: "text-primary-foreground" },
  sage: { wrap: "bg-sage/30 ring-1 ring-sage/50", icon: "text-foreground/80" },
};

const includes = [
  "Checklist completo imprimível de beleza e saúde",
  "Rotina simples, sem termos difíceis ou complicados",
  "Dicas práticas que cabem na sua vida real",
  "Guia de produtos por faixa de orçamento",
  "Tabela de exames preventivos por idade",
  "Bônus: 7 hábitos que mudam sua autoestima",
];

const testimonials = [
  { name: "Ana C.", city: "São Paulo", text: "Nunca pensei que por R$ 9,90 teria acesso a um material tão completo. Já mudei minha rotina de skincare e tô me sentindo outra pessoa." },
  { name: "Juliana R.", city: "Curitiba", text: "A parte dos exames preventivos me abriu o olho! Nunca tinha parado pra pensar nisso. Já marquei 3 exames que estava adiando." },
  { name: "Fernanda M.", city: "Maringá", text: "O bônus dos 7 hábitos de autoestima vale mais do que o preço inteiro. Simples, direto e funciona. Recomendo demais!" },
];

function CTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`group inline-flex items-center gap-3 rounded-full clay-gradient px-8 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 ${className}`}
    >
      {children}
      <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground grain">
      {/* Top bar */}
      <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full clay-gradient flex items-center justify-center">
              <Sparkles className="size-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">Checklist&nbsp;Bem-Estar</span>
          </div>
          <a href={CHECKOUT_URL} className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Quero por R$ 9,90 <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* HERO — editorial split */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-medium">
              <span className="h-px w-8 bg-primary" /> Edição 01 · Material digital
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-balance">
              O guia que cuida da sua{" "}
              <em className="italic text-primary font-normal">beleza</em>
              {" "}&{" "}
              <em className="italic text-primary font-normal">saúde</em>.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Mais de 30 dicas práticas, em linguagem simples, sem enrolação. Tudo que você precisa para se cuidar de verdade — num único lugar.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <CTAButton>Quero meu Checklist</CTAButton>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="size-4" /> Pagamento 100% seguro · Pix
              </div>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm">
              <div>
                <div className="font-display text-2xl font-semibold">30+</div>
                <div className="text-muted-foreground">dicas práticas</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl font-semibold">7</div>
                <div className="text-muted-foreground">categorias</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl font-semibold flex items-center gap-1">
                  4.9 <Star className="size-4 fill-primary text-primary" />
                </div>
                <div className="text-muted-foreground">avaliação</div>
              </div>
            </div>
          </div>

          {/* Price card */}
          <aside className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-blush/40 -rotate-2" />
              <div className="relative rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Acesso imediato</span>
                  <span className="rounded-full bg-primary/10 text-primary text-xs font-medium px-3 py-1">-67%</span>
                </div>
                <div className="text-muted-foreground line-through text-lg">De R$ 29,90</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-2xl text-foreground">R$</span>
                  <span className="font-display text-7xl lg:text-8xl font-semibold tracking-tight leading-none">9,90</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">no Pix · funciona no celular, tablet e PC</div>

                <a
                  href={CHECKOUT_URL}
                  className="mt-8 flex items-center justify-center gap-2 w-full rounded-full clay-gradient text-primary-foreground font-medium py-4 shadow-lg shadow-primary/20 hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  Garantir meu acesso <ArrowRight className="size-4" />
                </a>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Pagamento via Mercado Pago</li>
                  <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Sem mensalidade — é seu pra sempre</li>
                  <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Receba na hora por e-mail</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="border-y border-border bg-secondary/40 overflow-hidden">
        <div className="flex marquee whitespace-nowrap py-5 font-display italic text-2xl text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 pr-12 shrink-0">
              {["pele", "cabelo", "alimentação", "sono", "autoestima", "exames", "skincare", "energia", "mente"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  {w}
                  <span className="size-1.5 rounded-full bg-primary/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* iFood comparison */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Reflexão</span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance">
          Quanto você gasta num <em className="italic text-primary">iFood</em> sem pensar?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          A gente pede um lanche, um açaí, uma pizza — e nem percebe o dinheiro ir embora. Por <strong className="text-foreground">menos do que isso</strong>, você leva um guia completo que vai cuidar da sua beleza, da sua saúde e — principalmente — da sua autoestima.
        </p>
        <div className="mt-10 inline-flex flex-col items-center gap-1 rounded-2xl border border-border bg-card px-8 py-6">
          <div className="text-sm text-muted-foreground">Por apenas</div>
          <div className="font-display text-5xl font-semibold text-primary">R$ 9,90</div>
          <div className="text-sm text-muted-foreground">algo que fica com você pra sempre 💖</div>
        </div>
      </section>

      {/* Topics — magazine grid */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">O que está incluído</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-2xl text-balance">
                Tudo que você vai <em className="italic">aprender</em>.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">10 áreas essenciais cobertas em profundidade — do skincare ao bem-estar mental.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((t, i) => {
              const tone = toneStyles[t.tone];
              const Icon = t.Icon;
              return (
                <article
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
                >
                  {/* decorative gradient blob */}
                  <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-blush/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex items-start justify-between mb-6">
                    <div className={`size-14 rounded-2xl flex items-center justify-center ${tone.wrap} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                      <Icon className={`size-7 ${tone.icon}`} strokeWidth={1.6} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground bg-secondary/60 rounded-full px-3 py-1">
                      {t.tag}
                    </span>
                  </div>

                  <h3 className="relative font-display text-2xl tracking-tight mb-2 leading-tight">{t.title}</h3>
                  <p className="relative text-muted-foreground text-sm leading-relaxed">{t.desc}</p>

                  <div className="relative mt-6 flex items-center justify-between pt-5 border-t border-border/60">
                    <span className="text-xs font-mono text-primary tracking-wider">{String(i + 1).padStart(2, "0")} / 10</span>
                    <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Includes list */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Tudo incluso</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance">
              O que você leva nesse <em className="italic">guia</em>.
            </h2>
            <p className="mt-6 text-muted-foreground">Um pacote completo, pronto para você abrir e começar hoje mesmo.</p>
            <CTAButton className="mt-8">Pegar o meu agora</CTAButton>
          </div>
          <ul className="lg:col-span-7 divide-y divide-border border-y border-border">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-6 py-6">
                <span className="font-mono text-xs text-primary pt-1 w-8">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1 text-lg text-foreground">{item}</div>
                <Check className="size-5 text-primary mt-1" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Depoimentos</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance">
              Quem já tem, <em className="italic">amou</em>. 💖
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl bg-card border border-border p-8 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="font-display text-xl leading-snug text-foreground flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.city}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center">
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1] text-balance">
          Sua <em className="italic text-primary">autoestima</em> agradece.
          <br />
          Sua <em className="italic text-primary">saúde</em> também.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Acesso imediato após o pagamento. Funciona no celular, tablet e computador. Sem mensalidade — é seu para sempre.
        </p>

        <div className="mt-12 inline-flex flex-col items-center gap-2 rounded-3xl bg-card border border-border px-10 py-8 shadow-lg">
          <div className="text-muted-foreground line-through">De R$ 29,90</div>
          <div className="font-display text-7xl font-semibold text-primary">R$ 9,90</div>
          <div className="text-sm text-muted-foreground mb-4">no Pix · acesso imediato</div>
          <CTAButton>Quero meu Checklist agora</CTAButton>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Checklist Bem-Estar. Todos os direitos reservados.</div>
          <div className="flex items-center gap-2"><Lock className="size-4" /> Pagamento processado pelo Mercado Pago</div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a
        href={CHECKOUT_URL}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full clay-gradient text-primary-foreground px-5 py-3 text-sm font-medium shadow-2xl shadow-primary/30 hover:-translate-y-0.5 transition-transform"
      >
        <Sparkles className="size-4" /> R$ 9,90
      </a>
    </main>
  );
}
