export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--color-border)] bg-[var(--color-background)] py-6 z-1">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-[var(--color-muted)]">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>

        <p className="text-[var(--color-foreground)]">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
