import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/globals.css";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/pagination";
//@ts-ignore
import navbar from "../assets/translations/navbar.js";
import { Pagination } from "swiper/modules";
import ProjectCard from '../Components/ProjectCard.tsx';

interface ProjectsHomeProps {
    selectedLanguage: "en" | "es";
}

export default function ProjectsHome({ selectedLanguage }: ProjectsHomeProps) {
    const t = navbar[selectedLanguage];
    const projects: { [key: string]: { name: string; description: string; image: string; images?: string[]; technologies: { name: string; color: string; icon: string }[] } } = t.projectsData;
    
    return (
        <div id="experience" className="flex flex-col items-center justify-center w-full h-auto p-6 md:p-12 space-y-8 font-halcyon text-white bg-transparent rounded-lg">
            {/* Header */}
            <div className="text-4xl md:text-6xl text-[#FFFFE3] font-bold font-Interphases text-center w-full md:w-2/3 lg:w-1/2">
                {t.projects}
            </div>

            {/* Diseño para móvil */}
            <div className="w-full md:hidden h-[500px]">
                <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="custom-swiper-pagination"
                >
                    {Object.entries(projects).map(([key, project]) => (
                        <SwiperSlide key={key}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Diseño para escritorio */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[70%]">
                {Object.entries(projects).map(([key, project]) => (
                    <ProjectCard key={key} project={project} />
                ))}
            </div>
        </div>
    );
}
