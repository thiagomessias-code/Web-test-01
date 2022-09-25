import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes"
import {GlobalStyle} from './Global'


function App() {

  return (
    <Router>
      <Routes/>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
