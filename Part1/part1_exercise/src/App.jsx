import { Component } from "react"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const sections = [part1,part2,part3]
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
    <h1>{props.course}</h1>
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