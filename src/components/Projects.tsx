import ProjectItem from "./ProjectItem";
import sidesImg from "@/assets/Sides.png";

const PROJECTS = [{
    name: "SIDES",
    link: "https://sides.ciiisol.com",
    image: sidesImg,
    description: "SIDES (Software Engineering Seminar) is an event organized by students and the Software Engineering coordination of the Faculty of Engineering at the Cooperative University of Colombia, Medellín Campus. It covers essential topics in software engineering, catering to students, professionals, and the community interested in software engineering activities, competencies, and challenges, with a focus on future trends and potential specializations such as databases, artificial intelligence, and cybersecurity. The seminar also features talks by experts in related fields, providing valuable insights for personal, professional, and social development of attendees.",
    technologies: ["PHP","HTML","CSS","Bootstrap","SQL","Git","GitHub"],
    repo: "https://github.com/AlejandroV074/SIDES-P"
}]

const Projects = ()=>{
    return (
    <section id="projects">
        <h3 className="text-white sticky top-0 bg-slate-900 font-semibold text-xl text-center py-2 z-10">Projects</h3>
        <ol className="flex flex-col gap-5 z-0">
            {PROJECTS.map((project)=>
                <ProjectItem item={project} key={project.name} />
            )}
        </ol>
    </section>
    );
}

export default Projects