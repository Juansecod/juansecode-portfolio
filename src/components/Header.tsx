import Image from "next/image";
import Link from "next/link";
import profilePic from "@/assets/profile-pic.jpeg";
import { Dispatch, SetStateAction, useState } from "react";
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGraduationCap, faFolderOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PAGES = [{
    page: "about",
    icon: faUser
}, {
    page: "career",
    icon: faGraduationCap
}, {
    page: "projects",
    icon: faFolderOpen
}];

const NETWORKS = [{
    name: "Gmail",
    link: "mailto:juan.sebastianri28@gmail.com",
    icon: faEnvelope
},{
    name: "GitHub",
    link: "https://github.com/juansecod",
    icon: faGithub
},{
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/juansecode/",
    icon: faLinkedin
},{
    name: "Instagram",
    link: "https://www.instagram.com/juansecode",
    icon: faInstagram
},{
    name: "Twitter",
    link: "https://www.twitter.com/juansecode",
    icon: faXTwitter
}];

const NAME = "Juan Sebastian Rios Valencia";
const USERNAME = "Juansecode";

interface HeaderProps {
    activePage: string;
    setActivePage: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({activePage, setActivePage}) => {
    const [title, setTitle] = useState(NAME);
    const [classSecret, setClassSecret] = useState("text-slate-200");    

    return(
        <header className="xl:sticky xl:top-0 flex flex-col xl:max-h-screen xl:w-1/2 xl:flex-col xl:justify-around justify-between gap-5 xl:items-start">
            <div className="flex flex-col justify-center items-center text-center xl:text-left xl:justify-normal xl:items-start w-full">
                <Image className="cursor-pointer self-center bg-white  rounded-md hover:transform hover:scale-110 transition-all" src={profilePic} width={100} height={100} alt="Profile pic" 
                onMouseOut={()=>{
                    setTitle(NAME);
                    setClassSecret("text-slate-200")
                }} 
                onMouseEnter={()=>{
                    setTitle("I tell a secret, I like when call me " + USERNAME);
                    setClassSecret("text-sky-300");
                }}/>
                <h1 className={"text-4xl font-bold tracking-tight sm:text-5xl lg:block lg:w-full " + classSecret}>
                    <Link href="./">{title}</Link>
                </h1>
                <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer Student</h2>
                <p className="mt-4 max-w-xs leading-normal">Fullstack enthusiast with a curiosity for software architecture.</p>
                <nav className="nav hidden xl:block">
                    <ul className="mt-5 w-max">
                        {PAGES.map(({page})=>(
                            <Link className={"group flex items-center py-3 active"} href={`#${page}`} key={page} onClick={(e)=>{setActivePage(page)}}>
                                <span className={"nav-indicator mr-4 h-px w-8  transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none " + (activePage.includes(page) ? "bg-slate-200 w-16" : "bg-slate-600")}></span>
                                <span className={"nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 "+ (activePage.includes(page) ? "text-slate-200" : "text-slate-500 ")}>{page}</span>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
            <ul className="flex items-center justify-evenly">
                {NETWORKS.map(({name,link,icon})=>(
                    <li className="mr-5 text-xs shrink-0" key={name}>
                        <a className="block hover:text-slate-200" href={link} target="_blank" rel="noreferrer noopener" aria-label={`${name} (opens in a new tab)`} title={name}>
                            <span className="sr-only">{name}</span>
                            <i key={name} title={name.charAt(0).toUpperCase() + name.slice(1)}>
                                <FontAwesomeIcon className="w-8 h-8 hover:transform hover:scale-125 xl:hover:scale-110 transition-all" icon={icon} />
                            </i>
                        </a>
                    </li>
                ))}
            </ul>
            <nav className="nav fixed bottom-2 right-2 z-50 block xl:hidden w-1/2 p-2 rounded-lg">
                <ul className="flex  justify-around">
                    {PAGES.map(({page, icon})=>(
                        <Link className="group active p-1 rounded-full" href={`#${page}`} key={page} onClick={(e)=>setActivePage(page)}>
                            <i className="flex items-centers justify-center rounded-full bg-slate-950 p-2 hover:text-teal-300">
                                <FontAwesomeIcon className="w-6 h-6 hover:transform hover:scale-110 transition-all fa-solid" icon={icon} />
                            </i>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;