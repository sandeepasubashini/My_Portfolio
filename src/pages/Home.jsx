import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { Footer } from "../components/Footer";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* Theme Toggle */}
          <ThemeToggle />

        {/* Background Effects */}

        {/* Navbar */}
        <Navbar/>
        

        {/* Hero Section */}

        {/* About Section */}

        {/* Skills Section */}

        {/* Projects Section */}

        {/* Contact Section */}
        {/* Main content */}
        <main>
          <HeroSection />
          <AboutSection/>
          <SkillSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer/>

    </div>
  ); 
      
  
};