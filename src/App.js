import logo from './logo.svg';
import './App.css';

import Homepage from './Pages/Homepage';
import Navigationbar from './Components/HomePage/Navigationbar';
import LoginPage from './Pages/LoginPage';
import { SingleProductPage } from './Pages/SingleProductPage';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      {/* <Navigationbar /> */}
      {/* <LoginPage/> */}
      {/* <SingleProductPage /> */}
      <Home/>
    </div>
  );
}

export default App;
