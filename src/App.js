import { useState } from 'react';
import { data } from './data';

function List({ people, removePerson }) {
  console.log(people);
  return (
    <div>
      {people.map((people) => (
        <SinglePerson
          key={people.id}
          people={people}
          removePerson={removePerson}
        />
      ))}
    </div>
  );
}

function SinglePerson({ people, removePerson }) {
  console.log(typeof removePerson);
  return (
    <div>
      <h3>{people.name}</h3>
      <button onClick={() => removePerson(people.id)}>REMOVE</button>
    </div>
  );
}

const App = () => {
  const [people, setpeople] = useState(data);

  function removePerson(id) {
    setpeople((people) => people.filter((person) => person.id !== id));
  }

  return (
    <>
      <section>
        <h1 style={{ color: 'red' }}>Prop Drilling</h1>
        <List people={people} removePerson={removePerson} />
      </section>
    </>
  );
};

export default App;
