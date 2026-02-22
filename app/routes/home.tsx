import type { Route } from "./+types/home";

const GITHUB_USER = "dan94k";

interface Project {
  repo: string;
  title: string;
  description: string;
  pageUrl: string;
  repoUrl: string;
}

async function fetchProjects(): Promise<Project[]> {
  const reposRes = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`
  );
  if (!reposRes.ok) throw new Error("Falha ao buscar repositórios.");

  const repos: Array<{ name: string; html_url: string }> = await reposRes.json();

  const results = await Promise.allSettled(
    repos.map(async (repo) => {
      const fileRes = await fetch(
        `https://api.github.com/repos/${GITHUB_USER}/${repo.name}/contents/dandandan.md`
      );
      if (!fileRes.ok) return null;

      const file: { content: string } = await fileRes.json();
      const binary = atob(file.content.replace(/\n/g, ""));
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
      const content = new TextDecoder("utf-8").decode(bytes);
      const lines = content.split("\n").map((l) => l.trim());

      if (lines[0] !== "v1") return null;

      return {
        repo: repo.name,
        title: lines[1] ?? repo.name,
        description: lines[2] ?? "",
        pageUrl: `https://${GITHUB_USER}.github.io/${repo.name}/`,
        repoUrl: repo.html_url,
      } satisfies Project;
    })
  );

  return results
    .filter(
      (r): r is PromiseFulfilledResult<Project> =>
        r.status === "fulfilled" && r.value !== null
    )
    .map((r) => r.value);
}

export async function clientLoader(): Promise<Project[]> {
  return fetchProjects();
}


export function meta({}: Route.MetaArgs) {
  return [
    { title: "dandandan" },
    { name: "description", content: "Estudos, experimentos e projetos paralelos." },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const projects = loaderData;

  return (
    <main className="min-h-[calc(100vh-64px)] py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold text-gh-fg mb-8 pb-4 border-b border-gh-border">
          Projetos
        </h1>

        {projects.length === 0 ? (
          <p className="text-gh-fg-muted text-[15px]">Nenhum projeto encontrado.</p>
        ) : (
          <div className="space-y-3">
            {projects.map((project) => (
              <a
                key={project.repo}
                href={project.pageUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-6 p-4 rounded-md border border-gh-border bg-gh-surface hover:border-gh-border-muted hover:bg-gh-inset transition-colors duration-150"
              >
                <div className="min-w-0">
                  <span className="text-base font-semibold text-gh-accent group-hover:underline">
                    {project.title}
                  </span>
                  {project.description && (
                    <p className="mt-1 text-[15px] text-gh-fg-muted leading-6 truncate">
                      {project.description}
                    </p>
                  )}
                </div>
                <span className="shrink-0 mt-0.5 text-xs font-mono text-gh-fg-subtle">
                  {project.repo}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
