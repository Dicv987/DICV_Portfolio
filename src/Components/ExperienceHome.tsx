// @ts-ignore
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
// @ts-ignore
import navbar from "../assets/translations/navbar.js"
// @ts-ignore
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Max4Logo from "@/assets/images/max4Logo_white.jpg"
import TerrazzaLogo from "@/assets/images/terrazza-italiana.jpg"
import UniversidadLogo from "@/assets/images/Universidad_Panamericana.jpg"
import PrepaLogo from "@/assets/images/tec.jpg"
import { useState, useCallback } from "react"

interface ExperienceHomeProps {
    selectedLanguage: 'en' | 'es'
}

export default function ExperienceHome({ selectedLanguage }: ExperienceHomeProps) {
    const t = navbar[selectedLanguage]
    const [activeTab, setActiveTab] = useState("work")

    const handleTabChange = useCallback((value: string) => {
        setActiveTab(value)
    }, [])

    return (
        <div id="experience" className="flex flex-col items-center justify-center w-full h-auto p-6 md:p-12 space-y-8 font-halcyon text-white bg-transparent border-y-2 border-[#FFFFE3] rounded-lg shadow-lg">
            {/* Header */}
            <div className="text-4xl md:text-6xl text-[#FFFFE3] font-bold font-Interphases text-center w-full md:w-2/3 lg:w-1/2">
                {t.experienceTitle}
            </div>

            {/* Tabs Component - Visible on all screens */}
            <Tabs
                defaultValue="work"
                onValueChange={handleTabChange}
                className={`w-full md:w-3/4 lg:w-1/2 bg-opacity-10 rounded-lg shadow-lg border
                    ${activeTab === "work" ? "border-[#FFD074]" : "border-[#A374FF]"}
                `}
            >
                {/* Tab Triggers */}
                <TabsList className="flex justify-around rounded-t-lg space-x-2">
                    <TabsTrigger
                        value="work"
                        className="w-[50%] px-4 font-halcyon text-gray-700 rounded-t-lg data-[state=active]:bg-[#FFD074] data-[state=active]:text-[#0E100F] hover:bg-gray-200 transition-transform transform"
                    >
                        {t.workTab}
                    </TabsTrigger>
                    <TabsTrigger
                        value="education"
                        className="w-[50%] px-4 font-halcyon text-gray-700 rounded-t-lg data-[state=active]:bg-[#A374FF] data-[state=active]:text-[#FFFFE3] hover:bg-gray-200 transition-transform transform"
                    >
                        {t.educationTab}
                    </TabsTrigger>
                </TabsList>

                {/* Work Tab Content */}
                <TabsContent value="work" className="p-4 text-[#FFFFE3] mt-0 space-y-4 bg-[#FFD074]/10">
                    {/* Job 1 with Mobile-only Accordion for Responsibilities */}
                    <div className="bg-black bg-gray-50/10 rounded-md p-4 border border-[#FFD074] shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0">
                        {/* Left section with image and date */}
                        <div className="flex flex-col items-center md:w-1/5">
                            <a href="https://terrazzaitaliana.mx/" target="_blank" rel="noopener noreferrer">
                                <img src={TerrazzaLogo} alt="Terrazza Italiana Logo" className="w-16 h-16 rounded-full mb-2 cursor-pointer hover:scale-110" />
                            </a>
                            <p className="text-sm text-gray-300">{t.job1.period}</p>
                        </div>
                        {/* Right section with details */}
                        <div className="flex flex-col md:w-4/5 text-gray-200">
                            <h3 className="text-lg font-semibold text-white">{t.job1.company}</h3>
                            <p className="text-sm text-gray-400">{t.job1.position}</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2 hidden md:block">
                                {t.job1.responsibilities.map((item: any, index: any) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            {/* Mobile Accordion for Responsibilities */}
                            <Accordion type="single" collapsible className="block md:hidden">
                                <AccordionItem value="responsibilities-job1">
                                    <AccordionTrigger className="text-gray-200 hover:text-[#FFD074] text-md">Responsibilities</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc pl-5 space-y-2 mt-2">
                                            {t.job1.responsibilities.map((item: any, index: any) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    {/* Job 2 with Mobile-only Accordion for Responsibilities */}
                    <div className="bg-black bg-gray-50/10 rounded-md p-4 border border-[#FFD074] shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0">
                        <div className="flex flex-col items-center md:w-1/5">
                            <a href="https://max4technologies.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Max4Logo} alt="Max4 Logo" className="w-16 h-16 rounded-full mb-2 cursor-pointer hover:scale-110" />
                            </a>
                            <p className="text-sm text-gray-300">{t.job2.period}</p>
                        </div>
                        <div className="flex flex-col md:w-4/5 text-gray-200">
                            <h3 className="text-lg font-semibold text-white">{t.job2.company}</h3>
                            <p className="text-sm text-gray-400">{t.job2.position}</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2 hidden md:block">
                                {t.job2.responsibilities.map((item: any, index: any) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            {/* Mobile Accordion for Responsibilities */}
                            <Accordion type="single" collapsible className="block md:hidden">
                                <AccordionItem value="responsibilities">
                                    <AccordionTrigger className="text-gray-200 hover:text-[#FFD074] text-md">Responsibilities</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc pl-5 space-y-2 mt-2">
                                            {t.job2.responsibilities.map((item: any, index: any) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </TabsContent>

                {/* Education Tab Content */}
                <TabsContent value="education" className="p-4 mt-0 text-[#FFFFE3] space-y-4 bg-[#A374FF]/10">
                    {/* Education 1 */}
                    <div className="bg-black bg-gray-50/10 rounded-md p-4 border border-[#A374FF] shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0">
                        <div className="flex flex-col items-center md:w-1/5">
                            <a href="https://www.up.edu.mx/" target="_blank" rel="noopener noreferrer">
                                <img src={UniversidadLogo} alt="Universidad Panamericana Logo" className="w-16 h-16 rounded-full mb-2 cursor-pointer hover:scale-110" />
                            </a>
                            <p className="text-sm text-gray-300">{t.study1.period}</p>
                        </div>
                        <div className="flex flex-col md:w-4/5 text-gray-200">
                            <h3 className="text-lg font-semibold text-white">{t.study1.university}</h3>
                            <p className="text-sm text-gray-400">{t.study1.degree}</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2 hidden md:block">
                                {t.study1.achievements.map((item: any, index: any) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            {/* Mobile Accordion for Achievements */}
                            <Accordion type="single" collapsible className="block md:hidden">
                                <AccordionItem value="achievements">
                                    <AccordionTrigger className="text-gray-200 hover:text-[#A374FF] text-md">Achievements</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc pl-5 space-y-2 mt-2">
                                            {t.study1.achievements.map((item: any, index: any) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    {/* Education 2 - Prepa */}
                    <div className="bg-black bg-gray-50/10 rounded-md p-4 border border-[#A374FF] shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0">
                        <div className="flex flex-col items-center md:w-1/5">
                            <a href="https://tec.mx/es" target="_blank" rel="noopener noreferrer">
                                <img src={PrepaLogo} alt="Prepa Tec Logo" className="w-16 h-16 rounded-full mb-2 cursor-pointer hover:scale-110" />
                            </a>
                            <p className="text-sm text-gray-300">{t.study2.period}</p>
                        </div>
                        <div className="flex flex-col md:w-4/5 text-gray-200">
                            <h3 className="text-lg font-semibold text-white">{t.study2.university}</h3>
                            <p className="text-sm text-gray-400">{t.study2.degree}</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2 hidden md:block">
                                {t.study2.achievements.map((item: any, index: any) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            {/* Mobile Accordion for Achievements */}
                            <Accordion type="single" collapsible className="block md:hidden">
                                <AccordionItem value="achievements-prepa">
                                    <AccordionTrigger className="text-gray-200 hover:text-[#A374FF] text-md">Achievements</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc pl-5 space-y-2 mt-2">
                                            {t.study2.achievements.map((item: any, index: any) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
