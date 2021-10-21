import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Users from './Components/Users/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/users'>
            <Users></Users>
          </Route>
          <Route path='/adduser'>
            <AddUser></AddUser>
          </Route>

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
