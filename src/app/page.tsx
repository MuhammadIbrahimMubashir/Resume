"use client"; // Ensure it's a Client Component
import Image from "next/image";
import abc from "../app/image/abc.jpeg";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component is rendered on the client
  }, []);

  const handleDownload = () => {
    if (!resumeRef.current) return;

    const resumeContent = resumeRef.current.innerHTML;
    const style = `
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .resume-container { background: #637A9F; color: black; padding: 20px; }
        .left-section { background: #0B192C; color: white; padding: 20px; text-align: center; }
        .skills span { background: #0B192C; color: white; padding: 5px 10px; border-radius: 10px; }
      </style>
    `;

    const newWindow = window.open("", "", "width=800,height=900");
    newWindow?.document.write(`<html><head><title>M_Ibrahim_Resume</title>${style}</head><body>${resumeContent}</body></html>`);
    newWindow?.document.close();
    newWindow?.print();
  };

  if (!isClient) return null; // Prevents server-side rendering issues

  return (
    <div className="h-full bg-[#637A9F] p-4">
      <title>M.Ibrahim Resume</title>

      <div ref={resumeRef} id="resume" className="resume-container flex flex-col md:flex-row font-sans">
        {/* Left Section */}
        <div className="left-section m-4 w-full md:w-[42%] p-10 text-center md:h-[550px]">
          <div className="flex flex-col items-center">
            <Image src={abc} alt="Profile Picture" width={120} height={120} className="rounded-full mb-4" />
            <h2 className="text-xl font-bold mb-2">Muhammad Ibrahim Mubashir</h2>
            <p className="text-sm mb-2">muhammadibrahimmubashir.2010@gmail.com</p>
            <p className="text-sm">0344-2662662</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/4 p-5 text-gray-800">
          <section className="mb-5">
            <div className="font-extrabold">
              <h2>★ <u>Education:-</u></h2>
            </div>
            <div className="font-semibold">
              <b><p>▪ Montessori</p></b>
            </div>
            <p>Mariam Child Development Centre (2014-2016)</p>
            <div className="font-semibold">
              <b><p>▪ Habib Public School</p></b>
            </div>
            <p>Computer Science Student (2016-2026)</p>
          </section>

          <section className="mb-5">
            <div className="font-extrabold">
              <h2>★ <u>Skills</u></h2>
            </div>
            <div className="flex gap-4 flex-wrap">
              {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js"].map((skill) => (
                <span key={skill} className="bg-[#0B192C] text-white p-2 rounded-[60px] text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-5">
            <div className="font-extrabold">
              <h2>★ <u>Work Experience:-</u></h2>
            </div>
            <div className="font-semibold">
              <b><p>▪ TypeScript Developer</p></b>
            </div>
            <p>MIM Company (2022 - 2023)</p>
            <p>I worked on building web apps, APIs, and backend services with TypeScript for reliable code.</p>
            <div className="font-semibold">
              <b><p>▪ Web Developer</p></b>
            </div>
            <p>(2024 - Present)</p>
            <p>Developed responsive websites for various clients using web technologies.</p>
          </section>
        </div>
       </div> 
      {/* Download Button */}
      <div className="flex justify-center mt-4">
        <button onClick={handleDownload} className="bg-green-500 text-white px-4 py-2 rounded-md">
          Download Resume
        </button>
      </div>
    </div>
  );
}
