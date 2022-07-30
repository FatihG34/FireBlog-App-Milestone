import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Table from './components/table/Table';
import Register from './pages/Register';

const initialValue = { username: '', phoneNumber: '', gender: '' }

function App() {
  const [userInfo, setUserInfo] = useState(initialValue);
  console.log(userInfo)
  return (
    <div className="App">
      {/* <Form userInfo={userInfo} setUserInfo={setUserInfo} /> */}
      {/* <Table /> */}
      <Register userInfo={userInfo} setUserInfo={setUserInfo} />
    </div>
  );
}

export default App;
