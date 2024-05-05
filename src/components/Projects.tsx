import ProjectItem from "./ProjectItem";
import sidesImg from "@/assets/sides.jpeg";
import gifosImg from "@/assets/gifos.jpeg";
import podcastImg from "@/assets/podcast.jpeg";
import delilahImg from "@/assets/delilah.jpeg";
import apiCurriflexImg from "@/assets/api-curriflex.jpeg";

const PROJECTS = [{
    name: "SIDES",
    link: "https://sides.ciiisol.com",
    image: sidesImg,
    description: "SIDES (Software Engineering Seminar) is an event organized by students and the Software Engineering coordination of the Faculty of Engineering at the Cooperative University of Colombia, Medellín Campus. It covers essential topics in software engineering, catering to students, professionals, and the community interested in software engineering activities, competencies, and challenges, with a focus on future trends and potential specializations such as databases, artificial intelligence, and cybersecurity. The seminar also features talks by experts in related fields, providing valuable insights for personal, professional, and social development of attendees.",
    technologies: ["PHP","HTML","CSS","Bootstrap","SQL","Git","GitHub"],
    repo: "https://github.com/AlejandroV074/SIDES-P"
},{
    name: "GIFos",
    link: "https://juansecod.github.io/GIFOS/public/",
    image: gifosImg,
    description: "Project of the second sprint of the Fullstack JavaScript web development with Acámica. It focuses on the development of an interactive application where the user can interact with animated GIFs using the Giphy API.",
    technologies: ["HTML","CSS","SASS","JavaScript","Git","GitHub"],
    repo: "https://github.com/Juansecod/GIFos"
},{
    name: "Podcast Page",
    link: "https://juansecod.github.io/Podcast",
    image: podcastImg,
    description: "Project of the first sprint of Fullstack JavaScript web development with Acámica. It focuses on the development of a landing page provided by the academy, with the requirement of using only the technologies studied in the first sprint and ensuring a responsive design.",
    technologies: ["HTML","CSS","SASS","Git","GitHub"],
    repo: "https://github.com/Juansecod/Podcast"
},{
    name: "Delilah",
    link: "https://github.com/Juansecod/DELILAH",
    image: delilahImg,
    description: "Project of the third sprint of Fullstack JavaScript web development with Acámica. It focuses on backend development where a user places orders at a restaurant. User roles must be differentiated, with some limited to only placing orders.",
    technologies: ["JavaScript","Express","SQL","Git","GitHub"],
    repo: "https://github.com/Juansecod/DELILAH"
},{
    name: "API curriflex",
    link: "https://curriflex-api.glitch.me/",
    image: apiCurriflexImg,
    description: "RESTful API designed for managing user information to facilitate the creation of their resumes on the frontend. It allows users to input personal and professional details, including education, work experience, and skills, for presentation to potential employers. The API ensures data security, integrity, and validation.",
    technologies: ["JavaScript","Express","MongoDB","Git","GitHub"],
    repo: "https://github.com/IngenieriaRequisitosUCC/API-Rest-Curriflex"
}];

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