import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full floating" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/20 rounded-full floating" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-40 right-40 w-16 h-16 bg-primary/15 rounded-full floating" style={{ animationDelay: "1s" }} />
      </div>

      <div className="animate-fadeIn space-y-6 max-w-3xl relative z-10">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
          Olá, seja bem-vindo(a) ao meu portfólio!
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Sou desenvolvedora Front-end e professora de tecnologia, apaixonada por criar experiências digitais incríveis e compartilhar conhecimento.
        </p>
        <Button
          variant="outline"
          size="lg"
          onClick={scrollToAbout}
          className="mt-8 animate-pulse hover:animate-none glass"
        >
          Conheça meu trabalho
        </Button>
      </div>
      <div className="absolute bottom-12 animate-bounce cursor-pointer z-10" onClick={scrollToAbout}>
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}