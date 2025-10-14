

import { Github } from "lucide-react";

const projects = [
    {
        id:1,
        title: "Online Reapir Equipment and Emergency Vehicle Repair Management System",
        description: "An online platform for managing repair equipment and emergency vehicle repairs, enabling quick service requests, team dispatching, and real-time status tracking.",
        image: "/projects/Vehicle_repair.jpg",
        tags: ["React", "Node:js", "MongoDB", "Mern Stack"],
        githubUrl: "https://github.com/sandeepasubashini/ITP_PROJECT",
    },
    {
        id:2,
        title: "Online Laundry Management System",
        description: "An online laundry managment system for easy laundry booking, order tracking, and real-time updates for customers.",
        image: "/projects/laundry.jpg",
        tags: ["Java", "SQL", "HTML/CSS", "Eclipse"],
        githubUrl: "https://github.com/sandeepasubashini/Online_Laundry_Managment_System",
    },
    {
        id:3,
        title: "Finance Tracking App",
        description: "A financial management app that helps users track their income, expenses, and savings in real-time.",
        image: "/projects/finance-app.png",
        tags: ["Kotlin", "Android Studio", "UI/UX Design"],
        githubUrl: "https://github.com/sandeepasubashini/Finance_Tracking_App",
    },
    {
        id:4,
        title: "Online job protal",
        description: "An online job portal web app that connects job seekers and employers, allowing users to search, apply, and manage job listings while enabling companies to post openings and review applications in real-time.",
        image: "/projects/onlene_job.png",
        tags: ["HTML/CSS", "JavaScript", "PHP"],
        githubUrl: "https://github.com/sandeepasubashini/Online-job-portal-website-main/tree/main/Online-job-portal-website-main",
    },
    {
        id:5,
        title: "Travel App",
        description: "A travel app that helps users explore destinations, plan trips, and manage itineraries, offering real-time updates, booking options, and personalized travel experiences.",
        image: "/projects/travel_app.jpeg",
        tags: ["Kotlin", "Android Studio", "UI/UX Design"],
        githubUrl: "https://github.com/sandeepasubashini/Travel_App",
    }
];


export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 ralative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Take a look at some of my recent work. Each project represents unique challenges and solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                            <div className="flex items-center justify-between mb-1 px-2">
                                <h3 className="text-lg font-semibold leading-tight flex-1">{project.title}</h3>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                   className="bg-muted rounded-full p-2 flex items-center justify-center shadow transition hover:bg-primary/10 ml-2"
                                   aria-label="View on GitHub">
                                    <Github size={18} className="text-foreground/80 group-hover:text-primary transition-colors duration-300" />
                                </a>
                            </div>
                            <p className="text-muted-foreground text-sm mb-4 px-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4 px-2">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs front-medium border rounded-full bg-primary/20 bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}