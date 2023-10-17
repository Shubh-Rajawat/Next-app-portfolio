import React from 'react'

const Projects = () => {
    return (
        <div id='projects' class="grid mb-8 border border-gray-200 dark:border-gray-700 grid-rows-2 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800/50 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white group"><a href="https://www.quadrafreelancers.com/" className=' group-hover:text-blue-600' >Quardra Freelancers  </a></h3>
                    <p class="my-4">Quadra is a web application designed for online work, similar to Upwork and Freelance.</p>
                </blockquote>
            </figure>
            <figure class=" flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-tr-lg   md:border-b dark:bg-gray-800/50 dark:border-gray-700">
                <blockquote class=" mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white group"><a href="https://vantagecr.com/"
                        className=' group-hover:text-blue-600' >Vantage Commercial Reality</a> </h3>
                    <p class="my-4">Vantage Commercial Realty is a boutique brokerage firm located in Washington, D.C.</p>
                </blockquote>

            </figure>
            <figure class="md:col-span-2 flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-br-lg rounded-bl-lg dark:bg-gray-800/50 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white group" >Safelishare</h3>
                    <p class="my-4">SafeLiShare is a cutting-edge data governance platform that is being leveraged by innovative companies across various industries. The platform provides a paramount level of data protection, enabling companies to push the boundaries of their research while safeguarding highly confidential information.</p>
                </blockquote>

            </figure>

            {/* <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                    <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
                </blockquote>
            </figure> */}
        </div>

    )
}

export default Projects