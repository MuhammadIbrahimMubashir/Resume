import Image from "next/image";
import abc from "../app/image/abc.jpeg";

export default function Home() {
  return (
    <div className="h-full bg-[#637A9F]">
      <title>M.Ibrahim Resume</title>
      <div className="flex flex-col md:flex-row font-sans">
        {/* Left Section */}
        <div className="m-4 w-full md:w-[42%] bg-[#0B192C] text-white p-10 text-center md:h-[550px]">
          <div className="flex flex-col items-center">
            {/* Profile Picture */}
            <Image
              src={abc}
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-[70px] mb-4"
            />
            <h2 className="text-xl font-bold mb-4 hover:text-teal-300 duration-300">
              Muhammad Ibrahim Mubashir
            </h2>
            <p className="text-sm mb-4 hover:text-teal-300 duration-300">
              muhammadibrahimmubashir.2010@gmail.com
            </p>
            <p className="text-sm hover:text-teal-300 duration-300">
              0344-2662662
            </p>
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
    </div>
  );
}
