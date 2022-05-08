import React from "react";
import { BrowserRouter } from 'react-router-dom'
import Sidebar from "./layouts/admin/Sidebar";
import RouteApp from "./Routes_App/RouteApp";
function App() {
  return (
    <div className="App">
    
     
      <BrowserRouter>

        <RouteApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
