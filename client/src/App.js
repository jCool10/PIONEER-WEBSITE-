import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UpLoadEvent from './components/UpLoadEvent/UpLoadEvent';
import { Home, Members, Product, Events, Contact, AppLayout } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/product" element={<Product />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/add" element={<UpLoadEvent />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
