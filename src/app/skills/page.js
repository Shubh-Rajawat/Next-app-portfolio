import React from 'react'

const Skills = () => {
    return (
        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 mb-12 justify-center">
            <Card data={ { name: "HTML", img: "" } } />
            <Card data={ { name: "CSS", img: "" } } />
            <Card data={ { name: "JVASCRIPT", img: "" } } />
            <Card data={ { name: "TAILWIND", img: "" } } />
            <Card data={ { name: "BOOTSTRAP", img: "" } } />
            <Card data={ { name: "REACT JS", img: "" } } />
            <Card data={ { name: "NEXT JS", img: "" } } />
            <Card data={ { name: "REACT QUERY", img: "" } } />
            <Card data={ { name: "REDUX TOOLKIT", img: "" } } />
        </div>
    )
}

const Card = ( { data } ) => {
    return (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="w-20 h-20 rounded" src="/laptop.svg" alt="Large avatar" />
            <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><code>{ data.name }</code></h5>
            </a>
        </div>

    )
}

export default Skills;