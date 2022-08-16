import { BrowserRouter as React, Router, Link } from "react-router-dom";

import Header from "./component/Header.jsx";
import CountryCard from "./component/AllCountry.jsx";
import FilterSearch from "./component/FilterSearch.jsx";

function App() {
  return (
    <div className="bg-primary">
      <Header />
      <FilterSearch />
      <CountryCard />
    </div>
  );
}

export default App;
