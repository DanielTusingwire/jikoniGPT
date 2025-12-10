"use client";

interface ChefHeaderProps {
  onBack?: () => void;
}

export function ChefHeader({ onBack }: ChefHeaderProps) {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
        {onBack ? (
          <>
            <button
              onClick={onBack}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Go back"
            >
              ←
            </button>
            <h1 className="text-2xl font-bold text-primary">JikoniGPT</h1>
            <div className="w-6" />
          </>
        ) : (
          <h1 className="text-2xl font-bold text-primary w-full">JikoniGPT</h1>
        )}
      </div>
    </header>
  );
}
