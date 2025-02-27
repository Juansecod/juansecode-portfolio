import { useInView } from "react-intersection-observer";
import CareerItem, { CareerItemInterface } from "./CarrerItem";
import { Dispatch, SetStateAction, useEffect } from "react";


const EXPERIENCE = [{
    title: "Software Engineering",
    school: "Alcaldía de Medellín(Mayor's Office of Medellín)",
    link: "https://www.medellin.gov.co/es/secretaria-infraestructura-fisica/",
    start: "August 2024",
    end: "Present",
    description: [
        "Developed web applications using React (frontend) and Nest.js (backend) to streamline infrastructure management systems.", "Translated UML diagrams into UX/UI interfaces and built interactive dashboards with ArcGIS Online and Dash.",
        "Deployed scalable cloud solutions using Azure, including architecture design and service management.",
        "Authored technical documentation (user stories, use cases, deployment models) to align team workflows.",
        "Collaborated with cross-functional teams to deliver compliant, high-quality software for public sector requirements.",
    ],
    technologies: [
        "React", "Nest.js", "Azure", "ArcGIS", "Figma", "Github", "UML", "Technical Documentation"
    ]
},]

interface ExperienceProps {
    setActivePage: Dispatch<SetStateAction<string>>;
}

const Experience: React.FC<ExperienceProps> = ({setActivePage}) => {
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            setActivePage("experience");
        }
    }, [inView, setActivePage]);
    return (
        <section id="experience" ref={ref}>
            <h3 className="text-white sticky top-0 bg-slate-900 font-semibold text-xl text-center py-2 z-10">Experience</h3>
            <ol className="flex flex-col gap-5 z-0">
                {EXPERIENCE?.map((item, i)=>
                    <CareerItem item={item as CareerItemInterface} key={i}/>
                )}
            </ol>
    
        </section>
    )
};

export default Experience;

