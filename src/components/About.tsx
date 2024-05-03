import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faJira, faSlack, faJava, faJs, faHtml5, faCss3, faGit, faNodeJs, faReact, faPython, faUncharted } from '@fortawesome/free-brands-svg-icons';

const TECH_KNOWLEDGE = [{
    name: "html",
    icon: faHtml5,
    haveIcon: true
},{
    name: "css",
    icon: faCss3,
    haveIcon: true
},{
    name: "javascript",
    icon: faJs,
    haveIcon: true
},{
    name: "node.js",
    icon: faNodeJs,
    haveIcon: true
}, {
    name: "express",
    icon: faUncharted,
    haveIcon: false
}, {
    name: "react",
    icon: faReact,
    haveIcon: true
},{
    name: "python",
    icon: faPython,
    haveIcon: true
},{
    name: "java",
    icon: faJava,
    haveIcon: true
},{
    name: "Spring Boot",
    icon: faUncharted,
    haveIcon: false
},{
    name: "MySQL",
    icon: faDatabase,
    haveIcon: false
},{
    name: "git",
    icon: faGit,
    haveIcon: true
}]

const TEAM_KNOWLEDGE = [{
    name: "jira",
    icon: faJira,
    haveIcon: true
},{
    name: "slack",
    icon: faSlack,
    haveIcon: true
},{
    name: "github",
    icon: faGithub,
    haveIcon: true
}]

const About = () => {
    return (
        <section id="about">
            <h3 className="text-white sticky top-0 bg-slate-900 font-semibold text-xl text-center py-2 backdrop-blur-xl z-10">About Me</h3>
            {"Hello there! I'm Juan Sebastian, a Junior FullStack Web and a Software Engineer in training. Enthusiastic about living new experiences in companies within the sector. Motivated to continuously learn from colleagues and the challenges they present. Highly interested in the areas of architecture and development, aiming for high-quality software with minimal cost for clients."}
            <h4 className="text-white sticky top-0 bg-slate-900 font-semibold text-l text-center py-2 z-10">Knowledge</h4>
            {"In the following sections, you'll find an overview of my technical skills and team management abilities, providing insights into my expertise in software development and technology."}
            <h5 className="text-white bg-slate-900 font-semibold text-md text-center py-2">Technical skills</h5>
            <div className="flex flex-row gap-3 px-5 justify-evenly flex-wrap">
                {TECH_KNOWLEDGE.map(({name, icon, haveIcon}, index)=>
                    (<i className={`lg:hover:bg-slate-950 flex flex-col justify-center items-center  max-w-[50px] max-h-[50px] py-2 rounded-md md:max-w-[75px] md:max-h-[75px] xl:max-w-[100px] xl:max-h-[100px] hover:text-slate-200 cursor-pointer text-center` + (!haveIcon ? ` hidden xl:block` : ``)} key={index} title={name.charAt(0).toUpperCase() + name.slice(1)}>
                        <FontAwesomeIcon className="w-[80%] h-[80%] hover:transform hover:scale-125 xl:hover:scale-110 transition-all" icon={icon} />
                        <i className="hidden w-100% xl:block">{name.charAt(0).toUpperCase() + name.slice(1)}</i>
                    </i>)
                )}
            </div>
            <h5 className="text-white bg-slate-900 font-semibold text-md text-center py-2">Team Management</h5>
            <div className="flex flex-row gap-3 px-5 justify-evenly flex-wrap">
                {TEAM_KNOWLEDGE.map(({name, icon, haveIcon}, index)=>
                    (<i className={`lg:hover:bg-slate-950 flex flex-col justify-center items-center  max-w-[50px] max-h-[50px] py-2 rounded-md md:max-w-[75px] md:max-h-[75px] xl:max-w-[100px] xl:max-h-[100px] hover:text-slate-200 cursor-pointer text-center` + (!haveIcon ? ` hidden xl:block` : ``)} key={index} title={name.charAt(0).toUpperCase() + name.slice(1)}>
                        <FontAwesomeIcon className="w-[80%] h-[80%] hover:transform hover:scale-125 xl:hover:scale-110 transition-all" icon={icon} />
                        <i className="hidden w-100% xl:block">{name.charAt(0).toUpperCase() + name.slice(1)}</i>
                    </i>)
                )}
            </div>
        </section>
    );
}

export default About;