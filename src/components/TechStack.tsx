
import { Code2, Layout, Smartphone, GraduationCap, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const technologies = [
  {
    title: "Desenvolvimento Web",
    icon: Code2,
    skills: [
      "React",
      "ViteJS",
      "TypeScript",
      "Semantic UI",
      "Tailwind CSS",
      "StyledComponents",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Sass"
    ],
  },
  {
    title: "Design de Interface",
    icon: Layout,
    skills: [
      "Figma",
      "UI/UX",
      "Design System",
      "Responsividade"
    ],
  },
  {
    title: "Desenvolvimento Mobile",
    icon: Smartphone,
    skills: ["React Native"],
  },
  {
    title: "Versionamento de código",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "BitBucket"
    ],
  },
  {
    title: "Docência",
    icon: GraduationCap,
    skills: [
      "Metodologias Ativas",
      "Mentoria",
      "Workshops",
      "Palestras",
      "Cursos Online"
    ],
  },
];

export function TechStack() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container max-w-7xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">
          Conhecimentos Tecnológicos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="glass hover-scale min-h-[320px]">
              <CardHeader className="pb-3">
                <tech.icon className="w-8 h-8 mb-2 text-primary" />
                <CardTitle className="font-display text-xl">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2.5">
                  {tech.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-foreground/80 text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
