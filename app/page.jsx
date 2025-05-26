import HomeSection from "@/components/HomeSection"; // Impor komponen
import AboutSection from "@/components/AboutSection"; // Impor komponen
import SkillsSection from "@/components/SkillsSection"; // Impor komponen
import ProjectsSection from "@/components/ProjectsSection"; // Impor komponen
import ContactSection from "@/components/ContactSection"; // Impor komponen

export default function HomePage() {
  return (
    <> 
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Placeholder untuk memastikan ada ruang untuk scroll ke bawah */}
      {/* <div style={{ height: '100vh', background: 'lightgray' }} id="about">Placeholder About</div>
      <div style={{ height: '100vh', background: 'lightcoral' }} id="skills">Placeholder Skills</div>
      <div style={{ height: '100vh', background: 'lightblue' }} id="projects">Placeholder Projects</div>
      <div style={{ height: '100vh', background: 'lightgoldenrodyellow' }} id="contact">Placeholder Contact</div> */}
    </>
  );
}