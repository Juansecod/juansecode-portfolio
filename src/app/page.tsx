"use client"
import About from "@/components/About";
import Career from "@/components/Carreer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import SectionSeparator from "@/components/SectionSeparator";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    function handleMouseMove(event: { clientX: any; clientY: any; }) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 xl:absolute" style={{background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
    <main className="mx-auto px-6 py-12 font-sans flex min-h-screen flex-col md:flex-row bg-slate-900 text-slate-400 md:justify-evenly md:px-12 md:pt-20 md:pb-2 xl:pt-10 xl:px-24 xl:h-screen xl:w-screen xl:overflow-hidden" >
      <div className="flex flex-col xl:flex-row xl:justify-between gap-4 max-w-[1440px]">
        <Header activePage={activePage} setActivePage={setActivePage}/>
        <div className="xl:w-1/2 flex flex-col gap-10 xl:overflow-y-scroll scroll-smooth">
          <About setActivePage={setActivePage}/>
          <SectionSeparator />
          <Career setActivePage={setActivePage}/>
          <SectionSeparator />
          <Projects setActivePage={setActivePage}/>
        </div>
      </div>
    </main>
    </>
  );
}
//"bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
