import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MemberInfo } from './components';
import UpLoadEvent from './components/UpLoadEvent/UpLoadEvent';
import { Home, Members, Product, Events, Contact, AppLayout, NoFooterLayOut } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NoFooterLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/members/:id" element={<MemberInfo />} />
        </Route>
        <Route element={<AppLayout />}>
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
