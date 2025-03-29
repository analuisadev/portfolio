import { Card, CardContent, CardHeader } from "@/components/ui/card";

const experiences = [
  {
    period: "2025 - Presente",
    role: "Docente de Educação Profissional",
    company: "SENAI",
    description:
      "Docente no curso de técnico em Informática pra Internet.",
  },
  {
    period: "2024 - 2025",
    role: "Redatora de Conteúdo Web",
    company: "Revelo",
    description:
      "Criação e envio de artigos sobre desenvolvimento de software e carreira em T.I.",
  },
  {
    period: "2023 - 2025",
    role: "Docente de Educação Profissional",
    company: "SENAC",
    description:
      "Docente dos cursos técnico em Desenvolvimento de Sistemas, Programador Full-Stack, Excel Básico, Intermediário e Avançado, Informática Básica e demais cursos internos para projetos: SPMJ, SEMDEC e INSS.",
  },
  {
    period: "2020 - 2024",
    role: "Desenvolvedora de Software Front-End",
    company: "Autônomo",
    description:
      "Desenvolvimento de aplicações web e mobiles seguindo padrões de boas práticas, aplicabilidade e usabilidade da experiência do usuário."
  },
  {
    period: "2022 - 2022",
    role: "Desenvolvedora de Software",
    company: "ECONT Sistemas",
    description:
      "Construção de um novo padrão de código mais limpo e eficiente como desenvolvedora de software FullStack, ajudando a resolver pequenos bugs, localizando e solucionando outras falhas do sistemas, reduzindo os demais erros, aplicando testes na verificação do software melhorado e verificação do código em geral.",
  },
  {
    period: "2021 - 2022",
    role: "Monitora Pedagógica e Assistente de TI",
    company: "Grau Técnico",
    description:
      "Auxilio dos processos de ensino e aprendizagem, elaboração de projetos pedagógicos e planos de curso nos alunos do ensino Profissionalizante e auxilio nos serviços de educação. Bem como no auxilio de demandas de infraestrutura, redes, softwares e hardwares em geral.",
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">
          Experiência Profissional
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass hover-scale">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}