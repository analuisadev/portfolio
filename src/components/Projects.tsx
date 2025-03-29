import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "VidFlow",
    description: "Plataforma de vídeos web Full-Stack",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "https://vid-flow-mauve.vercel.app/",
  },
  {
    title: "Ecommerce",
    description: "Aplicativo de E-commerce",
    image: "../../src/img/ecommerce-preview.jpg",
    link: "https://github.com/analuisadev/E-Commerce",
  },
  {
    title: "Freelance Hours",
    description: "Sistema de freelancer para desenvolvedores - Em andamento",
    image: "../../src/img/freelance-hours-preview.png",
    link: "https://github.com/analuisadev/freelance-hours",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">
          Projetos Desenvolvidos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <Button asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    Ver Projeto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}