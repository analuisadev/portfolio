
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialButton } from "./SocialButton";

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideUp">
            <h2 className="font-display text-3xl font-bold">Sobre mim</h2>
            <p className="text-lg text-muted-foreground">
              Sou desenvolvedora de software Front-End com foco em criação de soluções para plataformas
              web e mobile, e docente na educação profissional na área de tecnologia da informação. Apaixonda
              por criar soluções tecnologicas e transformar vidas através da tecnologia.
            </p>
            <div className="flex flex-wrap gap-4">
              <SocialButton
                icon={Github}
                label="GitHub"
                href="https://github.com/analuisadev"
              />
              <SocialButton
                icon={Linkedin}
                label="LinkedIn"
                href="https://www.linkedin.com/in/ana-luisa-/"
              />
              <Button className="gap-2 hover:scale-105 transition-transform" size="lg">
                <FileText className="w-4 h-4" />
                <a href="http://lattes.cnpq.br/1353758349589200" target="_blank">Curriculo Lattes</a>
              </Button>
            </div>
          </div>
          <div className="relative group max-w-md mx-auto">
            <div className="aspect-square rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="../../public/eu.jpeg"
                alt="Foto de perfil"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
