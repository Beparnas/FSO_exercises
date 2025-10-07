import { useState,createElement } from 'react'

const PhonebookItem = ({person}) =>{
  return (
    <li>name: {person.name}&#9;tel:<a href={`tel:${person.number}`}>{person.number}</a></li> 
  )
}
// state should be an array of two values
const AddPanel = ({state,changehandler,submithandler})=>{
  
  return(
    <form onSubmit={submithandler}>
        <div>
          name: <input id="name" value = {state[0]} onChange={changehandler} /><br></br>
          number: <input id="number" value = {state[1]} onChange={changehandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const FilteredList = ({list,container}) => {
  const [filterTerm,setFilterTerm] = useState('')
  const handleFilterChange = (event)=>{
    setFilterTerm(event.target.value)
  }
  let itemsShown = [];
  if(filterTerm != ""){
    console.log(`filtering for query ${filterTerm}`)
    itemsShown = list.filter(item => item.name.toLowerCase().includes(filterTerm.toLowerCase())) 
  }
  else{
    itemsShown = list
  }
  return (
    <>
    <div>
          <input id="filter" placeholder="filter by name..." value = {filterTerm} onChange={handleFilterChange} />
      </div>
      <ul>
        {itemsShown.map(item => 
                    createElement(container,{key:item.id,person:item})                
                    )}
      </ul>
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState(['',''])
  
  const handleInputChange = (event)=>{
    console.log(`${event.target.id}:${event.target.value}`)
    if(event.target.id == "name"){
      setNewName([event.target.value,newName[1]])
    }
    else if(event.target.id == "number"){
      setNewName([newName[0],event.target.value])
    }
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(`adding item ${newName}?`)
    let newID = 1;
    try{
      newID = persons[persons.length-1].id+1
    }
    catch (TypeError){
      console.log("no existing ID, starting at 1")
    }
    const pbObject = {
      name: newName[0],
      number: newName[1],
      id:newID
    }
    let names = persons.map(person=>person.name)
    if (names.includes(newName[0])){
      alert(`we already have an entry for ${newName[0]}!`)
      console.log(`duplicate entry, cancelling`)
    }
    else{
      setPersons(persons.concat(pbObject))
      console.log("done!")
    }
    setNewName(['',''])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <AddPanel state={newName} submithandler={handleSubmit} changehandler={handleInputChange}></AddPanel>
      <h2>Numbers</h2>
      <FilteredList list={persons} container={PhonebookItem}></FilteredList>
    </div>
  )
}

export default App