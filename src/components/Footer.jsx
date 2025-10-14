

import { Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#101522] text-white pt-12 pb-6 px-4 mt-12">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-12">
                {/* Left: Logo & Description */}
                <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2 flex items-center">Portfolio<span className="text-primary ml-1">.</span></h2>
                    <p className="text-muted-foreground mb-4">Creating beautiful digital experiences through code and design. Let's build something amazing together.</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://github.com/sandeepasubashini" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        <a href="https://www.instagram.com/sandeepa_subashini/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>
                {/* Center: Quick Links */}
                <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
                    <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                        <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                        <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                        <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>
                {/* Right: Contact Info */}
                <div className="flex-1 min-w-[220px]">
                    <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
                    <p className="mb-1 text-muted-foreground">Gampaha, Sri Lanka</p>
                    <p className="mb-1 text-muted-foreground">sandeepasubashini6@gmail.com</p>
                    <p className="mb-1 text-muted-foreground">0759163821</p>
                </div>
            </div>
            <div className="container mx-auto max-w-6xl border-t border-white/10 mt-8 pt-6 text-center">
                <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
}