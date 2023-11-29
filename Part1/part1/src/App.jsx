const App = () => {
  const time = new Date()
  const LA_time_formatter = new Intl.DateTimeFormat([],{timeZone:"America/Los_Angeles",
                                                        dateStyle:"short",
                                                        timeStyle:"long"})
  const Boston_time_formatter = new Intl.DateTimeFormat([],{timeZone:"America/New_York",
                                                            dateStyle:"short",
                                                            timeStyle:"long"})
  console.log(LA_time_formatter.format(time))
  return (
    <div>
      <h1>Introduction</h1>
      < Hello/>
      < Time place="LA" time={LA_time_formatter.format(time)}/>
      < Time place="Boston" time={Boston_time_formatter.format(time)}/>
    </div>
  )
}

const Hello = () =>{
  
  return(
    <>
      <p>Hello world</p>
    </>
  )
}

const Time = (props)=>{
  if (props.time == null){
    const now = new Date()
  }
  console.log(props.time)
  return(
    <>
      <p>the time in {props.place} is: {props.time}</p>
    </>
  )
}
export default App