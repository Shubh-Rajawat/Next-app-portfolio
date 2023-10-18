"use client";
import Link from 'next/link'
import About from './about/page'
import Projects from './projects/page'
import Skills from './skills/page';
import Contact from './contact/page';
import Head from 'next/head';

export default function Home() {

  return (
    <>

      <main className="max-w-[1200px] mx-auto dark:bg-gradient-to-t from-black to-zinc-950/50">
        {/* font-Awesome link */ }
        <link rel="stylesheet" href={ `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css` } integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>
        {/* font-Awesome link */ }
        <div className="flex  flex-col items-center justify-around gap-y-36 py-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between  font-mono text-sm lg:flex">
            <Link href={ `/` } className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              💻Shubh Rajawat💻
            </Link>
            <div className=" flex  items-end justify-center mx-auto text-md md:text-lg static h-auto w-auto bg-none">
              <Link href={ `/` } >Intro</Link>&nbsp;&nbsp;
              <Link href={ `#aboutme` } >About</Link>&nbsp;&nbsp;
              <Link href={ `#projects` } >Projects</Link>&nbsp;&nbsp;
              <Link href={ `#skills` } >Skills</Link>&nbsp;&nbsp;
              <Link href={ `#contact` } >Contact</Link>&nbsp;&nbsp;
            </div>
          </div>
          <div className=" text-center text-xl" id='aboutme'>
            <code className=''>HI, I am Shubh <br /> <p className='sm:tracking-widest' >A WEB DEVELOPER</p></code>
          </div>
        </div>

        <About />
        <hr className="w-48 h-1 mx-auto  mb-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" id='projects' ></hr>
        <Projects />
        <hr className="w-48 h-1 mx-auto  mb-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" id='skills'></hr>
        <Skills />
        <hr className="w-48 h-1 mx-auto  mb-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <Contact />
      </main>
    </>
  )
}
