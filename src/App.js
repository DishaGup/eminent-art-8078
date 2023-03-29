import logo from './logo.svg';
import './App.css';

import Homepage from './Pages/Homepage';
import Navigationbar from './Components/HomePage/Navigationbar';
import LoginPage from './Pages/LoginPage';
import { SingleProductPage } from './Pages/SingleProductPage';

function App() {
  return (
    <div className="App">
      {/* <Navigationbar /> */}
      {/* <LoginPage/> */}
      <SingleProductPage />
    </div>
  );
}

export default App;
