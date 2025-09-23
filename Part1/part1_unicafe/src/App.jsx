//exercise 1.6: 
import { useState } from 'react'
const Header = (props) =>{
  return (
  <>
    <h1>{props.value}</h1>
  </>)
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //statistical data
  const [avg, updateAvg] = useState(0)

  //event handlers
  const handleGood = () => () => {
    setGood(good+1)
    console.log("good is now:",good+1)
  }
  const handleBad = () => () => {
    setBad(bad+1)
    console.log("bad is now:", bad+1)
  }
  const handleNeutral = () => () => {
    setNeutral(neutral+1)
    console.log("neutral is now:",neutral+1)
  }
  return (
    <div>
      <Header value="Give Feedback"/>
      <button onClick={handleGood()}>good</button>
      <button onClick={handleBad()}>bad</button>
      <button onClick={handleNeutral()}>neutral</button>
      <Header value="Statistics"/>
      <p>good: {good} <br></br> bad: {bad}<br></br> neutral: {neutral}</p>

    </div>
  )
}



export default App