//Blog.jsx
import img1 from "../assets/images/blog-pic-1.jpg"
import img2 from "../assets/images/blog-pic-2.jpg"
export default function Blog (){

    return (
        <div className="px-6 mt-6 
                        md:px-8 md:mt-8">
              <h2 className="text-2xl font-medium text-center text-gray-700 mb-4
                             md:text-3xl md:mb-6">Blog Articles</h2>
              <div className="flex flex-col gap-6
                              md:flex-row  md:justify-evenly lg:justify-start">
                <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col justify-evenly gap-4
                                md:basis-1/2 md:p-8 md:gap-4 lg:basis-1/3">
                  <img src={img1} alt="Image depicting starting of web development and career switch." className=" aspect-video object-scale-down border-2" />
                  <h3 className="text-base font-semibold
                                  md:text-lg">How I Met HTML: From Confusion to Clarity</h3>
                  <p className="text-sm md:text-base text-gray-700">A beginner’s reflection on discovering HTML and the world of web development.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm">HTML5</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm">WebDevelopment</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm">LifeExperiences</span>
                  </div>
                  <div className="flex gap-4 mt-2 md:gap-6 md:mt-3">
                    <a href="https://dialogue-with-machine-a-coders-journey.hashnode.dev/how-i-met-html-from-confusion-to-clarity" target="_blank" rel="noreferrer noopener" className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm
                                                                                                                                                                                        md:px-4 md:py-2 md:text-base">Full Article</a>
                    <a href="https://dialogue-with-machine-a-coders-journey.hashnode.dev/" target="_blank" rel="noreferrer noopener" className="bg-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-300
                                                                                                                                                 md:px-4 md:py-2 md:text-base">Blog</a>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col justify-evenly gap-4
                                md:basis-1/2  md:p-8 md:gap-4 lg:basis-1/3">
                  <img src={img2} alt="CSS learning journey image" className=" aspect-video object-cover border-2 " />
                  <h3 className="text-base md:text-lg font-semibold">Painting the Web: My Journey Through CSS</h3>
                  <p className="text-sm md:text-base text-gray-700">From box models and flex layouts to the lovable Boom Boom 🐶 — This is a journal of all the joy, confusion, late-night lightbulbs and even the frustrations I experienced while learning CSS.</p>
                  <div className="flex flex-wrap gap-2 ">
                    <span className="bg-indigo-100 text-indigo-800 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm">CSS</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm">WebDevelopment</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm">TailwindCSS</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm">Dev Journals</span>

                  </div>
                  <div className="flex gap-4 mt-2 md:gap-6 md:mt-3">
                    <a href="https://dialogue-with-machine-a-coders-journey.hashnode.dev/painting-the-web-my-journey-through-css?source=more_articles_bottom_blogs" target="_blank" rel="noreferrer noopener" className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm
                                                                                                                                                                                                                          md:px-4 md:py-2 md:text-base">Full Article</a>
                    <a href="https://dialogue-with-machine-a-coders-journey.hashnode.dev/" target="_blank" rel="noreferrer noopener" className="bg-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-300
                                                                                                                                                md:px-4 md:py-2 md:text-base">Blog</a>
                  </div>
                </div>                                
              </div>   
            </div>
    )
}