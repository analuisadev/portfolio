export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t">
      <div className="container max-w-6xl mx-auto text-center text-sm text-muted-foreground">
        <p>© {currentYear} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}