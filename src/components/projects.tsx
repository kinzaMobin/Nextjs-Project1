import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & Typescript base app for managing and organizing your tasks efficiently.",
        img: "/todo-list.jpg",
        tags: ["HTML", "Node","CSS","Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
        img:"/C-D img.png",
        tags: ["Next.js", "Node", "CSS", "TypeScript"],
    },
    {
        id: 2,
        title: "Weather widget",
        desc: "A Next.js and TypeScript based tool for fetching real-time weather data.",
        img: "/whether img.webp",
        tags: ["Next.js", "Node", "CSS", "TypeScript"],
    },
    {
        id: 3,
        title: "Currency Converter Project",
        desc: "A Simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
        img: "/c-c img.jpeg",
        tags: ["HTML", "Node", "CSS", "TypeScript"],   
    },
    {
        id: 4,
        title: "Resume builder Project",
        desc: "A TypeScript-based Interactive Resume built with HTML,& CSS, allowing users to showcase their skills dynamically.",
        img: "/resume.webp",
        tags: ["HTML", "Node", "CSS", "TypeScript"],   
    },
    {
        id: 5,
        title: "Simple Calculator Project",
        desc: "A basic HTML CSS ANDTypeScript calculator for performing essential arithmetic operation.",
        img: "/simple cal-img.webp",
        tags: ["HTML", "Node", "CSS", "TypeScript"],     
    },
];

const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) =>(<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default projects
