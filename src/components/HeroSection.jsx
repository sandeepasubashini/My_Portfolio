import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight , opacity-0 animate-fade-in-delay-1">Hello, I'm Sandeepa Subashini</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2">Information Technology Student & Web Developer</p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-3">
                <a href="#Projects" className="cosmic-button">View My Work</a>
            </div>


        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

    </section>
  );
}