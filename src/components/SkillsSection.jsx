import { useState } from 'react';
import { cn } from '@/lib/utils'; 

const Skills = [
    //Frontend
    {name : "HTML/CSS", level: 95,category: "Frontend"},
    {name : "JavaScript", level: 85,category: "Frontend"},
    {name : "React.Js", level: 80,category: "Frontend"},
    {name : "Java", level: 75,category: "Frontend"},
    {name : "Next.Js", level: 70,category: "Frontend"},

    //Backend
    {name : "Node.Js", level: 80,category: "Backend"},
    {name : "Express.Js", level: 75,category: "Backend"},
    {name : "MongoDB", level: 70,category: "Backend"},
    {name : "SQL", level: 65,category: "Backend"},  
    {name : "PHP", level: 60,category: "Backend"},
    //Mobile
    {name : "Kotlin", level: 100,category: "Mobile"},
    {name : "Android Studio", level: 100,category: "Mobile"},
    //UI/UX
    {name : "UI/UX Design", level: 70,category: "UI/UX"},
    {name : "Figma", level: 65,category: "UI/UX"},
    //Other
    {name : "Git/GitHub", level: 85,category: "Other"},
    
    
    
]

export const SkillSection = () =>{
    return(
        <section id="Skills"className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Skills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                            <div className="w-full bg-secondary-50 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[groe_1.5s_ease-out]" 
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        <div className="text-right mt-1">
                            <p className="text-sm text-muted-foreground">{skill.level}%</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
    
}