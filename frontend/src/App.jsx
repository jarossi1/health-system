import './index.css';
import UserTable from './components/UserTable.jsx'
import Header from "./components/header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <Header />

            <UserTable />

            <Footer />
        </>
    );
}

export default App