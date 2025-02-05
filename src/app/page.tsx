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

  const handleDownload = () => {"use client"; // Ensure it's a Client Component
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
        .resume-container { background: #F5F7FA; color: #333; padding: 20px; }
        .left-section { background: linear-gradient(145deg, #2b5876, #4e4376); color: white; padding: 20px; text-align: center; border-radius: 12px; }
        .skills span { background: #1D4ED8; color: white; padding: 8px 15px; border-radius: 25px; font-size: 0.9rem; }
        h2 { color: #1F2937; }
        p { color: #4B5563; }
      </style>
    `;

    const newWindow = window.open("", "", "width=800,height=900");
    newWindow?.document.write(`<html><head><title>M_Ibrahim_Resume</title>${style}</head><body>${resumeContent}</body></html>`);
    newWindow?.document.close();
    newWindow?.print();
  };

  if (!isClient) return null; // Prevents server-side rendering issues

  return (
    <div className="h-full bg-[#F5F7FA] p-4 font-sans">
      <title>M.Ibrahim Resume</title>

      <div ref={resumeRef} id="resume" className="resume-container flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        {/* Left Section */}
        <div className="left-section w-full md:w-[38%] p-6 text-center rounded-xl shadow-xl hover:shadow-2xl transition-all ease-in-out duration-300 text-white">
          <div className="flex flex-col items-center">
            <Image
              src={abc}
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mb-4 border-4 border-white shadow-md"
            />
            <h2 className="text-2xl font-bold mb-2">Muhammad Ibrahim Mubashir</h2>
            <p className="text-sm mb-1">muhammadibrahimmubashir.2010@gmail.com</p>
            <p className="text-sm">0344-2662662</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/4 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all ease-in-out duration-300 text-gray-800">
          <section className="mb-6">
            <h2 className="font-extrabold text-xl text-[#1F2937] mb-2">★ <u>Education</u></h2>
            <div className="font-semibold mb-1">
              <b>▪ Montessori</b>
            </div>
            <p className="text-gray-600 mb-3">Mariam Child Development Centre (2014-2016)</p>
            <div className="font-semibold mb-1">
              <b>▪ Habib Public School</b>
            </div>
            <p className="text-gray-600">Computer Science Student (2016-2026)</p>
          </section>

          <section className="mb-6">
            <h2 className="font-extrabold text-xl text-[#1F2937] mb-2">★ <u>Skills</u></h2>
            <div className="flex gap-4 flex-wrap">
              {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js"].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#1D4ED8] text-white p-3 rounded-full text-sm shadow-md mb-2 hover:bg-blue-600 transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="font-extrabold text-xl text-[#1F2937] mb-2">★ <u>Work Experience</u></h2>
            <div className="font-semibold mb-1">
              <b>▪ TypeScript Developer</b>
            </div>
            <p className="text-gray-600 mb-3">MIM Company (2022 - 2023)</p>
            <p className="text-gray-600">
              I worked on building web apps, APIs, and backend services with TypeScript for reliable code.
            </p>
            <div className="font-semibold mb-1">
              <b>▪ Web Developer</b>
            </div>
            <p className="text-gray-600">(2024 - Present)</p>
            <p className="text-gray-600">
              Developed responsive websites for various clients using web technologies.
            </p>
          </section>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

    if (!resumeRef.current) return;

    const resumeContent = resumeRef.current.innerHTML;
    const style = `
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .resume-container { background: #F5F7FA; color: #333; padding: 20px; }
        .left-section { background: #2E3B4E; color: #2D3748; padding: 20px; text-align: center; border-radius: 8px; }
        .skills span { background: #2E3B4E; color: white; padding: 8px 15px; border-radius: 20px; }
        h2 { color: #1F2937; }
        p { color: #4B5563; }
      </style>
    `;

    const newWindow = window.open("", "", "width=800,height=900");
    newWindow?.document.write(`<html><head><title>M_Ibrahim_Resume</title>${style}</head><body>${resumeContent}</body></html>`);
    newWindow?.document.close();
    newWindow?.print();
  };

  if (!isClient) return null; // Prevents server-side rendering issues

  return (
    <div className="h-full bg-[#F5F7FA] p-4 font-sans">
      <title>M.Ibrahim Resume</title>

      <div ref={resumeRef} id="resume" className="resume-container flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        {/* Left Section */}
        <div className="left-section w-full md:w-[38%] p-6 text-center rounded-lg shadow-lg text-[#2D3748]">
          <div className="flex flex-col items-center">
            <Image
              src={abc}
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mb-4 border-4 border-white shadow-md"
            />
            <h2 className="text-2xl font-bold mb-2">Muhammad Ibrahim Mubashir</h2>
            <p className="text-sm text-gray-700 mb-1">muhammadibrahimmubashir.2010@gmail.com</p>
            <p className="text-sm text-gray-700">0344-2662662</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/4 p-6 bg-white rounded-lg shadow-lg text-gray-800">
          <section className="mb-6">
            <h2 className="font-extrabold text-xl text-[#1F2937] mb-2">★ <u>Education</u></h2>
            <div className="font-semibold mb-1">
              <b>▪ Montessori</b>
            </div>
            <p className="text-gray-600 mb-3">Mariam Child Development Centre (2014-2016)</p>
            <div className="font-semibold mb-1">
              <b>▪ Habib Public School</b>
            </div>
            <p className="text-gray-600">Computer Science Student (2016-2026)</p>
          </section>

          <section className="mb-6">
            <h2 className="font-extrabold text-xl text-[#1F2937] mb-2">★ <u>Skills</u></h2>
            <div className="flex gap-4 flex-wrap">
              {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js"].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#2E3B4E] text-white p-3 rounded-full text-sm shadow-md mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="font-extrabold text-xl text-[#1F2937] mb-2">★ <u>Work Experience</u></h2>
            <div className="font-semibold mb-1">
              <b>▪ TypeScript Developer</b>
            </div>
            <p className="text-gray-600 mb-3">MIM Company (2022 - 2023)</p>
            <p className="text-gray-600">
              I worked on building web apps, APIs, and backend services with TypeScript for reliable code.
            </p>
            <div className="font-semibold mb-1">
              <b>▪ Web Developer</b>
            </div>
            <p className="text-gray-600">(2024 - Present)</p>
            <p className="text-gray-600">
              Developed responsive websites for various clients using web technologies.
            </p>
          </section>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition duration-300"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
