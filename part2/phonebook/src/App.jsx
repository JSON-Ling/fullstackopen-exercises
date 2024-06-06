import { useState, useEffect } from 'react'
import axios from "axios";

const Phonebook = ({ persons, newPerson, onChange, onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('')

    //if search term is an empty string, all entries in the persons array pass the filter function and thus will display all contacts.
    const filteredResults = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

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
            <form onSubmit={onSubmit}>
                <div> name: <input name='name' value={newPerson.name} onChange={onChange}/></div>
                <div> number: <input name='number' value={newPerson.number} onChange={onChange}/></div>
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

const App = () => {
    const [persons, setPersons] = useState([])
    const [newPerson, setNewPerson] = useState({name: '', number: ''})

    const resetNewPerson = () => {
        setNewPerson({name: '', number: ''}) //reset value of new name to erase duplicate name
    }

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(
                response => {
                    setPersons(response.data)
                }
            )
    }, []);

    const handleAddPerson = (event) => {

        event.preventDefault()
        if (persons.some(person => person.name.toLowerCase() === newPerson.name.toLowerCase())) {
            alert(`${newPerson.name} is already added to the phonebook`)
        } else {
            axios
                .post('http://localhost:3001/persons', newPerson)
                .then(response => {
                    setPersons(
                        persons.concat(response.data)
                    )
                })
        }
        resetNewPerson() //erase the new person
    }

    const handleChange = (event) => {
        if (event.target.name === 'name') {
            setNewPerson({...newPerson, name: event.target.value})
        } else if (event.target.name === 'number') {
            setNewPerson({...newPerson, number: event.target.value})
        }
    }

    return (
        <Phonebook
            persons={persons}
            newPerson={newPerson}
            onChange={handleChange}
            onSubmit={handleAddPerson}
        />
    )
}

export default App