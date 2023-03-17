// import logo from './logo.svg';
// import { Adderare } from './components/Componenten';
import { UserForm } from './components/UserForm.jsx';
import './App.css';
import { useState } from 'react';

function App() {

  const [userList, setUserLists] = useState([])

  const addUserToList = (user) => {
    setUserLists([...userList, user])
  }

  const html = userList.map((user) => {
    return <>
      <p>{user.firstname}</p>
      <p>{user.age}</p>
    </>
  })

  return (
    <div className="App">
      <UserForm addUser={addUserToList} />
      {html}
    </div>
  );
}

export default App;
