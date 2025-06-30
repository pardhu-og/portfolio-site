//Hero.jsx
import { FaGithub } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Hero (){

    return (
        <div className=" flex flex-col items-center justify-center  gap-6 text-center px-4  caret-transparent grow-1
                        md:gap-8 md:px-6 
                        lg:gap-10 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900
                            md:text-4xl lg:text-5xl">
                Hi, I am Pardhasaradhi Alaparthi
            </h2>
            <p className="text-sm text-gray-700
                          md:text-lg lg:text-xl">
                Front-End Developer | Building sleek, modern UIs with React & Tailwind CSS | Focused on speed, usability and polish
            </p>
            <div className="flex gap-6 md:gap-8 lg:gap-10">
                <a href="https://github.com/pardhu-og" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 text-gray-700 hover:text-black hover:underline hover:scale-105 transition md:text-base lg:text-lg font-medium"><FaGithub />GitHub</a>
                <a href="https://linkedin.com/in/pardhasaradhi-alaparthi-203786371" target="_blank" rel="noopener noreferrer" className=" text-sm flex items-center gap-1 text-gray-700 hover:text-black hover:underline hover:scale-105 transition md:text-base lg:text-lg  font-medium"><FaLinkedin />Linkedin</a>
                <a href="https://dialogue-with-machine-a-coders-journey.hashnode.dev/" target="_blank" rel="noopener noreferrer" className=" text-sm flex items-center gap-1 text-gray-700 hover:text-black hover:underline hover:scale-105 transition  md:text-base lg:text-lg font-medium"><FaHashnode />Hashnode</a>
            </div>
            <div className="flex gap-4 justify-center mt-4 md:mt-6">
                <Link to="/projects" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700
                                                md:px-6 md:py-4 md:text-lg lg:text-xl">View Projects</Link>
                {/* <a href="/resume.pdf" download className="bg-indigo-100 text-indigo-600 border border-indigo-600 px-4 py-2  rounded hover:bg-indigo-200
                                                          md:px-6 md:py-4 md:text-lg lg:text-lg">Download Resume </a> 
                                                          
                                                         Resume comming soon with more project experience added*/}
            </div>
        </div>
    );
}