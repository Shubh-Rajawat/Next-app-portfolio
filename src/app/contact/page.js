import React from 'react'

const Contact = () => {
    return (
        <div className='mb-8' >
            <h2 className="text-4xl font-bold dark:text-white pl-2">Contact me</h2>
            <hr className="h-px mb-8 mt-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="sm:flex justify-between flex-wrap">
                <div className='flex items-center justify-center gap-5 mx-auto sm:mx-0' id='contact'>
                    <button type="button" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <a href="mailto:shubhrajawat9414@gmail.com?subject=I saw your portfolio" className='flex items-center' >
                            <svg className="w-3 h-3 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                            Email
                        </a>
                    </button>
                    <span className="bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 px-3 py-2 text-xl font-medium text-center inline-flex items-center text-white rounded">
                        <a href="https://instagram.com/shubh_rajawat?igshid=MzMyNGUyNmU2YQ==" target='_blank' className='flex items-center' >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </span>
                    <button type="button" className="bg-gradient-to-br  from-blue-300 via-blue-400 to-blue-500 px-3 py-2 text-xl font-medium text-center inline-flex items-center text-white rounded">
                        <a href="https://t.me/ShubhRajawat" target='_blank' className='flex items-center' >
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </button>

                    <button type="button" className="bg-gradient-to-br   from-green-400 via-green-500 to-green-600 px-3 py-2 text-xl font-medium text-center inline-flex items-center text-white rounded">
                        <a href="https://github.com/Shubh-Rajawat" target='_blank' className='flex items-center' >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </button>
                    <button type="button" className="bg-gradient-to-br  from-blue-500 via-blue-600 to-blue-700 px-3 py-2 text-xl font-medium text-center inline-flex items-center text-white rounded">
                        <a href="https://www.linkedin.com/in/shubh-rajawat-09965b266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='flex items-center'>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </button>
                </div>
                <span className=' float-right my-8 mr-10 sm:my-1 sm:mr-3 font-bold dark:text-slate-400'>Thank You for Visiting</span>
            </div>
        </div>
    )
}

export default Contact;