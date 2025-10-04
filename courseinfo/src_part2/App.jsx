//exercise 1.4: done, I got ahead of myself!

import { Component } from "react"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id:1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id:2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id:3
      }
    ]
  }

  const sections = course.parts
    return (
      <div>
        <Course course={course}/>
      </div>
    )
}

const Course = ({course})=>{
  const sections = course.parts
  return(
  <>
    <div>
    <Header course={course}/>
    <Content sections={sections} />
    {/* <Totals sections={sections}/> */}
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

const Totals = (props)=>{
  let totalCount = 0
  props.sections.forEach(element => {
    totalCount+=element.exercises
  })
  return(
    <p><span style={{fontWeight: "bold"}}>Total Number of exercises:</span> {totalCount}</p>
  )
}
export default App