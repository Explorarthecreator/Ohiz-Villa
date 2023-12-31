import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
// import AboutPage from "./Pages/AboutPage"
import Aboutpage from "./Pages/Aboutpage"
import Notfound from "./Pages/Notfound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="Ohiz Villa"/>
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/about" element={<Aboutpage/>}/>
            <Route path="/notfound" element={<Notfound/>}/>
            <Route path="/*" element={<Notfound/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
