import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">Fortris</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Platform
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Industry
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Company
            </a>
          </div>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6">
            Book a demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
