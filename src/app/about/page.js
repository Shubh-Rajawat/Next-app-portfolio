
import Link from 'next/link';
import React from 'react'
// import laptop from "../../../public/laptop.svg"
const About = () => {

    return (
        <div className='grid grid-cols-1 text-justify px-10 pb-10 sm:text-start sm:grid-cols-2 gap-4 items-center sm:my-12' id='aboutme' >
            <div className='h-56'>
                <img src="/laptop.svg" className=' hidden dark:block w-full h-full' alt="" />
                <img src="/laptop-light.svg" className='dark:hidden w-full h-full' alt="" />
            </div>
            <div className="aboutme text-lg">
                <h2 className='text-4xl' >About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet placeat nam suscipit distinctio architecto molestiae iste! Quas, ullam veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta fugit tempore, impedit esse dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dignissimos!</p>
            </div>
        </div>
    )
}

export default About;