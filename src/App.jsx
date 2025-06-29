//App.jsx
import AboutMe from "./pages/AboutMe"
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import Navbar from "./components/Navbar"
import Blog from "./components/Blog"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <div>
      {
      <div className="bg-gradient-to-br from-indigo-300 to-red-300 min-h-screen flex flex-col 
                      md:p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<ProjectCard />} />
          <Route path="/blog-articles" element={<Blog/>} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="*" element={<h2 className="text-3xl text-center m-16"> Page you requested doesn't exist</h2>} />
        </Routes>
      </div>
      }
    </div>
  )
}

export default App
