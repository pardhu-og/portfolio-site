//Hero.jsx
import { FaGithub } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function Hero (){

    return (
        <div className="h-screen flex flex-col items-center justify-center  gap-6 bg-gradient-to-br from-indigo-300 to-red-300 text-center px-4 md:px-8 caret-transparent">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Hi, I am Pardhasaradhi Alaparthi
            </h2>
            <p className="text-sm sm:text-lg md:text-xl  text-gray-700">
                Front-End Developer | Building sleek, modern UIs with React & Tailwind CSS | Focused on speed, usability and polish
            </p>
            <div className="flex gap-6">
                <a href="https://github.com/pardhu-og" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 text-gray-700 hover:text-black hover:underline hover:scale-105 transition text-base font-medium"><FaGithub />GitHub</a>
                <a href="placeholder" target="_blank" rel="noopener noreferrer" className=" text-sm flex items-center gap-1 text-gray-700 hover:text-black hover:underline hover:scale-105 transition text-base font-medium"><FaLinkedin />Linkedin</a>
                <a href="https://hashnode.com/@pardhualaparthi" target="_blank" rel="noopener noreferrer" className=" text-sm flex items-center gap-1 text-gray-700 hover:text-black hover:underline hover:scale-105 transition text-sm text-base font-medium"><FaHashnode />Hashnode</a>
            </div>
            <div className="flex gap-4 justify-center mt-4">
                <a href="#projects" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">View Projects</a>
                <a href="/resume.pdf" download className="bg-indigo-100 text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-200">Download Resume</a>
            </div>
        </div>
    );
}