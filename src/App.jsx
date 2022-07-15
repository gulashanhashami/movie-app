import { Navbar } from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import { Home } from "./components/Home";
import { AddMovie } from "./components/AddMovie";
import { Allmovie } from "./components/AllMovies";
import { EditMovie } from "./components/EditMovie";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/allmovie" element={<Allmovie />} />
        <Route path="allmovie/:_id/edit" element={<EditMovie />} />
      </Routes>
    </div>
  );
}

export default App;
