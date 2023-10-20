import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './CRUD/UI/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
