import { Waves } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
            <Waves className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">BookFlow</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#pain" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            The Problem
          </a>
          <a href="#solution" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Solution
          </a>
          <a href="#product" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#cta" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Get Access
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
