import { useState, useEffect } from 'react';
//Importa el css
import '../styles/globals.css';

interface ProjectCardProps {
    project: {
        name: string;
        description: string;
        image: string;
        images?: string[];
        technologies: { name: string; color: string; icon: string }[];
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [currentImage, setCurrentImage] = useState<string>(project.image);
    const [hover, setHover] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (hover && project.images && project.images.length > 0) {
            let index = 0;
            interval = setInterval(() => {
                setCurrentImage(project.images![index]);
                index = (index + 1) % (project.images?.length || 1);
            }, 1000); // Change image every 2 seconds
        } else {
            setCurrentImage(project.image);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [hover, project.images, project.image]);

    return (
        <div
            className="flex flex-col items-start h-[500px] lg:h-auto justify-center bg-gray-800/40 rounded-lg p-5 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img
                src={currentImage}
                alt={project.name}
                className="w-full h-60 object-cover rounded-md mb-5 hover:brightness-80 hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <h2 className="text-xl font-semibold hover:text-[#58C4DC] transition-colors duration-300">
                {project.name}
            </h2>
            <p className="text-sm text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-300">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-10 md:mb-0">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="text-base px-3 pt-1 rounded-full flex items-center justify-center space-x-1 flex-row hover:scale-110 transition-transform duration-300 ease-in-out "
                        style={{ backgroundColor: tech.color }}
                    >
                        <i className={tech.icon}></i>
                        <span>{tech.name}</span>
                    </span>
                ))}
            </div>
        </div>
    );
} 