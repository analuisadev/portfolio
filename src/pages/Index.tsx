
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";
import { AboutMe } from "@/components/AboutMe";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Education } from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <ThemeToggle />
      <main className="pt-20">
        <Header />
        <AboutMe />
        <Education />
        <TechStack />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <style>{`
        .enabled {
          z-index: 100 !important;
        }
      `}</style>
    </div>
  );
};

export default Index;
