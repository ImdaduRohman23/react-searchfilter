import { useState } from 'react';
import './App.css';
import { Users } from './Users';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <input type="text" className="search" placeholder='Search . . .' onChange={(e) => setSearch(e.target.value)} />
      <ul className="list">
        {
          Users
            .filter(i=> i.first_name.toLowerCase().includes(search.toLowerCase()))
            .map(i => (
              <li key={i.id} className="list__item">{i.first_name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
