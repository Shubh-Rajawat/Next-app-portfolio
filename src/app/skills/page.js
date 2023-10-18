import React from 'react'

const Skills = () => {
    return (
        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 mb-12 justify-center">
            <Card data={ { name: "HTML", img: "/laptop-light.svg", dark_img: "/laptop.svg" } } />
            <Card data={ { name: "CSS", img: "/css-light.svg", dark_img: "/css.svg" } } />
            <Card data={ { name: "JVASCRIPT", img: "/js-light.svg", dark_img: "/js.svg" } } />
            <Card data={ { name: "TAILWIND", img: "/tailwind-light.svg", dark_img: "/tailwind.svg" } } />
            <Card data={ { name: "BOOTSTRAP", img: "/bootstrap-light.svg", dark_img: "/bootstrap.svg" } } />
            <Card data={ { name: "REACT JS", img: "/react-light.svg", dark_img: "/react.svg" } } />
            <Card data={ { name: "Fundamentals of \n NEXT JS", img: "/next-light.svg", dark_img: "/next.svg" } } />
            <Card data={ { name: "REACT QUERY", img: "/query-light.svg", dark_img: "/query.svg" } } />
            <Card data={ { name: "REDUX TOOLKIT", img: "/redux-light.svg", dark_img: "/redux.svg" } } />
        </div>
    )
}

const Card = ( { data } ) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
            <img className="w-20 h-16 rounded mx-auto  hidden dark:block" src={ data.dark_img } alt="Large avatar" />
            <img className="w-20 h-16 rounded mx-auto  dark:hidden" src={ data.img } alt="Large avatar" />

            <h5 className="cursor-default mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><code>{ data.name }</code></h5>

        </div>

    )
}

export default Skills;