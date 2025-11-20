import { ThemeToggle } from "../theme-toggle";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/60 dark:border-gray-800/60 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-row items-center justify-between gap-4 text-sm">
        {/* Left Side: Logo or Text */}
        <span className="font-semibold text-primary">
          New Life Tamil AG • Since 2005
        </span>

        {/* Right Side: Theme Toggle */}

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
