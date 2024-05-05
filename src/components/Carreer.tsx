import { useInView } from "react-intersection-observer";
import CareerItem, { CareerItemInterface } from "./CarrerItem";
import { Dispatch, SetStateAction, useEffect } from "react";


const CARREER = [{
    title: "Software Engineering",
    school: "Universidad Cooperativa de Colombia (Cooperative University of Colombia)",
    link: "https://ucc.edu.co/programas/pregrados/Paginas/medellin-envigado/ingenieria-de-software-medellin.aspx?utm_source=google&utm_medium=cpc&utm_campaign=search&lead_source=Google%20AdWords&utm_campaign=&utm_term=ingenier%C3%ADa%20en%20software&utm_source=adwords&utm_medium=ppc&ctf_src=g&ctf_net=adwords&ctf_mt=b&ctf_grp=148924653521&ctf_ver=1&ctf_cam=19589274449&ctf_kw=ingenier%C3%ADa%20en%20software&ctf_acc=337-018-5230&ctf_ad=645422512044&ctf_tgt=kwd-325469799350&ctf_acc=3370185230&gad_source=1&gclid=CjwKCAjw88yxBhBWEiwA7cm6pdGS5cOvGjpvgs-n5RtBHL_ltFBY27JT2Z9RabW-VNcWyd5z-_kVUBoCJbEQAvD_BwE",
    start: "2022",
    end: "",
    description: "During my university studies in Software Engineering, I have had the opportunity to develop several applications covering different stages of the software development life cycle. These projects have allowed me to acquire practical skills in requirements analysis, architecture design, code implementation, testing, and deployment. Additionally, I have had the opportunity to lead teams in collaborative projects, which has improved my ability to communicate effectively, make technical decisions, and coordinate efforts to achieve common goals in agile development environments.",
    technologies: [
        "JavaScript", "Node.js", "Java", "Spring Boot", "Python", "MySQL", "Git", "GitHub", "PHP", "HTML", "CSS", "React", "Tailwind", "SCRUM"
    ]
},{
    title: "FullStack Web JavaScript",
    school: "Acámica",
    link: "https://drive.google.com/file/d/1A0SEEcfx1meD9ahhsEktviFQHON_LOqy/view?usp=sharing",
    start: "2020",
    end: "2021",
    description: "This bootcamp provided me with a comprehensive immersion into the dynamic realm of web development, where I had the opportunity to refine and expand upon my technical skills through a series of engaging projects. Throughout the program, I delved into various aspects of full-stack development, gaining proficiency in both front-end and back-end technologies. From crafting responsive user interfaces with HTML, CSS, and JavaScript to implementing robust server-side logic using frameworks like Node.js and Express, I acquired a versatile skill set that encompasses the entire development process.",
    technologies: [
        "HTML", "CSS", "JavaScript", "Node.js", "Git", "GitHub", "SQL"
    ]
},{
    title: "Software Development Technician",
    school: "SENA",
    link: "https://drive.google.com/file/d/16K56rYUZ3JSCxWraVpxR4cTBDniIhQwm/view?usp=sharing",
    start: "2018",
    end: "2019",
    description: "This course provided me with an opportunity to further enhance the skills and knowledge I gained during my high school education. Building upon the foundational understanding of key concepts acquired during my time as a high school student, this program allowed me to delve deeper into various subjects related to development. Through hands-on learning experiences and in-depth exploration of topics, I was able to strengthen my understanding of fundamental principles and explore advanced concepts in greater detail.",
    technologies: [
        "HTML", "CSS", "Bootstrap", "PHP", "SQL"
    ]
},,{
    title: "Technical Bachelor in Systems.",
    school: "Educational Institution La Paz",
    link: "https://drive.google.com/file/d/16F0nfZAYvKHKP9w55joYBPN6noppjkG1/view?usp=sharing",
    start: "2014",
    end: "2019",
    description: "During my technical bachelor's degree in systems at Institución Educativa La Paz, I acquired solid knowledge in the development and maintenance of information systems. I developed skills in creating web applications and management systems using various technologies. I learned to design template-based interfaces, develop dynamic functionalities based on database responses, and manage them for enterprise systems.",
    technologies: [
        "HTML", "CSS", "Bootstrap", "PHP", "SQL"
    ]
}]

interface CareerProps {
    setActivePage: Dispatch<SetStateAction<string>>;
}

const Career: React.FC<CareerProps> = ({setActivePage}) => {
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            setActivePage("career");
        }
    }, [inView, setActivePage]);
    return (
        <section id="career" ref={ref}>
            <h3 className="text-white sticky top-0 bg-slate-900 font-semibold text-xl text-center py-2 z-10">Career</h3>
            <ol className="flex flex-col gap-5 z-0">
                {CARREER?.map((item, i)=>
                    <CareerItem item={item as CareerItemInterface} key={i}/>
                )}
            </ol>
    
        </section>
    )
};

export default Career;

