import { useInView } from "react-intersection-observer";
import CareerItem, { CareerItemInterface } from "./CarrerItem";
import { Dispatch, SetStateAction, useEffect } from "react";


const EXPERIENCE = [{
    title: "Software Engineering",
    school: "Alcaldía de Medellín(Mayor's Office of Medellín)",
    link: "https://www.medellin.gov.co/es/secretaria-infraestructura-fisica/",
    start: "July 2024",
    end: "December 2024",
    description: "I developed interactive dashboards using ArcGIS Online, supporting the ETL process for data collection and effective visualization. I contributed to the creation of flowcharts for a new internally developed software. Additionally, I designed the Azure architecture for a small project aimed at scalability.",
    technologies: [
        "ArcGis Dashboards", "Python", "Azure", "Git", "GitHub"
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

