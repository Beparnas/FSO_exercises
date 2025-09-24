//exercise 1.12-1.14: 
import { useState } from 'react'

const App = () => {
  const [anecdotes,updateVotes] = useState([
    ['If it hurts, do it more often.',0],
    ['Adding manpower to a late software project makes it later!',0],
    ['The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',0],
    ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',0],
    ['Premature optimization is the root of all evil.',0],
    ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',0],
    ['Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',0],
    ['The only way to go fast, is to go well.',0]
  ])
   
  const [selected, setSelected] = useState(0)
  //basic random integer within 0-max function. source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const nextAnecdote = () => ()=> {
    let newAnecdoteIdx = getRandomInt(anecdotes.length-1)
    setSelected(newAnecdoteIdx)
    console.log("now showing anecdote ",newAnecdoteIdx)
  }
  const vote= (idx) => () => {
    console.log("voting for anecdote",idx)
    const newAnecdotes = [...anecdotes]
    newAnecdotes[idx][1]+=1
    updateVotes(newAnecdotes)
  }
  let plural = ""
  if(anecdotes[selected][1]!=1){
    plural = "s"
  }
  return (
    <>
    <div>
      {anecdotes[selected][0]}
    </div>
    <div>this one has {anecdotes[selected][1]} vote{plural}</div>
    <button onClick={nextAnecdote()}>next anecdote</button>
    <button onClick={vote(selected)}>vote</button>
    </>
  )
}

export default App