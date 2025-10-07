import { useState } from 'react'

const PhonebookItem = ({person}) =>{
  return (
    <li>name: {person.name}</li> 
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log("adding item ",newName)
    const pbObject = {
      name: newName,
    }
    setPersons(persons.concat(pbObject))
    setNewName('')
  }
  const handleInputChange = (event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value = {newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map(person => 
                      <PhonebookItem  key={person.name} 
                                      person={person}>                
                      </PhonebookItem>)}
        </ul>
    </div>
  )
}

export default App