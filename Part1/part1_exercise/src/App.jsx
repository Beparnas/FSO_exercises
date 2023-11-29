import { Component } from "react"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const sections = [[part1,exercises1],[part2,exercises2],[part3,exercises3]]
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
        <Section section={section} key={section[0]}/>// key added as best practice
      ))
      }
    </>
  )
}
const Section = (props)=>{
  const section = props.section
  return(
    <p>{section[0]} {section[1]}</p> 
  )
}

const Totals = (props)=>{
  var totalCount = 0
  props.sections.forEach(element => {
    totalCount+=element[1]
  })
  return(
    <p>Number of exercises {totalCount}</p>
  )
}
export default App