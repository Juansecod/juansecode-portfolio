"use client"
import About from "@/components/About";
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
    <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
    <main className="mx-auto px-6 py-12 font-sans flex min-h-screen flex-col md:flex-row bg-slate-900 text-slate-400 md:justify-evenly md:px-12 md:py-20 lg:px-24 lg:h-screen lg:w-screen lg:overflow-hidden" >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 max-w-[1440px]">
        <Header />
        <div className="md:w-1/2 lg:overflow-y-scroll scroll-smooth">
          <About />
        </div>
      </div>
    </main>
    </>
  );
}
//"bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
