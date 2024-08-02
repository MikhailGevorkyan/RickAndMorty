import "./App.css";
import Characters from "./pages/Characters";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
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
