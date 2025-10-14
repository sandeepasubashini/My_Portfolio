import { Briefcase, Code, Locate, LocationEdit, User } from "lucide-react";



export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span> 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* About text and buttons */}
          <div className="space-y-6 md:col-span-2">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              I'm an undergraduate Information Technology student with a strong passion for full stack development. I specializee in creating mordern, user friendly websites and web applications using the latest technologies.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch

            </a>

            
            <a href="public\projects\SandeepaM Resume.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 ml-2">
              Download CV

            </a>
            
           </div>
          </div>

          {/* Profile image */}
          <div className="flex justify-center md:justify-end md:col-span-1 mb-8 md:mb-0">
            <img 
              src="public/projects/WhatsApp Image .jpg" 
              alt="Sandeepa Subashini" 
              className="w-48 h-48 object-cover rounded-full border-4 border-primary shadow-lg" 
            />
          </div>
          {/* Info cards */}
          <div className="grod grid-cols-1 gap-6 md:col-span-2">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                 <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                    <h4><b>Name</b></h4>
                    <p>
                      Sandeepa Subashini
                    </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                 <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                    <h4><b>Location</b></h4>
                    <p>
                      Gampaha,Sri Lanka
                    </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                 <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                    <h4><b>Education</b></h4>
                    <p>
                      BSc (Hons) in Information Technology
                      Specialising in Information Technology
                    </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                 <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                    <h4><b>Employement</b></h4>
                    <p>
                      Looking for opportunities
                    </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}