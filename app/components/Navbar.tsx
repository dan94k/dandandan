import { Link, useLocation } from "react-router";

const navLinks = [{ to: "/about", label: "About" }];

export function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-gh-surface border-b border-gh-border sticky top-0 z-50">
      <div className="w-full px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-gh-fg font-semibold text-base hover:text-gh-accent transition-colors duration-150"
        >
          dandandan
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname.startsWith(to);

            return (
              <Link
                key={to}
                to={to}
                className={[
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150",
                  isActive
                    ? "bg-gh-inset text-gh-fg"
                    : "text-gh-fg-muted hover:text-gh-fg hover:bg-gh-inset",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
