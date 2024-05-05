import { faClose, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";


interface ProjectItemInterface{
    name: string,
    link: string,
    repo: string,
    image: StaticImageData,
    description: string | undefined,
    technologies: Array<string>
}

const ProjectItem = ({item}:{item:ProjectItemInterface}) => {
    let { name, link, repo, image, description, technologies } = item;

    const [modalDisplay, setModalDisplay] = useState(false);

    const handleModal = () => {
        setModalDisplay(!modalDisplay);
    };

    const stopPropagation = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
    };

    return (
        <li className="flex flex-col lg:flex-row gap-2 p-2 lg:p-4 transition-all sm:gap-8 md:gap-4 lg:hover:bg-slate-950 lg:hover:bg-opacity-50  rounded">
            <div className="lg:max-w-[80%]">
                <div className="text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" >
                    <a href={link} target="_blank" rel="noreferrer noopener">
                        <h3 className="font-medium leading-snug">
                            {name}
                        </h3>
                    </a>
                    
                </div>
                <a href={repo} target="_blank" rel="noreferrer noopener" className="text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-xs">
                    <i>
                        <FontAwesomeIcon icon={faCode}/>
                    </i> Repository
                </a>
                <p className="mt-2 text-sm leading-normal text-wrap">{description}</p>
                
                <ul className="mt-2 flex flex-wrap">
                    {technologies?.map((technology)=>(
                        <li className="mr-1.5 mt-2"  key={technology}>
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                {technology}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {modalDisplay && 
                (<div className="w-screen h-screen bg-slate-950 bg-opacity-50 fixed top-0 left-0 z-50 px-2 lg:py-20 lg:px-20 flex items-center justify-center flex-col lg:pb-10" onClick={handleModal}>
                    <div className="max-w-[1440px] w-full h-full flex items-center justify-center flex-col gap-2">
                        <i className="self-end text-teal-200 hidden hover:text-cyan-500 hover:transform hover:scale-125 w-5 h-5 items-center justify-center rounded cursor-pointer lg:flex relative right-10">
                            <FontAwesomeIcon icon={faClose} onClick={handleModal}/>
                        </i>
                        <Image src={image} alt={"Preview " + name} title={"Preview " + name}  className="rounded aspect-video !max-w-full !max-h-full" onClick={stopPropagation} />
                    </div>
                </div>)
            }
            <footer className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 lg:max-w-[20%] self-center">
                <Image src={image} alt={"Preview " + name} title={"Preview " + name} className="rounded lg:hover:transition-all lg:hover:transform lg:hover:scale-110 cursor-pointer" onClick={handleModal} />
            </footer>
        </li>
    )
}

export default ProjectItem;
export type { ProjectItemInterface };
