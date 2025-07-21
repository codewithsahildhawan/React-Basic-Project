import { Routes, Route } from 'react-router-dom'; // ✅ Required import

// ✅ Import your components
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import PageLayout from './layouts/PageLayout/PageLayout';
import ServiceDetail from './pages/ServiceDetail'; // Adjust the path if needed
import Services from './pages/Services';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
      />
      <Route
        path="/about"
        element={
          <PageLayout>
            <About />
          </PageLayout>
        }
      />
      <Route
        path="/contact-us"
        element={
          <PageLayout>
            <ContactUs />
          </PageLayout>
        }
      />
      <Route 
      path="/services" 
      element={
      <PageLayout>
        <Services />
      </PageLayout>
      } 
      />
      <Route 
      path="/services/:slug" 
      element={
      <PageLayout>
      <ServiceDetail />
      </PageLayout>
      } 
      />
    </Routes>
  );
}

export default App;
