
import './App.css';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import CommitPage from './Pages/CommitPage';
import HomePage from './Pages/HomePage';
function App() {
  return (
    <Router>
    <div className="App">
      <h1> Fleet Studio</h1>

    
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/repositories/:owner/:repository/commit/:oid" element={<CommitPage/>} />
        </Routes>
   
    </div>
    </Router>
  );
}

export default App;
