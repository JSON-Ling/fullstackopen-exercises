import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-1234567', id: 1},
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const resetNewPerson = () => {
        setNewName('') //reset value of new name to erase duplicate name
        setNewNum('') //reset value of new number to erase duplicate number
    }
    const addName = (event) => {

        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to the phonebook`)
            // don't concat the new person and instead generate alert of duplicate
            resetNewPerson() // reset the new person
        }
        else {
            const nameObject = {
                name: newName,
                number: newNum,
                id: persons.length + 1,
            }

            setPersons(persons.concat(nameObject)) //set value of new name to be added to Person array
            resetNewPerson() //erase the new person
        } //concat the new name to person and reset value of new name state

    }

    const handleNameChange = (event) => {
        setNewName(event.target.value) //set new name to the input given
    }

    const handleNumChange = (event) => {
        setNewNum(event.target.value) //set new num to the input given
    }

    const filteredResults = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase())) //if search term is an empty string, all entries in the persons array pass the filter function and thus will display all contacts.

    const filterName = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter: <input onChange={filterName}/>
            </div>
            <h2>Add new contact</h2>
            <form onSubmit={addName}>
                <div> name: <input value={newName} onChange={handleNameChange}/> </div>
                <div> number: <input value={newNum} onChange={handleNumChange} /> </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {
                    filteredResults.map(
                        person =>
                            <p key={person.name}>{person.name} {person.number}</p>
                    )
                }
            </div>
        </div>
    )
}

export default App