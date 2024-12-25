import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componants/Navigation";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAccount from "./comptes/AddAccount";
import EditAccount from "./comptes/EditAccount";
import ViewAccount from "./comptes/ViewAccount";
import bank from "./bank.jpg";

function App() {
  return (
    <div className="App"
    style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 33, 0, 0.8)),
              url(${bank})
            `,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            color: 'white',
          }}
    >

      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addAccount" element={<AddAccount />} />
          <Route exact path="/editAccount/:id" element={<EditAccount />} />
          <Route exact path="/viewAccount/:id" element={<ViewAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
