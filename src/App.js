import { useState } from 'react';
import { data } from './data';

function List({ people }) {
  console.log(people[0].id);
  return (
    <div>
      {people.map((people) => (
        <SinglePerson key={people.id} people={people} />
      ))}
    </div>
  );
}

function SinglePerson({ people }) {
  return <h3>{people.name}</h3>;
}

const App = () => {
  const [people, setpeople] = useState(data);

  return (
    <>
      <section>
        <h1 style={{ color: 'red' }}>Prop Drilling</h1>
        <List people={people} />
      </section>
    </>
  );
};

export default App;

function add(a) {
  console.log(a);
}

add(2);
