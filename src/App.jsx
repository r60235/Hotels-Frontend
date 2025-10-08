import React from "react";
import Hotels from "./Hotels";
import HotelsByTitle from "./HotelsByTitle";
import AddHotel from "./AddHotel";

const App = () => {
  return (
    <div className="App">
      <AddHotel/>

      <Hotels />

      <HotelsByTitle title="New Hotel" />
    </div>
  );
};

export default App;
