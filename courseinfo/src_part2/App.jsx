//exercise 1.4: done, I got ahead of myself!

import { Component } from "react"

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


    return (
      <div>
        {courses.map(course =>(<Course course={course} key={course.id}/>))}
      </div>
    )
}

const Course = ({course})=>{
  const sections = course.parts
  console.log("loading course",course.name,"...")
  return(
  <>
    <div>
    <Header course={course}/>
    <Content sections={sections} />
    <Totals sections={sections}/>
    </div>
  </>
  )
}

const Header = ({course})=>{
  return(
  <>
    <h1>{course.name}</h1>
  </>
  )
}

const Content = ({sections})=>{
  console.log("loading content...")
  return(
    <>
      {sections.map(section=>(
        <Section section={section} key={section.id}/>// key added as best practice
      ))
      }
    </>
  )
}
const Section = ({section})=>{
  console.log("loading section:",section.name)
  return(
    <p><span style={{fontWeight: "bold"}}>section:</span> {section.name} <span style={{fontWeight: "bold"}}>num exercises:</span> {section.exercises}</p> 
  )
}

const Totals = ({sections})=>{
  let totalCount = 0
  let exerciseNums = sections.map(element => element.exercises)
  totalCount = exerciseNums.reduce((accumulator, currentValue) => accumulator + currentValue,
  0,)
  return(
    <p><span style={{fontWeight: "bold"}}>Total Number of Exercises:</span> {totalCount}</p>
  )
}
export default App