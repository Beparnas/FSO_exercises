import { useState } from 'react'

const PhonebookItem = ({person}) =>{
  return (
    <li>name: {person.name}&#9;tel:<a href={`tel:${person.number}`}>{person.number}</a></li> 
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '123-456-7890',
      id:1
     }
  ]) 
  const [newName, setNewName] = useState(['',''])
  const [filterTerm,setFilterTerm] = useState('')
  
  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(`adding item ${newName}?`)
    const pbObject = {
      name: newName[0],
      number: newName[1],
      id:persons[persons.length-1].id+1
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
  const handleInputChange = (event)=>{
    console.log(`${event.target.id}:${event.target.value}`)
    if(event.target.id == "name"){
      setNewName([event.target.value,newName[1]])
    }
    else if(event.target.id == "number"){
      setNewName([newName[0],event.target.value])
    }
    else if (event.target.id == "filter"){
      setFilterTerm(event.target.value)
    }
  }
  let personsShown = [];
  if(filterTerm != ""){
    console.log(`filtering for query ${filterTerm}`)
    personsShown = persons.filter(person => person.name.toLowerCase().includes(filterTerm.toLowerCase())) 
  }
  else{
    personsShown = persons
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input id="name" value = {newName[0]} onChange={handleInputChange} /><br></br>
          number: <input id="number" value = {newName[1]} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          <input id="filter" placeholder="filter by name..." value = {filterTerm} onChange={handleInputChange} />
      </div>
      <ul>
        {personsShown.map(person => 
                    <PhonebookItem  key={person.id} 
                                    person={person}>                
                    </PhonebookItem>)}
      </ul>
    </div>
  )
}

export default App