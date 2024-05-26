//import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <Analytics />
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
    );
}

export default App;
