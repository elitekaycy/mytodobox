import {Route, Switch} from 'react-router-dom'
import Createtask from './Pages/Createtask';
import Createuser from './Pages/Createuser';
import Home from './Pages/Home';
import Todo from './Pages/Todo';

function App() {
  return (
   <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/createuser" component={Createuser} />
     <Route path="/createtask" component={Createtask} />
     <Route path="/todo" component={Todo} />
   </Switch>
  );
}

export default App;
