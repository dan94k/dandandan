# Design Rules

Este projeto segue um sistema de design inspirado na interface do **GitHub em Dark Mode**.

---

## Paleta de Cores

Todas as cores são definidas como variáveis CSS no `@theme` do Tailwind v4 em `app/app.css`.

| Token                  | Valor     | Uso                                              |
|------------------------|-----------|--------------------------------------------------|
| `--color-gh-canvas`    | `#0d1117` | Background principal da página                   |
| `--color-gh-surface`   | `#161b22` | Superfícies elevadas: navbar, cards              |
| `--color-gh-inset`     | `#21262d` | Background de estado ativo (nav link ativo, hover)|
| `--color-gh-border`    | `#30363d` | Bordas e divisores padrão                        |
| `--color-gh-border-muted` | `#3d444d` | Bordas secundárias e sutis                    |
| `--color-gh-fg`        | `#e6edf3` | Texto primário                                   |
| `--color-gh-fg-muted`  | `#8b949e` | Texto secundário / descritivo                    |
| `--color-gh-fg-subtle` | `#636e7b` | Texto terciário / placeholders                   |
| `--color-gh-accent`    | `#58a6ff` | Links, estados ativos, destaques                 |
| `--color-gh-accent-hover` | `#388bfd` | Hover de elementos com accent                 |
| `--color-gh-success`   | `#3fb950` | Feedback positivo, botões de ação primária       |
| `--color-gh-tag-bg`    | `#388bfd1a` | Background de tags/badges de tecnologia        |
| `--color-gh-tag-border`| `#388bfd40` | Borda de tags/badges de tecnologia            |

### Uso no Tailwind

As cores estão disponíveis como utilitários Tailwind pelo prefixo `gh-`:

```
bg-gh-canvas       text-gh-fg        border-gh-border
bg-gh-surface      text-gh-fg-muted  border-gh-border-muted
bg-gh-inset        text-gh-accent    border-gh-tag-border
bg-gh-tag-bg
```

---

## Tipografia

- **Fonte:** `Inter` (Google Fonts), com fallback para `ui-sans-serif, system-ui, sans-serif`
- **Tamanho base:** `15px` para corpo de texto
- **Hierarquia:**
  - `text-2xl font-semibold` → Títulos de página (`h1`)
  - `text-base font-semibold` → Subtítulos de seção (`h2`)
  - `text-[15px]` → Corpo de texto
  - `text-sm` → Navegação, labels
  - `text-xs` → Tags, badges

---

## Layout

- **Largura máxima de conteúdo:** `max-w-3xl` (768px) para texto e conteúdo editorial
- **Largura máxima da navbar:** `max-w-5xl` (1024px)
- **Padding horizontal:** `px-6` (24px)
- **Padding vertical de página:** `py-12` (48px)

---

## Navbar

- **Background:** `bg-gh-surface` (`#161b22`)
- **Borda inferior:** `border-b border-gh-border` (`#30363d`)
- **Altura:** `h-16` (64px)
- **Posição:** `sticky top-0 z-50`
- **Links inativos:** `text-gh-fg-muted` com hover `text-gh-fg bg-gh-inset`
- **Link ativo:** `bg-gh-inset text-gh-fg`
- **Border radius dos links:** `rounded-md` (6px)

---

## Divisores e Seções

- Divisores horizontais: `border-t border-gh-border`
- Título de seção seguido de divisor: `border-b border-gh-border pb-4 mb-8`

---

## Badges / Tags de Tecnologia

Estilo inspirado nos topic tags do GitHub:

- **Background:** `bg-gh-tag-bg` (`#388bfd1a`)
- **Texto:** `text-gh-accent` (`#58a6ff`)
- **Borda:** `border border-gh-tag-border` (`#388bfd40`)
- **Border radius:** `rounded-full`
- **Tamanho do texto:** `text-xs font-medium`
- **Padding:** `px-3 py-1`

---

## Botões (referência futura)

| Tipo       | Background      | Texto      | Borda           |
|------------|-----------------|------------|-----------------|
| Primário   | `#238636`       | `#ffffff`  | `#2ea043`       |
| Secundário | `#21262d`       | `#e6edf3`  | `#363b42`       |
| Danger     | `#da3633`       | `#ffffff`  | `#f85149`       |

---

## Princípios Gerais

1. **Dark-first:** Não há modo claro. O site assume sempre o tema escuro do GitHub.
2. **Contraste suave:** Evitar branco puro (`#ffffff`). Usar `#e6edf3` para texto principal.
3. **Hierarquia por cor:** Distinguir importância usando `gh-fg` > `gh-fg-muted` > `gh-fg-subtle`.
4. **Bordas discretas:** Separadores usam `#30363d`, nunca cores fortes.
5. **Consistência de espaçamento:** Seguir a escala de 4px do Tailwind (4, 8, 12, 16, 24, 32...).
