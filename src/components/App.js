import data from "../assets/data";
import "../styles/App.css";
import Header from "./Header";
import TravelCard from "./TravelCard";

function App() {
  return (
    <div className="App">
      <Header />
      <TravelCard title={data.title} />
    </div>
  );
}

export default App;
