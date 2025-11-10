const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Imponira Automobili. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
