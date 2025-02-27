import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { href: "#about", label: "Sobre mim" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiência" },
  { href: "#projects", label: "Projetos" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    if (isMobile) setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-display font-semibold hover:text-primary transition-colors">
          <Code2 className="w-5 h-5" />
          <span>Ana Luisa</span>
        </a>

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-6 items-center">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation Drawer */}
        {isMobile && isMenuOpen && (
          <div className="fixed right-0 top-[72px] w-64 h-auto glass rounded-bl-lg animate-in slide-in-from-right">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex justify-start pt-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}