import React from "react";
import AddProduct from "./components/AddProduct";
import ShowProduct from "./components/ShowProduct";

function App() {
  return (
    <div className="container">
      <div class="columns">
        <div class="column">
          <AddProduct />
        </div>
        <div class="column">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
}

export default App;
