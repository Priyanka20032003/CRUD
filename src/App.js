import logo from './logo.svg';
import './App.css';
import User from './Components/User';
import UserPropsParent from './Components/UserPropsParent';
import UsersList from './Components/UserList';
import Cities from './Components/Cities';

import APIexample from './Components/APIexample';
import AddUser from './Components/AddUser/AddUser';
import Buttons from './Components/Buttons';
import ViewUser from './Components/ViewUser/ViewUser';
import {Routes,Route} from 'react-router-dom'
function App() {
  


  return (
    <div className="App">
      {/* <User/> */}
      {/* <UserPropsParent /> */}
      {/* <UsersList/> */}
      {/* <Cities/> */}
      {/* <APIexample/> */}
      {/* <AddUser/> */}
      {/* <Buttons /> */}
      <Routes>
        <Route path="/" element={<Buttons/>} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/view" element={<ViewUser />} />
      </Routes>
      
    </div>
  );
}

export default App;
