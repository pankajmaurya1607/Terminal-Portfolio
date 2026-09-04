import Hero from "@/components/hero/Hero";
import Terminal from "@/components/terminal/Terminal";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Engineering from "@/components/engineering/Engineering";
import Skills from "@/components/skills/Skills";
import Coding from "@/components/coding/Coding";
import Education from "@/components/education/Education";
import Achievements from "@/components/achievements/Achievements";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Terminal />
      <About />
      <Experience />
      <Projects />
      <Engineering />
      <Skills />
      <Coding />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}
