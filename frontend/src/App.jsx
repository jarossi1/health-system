import './index.css';
import UserTable from './pages/UserTable.jsx'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import NewRecord from "./pages/NewRecord.jsx";
import { Route, Routes } from "react-router-dom";

function App() {

    return (
        <>

            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/NewRecord" element={<NewRecord />} />
                    <Route path="/UserTable" element={<UserTable />} />
                </Routes>
            </div>

            <Footer />
        </>
    );
}

export default App