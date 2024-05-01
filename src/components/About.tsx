import htmlIcon from "@/assets/html-5-svg.svg";
import cssIcon from "@/assets/css-3-svg.svg";
import jsIcon from "@/assets/javascript-svg.svg";
import nodeIcon from "@/assets/node-svg.svg";
import expressIcon from "@/assets/express-svg.svg";
import reactIcon from "@/assets/react-svg.svg";
import pythonIcon from "@/assets/python-svg.svg";
import javaIcon from "@/assets/java-svg.svg";
import springIcon from "@/assets/spring-svg.svg";
import mysqlIcon from "@/assets/mysql-svg.svg";
import gitIcon from "@/assets/git-svg.svg";
import jiraIcon from "@/assets/jira-svg.svg";
import slackIcon from "@/assets/slack-svg.svg";
import githubIcon from "@/assets/github-svg.svg";
import Image from 'next/image'

const TECH_KNOWLEDGE = [{
    name: "html",
    icon: htmlIcon
},{
    name: "css",
    icon: cssIcon
},{
    name: "javascript",
    icon: jsIcon
},{
    name: "node.js",
    icon: nodeIcon
},{
    name: "express",
    icon: expressIcon
},{
    name: "react",
    icon: reactIcon
},{
    name: "python",
    icon: pythonIcon
},{
    name: "java",
    icon: javaIcon
},{
    name: "spring",
    icon: springIcon
},{
    name: "MySQL",
    icon: mysqlIcon
},{
    name: "git",
    icon: gitIcon
}]

const TEAM_KNOWLEDGE = [{
    name: "jira",
    icon: jiraIcon
},{
    name: "slack",
    icon: slackIcon
},{
    name: "github",
    icon: githubIcon
}]

const About = () => {
    return (
        <section id="about">
            <h3 className="text-white sticky top-0 bg-slate-900 font-semibold text-xl text-center py-2 md:hidden">About Me</h3>
            Hello there! I'm Juan Sebastian, a Junior FullStack Web and a Software Engineer in training. Enthusiastic about living new experiences in companies within the sector. Motivated to continuously learn from colleagues and the challenges they present. Highly interested in the areas of architecture and development, aiming for high-quality software with minimal cost for clients.
            <h4 className="text-white sticky top-0 lg:relative bg-slate-900 font-semibold text-l text-center py-2">Knowledge</h4>
            In the following sections, you'll find an overview of my technical skills and team management abilities, providing insights into my expertise in software development and technology.
            <h5 className="text-white bg-slate-900 font-semibold text-md text-center py-2">Technical skills</h5>
            <div className="flex flex-row gap-3 px-5 justify-evenly flex-wrap">
                {TECH_KNOWLEDGE.map(({name, icon})=>
                    (<Image src={icon} title={name.charAt(0).toUpperCase() + name.slice(1)} alt={"icon " + name} className="cursor-pointer bg-white max-w-[50px] max-h-[50px] py-2 rounded-md lg:max-w-[100px] lg:max-h-[100px] hover:transform hover:scale-125 lg:hover:scale-110 transition-all" key={name}/>)
                )}
            </div>
            <h5 className="text-white bg-slate-900 font-semibold text-md text-center py-2">Team Management</h5>
            <div className="flex flex-row gap-3 px-5 justify-evenly flex-wrap">
                {TEAM_KNOWLEDGE.map(({name, icon})=>
                    (<Image src={icon} title={name.charAt(0).toUpperCase() + name.slice(1)} alt={"icon " + name} className="cursor-pointer bg-white max-w-[50px] max-h-[50px] py-2 rounded-md lg:max-w-[100px] lg:max-h-[100px] hover:transform hover:scale-125 lg:hover:scale-110 transition-all" key={name}/>)
                )}
            </div>
        </section>
    );
}

export default About;