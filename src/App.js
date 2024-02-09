import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
// import AboutPage from "./Pages/AboutPage"
import { ToastContainer } from "react-toastify";
import Aboutpage from "./Pages/Aboutpage"
import Notfound from "./Pages/Notfound";
import Navbar from "./components/layout/Navbar";
import Lodge from "./Pages/Lodge";
import Footer from "./components/layout/Footer";
import Checkout from "./Pages/Checkout";
import { LodgeProvider } from "./context/lodge/LodgeContext";
import { RoomProvider } from "./context/room/RoomContext";
import RedirectPaymentPage from "./Pages/RedirectPaymentPage";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <LodgeProvider>
      <RoomProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title="Ohiz Villa"/>
            <main className="container mx-auto px-3 pb-1">
              <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about" element={<Aboutpage/>}/>
                <Route path="/lodge/:lodgename" element={<Lodge/>}/>
                <Route path="/notfound" element={<Notfound/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/*" element={<Notfound/>}/>
                <Route path="/red" element={<RedirectPaymentPage/>}/>
              </Routes>
            </main>
            <Footer/>
            
          </div>
        </Router>
        <ToastContainer position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
      </RoomProvider>
    </LodgeProvider>
  );
}

export default App;
