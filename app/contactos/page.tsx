import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Users,
  Shield,
  Sparkles,
  Building2,
  Star,
  LucideIcon,
} from "lucide-react";

type SupportChannel = {
  title: string;
  details: string[];
  Icon: LucideIcon;
  actionLabel?: string;
};

type MemberHighlight = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

type Partner = {
  name: string;
  description: string;
};

const supportChannels: SupportChannel[] = [
  {
    title: "Email",
    details: ["contato@cosmocomickon.com", "suporte@cosmocomickon.com"],
    Icon: Mail,
  },
  {
    title: "Telefone",
    details: ["+351 21 123 4567", "Seg-Sex: 9h-18h"],
    Icon: Phone,
  },
  {
    title: "Endereço",
    details: ["Rua das Estrelas, 123", "1000-000 Lisboa, Portugal"],
    Icon: MapPin,
  },
  {
    title: "Chat ao Vivo",
    details: ["Precisa de ajuda imediata? Fale com nossa equipe!"],
    Icon: MessageCircle,
    actionLabel: "Iniciar Chat",
  },
];

const memberHighlights: MemberHighlight[] = [
  {
    title: "Comunidade Exclusiva",
    description: "Salas privadas para criadores, leitores e colecionadores.",
    Icon: Users,
  },
  {
    title: "Segurança & Suporte",
    description: "Monitorização 24/7 para eventos e lançamentos premium.",
    Icon: Shield,
  },
  {
    title: "Experiências VIP",
    description: "Pré-vendas, workshops e conteúdos antes do público geral.",
    Icon: Sparkles,
  },
];

const partners: Partner[] = [
  {
    name: "Galactic Prints",
    description: "Edição limitada de posters e artes oficiais.",
  },
  {
    name: "Nova Studio",
    description: "Parceria em animações e trailers exclusivos.",
  },
  {
    name: "Cosmo Merch Labs",
    description: "Linha oficial de colecionáveis e apparel.",
  },
];

export default function Contactos() {
  return (
    <section className="w-full min-h-screen px-[8vw] py-[4vw]">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Entre em <span className="glow-effect">Contacto</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Estamos aqui para ajudar. Entre em contacto connosco!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-graydeep border border-neongreen rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2 text-sm font-medium text-white">
                Nome
                <input
                  className="w-full rounded-xl border border-neongreen/40 bg-black/50 px-4 py-3 text-white placeholder:text-gray-400 focus:border-neongreen focus:outline-none"
                  placeholder="Seu nome completo"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-white">
                Email
                <input
                  type="email"
                  className="w-full rounded-xl border border-neongreen/40 bg-black/50 px-4 py-3 text-white placeholder:text-gray-400 focus:border-neongreen focus:outline-none"
                  placeholder="seu@email.com"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-white">
              Assunto
              <input
                className="w-full rounded-xl border border-neongreen/40 bg-black/50 px-4 py-3 text-white placeholder:text-gray-400 focus:border-neongreen focus:outline-none"
                placeholder="Sobre o que você quer falar?"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-white">
              Mensagem
              <textarea
                className="min-h-[150px] w-full rounded-xl border border-neongreen/40 bg-black/50 px-4 py-3 text-white placeholder:text-gray-400 focus:border-neongreen focus:outline-none"
                placeholder="Digite sua mensagem aqui..."
              />
            </label>

            <Button type="submit" className="w-full glow-border" size="lg">
              Enviar Mensagem
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          {supportChannels.map(({ title, details, Icon, actionLabel }) => (
            <div
              key={title}
              className="rounded-3xl border border-neongreen/30 bg-graydeep p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
                  {details.map((detail) => (
                    <p key={detail} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                  {actionLabel && (
                    <Button variant="secondary" className="mt-4">
                      {actionLabel}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="bg-graydeep border border-neongreen rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">
              Área de <span className="text-primary">Membros</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Benefícios pensados para criadores e leitores que vivem a comunidade
            Cosmo todos os dias.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {memberHighlights.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="rounded-xl border border-neongreen/20 bg-black/40 p-4 flex flex-col gap-2"
              >
                <Icon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
          <Button size="lg" className="mt-8 glow-border">
            Aceder à Área de Membros
          </Button>
        </div>

        <div className="bg-graydeep border border-neongreen rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">
              Parceiros <span className="text-primary">Oficiais</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Conectamos marcas e estúdios que impulsionam o universo Cosmo com
            experiências exclusivas.
          </p>
          <div className="space-y-4">
            {partners.map(({ name, description }) => (
              <div
                key={name}
                className="flex items-start justify-between rounded-xl border border-neongreen/20 bg-black/40 p-5"
              >
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    {name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {description}
                  </p>
                </div>
                <Button variant="secondary" size="sm">
                  Saber Mais
                </Button>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-6">
            Seja um Parceiro
          </Button>
        </div>
      </div>

      <div className="bg-graydeep border border-neongreen rounded-3xl p-8 text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">
          FAQ - <span className="text-primary">Perguntas Frequentes</span>
        </h2>
        <p className="text-muted-foreground mb-6">
          Antes de entrar em contacto, confira nossas perguntas frequentes.
          Talvez sua dúvida já tenha sido respondida!
        </p>
        <Button size="lg" variant="secondary">
          Ver FAQ
        </Button>
      </div>
    </section>
  );
}
