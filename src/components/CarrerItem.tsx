interface CareerItemInterface{
    title: string,
    school: string,
    link: string | undefined,
    start: string,
    end: string | undefined,
    description: string | undefined,
    technologies: Array<string> | undefined
}

const CareerItem = ({item}:{item:CareerItemInterface}) => {
    const { title, school, link, start, end, description, technologies } = item;

    return (
        <li className="flex flex-col lg:flex-row gap-2 p-2 lg:p-4 transition-all sm:gap-8 md:gap-4 lg:hover:bg-slate-950 lg:hover:bg-opacity-50  rounded">
                    <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 lg:min-w-[20%]">
                        {start} — {end != "" ? end : "Present"}
                    </header>
                    <div className="lg:max-w-[80%]">
                        <div className="text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" >
                            <a href={link} target="_blank" rel="noreferrer noopener">
                                <h3 className="font-medium leading-snug">
                                    {title}
                                </h3>
                                <h4 className=" font-light text-sm leading-snug">{school}</h4>
                            </a>
                        </div>
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
                </li>
    )
}

export default CareerItem;
export type { CareerItemInterface };
