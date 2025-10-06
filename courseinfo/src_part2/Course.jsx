

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
export default Course