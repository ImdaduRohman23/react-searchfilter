import { useState } from 'react';
import './App.css';
import Table from './Table';
import { Users } from './Users';

function App() {
  const [search, setSearch] = useState('');

  //CARA 1
  // const dataFilter = (a) => {
  //   return a.filter(i=> i.first_name.toLowerCase().includes(search.toLowerCase()) || i.email.toLowerCase().includes(search.toLowerCase()))
  // }

  //CARA 2
  const keys = ['first_name', 'email'];
  // console.log(Users[0]['first_name']);
  const dataFilter = (a) => {
    return a.filter(i => keys.some(key => i[key].toLowerCase().includes(search.toLowerCase())))
  }

  // Users.filter(i=> i.first_name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <input type="text" className="search" placeholder='Search . . .' onChange={(e) => setSearch(e.target.value)} />
      <Table data = {dataFilter(Users)} className='table'/>
    </div>
  );
}

export default App;
