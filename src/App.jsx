import HomeApp from "../home/homeApp";
import WorkApp from "../projects/WorksApp";
import CertificationtsApp from "../certifications/CertificationsApp";
import ContactApp from "../contact/ContactApp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/components";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" exact element={<HomeApp />} />
                <Route path="/work" element={<WorkApp />} />
                <Route path="/certifications" element={<CertificationtsApp />} />
                <Route path="/contact" element={<ContactApp />} />
            </Routes>
        </Router>
    );
}

export default App
