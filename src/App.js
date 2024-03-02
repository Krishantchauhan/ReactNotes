import "./App.css";
import React, { useState } from "react";
import UserOp from "./UserOp/UsrOp";

function App() {

  const [persons, setPersons] = useState([
    { id: 1, name: "Krishant", age: 29 },
    { id: 2, name: "KriSiya", age: 26 },
    { id: 3, name: "Siya", age: 27 },
  ]);
  const [showPersons, setShowPersons] = useState(false);

  const nameChangeHandler = (event, id) => {
    const updatedPersons = persons.map((person) => {
      if (person.id === id) {
        return { ...person, name: event.target.value };
      }
      return person;
    });
    setPersons(updatedPersons);
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  const deletePersonHandler = (index) => {
    const updatedPersons = [...persons];
    updatedPersons.splice(index, 1);
    setPersons(updatedPersons);
  };

  let personList = null;

  if (showPersons) {
    personList = (
      <div>
        {persons.map((person, index) => (
          <UserOp
            key={person.id}
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            changed={(event) => nameChangeHandler(event, person.id)}
          />
        ))}
      </div>
    );
  }

  return (
    <main>
      <button className="btn" onClick={togglePersonsHandler}>
        Toggle
      </button>
      {personList}
    </main>
  );
}

export default App;
