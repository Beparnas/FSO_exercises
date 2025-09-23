//exercise 1.6: 
import { useState } from 'react'
const Header = (props) =>{
  return (
  <>
    <h1>{props.value}</h1>
  </>)
}

const StatsBlock = ({good,bad,neutral,count,avg,pctPos}) =>{
  return (
    <>
      <Header value="Statistics"/>
      <p>
        good: {good} <br></br>
        bad: {bad}<br></br>
        neutral: {neutral}<br></br>
        total: {count}<br></br>
        average: {avg.toFixed(3)}<br></br>
        pct positive: {(pctPos*100).toFixed(1)}%
      </p>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //statistical data
  const [avg, updateAvg] = useState(0)
  const [sum,updateSum] = useState(0)
  const [count,updateCount] = useState(0)
  const [pctPos,updatePctPos] = useState(0)
  const calculateAvg = (newValue) =>{
    updateSum(sum+newValue)
    updateCount(count+1)
    updateAvg ((sum+newValue)/(count+1))
    let currentgood = good
    if(newValue>0){
      currentgood+=1
    }
    updatePctPos(currentgood/(count+1))
  }
  //event handlers
  const handleGood = () => () => {
    setGood(good+1)
    calculateAvg(1)
    console.log("good is now:",good+1)
  }
  const handleBad = () => () => {
    setBad(bad+1)
    calculateAvg(-1)
    console.log("bad is now:", bad+1)
  }
  const handleNeutral = () => () => {
    setNeutral(neutral+1)
    calculateAvg(0)
    console.log("neutral is now:",neutral+1)
  }
  return (
    <div>
      <Header value="Give Feedback"/>
      <button onClick={handleGood()}>good</button>
      <button onClick={handleBad()}>bad</button>
      <button onClick={handleNeutral()}>neutral</button>
      
      <StatsBlock good={good}
                  bad={bad}
                  neutral={neutral}
                  count={count}
                  avg={avg}
                  pctPos={pctPos}>
      </StatsBlock>

    </div>
  )
}



export default App