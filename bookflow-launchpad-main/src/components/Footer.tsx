import { Waves } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Waves className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">BookFlow</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} BookFlow. Built for studio owners who want things to just work.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
