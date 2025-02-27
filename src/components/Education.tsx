
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educations = [
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário Maurício de Nassau - UNINASSAU",
    period: "2021 - 2023",
    type: "Graduação",
    icon: GraduationCap,
  },
  {
    title: "Especialização em Tecnologias Aplicadas a Educação",
    institution: "Centro Universitário União das Américas Descomplica - UNIAMÉRICA",
    period: "2024 - 2025",
    type: "Pós-graduação",
    icon: BookOpen,
  },
  {
    title: "Especialização em Docência na Educação Profissional e Tecnológica",
    institution: "Instituto Federal da Bahia - IFBA",
    period: "2025 - 2026",
    type: "Pós-graduação",
    icon: BookOpen,
  },
  {
    title: "Programador de Sistemas",
    institution: "Instituto Federal de Brasília - IFB",
    period: "2016 - 2017",
    type: "Aperfeiçoamento",
    icon: Award,
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-background to-background/70">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">
          Formação Acadêmica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((education, index) => (
            <Card 
              key={index} 
              className="glass hover-scale transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="pb-3 flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <education.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-display text-xl">{education.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-1">{education.type}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-3">
                  <p className="text-foreground/80">{education.institution}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{education.period}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
