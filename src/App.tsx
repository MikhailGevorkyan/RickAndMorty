import "./App.css";
import Characters from "./pages/Characters";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
