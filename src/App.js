import Home from "./HomePage/Home";
import AddVehicleEntry from "./AddVehicleEntry/AddVehicleEntry";
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom'
import VehicleData from "./contextStore/AllData";
import AddNewToll from "./AddNewToll/AddNewToll";
import ViewAllToll from "./ViewAllToll/ViewAllToll";

function App() {
  return (
    <div >
      <VehicleData>
      <Router>
        <Routes>
          
          <Route exact path="/AddVehicleEntry" element={<AddVehicleEntry/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/AddNewToll" element={<AddNewToll/>}/>
          <Route exact path="/ViewAllToll" element={<ViewAllToll/>}/>
        </Routes>
      </Router>

      </VehicleData>
     
        
       
     
       
       
      
    </div>
  );
}

export default App;
