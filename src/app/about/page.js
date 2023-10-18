
import Link from 'next/link';
import React from 'react'
// import laptop from "../../../public/laptop.svg"
const About = () => {

    return (
        <div className='grid grid-cols-1 text-center px-10 pb-10 sm:text-start sm:grid-cols-2 gap-4 items-center sm:my-12' >
            <div className='h-56'>
                <img src="/laptop.svg" className=' hidden dark:block w-full h-full' alt="" />
                <img src="/laptop-light.svg" className='dark:hidden w-full h-full' alt="" />
            </div>
            <div className="aboutme text-lg">
                <h2 className='text-4xl' >About</h2>
                <p>I'm  a passionate React.js developer. I have a strong background in front-end development, and I love creating user-friendly web applications. </p>
            </div>
        </div>
    )
}

export default About;