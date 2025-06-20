import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Sections/Home";
import BlogPage from "./Sections/BlogPage.jsx";
import Gallery from "./Sections/Gallery.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";
import BlogDetail from "./Component/BlogDetail.jsx";
import LocationPage from "./Sections/LocationPage.jsx";
import ContactPage from "./Sections/ContactPage.jsx";
import ServicePage from "./Sections/ServicePage.jsx";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
