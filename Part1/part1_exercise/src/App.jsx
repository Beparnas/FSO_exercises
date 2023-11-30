//exercise 1.4: done, I got ahead of myself!

import { Component } from "react"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const sections = course.parts
  return (
    <div>
      <Header course={course}/>
      <Content sections={sections} />
      <Totals sections={sections}/>
    </div>
  )
}

const Header = (props)=>{
  return(
  <>
    <h1>{props.course.name}</h1>
  </>
  )
}

const Content = (props)=>{
  console.log("content: "+props.sections)
  return(
    <>
      {props.sections.map(section=>(
        <Section section={section} key={section.name}/>// key added as best practice
      ))
      }
    </>
  )
}
const Section = (props)=>{
  const section = props.section
  return(
    <p>{section.name} {section.exercises}</p> 
  )
}

const Totals = (props)=>{
  let totalCount = 0
  props.sections.forEach(element => {
    totalCount+=element.exercises
  })
  return(
    <p>Number of exercises {totalCount}</p>
  )
}
export default App