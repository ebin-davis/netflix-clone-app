
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action} from './urls'
function App() {
  return <>
  <Navbar/>
  <Banner/>
  <RowPost url={originals} title="Netflix Originals"/>
  <RowPost url={action} title="Action" isSmall/>
  </>;
}

export default App;
