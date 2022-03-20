import data from "../assets/data";
import "../styles/App.css";
import Header from "./Header";
import TravelCard from "./TravelCard";

function App() {
  const journey = data.map((location) => {
    return <TravelCard data={location} />;
  });

  return (
    <div className="App">
      <Header />
      {journey}
    </div>
  );
}

export default App;
