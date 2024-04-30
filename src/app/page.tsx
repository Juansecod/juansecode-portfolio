"use client"
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
    <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute mouse" style={{background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
    <main className="mx-auto px-6 py-12 font-sans flex min-h-screen flex-col md:flex-row bg-slate-900 text-slate-400 md:justify-evenly md:px-12 md:py-20 lg:px-24" >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <Header />
        <div className="md:w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nisi nam maiores delectus modi, quo odio soluta pariatur minus hic fugiat exercitationem! Voluptas cumque consectetur facere non a, eveniet ratione.
        </div>
      </div>
    </main>
    </>
  );
}
//"bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
