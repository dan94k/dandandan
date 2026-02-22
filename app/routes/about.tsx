import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About — dandandan" },
    { name: "description", content: "Software Engineer com 5 anos de experiência em desenvolvimento full stack." },
  ];
}

const contacts = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5521968112089",
    display: "(21) 96811-2089",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/danwhat/",
    display: "linkedin.com/in/danwhat",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/d4noliveira/",
    display: "@d4noliveira",
  },
];

const stack = [
  "C#",
  ".NET",
  "REST APIs",
  "React",
  "TypeScript",
  "WPF",
  "Mensageria",
  "Bancos de Dados",
  "Testes Automatizados",
];

export default function About() {
  return (
    <main className="min-h-[calc(100vh-64px)] py-12 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-semibold text-gh-fg mb-8 pb-4 border-b border-gh-border">
          About
        </h1>

        <div className="space-y-4 text-gh-fg-muted leading-7 text-[15px]">
          <p>
            Este site é um espaço simples onde compartilho meus estudos, experimentos e projetos
            paralelos.
          </p>
          <p>
            Aqui você vai encontrar ideias que estou testando, protótipos, ferramentas pequenas e
            projetos que nasceram por curiosidade ou vontade de aprender algo novo.
          </p>
          <p>
            Não é necessariamente um portfólio tradicional — é mais um registro público do que estou
            construindo e explorando como desenvolvedor.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-gh-border space-y-4 text-gh-fg-muted leading-7 text-[15px]">
          <p>
            Profissionalmente, sou Software Engineer com 5 anos de experiência no desenvolvimento de
            aplicações full stack, com foco principal em backend utilizando C# e .NET.
          </p>
          <p>
            Atuo construindo serviços escaláveis e resilientes, desenvolvendo APIs e BFFs e
            trabalhando com arquitetura de sistemas distribuídos, mensageria e testes automatizados.
            Também tenho experiência com desenvolvimento frontend em React e TypeScript e aplicações
            desktop com WPF.
          </p>
          <p>
            Busco sempre aplicar boas práticas como SOLID e Clean Code para garantir qualidade,
            performance e escalabilidade.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-gh-border">
          <h2 className="text-base font-semibold text-gh-fg mb-4">Stack principal</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                           bg-gh-tag-bg text-gh-accent border border-gh-tag-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gh-border">
          <h2 className="text-base font-semibold text-gh-fg mb-4">Contato</h2>
          <ul className="space-y-3">
            {contacts.map(({ label, href, display }) => (
              <li key={label} className="flex items-center gap-3 text-[15px]">
                <span className="text-gh-fg-subtle w-20 shrink-0">{label}</span>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gh-accent hover:underline transition-colors duration-150"
                >
                  {display}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </main>
  );
}
