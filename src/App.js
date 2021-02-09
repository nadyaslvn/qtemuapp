import './App.css';
import Main from './template/Main.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Joinus from './Home/Joinus/index';
import Explore from './Home/Explore/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/joinus" component={Joinus} exact/>
          <Route path="/explore" component={Explore} exact/>
          <Route render={(renderProps) => <div style={{ textAlign: 'center', color: 'red' }}>Error</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
