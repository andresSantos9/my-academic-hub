export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-2">
            © {currentYear} Andrés Santos Torres. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Lovable</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
