import { FaLink } from "react-icons/fa";
export default function AboutMe(){

    return (
        <div className="min-h-screen max-w-screen bg-gradient-to-br from-purple-200 to-pink-200 p-1 text-justify
                        md:p-2 lg:p-3">
        <div className="flex flex-col gap-6 divide-y-2 divide-gray-500 m-1 p-1 text-lg
                        md:m-2 md:p-2 md:text-xl md:gap-8
                        lg:m-4 lg:p-4 lg:text-2xl lg:gap-10">
            <h2 className="text-xl pb-2  font-bold 
                           md:text-2xl md:pb-4
                           lg:text-3xl lg:pb-6">About Me</h2>
            <section className="pb-2 flex flex-col gap-4 
                                md:pb-3 md:gap-6
                                lg:pb-6 lg:gap-8">
                <p>Hi, I’m Pardhasaradhi Alaparthi — a self-taught Front-End Developer with a sharp eye for design and a relentless drive to improve.</p>
                <p>For over a decade, I pursued a different path — one that didn’t pan out the way I hoped. In 2025, I made a deliberate shift to web development — with focused clarity on what I wanted to build and who I wanted to become. I wanted to create, to grow and to move forward; I haven’t looked back since.</p>
            </section>
            <section className="pb-2 flex flex-col gap-4
                                md:pb-3 md:gap-6
                                lg:pb-6 lg:gap-8">
                <p>Since then, I’ve gone all-in:</p>
                <ul className="list-disc list-inside ">
                    <li className="ml-4 md:ml-6 lg:ml-8">Built real projects like <a href="https://budget-buddy-three-tau.vercel.app/" target="_blank" rel="noreferrer noopener" className="text-blue-700 font-semibold underline">Budget Buddy</a> — a personal finance tracker with clean UI and local storage.</li>
                    <li className="ml-4 md:ml-6 lg:ml-8">Mastered the fundamentals of HTML, CSS, JavaScript, React and Tailwind CSS.</li>
                    <li className="ml-4 md:ml-6 lg:ml-8">Documented my journey and learnings publicly through <a href="https://dialogue-with-machine-a-coders-journey.hashnode.dev/" target="_blank" rel="noreferrer noopener" className="text-blue-700 font-semibold underline">blog articles</a> and <a href="https://github.com/pardhu-og" target="_blank" rel="noreferrer noopener" className="text-blue-700 font-semibold underline">GitHub commits</a>.</li>
                    <li className="ml-4 md:ml-6 lg:ml-8">Focused deeply on polish, usability, and performance — the things that matter most in user-facing products.</li>
                </ul>
                <p>Right now, I'm sharpening my front-end skills by building real-world projects.</p>
                <p>After landing my first role, I plan to deepen my frontend expertise through hands-on work and continuous learning, while also starting to learn backend development, along with data structures and algorithms in my free time. The path is clear, and I'm excited to grow into a well-rounded, high-impact developer.</p>
                <p>I value simplicity, speed and shipping things that work. I love turning complex requirements into clean, delightful interfaces.</p>
            </section>
            <section className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                <p>Now, I’m looking to contribute to a product-focused team — preferably remote — where I can keep growing, contribute and do meaningful work.</p>
                <p>Let’s connect if that’s what you’re building too. &nbsp; <FaLink className="inline w-4 h-4 mb-1 ml-1"/> <a href="https://www.linkedin.com/in/pardhasaradhi-alaparthi-203786371" target="_blank" rel="noreferrer noopener" className="text-blue-700 font-semibold underline">LinkedIn</a></p>
            </section>
        </div>
        </div>
    )
}