//Navbar.jsx
import { Link } from 'react-router-dom';
export default function Navbar(){

    return (
       <nav className='flex flex-wrap justify-evenly bg-white/10 backdrop-blur-sm text-sm font-medium p-1 mt-2 rounded-xl shadow-md 
                       md:text-base md:p-2 md:mt-4
                       lg:text-lg lg:p-4 lg:mt-2'>
            <Link to="/" className='px-4 py-1 rounded-md hover:bg-white/40
                                    md:px-6 md:py-2
                                    lg:px-8 lg:py-2'>Home</Link>
            <Link to="/projects" className='px-4 py-1 rounded-md hover:bg-white/40
                                            md:px-6 md:py-2
                                            lg:px-8 lg:py-2'>Projects</Link>
            <Link to="/blog-articles" className='px-4 py-1 rounded-md hover:bg-white/40
                                                md:px-6 md:py-2
                                                lg:px-8 lg:py-2'>Blog Articles</Link>
            <Link to="/about" className='px-4 py-1 rounded-md hover:bg-white/40
                                         md:px-6 md:py-2
                                         lg:px-8 lg:py-2'>About Me</Link>
        </nav>
    )
}