//ProjectCard.jsx
import img from "../assets/images/Budget Buddy.png"
export default function ProjectCard (){
    return (
    <div className="px-6 mt-6 md:px-8 md:mt-8">
      <h2 className="text-2xl font-medium text-center text-gray-700 mb-4
                      md:text-3xl md:mb-6 ">Projects</h2>
      <div className="flex flex-col
                        md:flex-row md:justify-center lg:w-1/2">
        <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col justify-evenly gap-4
                      md:p-8 md:w-1/2 ">
          <img src={img} alt="Project Thumbnail" className="rounded aspect-square object-cover h-1/2" />
          <h3 className="text-base font-semibold
                        md:text-lg">Budget Buddy</h3>
          <p className="text-sm md:text-base text-gray-700">A Personal Finance Tracker - Track income, expenses, and monthly budgets.</p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs
                              md:px-3 md:text-sm">React</span>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs
                              md:px-3 md:text-sm">Tailwind CSS</span>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs
                              md:px-3 md:text-sm">JavaScript</span>
          </div>
          <div className="flex gap-4 md:gap-6 mt-2 md:mt-4">
            <a href="https://budget-buddy-three-tau.vercel.app/" target="_blank" rel="noreferrer noopener" className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm">Live Demo</a>
            <a href="https://github.com/pardhu-og/budget-buddy" target="_blank" rel="noreferrer noopener" className="bg-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-300">GitHub</a>
          </div>
        </div>
      </div>   
    </div>
    )
}
    
