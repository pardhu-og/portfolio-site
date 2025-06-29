//ProjectCard.jsx
import img from "../images/Budget Buddy.png"
export default function ProjectCard (){
    return (
    <div className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col gap-4">
          <img src={img} alt="Project Thumbnail" className="rounded" />
          <h3 className="text-xl font-semibold">Budget Buddy</h3>
          <p className="text-sm text-gray-700">A Personal Finance Tracker - Track income, expenses, and monthly budgets.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">React</span>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">Tailwind CSS</span>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">JavaScript</span>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://budget-buddy-three-tau.vercel.app/" target="_blank" rel="noreferrer noopener" className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm">Live Demo</a>
            <a href="https://github.com/pardhu-og/budget-buddy" target="_blank" rel="noreferrer noopener" className="bg-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-300">GitHub</a>
          </div>
        </div>
      </div>
    </div>
    )
}
    
