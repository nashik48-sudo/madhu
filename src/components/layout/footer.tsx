import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <Logo />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} EquityStream. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
