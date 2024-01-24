import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import CardList from "./containers/CardList/CardList";

function App() {
  const [searchTerm, setSearchTerm] = useState("Best Sellers");

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <CardList searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </>
  );
}

export default App;
