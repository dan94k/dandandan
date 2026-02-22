import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "dandandan" },
    { name: "description", content: "Estudos, experimentos e projetos paralelos." },
  ];
}

export default function Home() {
  return <main className="min-h-[calc(100vh-64px)]" />;
}
