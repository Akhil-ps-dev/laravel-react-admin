import React from "react";
import { BrowserRouter } from 'react-router-dom'
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
